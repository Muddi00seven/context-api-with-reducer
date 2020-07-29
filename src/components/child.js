import React, {useContext , useReducer} from 'react'
// import ValueContext from './context'
import NumberReducer from './useReducer';

const Child = (props) => {
     let [state, dispatch] = useReducer(NumberReducer, 55)
     const increase = () => {
        {dispatch({type:'INCREMENT' , val: 11})}

         }

         const decrease = () => {
            {dispatch({type:'DECREMENT' , val: 17})}

             }

    return (
        <div>
                Child number {state}
                <button onClick={increase}>increase        </button>
                <button onClick={decrease}>increase        </button>

        </div>

    )
}

export default Child
