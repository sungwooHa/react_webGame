import "./App.css";
import React, { useRef, useState, Fragment } from "react";

function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState();
  const [result, setResult] = useState();
  const inputRef = React.useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답 : " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
    inputRef.current.focus();
  };

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <p>1. 구구단 게임</p>
        </div>
        <div className="content">
          <div>
            {first} 곱하기 {second}는?
          </div>
          <div>
            <form onSubmit={onSubmitForm}>
              <input ref={inputRef} onChange={onChangeInput} value={value} />
              <button>입력!</button>
            </form>
          </div>
          <div id="result">{result}</div>
        </div>
      </div>
    </>
  );
}

export default App;
