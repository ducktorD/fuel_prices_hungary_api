const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const URL = 'https://hu.fuelo.net/?lang=en';

const fetchData = async () => {
   try {
      console.log('Fetching...');
      const response = await fetch(URL);
      const body = await response.text();

      const $ = cheerio.load(body);
      const $row = $('.page-header').first().parent().children();

      const fuelData = {
         fuelData: []
      };
      let $element = $row.next();
      let iteration = 0;

      while($element.html() !== null) {
         if (iteration > 10) {
            throw new Error('Not found child elements. Too many iteratings.');
         }

         const name = $element.children().html();
         const price = $element.children().next().text().trim().split(' ')[0];

         fuelData.fuelData.push({
            name,
            price
         });

         $element = $element.next();
         iteration++;
      }
      console.log('Returning data...');
      return fuelData;

   } catch (err) {
      console.log(err.message);
   }
}

app.get('/',  async (req, res) => {
   const data = await fetchData();
   res.send(JSON.stringify(data));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
})