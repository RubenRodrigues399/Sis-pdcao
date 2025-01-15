import {useState} from 'react'

export default function InputWithText(){
    const [InputValue, setnputValue] = useState('')

    function onChangeHandler(event){
        setnputValue(event.target.value)
        console.log(InputValue)
    }

    return(
        <div className="">
            <input type="text" placeholder="Digite anything" onChange={onChangeHandler}/> 
            <h1>{InputValue}</h1>
        </div>
    )
}