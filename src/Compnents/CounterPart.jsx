import React from 'react'
import { Decrement, Increment } from '../Redux/CounterFunction'
import {useDispatch, useSelector} from 'react-redux';
import {BiMinusCircle} from 'react-icons/bi';
import {FcPlus} from 'react-icons/fc';
import './CounterPart.css';
function CounterPart() {

    const dispatch=useDispatch();

const count = useSelector((state)=>state.counter)
  return (
    <div className='counter_app'>
        <h1 className='counter_label'>Counter Application</h1>      
        <div className='counter'>
        <h1 onClick={()=>dispatch(Increment())}> Icrement <span><FcPlus className='plus'/></span></h1>
        <span>{count}</span>
        <h1 onClick={()=>dispatch(Decrement())}> Decrement <span><BiMinusCircle  className='plus'/></span></h1>
            </div>  
    </div>
  )
}

export default CounterPart