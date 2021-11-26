import React, { useState } from "react";
import "./Person.css" //step1
const Person = (props) => {
  const [editor, setEditor] = useState({
    vendor: "VSCode2020",
    company: "Microsoft",
    license: "open source",
    valid: "forever"
  });
  const switchEditor = () => {
    setEditor({...editor, vendor: "WebStorm",company:"JetBrain" });
  };
  return (
    <div className="Person">
      <p style={{color:"yellow"}}  onClick={props.clickCallback}>
        I am {props.name}, I am a {props.children} with {props.experience} year
        experience!
      </p>
      <button onClick={switchEditor}>Change editor to intelliJ</button>
      <p style={{ color: "green" }}>I use {editor.vendor}, created by {editor.company},
      license is {editor.license}, valid: {editor.valid}</p>
      <p style={{ color: "red" }}>
        {" "}
        I made {Math.floor(Math.random() * 10)} projects
      </p>
    </div>
  );
};

export default Person;
