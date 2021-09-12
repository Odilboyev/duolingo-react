import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MainWr from "./MainWrapper";
const Main = () => {
  const [setBtn, setSetBtn] = useState([
    { text: "Moskvaga" },
    { text: "Men" },
    { text: "o'qiyman" },
    { text: "boraman" },
    { text: "Moskvada" },
  ]);
  const [getBtn, setGetBtn] = useState([]);
  const [word, setWord] = useState("Men Moskvada o'qiyman");
  const [boolean, setBoolean] = useState("");

  const moveBtn = (index) => {
    let btns = [...setBtn];
    let getBtns = [...getBtn, setBtn[index]];

    setGetBtn(getBtns);

    btns.splice(index, 1);
    setSetBtn(btns);
  };

  console.log(getBtn);

  const moveBtn2 = (index) => {
    let buttons = [...getBtn];
    let setBtns = [...setBtn, getBtn[index]];

    setSetBtn(setBtns);

    buttons.splice(index, 1);
    setGetBtn(buttons);
  };

  // check
  const check = () => {
    let fultext = getBtn.map((item) => item.text).join(" ");
    console.log(fultext);
    console.log(word);
    fultext === word ? setBoolean("true") : setBoolean("false");
  };
  // check
  return (
    <MainWr className="container">
      <h2 className="text-center my-3">Berilgan matnni tarjima qiling !</h2>
      <div className="row for-translate">
        <div className="col-md-6 col-sm-12 text-center">
          <div className="animate">
            <img src="animation1.gif" alt="" className="w-50" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="default-text">
            <div className="d-flex">
              <div className="icon"></div>
              <h2>I study in Moskow</h2>
            </div>
          </div>
        </div>
      </div>
      {/* translate */}
      <div className="buttons pt-5 mt-5">
        <h4>Translate</h4>
        {getBtn?.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            onClick={() => moveBtn2(i)}
            className="me-4"
            color="primary"
          >
            {v.text}
          </Button>
        ))}
      </div>
      {/* /translate */}

      <div className="buttons mt-5">
        <h4>Variants</h4>
        {setBtn?.map((v, i) => (
          <Button
            key={i}
            variant="contained"
            onClick={() => moveBtn(i)}
            className="me-4"
            color="primary"
          >
            {v.text}
          </Button>
        ))}
      </div>

      <div className="check d-flex justify-content-between p-2">
        <div className="icon">
          {boolean === "true" ? (
            <h3 className="text-success">True</h3>
          ) : (
            <h3 className="text-danger">False</h3>
          )}
        </div>
        <Button variant="contained" onClick={() => check()} color="secondary">
          Check
        </Button>
      </div>
    </MainWr>
  );
};

export default Main;
