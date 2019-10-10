import React from "react";
export default function MainB(props) {
  for (let i in props.obj) {
    console.log(i, "======>", props.obj[i]);
  }
  if (props.obj.name === "qasim") {
    return <p className="alert-success">Qasim Exists in DB!</p>;
  } else if (props.obj.name === "sushil") {
    return <p className="alert-success">Sushil Exists in DB!</p>;
  } else {
    if (props.obj.name.length != 0)
      return <p className="alert-danger">{props.obj.name} doesn't exists</p>;
    else return null;
  }
}
