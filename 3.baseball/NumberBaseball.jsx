//바벨로더가 해결해줌
//node에서는 import, react 에서는 require

//import React, {Component, useState} from require("react"); //바벨로더가 해결해줌
const React = require('react');
const {useState, useRef} = React;

// class NumberBaseball extends Component
// {

// }

const NumberBaseball = () =>{
    const [result, setResult] =  useState();
    const [value, setValue] =  useState();
    const [answer, setAnswer] =  useState();
    const [tries, setTries] = useState();

    const onSubmitForm = (e) =>{
        e.preventDefault();
    };

    const onChangeInput = (e) =>{
        setValue(e.target.value);
    };

    const GetNumber = () =>{
        
    };

    const inputRef = useRef(null);

    return(
        <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
            <input maxLength={4} onChange={onChangeInput} />
            <button>입력!</button>
        </form>
        {/* <div> 시도 : {tries.length}</div> */}
        <ul>
            {[
                {fruit :"사과", taste:"맛있다"},
                {fruit :"포도", taste:"맛있다"},
                {fruit :"오렌지", taste:"맛있다"},
            ].map((v)=>{
                return (
                    <li key={v.fruit + v.taste}>
                        <b>{v.fruit}</b> <b> - {v.taste}</b>
                    </li>
                );
            })}
        </ul>
        </>
    );
};


//export const hello = "hello";
//export default NumberBaseball; //import NumberBaseBall

exports.hello = "hello";
module.exports = NumberBaseball;
