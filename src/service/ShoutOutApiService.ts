import ShoutOut from "../models/ShoutOutsModel";
import axios from "axios";

// const baseUrl = "http://localhost:5001/fir-lab-1-177b6/us-central1/api";
const baseUrl= "https://us-central1-fir-lab-1-177b6.cloudfunctions.net/api";

export function fetchShoutOuts(): Promise<ShoutOut[]>{
    return axios.get<ShoutOut[]>(`${baseUrl}/shoutouts`)
    .then(res=>res.data)
}

export function fetchPostShoutOut(shoutOutEntry:ShoutOut): Promise<ShoutOut>{
    return axios.post<ShoutOut>(`${baseUrl}/shoutouts`, shoutOutEntry).then(res => res.data);

}