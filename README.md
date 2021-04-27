# Fuel Prices In Hungary API

> I made an API for getting the current fuel prices in Hungary what uses the https://hu.fuelo.net/?lang=en website's data.

## Usage

Just go to the https://fuel-prices-hungary-api.vercel.app/ page if you need all data, but you can specify what you're looking for by changing the path. If you don't need all data just use the /type and after the following paths:

| Path            | Value          |
| :-------------- | -------------: |
| /unleaded_95    | Unleaded 95    |
| /diesel         | Diesel         |
| /lpg            | LPG            |
| /unleaded_98    | Unleaded 98    |
| /diesel_premium | Diesel Premium |

/type/<your_fuel_type>
(e.g.: if you only interested in diesel then: https://fuel-prices-hungary-api.vercel.app/type/diesel)