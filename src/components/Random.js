import axios from "axios";
import { useEffect, useState } from "react";
const APIkey=process.env.REACT_APP_API_KEY;
function Random(){
    const[work,setWork]=useState(false);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${APIkey}`;
    const [gif,setGif]=useState("")
    function onHandler(){
        getData();
    }
    async function getData(){
        setWork(true)
        const data=await axios.get(url);
        const gifUrl=data.data.data.images.downsized_large.url;
        setWork(false)
        setGif(gifUrl);
    }
    useEffect(()=>{
        getData();
    },[])
   return(
        <div className="flex flex-col items-center mt-10 border bg-green-500 rounded-lg">
            <h1 className="text-xl font-bold mb-2">A RANDOM GIF</h1>
            {work?<div className="custom-loader"></div>:<img src={gif} className="mb-2"></img>}
            <button className="w-[400px] bg-rose-200 rounded-md h-7 text-lg mb-4" onClick={onHandler}>GENERATE</button>
        </div>
   )
}
export default Random;