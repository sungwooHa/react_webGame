const React = require("react");
const { useState } = require("react");

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
    } else{
      setResult('땡');
      setValue("");
    }
    inputEle.current.focus();
  };

  const onChangeInput=(e)=>{
    setValue(e.target.value);
  };

  const onRefInput = (c) =>{
    inputEle = c;
  };

  render() (
    <>
    <div>{this.state.word}</div>
    <form onSubmit={this.onSubmitForm}>
      <input ref={this.onRefInput} value ={this.state.value} onChange={this.onChangeInput}/>
      <button>입력!</button>
    </form>
    <div>{this.state.answer}</div>
    </>
  )
}

module.exports = WordRelay;
