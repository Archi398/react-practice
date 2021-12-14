import Button from "./ex1/Button";
import { useState } from "react";

function ButtonChangeIcon() {
  const [logoFetched, setlogoFetched] = useState(undefined);

  const getData = () => setlogoFetched(Math.floor(Math.random() * 100));

  return (
    <>
      <img
        src={`https://avatars.dicebear.com/api/adventurer-neutral/${logoFetched}.svg`}
        alt="logo"
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Button value="Ceci est un bouton" onClick={getData} />
    </>
  );
}

export default ButtonChangeIcon;
