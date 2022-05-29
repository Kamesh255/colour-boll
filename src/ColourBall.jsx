import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ColourBall.css";

const ColourBall = () => {
  const [number, setNumber] = useState("");
  const [colour, setColour] = useState([]);
  const [empty, setEmpty] = useState([]);

  const getColours = () => {
    var colors = [];
    function randomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    for (let j = 1; j <= 5; j++) {
      colors = [...colors, { id: j, color: randomColor(), key: uuidv4() }];
    }
    setColour(colors);
  };
  useEffect(() => {
    getColours();
  }, []);

  const submitHendel = (e) => {
    if (number > colour.length || number < 1) {
      return alert(`Submit value 1 to ${colour.length}`);
    }
    let fillColour = colour.filter((e) => e !== colour[number - 1]);
    setColour(fillColour);

    setEmpty([...empty, colour[number - 1]]);
    setNumber("")
  };
  const handleClick = (key, e) => {
    let newAraay = empty.filter((e) => key !== e.key);
    setEmpty(newAraay);
    let sortedarray = [...colour, e];
    sortedarray = sortedarray.sort((a, b) => a.id - b.id);
    setColour(sortedarray);
  };

  return (
    <div className="bollBox">
      <div className="emptyDiv">
        {empty.map((el) => {
          return (
            <div
              className="colourCercul"
              style={{ backgroundColor: `${el.color}` }}
              onClick={() => handleClick(el.key, el)}
            ></div>
          );
        })}
      </div>
      <div className="colourDiv">
        {colour.map((el, i) => {
          return (
            <div
              className="colourCercul"
              key={i}
              style={{ backgroundColor: `${el.color}` }}
            ></div>
          );
        })}
      </div>
      <div>
        <div className="btnDiv">
          <input
            style={{
              minHeight: "50px",
              Width: "100px",
              textAlign: "center",
              fontWeight: "600",
              padding:"0",
              margin:'0',
            }}
            type="text"
            placeholder="Type number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <button
            style={{ minHeight: "50px", Width: "150px",fontWeight:"600" }}
            onClick={submitHendel}
          >
            shoot
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColourBall;
