// routing


// import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
// import './App.css'
// import { Dashboard } from './Component/Dashboard'
// import { Landing } from './Component/Landing'

// function App() {
//   return (
//     <div>
//      <BrowserRouter>
//      <Appbar/>
//       <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}></Route>
//           <Route path="/" element={<Landing/>}></Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
// const navigate = useNavigate()
// const buttonStyle = {
//   fontSize: "18px", // Adjust this value to increase/decrease the button size
//   padding: "10px 20px", // Adjust padding to increase/decrease the button size
//   marginRight: "10px" // Add some margin between the buttons
// };
//   return<div>
//          <div>
//           <button style={buttonStyle} onClick={() =>{ 
//             navigate("/")
//           }}>Landing page</button>
//           <button style={buttonStyle} onClick={() =>{
//             navigate("/dashboard")
//           }}>Dashboard</button>
//       </div>
//   </div>
// }
// export default App


// // Lazy loading

// import { lazy,Suspense } from 'react';
// import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
// import './App.css'
// const Landing = lazy(() => import('./Component/Landing'))
// const Dashboard = lazy(() =>import('./Component/Dashboard'))

// function App() {


//   //Suspense API
  
//   return (
//     <div>
//      <BrowserRouter>
//      <Appbar/>
//       <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={<div>"loading ..."</div>}> <Dashboard/></Suspense>}></Route>
//           <Route path="/" element={<Suspense fallback={<div>"loading..."</div>}><Landing/></Suspense>}></Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
// const navigate = useNavigate()
// const buttonStyle = {
//   fontSize: "18px", // Adjust this value to increase/decrease the button size
//   padding: "10px 20px", // Adjust padding to increase/decrease the button size
//   marginRight: "10px" // Add some margin between the buttons
// };
//   return<div>
//          <div>
//           <button style={buttonStyle} onClick={() =>{ 
//             navigate("/")
//           }}>Landing page</button>
//           <button style={buttonStyle} onClick={() =>{
//             navigate("/dashboard")
//           }}>Dashboard</button>
//       </div>
//   </div>
// }
// export default App



// prop drilling

// import React, { useState } from "react";
// function App(){
// const [count,setCount] = useState(0);
//   return(
//     <div>
//       <Count count={count}/>
//       <Button count={count} setCount={setCount}/>
//     </div>
//   )
// }

// function Count({count})
// {
//   return <div>
//     {count}
//   </div>
// }

// function Button({count,setCount}){
//   return <div>
//     <button onClick={()=> {
//       setCount(count + 1)
//     }}>increase</button> 
//      <button onClick={()=> {
//       setCount(count-1)
//     }}>decrease</button> 
//   </div>
// }

// export default App




// Context API


import React, { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
      {count}
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>{count}</div>;
}

function Button({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;


