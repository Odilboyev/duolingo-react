import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MainWr from "./MainWrapper";
import { State } from "./state";
import { FiCheckCircle } from "react-icons/fi";
import { Collapse, IconButton, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
const Main = () => {
  const [level, setLevel] = useState(0);
  const [data, setData] = useState(State.variants[level]);
  const [trueAnswer, setTrueAnswer] = useState(State.trueAnswers[level]);
  const [question, setQuestion] = useState(State.questions[level]);
  const [answer, setAnswer] = useState([]);
  const [boolean, setBoolean] = useState(false);
  const [display, SetDisplay] = useState("invisible");
  // snackbar
  const [open, setOpen] = useState(false);
  const moveBtn = (index) => {
    let questions = [...data];
    let answers = [...answer, questions[index]];
    setAnswer(answers);

    questions.splice(index, 1);
    setData(questions);
  };

  const moveBtn2 = (index) => {
    let javoblar = [...answer];
    let savollar = [...data, javoblar[index]];
    setData(savollar);

    javoblar.splice(index, 1);
    setAnswer(javoblar);
  };
  let checkIt = "";
  // check
  const check = () => {
    let fulltext = answer.map((item) => item.text).join(" ");
    SetDisplay("visible");
    if (fulltext === trueAnswer) {
      setBoolean(!boolean);
    } else {
      setBoolean(false);
    }
  };
  // check

  // switch to next question
  const next = () => {
    if (level < 2) {
      setLevel(level + 1);
      setData(State.variants[level + 1]);
      setQuestion(State.questions[level + 1]);
      setAnswer([]);
      setTrueAnswer(State.trueAnswers[level + 1]);
      SetDisplay("invisible");
      setBoolean(false);
    } else {
      setOpen(true);
      if (open) {
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      }
      return;
    }
  };

  // restart
  const reStart = () => {
    setLevel(0);
    setData(State.variants[level]);
    setQuestion(State.questions[level]);
    setAnswer([]);
    setTrueAnswer(State.trueAnswers[level]);
    SetDisplay("invisible");
    setBoolean(false);
    setOpen(false);
  };

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
              <h2>{question}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* translate */}
      <div className="buttons pt-5 mt-5">
        <h4>Translate</h4>
        {answer?.map((v, i) => (
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
      <hr />

      <div className="buttons mt-2">
        <h4>Variants</h4>
        {data?.map((v, i) => (
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
      <hr />
      <div className="check d-flex justify-content-between p-2">
        <div className={`icon ${display}`}>
          {boolean ? (
            <Alert severity="success"> True Answer </Alert>
          ) : (
            <Alert severity="error"> Wrong Answer </Alert>
          )}
        </div>
        {boolean ? (
          <Button variant="contained" onClick={() => next()} color="primary">
            Next question
          </Button>
        ) : (
          <Button variant="contained" onClick={() => check()} color="secondary">
            Check
          </Button>
        )}
        <Snackbar open={open}>
          <Alert severity="info">
            Savollar tugadi !<br />
            <Button
              variant="contained"
              color="default"
              onClick={() => reStart()}
            >
              Qayta boshlash
            </Button>
          </Alert>
        </Snackbar>
      </div>
    </MainWr>
  );
};

export default Main;
