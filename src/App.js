import Random from "./components/Random"
import Tag from "./components/Tag"
function App(){
    return(
        <div className=" w-full h-screen background flex flex-col overflow-x-hidden items-center">
           <h1 className="w-[98%] h-8 text-xl font-bold bg-white text-center mt-6 rounded-md">RANDOM GIFS</h1>
           <div className="w-[600px]">
               <Random></Random>
               <Tag></Tag>
           </div>
        </div>
    )
}
export default App