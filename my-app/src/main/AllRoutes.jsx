import {Routes,Route} from "react-router-dom"
import { Main } from "./main"
import Landing from "../landing/landing"
import  {Medicine}  from "./medicine"
import Status from "./status"




export function AllRoutes(){
    return(
        <Routes>
             <Route path="/" element={<Landing/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/medicine" element={<Medicine/>}/>
            {/* <Route path="/about" element={<About/>}/> */}
            <Route path="/status" element = {<Status />}/>
        </Routes>
    )
}