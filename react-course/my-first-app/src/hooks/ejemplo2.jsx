/**
 * Example to use of:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    // We create a referents with userRef() for to asociated var with dom element
    const miRef = useRef();
    function increment1(){
        setContador1(contador1 +1)
    }
    function increment2(){
        setContador1(contador2 +1)
    }
    
    return (
        <div>
            
        </div>
    );
}

export default Ejemplo2;

