import React, { useState, useEffect } from 'react'

export default function HookComponent() {

    const [txt, setTxt] = useState(['----']);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      console.log('Sono useEffect')
    
    }, [toggle])

    
    
    

    return (
        <>
            <div>HookComponent - {txt}</div>
            <button onClick={() => setTxt(txt + ' Change!!!')}>Change</button>
            { toggle && <p>Ciao a tutti</p> }
            <button onClick={() => setToggle(!toggle)}>Change</button>
        </>
    )
}


// Destrutturazione di un Array

/* let arr = ['abc', 'ciao', 'cheese']
let val1 = arr[0];
let val2 = arr[1];
let val3 = arr[2];
const [val1, val2, val3] = arr;
console.log(val1)
console.log(val2)
console.log(val3) */