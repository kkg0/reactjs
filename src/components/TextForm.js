import React, {useState} from 'react'


const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        if(text!==''){
            props.showAlert('Text Converted to Uppercase !','success');
        }else{
            props.showAlert('Enter text convert to Uppercase !','danger');
        }
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        if(text!==''){
            props.showAlert('Text Converted to Lowercase !','success');
        }else{
            props.showAlert('Enter text convert to Lowercase !','danger');
        }
    }
    
    const handleClearText  = () =>{
        if(text!==''){
            setText('');
            props.showAlert('Text Cleared !','success');
        }else{
            props.showAlert('No Text found !','danger');
        }
    }

    const handleCopy = () => {
        var texttocopy = document.getElementById('myBox');
        if(texttocopy.value!==''){
            texttocopy.select();
            navigator.clipboard.writeText(texttocopy.value);
            props.showAlert('Copied to Clipboard !','success');
        }else{
            props.showAlert('No Text found !','danger');
        }
    }

    const handleOnChange  = (event) =>{
        setText(event.target.value);
    }

    return <>
                <div className='container'>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#9a9a9d' }}></textarea>
                        <p className='text-lg-end my-2'><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                </div>
                <div className="container my-3">
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </>;
}

export default TextForm;