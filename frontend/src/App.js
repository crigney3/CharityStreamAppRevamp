import React from 'react';
import logo from './logo.svg';
import './App.css';
const fs = require('fs');
const csv = require('csv-parser');

let items = [];
let buffs = [];
let misc = [];

class item {
  constructor(name, cost, code, description){
    this.name = name;
    this.cost = cost;
    this.code = code;
    this.description = description;
  }
}

function readItems(path, collection){
  let stream = fs.createReadStream(path);
  stream.pipe(csv());
  stream.on('data', (row) => {
    console.log(row);
  });
  stream.on('end', () => {
    console.log('CSV file successfully processed');
  });
}

function App() {
  readItems("items/items.csv", items);
  readItems("items/buffs.csv", buffs);
  readItems("items/misc.csv", misc);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
