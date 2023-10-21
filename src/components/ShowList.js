import React from "react";


const ShowList = ({ todo }) => {
    console.log(todo);
    return (<div>
        <div >
            <p>{todo} </p>
            <button onClick={}>Delete</button>
        </div>
    </div>)
}
export default ShowList;