import React,{useState} from "react";


const BuiltList = ({updateList}) => {
    const [list , setList] = useState('')
    return (<div>
      <h1>Todo List</h1>
      <input onChange={(e) => setList(e.target.value)}/>
      <button onClick={() => updateList(list)}>Submit</button>
    </div>)
}
export default BuiltList;