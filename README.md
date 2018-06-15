# CryptoVolTracker

https://drab-pigs-149.roast.io

This is a deliberately simple project that lists cryptocurrencies and their 24 hour volume in an HTML table with a sorting function for volume.

## The tech

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and it carries no dependencies other than React 16 (~65kb gzipped).

## The source code

The data comes from `src/tickers.json` which is created by executing `sync.sh`. This script uses curl to download the top 100 cryptocurrencies from CoinMarketCap's API.

There is only 1 React component: `<App />` which merely loads `tickers.json` and converts it to an HTML table. The sorting function is activated by clicking the "volume" column of the HTML table. It sets the "sort" key of `<App />`'s React state so the component gets re-rendered on every click.

## How to update the data

```bash
bash sync.sh

```

## How to build/transpile

`$ yarn build`

This will create a `build` directory which can be deployed to any static web host


## Static web hosting

It's hosted on roast.io: https://drab-pigs-149.roast.io

## Server-side rendering

This app is server-side rendered using roast.io, and configured with _ssr.json
