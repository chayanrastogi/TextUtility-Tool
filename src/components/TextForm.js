import React, {useState} from 'react'

export default function TextForm(props) {

    const[text, setText] = useState("");

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text","success");
    }

    const handleCapitalClick = () =>{
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Capitalized","success");
    }

    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied Text","success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Spaces Removed","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

  return (
    <>  
     <div>
      <h1 className = "mb-4"style={{color: props.mode==='#3FC1C9'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3" style={{color: props.mode==='#3FC1C9'?'black':'white'}} >
        <textarea className="form-control" id="myBox" rows="8" placeholder="Enter text here" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn mx-1 my-1" style={{backgroundColor: "#3FC1C9", border:"none", color:"black"}} disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn mx-1 my-1" style={{backgroundColor: "#3FC1C9", border:"none", color:"black"}} disabled={text.length===0} onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn mx-1 my-1" style={{backgroundColor: "#3FC1C9", border:"none", color:"black"}} disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
      <button className="btn mx-1 my-1" style={{backgroundColor: "#3FC1C9", border:"none", color:"black"}} disabled={text.length===0} onClick={handleCapitalClick}>Capitalize</button>
      <button className="btn mx-1 my-1" style={{backgroundColor: "#3FC1C9", border:"none", color:"black"}} disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
      <button className="btn mx-1 my-1" style={{backgroundColor: "#3FC1C9", border:"none", color:"black"}} disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

     <div className="container my-3" style={{color: props.mode==='#3FC1C9'?'black':'white'}}>
       <h2>Your text summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
       <p>{text.length} characters</p>
       <p>{0.008 * (text === ""? 0:text.split(" ").length)} minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview"}</p>
     </div>


  </>
  )
}
