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
        props.showAlert('changed to UpperCase','success')
    }
    const handleOnclickLower = () => {
        console.log('Clicked Lowercase');
        setText(text.toLowerCase());
        props.showAlert('changed to LowerCase','success')
    }
    const handleOnchange = (event) => {
        console.log('Changed ');
        setText(event.target.value);
    }
    const handleClear = () => {
        console.log("clicked clear")
        setText("")
        props.showAlert('text is cleared.','danger')
    }
    const speakFunction = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert('the message is being spoken','success')
    }
    const handleReverse = () => {
        let len = text.length-1;
        let newText = ""
        for (let i = len; i >= 0; ) {
            newText =  newText + text[i];
            i--;
        }
        setText(newText)
        props.showAlert('Reversing text operation is successful.','success')

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied','success')

    }
    const wordCounter = (str)=> 
    {
        if(str!=='')
        {
        const array = str.trim().split(/\s+/); 
        return array.length; 
        }
        else
        return ('0');
        
    }
    return( 
        <div className="container" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'rgb(59 64 170)'}}>
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="8" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'rgb(59 64 170)'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleOnclick}>Change to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleOnclickLower}>Change to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleReverse}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={speakFunction}>Speak Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

        </div>
        <div className="container my-3">
            <p>Total words {wordCounter(text)} Total characters {text.length} </p>
        </div>
        <div className="container" >
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something here"}</p>
        </div>
        </div>

    )
        
}