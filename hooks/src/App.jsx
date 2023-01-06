import React, { useEffect, useState } from 'react'
import useFetch from './customhooks/useFetch'

const App = () => {
  const data = useFetch("http://jsonplaceholder.typicode.com/users")
  
  return (
    <div>
      {data.map(res => {
        return (
          <h4 key={res.id}>
            {res.id}. {res.name}
          </h4>
        )
      })}
    </div>
  )
}


// USECALLBACK IS LIKE USEMEMO BUT USED FOR PREVENTING 
// FUNCTION RECREATION ON RE-RENDERING
// import React, { useState, useCallback } from 'react'
// import { Printable } from './components/Printable'

// export const App = () => {
//   const [number, setNumber] = useState(0)
//   const [dark, setDark] = useState(false) 

//   const cssStyle = {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }

//   const calculateTable = useCallback((value) => {
//     let newNum = number + value
//     return [newNum * 1, newNum * 2, newNum * 3, newNum * 4, newNum * 5]
//     },
//     [number],
//   )

//   return (
//     <div style={cssStyle}>
//       <input type="number"
//       onChange={(e) => setNumber(e.target.valueAsNumber)} 
//       value={number}
//       />
//       <Printable calculateTable={calculateTable} />
//       <button onClick={() => setDark(prev => !prev)}>
//         Toggle
//       </button>
//     </div>
//   )
// }

// USEMEMO IMPROVES PERFORMANCE IN REACT
// AND STOPS RUNNING UNWANTED FUNCTIONS ON RE-RENDERING
//USEMEMO IS USED FOR EXPENSIVE FUNCTIONS AND CALCULATION
//WHILE USEEFFECT IS USED FOR SIDE EFFECTS
// import React, { useState, useMemo } from 'react'

// export const App = () => {
//   const [number, setNumber] = useState(0)
//   const [dark, setDark] = useState(false)

//   const memoCalculation = useMemo(() => {
//     return expensiveFunction(number)
//   }, [number])

//   // const calculation = expensiveFunction(number);
//   const cssStyle = {
//     backgroundColor: dark ? 'black' : "white",
//     color: dark ? "white" : "black"
//   }

//   return (
//     <div style={cssStyle}>
//       <input 
//       onChange={(e) => setNumber(e.target.valueAsNumber)}
//       type="number"
//       value={number} 
//       />
//       <h2>Caluclation: {memoCalculation}</h2>
//       <button onClick={() => setDark(prev => !prev)}>Toggle</button>
//     </div>
//   )
// }

// function expensiveFunction(num) {
//   console.log("Loop Started")
//   for (let i = 0; i < 100000000; i++) {}
//   return num
// }

//USELAYOUTEFFECT IS USED FOR THE LAYOUT
// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

// USEREDUCER IS USED TO MANAGE COMPLEX STATES IN REACT
// import { useReducer, useState } from "react";

// const ACTION = {
//   INCREASE: "increase",
//   DECREASE: "decrease"
// }

// const initialState = {count: 0}

// const reducer = (state, action) => {
//   switch(action.type) {
//     case ACTION.INCREASE:
//       return {count: state.count + 1}
//     case ACTION.DECREASE:
//       return {count: state.count - 1}
//     default:
//       return state
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   // const [count, setCount] = useState(0)

//   const increaseCount = () => {
//     dispatch({type: ACTION.INCREASE})
//   }
//   // const increaseCount = () => {
//   //   setCount(prev => prev + 1)
//   // }

//   const decreaseCount = () => {
//     dispatch({type: ACTION.DECREASE})
//   }
//   // const decreaseCount = () => {
//   //   setCount(prev => prev - 1)
//   // }

//   return(
//     <div>
//       <h2>Count: {state.count}</h2>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

//USEREF(2) IS USED TO ACCESS DOM ELEMENTS DIRECTLY
//WITHOUT USING DOCUMENT.GETELEMENTBYID OR CLASSNAME
// import { useRef } from "react";

// const App = () => {
//   const inputEle = useRef()
//   const handleClick = () => {
//     console.log(inputEle.current)
//     inputEle.current.style.width = '300px'
//     inputEle.current.focus()
//   }

//   return (
//     <div>
//       <input type="text" ref={inputEle} />
//       <button onClick={handleClick}>Click Here</button>
//     </div>
//   )
// }

// USEFREF(1) IS USED FOR CREATING MUTABLE ELEMENT WITHOUT
// CAUSING RERENDER
// import { useEffect, useRef, useState } from "react";

// function App() {
//   const [name, setName] = useState('')
//   const count = useRef(0)

//   useEffect(() => {
//     count.current = count.current + 1
//   })

  // WHY USESTATE ISN'T USED FOR COUNTING
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   setCount(prev => prev + 1)
  // }, [count])

//   return (
//     <div>
//       <input type='text' onChange={(e) => setName(e.target.value)} />
//       <h2>Name: {name}</h2>
//       <h2>Renders: {count.current}</h2>
//     </div>
//   );
// }

// USECONTEXT CLEAN
// import MainComponent from "./components/MainComponent";
// import LoginContextProvider from "./context/LoginContextProvider";

// function App() {
//   return (
  //     <LoginContextProvider>
//       <MainComponent />
//     </LoginContextProvider>
//   );
// }

// USECONTEXT MESSY
// import { createContext } from 'react'
// import MainComponent from "./components/MainComponent";
// export const LoginContext = createContext()

// function App() {
//   return (
//     <LoginContext.Provider value={true}>
//       <div className="App">
//         <MainComponent />
//       </div>
//     </LoginContext.Provider>
//   )
// }
export default App;
