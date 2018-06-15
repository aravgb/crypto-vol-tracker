# CryptoVolTracker

https://drab-pigs-149.roast.io

This is a deliberately simple project that lists cryptocurrencies and their 24 hour volume in an HTML table with a sorting function for volume.

The payload size after gzip is:

* 43.97 KB  build/static/js/main.js
* 345 B     build/static/css/main.css

## The tech

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and it carries no dependencies other than React 16.

## The source code

There is only 1 React component: `<App />` which merely loads `tickers.json` and converts it to an HTML table. The sorting function is activated by clicking the "volume" column of the HTML table. It sets the "sort" key of `<App />`'s React state so the component gets re-rendered on every click.

The data comes from `src/tickers.json` which is created by executing `sync.sh`. This script uses curl to download the top 100 cryptocurrencies from CoinMarketCap's API.

## How to update the data

`$ bash sync.sh`

## How to build/transpile

`$ make build`

This will create a `build` directory which can be deployed to any static web host


## How to deploy

`$ make deploy`

It's hosted on roast.io: https://drab-pigs-149.roast.io

## Server-side rendering

This app is server-side rendered using roast.io's server-side rendering feature, and configured with _ssr.json which is copied into the build directory from the `Makefile`
