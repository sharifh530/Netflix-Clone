import React from "react";

import Row from "./Row";
import request from "./request";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default App;
