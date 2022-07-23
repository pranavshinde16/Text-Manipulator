import React, { useState } from 'react'

export default function TextForm(props) {

    function handleUp() {
        console.log("UpperCase fired ")
        let newText = text.toUpperCase();
        setText(newText)
        if (text === "") {
            props.showAlert("danger", "Please enter some text to convert")
        }
        else {
            props.showAlert("success", "Text converted into Uppercase")
        }
    }
    function handleLow() {
        console.log("LowerCase fired ")
        let newText = text.toLowerCase();
        setText(newText)
        if (text === "") {
            props.showAlert("danger", "Please enter some text to convert")
        }
        else {
            props.showAlert("success", "Text converted into Lowercase")
        }
    }
    function handleReverse() {
        console.log("LowerCase fired ")
        let newText = text.split("")
        let rev = newText.reverse()
        const joinArray = rev.join("");
        setText(joinArray)
        if (joinArray === "") {
            props.showAlert("danger", "Please enter some text to invert")
        }
        else {
            props.showAlert("success", "Text converted has been inverted")
        }
    }

    function handleCopy() {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges()
        props.showAlert("success", "Copied to clipboard")
    }
    function handleClear() {
        console.log("LowerCase fired ")
        let newText = " ";
        setText(newText)
        if (text === "") {
            props.showAlert("danger", "Please enter some text")
        }
    }
    function handleOnChange(event) {
        console.log("onChange fired")
        setText(event.target.value)
        // this stores the new value when we change something in Text-area
    }

    const [text, setText] = useState("")
    // Originally sets {text="Enter text here"} 
    // setText - updates the new value given using setText()
    // shadow p-3 mb-5 my-4 bg-body rounded

    return (
        <>
            <div className='container-xxl' >
                <div className='container'>
                    <div className="mb-3 pt-3">
                        <h3>{props.heading}</h3>
                        <textarea className="form-control border border-dark" id="myBox" value={text} placeholder="Enter text here" onChange={handleOnChange} rows="8" style={{
                            color: props.mode === "dark" ? "white" : "black",
                            backgroundColor: props.mode === "dark" ? "rgb(6 18 28)" : "white",
                            borderColor: props.mode === "dark" ? "white" : "black",
                        }}></textarea>
                        {/* If mode===dark, then change color=    */}
                    </div >
                    {/* Buttons */}
                    <button className='btn btn-primary mx-2 my-1' onClick={handleUp} disabled={text.length === 0}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2 my-1' onClick={handleLow} disabled={text.length === 0}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2 my-1' onClick={handleReverse} disabled={text.length === 0}>Inverse</button>
                    <button className='btn btn-primary mx-2 my-1' onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
                    <button className='btn btn-danger mx-2 my-1' onClick={handleClear} disabled={text.length === 0}>Clear Text</button>
                </div>
                <div className="container my-3">
                    <h3>Your text summary</h3>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                    <p>can be read in {0.007 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes</p>
                </div>
            </div>
        </>
    )
}

