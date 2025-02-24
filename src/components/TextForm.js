import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text,setText]=useState('Enter text here');
     const handleClick=()=>
        {
            console.log("value updated");
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Text has been converted to uppercase","success");
        };
        const removeWhiteSpace=()=>
          {
            let newText=text.trim();
            setText(newText);
            props.showAlert("white space has been removed","success")
          }
        const handleLower=()=>
            {
                let newText=text.toLowerCase();
                setText(newText);
                props.showAlert("Text has been converted to lowercase","success");
            };
        const handleText=()=>
          {
             let newText="";
             setText(newText);
             props.showAlert("mesage has been cleared","warning");
          }

        const handleOnChange=(event)=>
            {
              console.log("On change handled");
              setText(event.target.value)
            };
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
<div className="mb-3">
  <h1>{props.content}</h1>
  <textarea className="form-control" id="Box1" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="3"></textarea>
</div>
<button className='btn-btn-primary mx-2 my-2' onClick={handleClick}>Convert To Uppercase</button>
<button className='btn-btn-primary mx-2 my-2' onClick={handleLower}>Convert To LowerCase</button>
<button className='btn-btn-primary mx-2 my-2' onClick={handleText}>Clear Text</button>
<button className='btn-btn-primary mx-2 my-2' onClick={removeWhiteSpace}>Remove White space</button>
    </div>
  <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>The text contains {text.length} characters</h1>
    <h1>The text contains {text.split(/\s+/).filter((element)=>
    {
     return element.length!==0;
    }).length} words</h1>
   </div>
    </>
  );
}
TextForm.defaultProps={content:"Enter your text here"};
