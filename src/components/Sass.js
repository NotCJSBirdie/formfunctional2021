import React from "react";
import "./css/Sass.css";

const Sass = () => {
  return (
    <div className="entire">
      <h1 className="title">This is our Sass Component!</h1>
      <div className="body">
        <p className="paragraph">
          Guys, this is so amazing. Because I am now trying the Sass Language!
        </p>
        <p className="paragraph2">
          This is supposed to be the second paragraph of the entire component!
        </p>
        <p className="paragraph3">
          This is supposed to be the third paragraph of the entire component!
        </p>
        <button className="button1">Button 1</button>
        <button className="button2">Button 2</button>
        <button className="button3">Button 3</button>
      </div>
    </div>
  );
};

export default Sass;
