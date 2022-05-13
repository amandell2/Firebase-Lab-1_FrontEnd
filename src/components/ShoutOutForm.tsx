import { FormEvent, useState } from "react";
import ShoutOut from "../models/ShoutOutsModel";
import "./ShoutOutForm.css";

interface Props {
    onSubmit: (shoutOut: ShoutOut) => void;
}

export default function ShoutOutForm({onSubmit}: Props){
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        const shoutOut: ShoutOut ={
            to: to,
            from: from,
            text: text
        }

        onSubmit(shoutOut);

        setTo('');
        setFrom('');
        setText('');
    }

    return(
        <div className="ShoutOutForm_Container">
            <form onSubmit={handleSubmit} className="ShoutOutForm">
                <label htmlFor='to'>To</label>
                <input id = "to" value = {to} onChange ={e => setTo(e.target.value)} required/>
                <label htmlFor='from'>From</label>
                <input id = "from" value = {from} onChange ={e => setFrom(e.target.value)} required/>
                <label htmlFor='shoutOutMessage'>Shout Out</label>
                <input id = "shoutOutMessage" value = {text} onChange ={e => setText(e.target.value)} required/>    
                <input className='submit' type="submit"value ="Submit Shout Out"/>
            </form>
        </div>
    )
}