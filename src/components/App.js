
import React,{useState} from "react";
import './../styles/App.css';
import BuiltList from "./BuiltList"
import ShowList from "./ShowList";
const App = () => {
  const [item, setItem] = useState([]);
  return (
    <div>
        {/* Do not remove the main div */}
<BuiltList updateList ={setItem}/>
<ShowList todo={item}/>
    </div>
  )
}

export default App
