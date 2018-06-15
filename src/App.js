import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import tickers from "./tickers.json";

class App extends Component {
  renderTicker(t, i) {
    return (
      <tr key={i}>
        <td>{t.name}</td>
        <td>
          ${t.quotes.USD.volume_24h.toLocaleString({
            style: "currency",
            currency: "USD"
          })}
        </td>
      </tr>
    );
  }

  renderTickers() {
    const rows = Object.values(tickers.data).map((t, i) =>
      this.renderTicker(t, i)
    );

    return (
      <table className="ticker-table">
        <thead>
          <th>Ticker</th>
          <th>Volume (24h)</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crypto Vol Ranker</h1>
        </header>
        {this.renderTickers()}
      </div>
    );
  }
}

export default App;
