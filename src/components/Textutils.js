import React,{useState} from 'react'



export default function Textutils(props){

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }


    const handleloClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

   
    const [text,setText] = useState(' ')

    return(
       <>
       <div className='conteinar'>
       <h1>{props.heading}</h1>
       <div class="mb-3">
          <textarea class="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1"  rows="8"></textarea>
       </div>

        <button className=' btn btn-primary mx-2' onClick={ handleUpClick} >Convert To Uppercase</button>
        <button className= "btn btn-primary mx-2" onClick={handleloClick}> Convert to Lowercase</button>
        {/* <button className= "btn btn-primary mx-1" onClick={handlelocolourClick}> Convert to Lowercase</button>
        <button className= "btn btn-primary mx-1" onClick={handlelocolourClick}> Convert to Lowercase</button>
        <button className= "btn btn-primary mx-1" onClick={handlelocolourClick}> Convert to Lowercase</button> */}
       </div>


       <div className='conteinar my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} cahrecter</p>
        <p>{0.008 * text.split(" ").length} minitues</p>
        <h2>preveiw</h2>
        <p>{text}</p>
       </div>
       </>
    )
}
