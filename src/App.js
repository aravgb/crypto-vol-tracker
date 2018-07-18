import React, { Component } from "react";
import "./App.css";

import tickers from "./tickers.json";

function tickerCompareAsc(a, b) {
  if (a.quotes.USD.volume_24h < b.quotes.USD.volume_24h) return -1;
  if (a.quotes.USD.volume_24h > b.quotes.USD.volume_24h) return 1;

  return 0;
}
function tickerCompareDesc(a, b) {
  if (a.quotes.USD.volume_24h < b.quotes.USD.volume_24h) return 1;
  if (a.quotes.USD.volume_24h > b.quotes.USD.volume_24h) return -1;

  return 0;
}

class App extends Component {
  state = { sort: "desc" };

  toggleSort() {
    this.setState((prevState, props) => ({
      sort: prevState.sort === "desc" ? "asc" : "desc"
    }));
  }

  getData() {
    return Object.values(tickers.data).sort(
      this.state.sort === "desc" ? tickerCompareDesc : tickerCompareAsc
    );
  }

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
    const rows = this.getData().map((t, i) => this.renderTicker(t, i));

    return (
      <table className="ticker-table" cell-spacing="0">
        <thead>
          <tr>
            <th>Tickers</th>
            <th>
              <a onClick={this.toggleSort.bind(this)}>Volume (24h)</a>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto Vol Ranker</h1>
        </header>
        {this.renderTickers()}
      </div>
    );
  }
}

export default App;
