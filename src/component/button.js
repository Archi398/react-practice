// import Button from "./exercices/ex1/Button";
// import ButtonChangeIcon from "./exercices/ex2";
// import Game from "./exercices/ex3/ex3";
// import CallApi from "./exercices/api/CallApi";
// import GameWithScore from "./exercices/ex3/ex4";
// import GameWithScoreStorage from "./exercices/ex3/ex5";
import "./button.css";

function Button({ onClick: handleClick, value = "anouar" }) {
  return (
    <button className="buttoncss" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
