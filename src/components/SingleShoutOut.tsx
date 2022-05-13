import ShoutOut from "../models/ShoutOutsModel";
import "./SingleShoutOut.css";

interface Props{
    shoutOut: ShoutOut;
}

export default function SingleShoutOut({shoutOut}:Props){
    return(
        <div className="SingleShoutOut_Container">
                <p className="to">Shout Out to {shoutOut.to}</p>
                <p className="from">- from {shoutOut.from}</p>
                <p className="text">{shoutOut.text}</p>
        </div>
    )
}