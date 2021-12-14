import logo from "./logo.svg";
import "./App.css";
import Button from "./component/button";
import { useState } from "react";
import Avatar from "./component/Avatar";

// import Button from "./exercices/ex1/Button";
// import ButtonChangeIcon from "./exercices/ex2";
// import Game from "./exercices/ex3/ex3";
// import CallApi from "./exercices/api/CallApi";
// import GameWithScore from "./exercices/ex3/ex4";
// import GameWithScoreStorage from "./exercices/ex3/ex5";

function App(props) {
  const [name, setName] = useState("lol");

  const handleClick = () => {
    setName(name + "1");
    console.log(name);
  };

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
        <Avatar value={name} />
        <Button value={"test"} onClick={handleClick} />
      </header>
    </div>
  );
}

function click() {
  console.log("test");
}

export default App;
