import React from "react"
import { useState } from "react"

export default function TextForm(props){
    const [text , setText] = useState('') //blank screen at first
    const handleOnclick = () => {
        console.log('Clicked Uppercase');
        //setText('Clicked the button');
        //let newText = text.toUpperCase();
        //console.log(newText)
        setText(text.toUpperCase());
    }
    const handleOnclickLower = () => {
        console.log('Clicked Lowercase');
        setText(text.toLowerCase());
    }
    const handleOnchange = (event) => {
        console.log('Changed ');
        setText(event.target.value);
    }
    const handleClear = () => {
        console.log("clicked clear")
        setText("")
    }
    const speakFunction = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleReverse = () => {
        let len = text.length-1;
        let newText = ""
        for (let i = len; i >= 0; ) {
            newText =  newText + text[i];
            i--;
        }
        setText(newText)

    }
    return(
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleOnclick}>Change to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleOnclickLower}>Change to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary my-2" onClick={handleReverse}>Reverse Text</button>

        </div>
        <div className="btn btn-warning my-3" onClick={speakFunction}>Speak</div>
        <div className="container my-3">
            <p>Total words {text.split(" ").length} Total characters {text.length} </p>
        </div>
        <div className="container">
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>

    )
        
}