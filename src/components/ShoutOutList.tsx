import { useEffect, useState } from "react"
import ShoutOut from "../models/ShoutOutsModel"
import { fetchPostShoutOut, fetchShoutOuts } from "../service/ShoutOutApiService";
import ShoutOutForm from "./ShoutOutForm";
import SingleShoutOut from "./SingleShoutOut";
import "./ShoutOutList.css";

export default function ShoutOutList(){
    const [shoutOutList, setShoutOutList] = useState<ShoutOut[]>([]);
    useEffect(()=>{
        fetchShoutOuts().then(data=>{
            setShoutOutList(data);
        })
        
    }, []);

    function handleShoutOutSubmit(shoutOutEntry: ShoutOut): void{
        fetchPostShoutOut(shoutOutEntry).then(data=>{
            setShoutOutList(prev=>[...prev, data]);
        })
    }

    return(
        <div className="ShoutOutList_Container">
        <header>
            <h1>All Shout Outs</h1>
        </header>
        <main>
            {shoutOutList.map((data, i) => <SingleShoutOut key={i} shoutOut={data}/>)}
        </main>
        <div className="ShoutOutList_FormContainer">
            <ShoutOutForm onSubmit={handleShoutOutSubmit}/>
        </div>
        </div>
    )
}