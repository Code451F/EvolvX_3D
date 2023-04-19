import { BrowserRouter, Route, Routes } from "react-router-dom";

import Compile from "./Compile";
import { Evolvhack,Ctf, Gaming, Triathlon, Codingcomp, Sponsors, Team, CSEA, GamingFifa  } from "./pages";
import { EvolvhackReg, CtfReg, GamingReg, TriathonReg, CodingcompReg } from "./pages/registration";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
          <Route path = '/'>
          <Route index element={<Compile />} />
          // Event pages
            <Route path='/evolvhack' element={<Evolvhack/>}/>
            <Route path='/ctf' element={<Ctf/>}/>
            <Route path='/codingcompetition' element={<Codingcomp/>}/>
            <Route path='/gaming/csgo' element={<Gaming/>}/>
            <Route path='/gaming/fifa' element={<GamingFifa/>}/>
            <Route path='/escaperoom' element={<Triathlon/>}/>
          // Event registration
            <Route path='/evolvhack/registration' element={<EvolvhackReg/>}/>
            <Route path='/ctf/registration' element={<CtfReg/>}/>
            <Route path='/codingcompetition/registration' element={<CodingcompReg/>}/>
            <Route path='/gaming/registration' element={<GamingReg/>}/>
            <Route path='/triathon/registration' element={<TriathonReg/>}/>
          // Team pages
            <Route path='/sponsors' element={<Sponsors/>}/> 
            <Route path='/team' element={<Team/>}/>
            <Route path='/csea' element={<CSEA/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;