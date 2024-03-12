import './App.css'
import {useState} from 'react';


function App() {
 //Aquí tu código
const [name, setName] = useState('Sofia');
const [newName, setNewName] = useState('');


const setTeacher = (newTeacherName) => {
    setName(newTeacherName);
  };


const changeName = (event) => {
    console.log(event)
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    if (newName !== '') { 
      setName(newName); 
      setNewName(''); 
    }
}

const changeNewName = (event) =>{
    console.log(event)
    setNewName(event.target.value)
}


return(
    <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
            <li onClick={() => setTeacher("Data")}>Data</li>
            <li onClick={() => setTeacher("Reyes")}>Reyes</li>
            <li onClick={() => setTeacher("Yolanda")}>Yolanda</li>
            <li onClick={() => setTeacher("Sofia")}>Sofia</li>        
        </ul>

        <form onSubmit={changeName}>
        <input type="text" value={newName} onChange={changeNewName} placeholder='add a name'/>
        <button type="submit">Change</button>
        </form>
    </div>
)

}

export default App



