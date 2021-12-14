import "./button.css";

function Button(props) {
  return (
    <div className="button" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Button;
