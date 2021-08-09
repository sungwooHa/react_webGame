const React = require("react");
const { useState, userRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("하성우");
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEle = React.useRef(null);

  const onSubmitForm = (e) =>  {
      e.preventDefault();
      //제시어의 마지막 글자가 입력어의 첫번째 글자와 같은지 확인
      if(word[word.length - 1] == value[0]){
          setResult("딩동댕");
          setWord(value);
          setValue("");
          inputEle.current.focus();
      } else{
        setResult('땡');
        setValue("");
        inputEle.current.focus();
    }
  };

  const onChangeInput=(e)=>{
    setValue(e.target.value);
  };

  return(
    <>
    <div>{word}</div>
    <form onSubmit={onSubmitForm}>
      <label id="label" htmlFor="wordInput">글자를 입력하세요. </label>
      <input id="wordInput" className="wordInput" ref={inputEle} value ={value} onChange={onChangeInput}/>
      <button>입력!</button>
    </form>
    <div>{result}</div>
    </>
  );
}

module.exports = WordRelay;
