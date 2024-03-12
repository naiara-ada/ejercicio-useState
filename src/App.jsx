import './App.css'
import {useState} from 'react';


function App() {
 //Aquí tu código
const [name, setName] = useState('Sofia');
const [newName, setNewName] = useState('');


const setTeacher = (newTeacherName) => {
    setName(newTeacherName);
  };


return(
    <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
            <li onClick={() => setTeacher("Data")}>Data</li>
            <li onClick={() => setTeacher("Reyes")}>Reyes</li>
            <li onClick={() => setTeacher("Yolanda")}>Yolanda</li>
            <li onClick={() => setTeacher("Sofia")}>Sofia</li>        
        </ul>
    </div>
)

}

export default App



