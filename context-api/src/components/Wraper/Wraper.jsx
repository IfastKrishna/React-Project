import UserContext from "../context/UserContext";
import Login from "../Login/Login";
import Card from "../Card.jsx/Card";
import { useContext } from "react";

function Wraper() {
  const { user } = useContext(UserContext);
  return <div>{user.name === "" ? <Login /> : <Card />}</div>;
}

export default Wraper;
