import './CV.css'
import { useState } from 'react';

function CV() {
    const [editable, setEditable] = useState(true);
    const [inputData, setInputData] = useState({
        'name': '', 
        'email': '', 
        'phone': '', 
        'education': '', 
        'field': '', 
        'date': ''
    });

    const toggleEdit = () => {
        const edit = !editable;
        setEditable(edit);
        console.log("edit status is now " + edit)
    };

    const editing = (event) => {
        event.preventDefault();
        toggleEdit();
    };

    const handleChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target; // grabs the name and value of the targetted tag
        setInputData({
                ...inputData, // populates the new object inputData with properties from the old inputData 
                [name]: value // overwrites the specific property with the new object and its value
                /**
                NOTE: [] around [name] is a "computed property name" which basically allows
                the key to change in value. We use it here since if we had `name: value` instead,
                then it'd create a NEW property with the key CONST `name` with its value string `value`.
                I emphasize variable since when we initialize the inputData state, the properties
                have key STRING, NOT key CONST
                **/
            }
        );
    }

    const submission = (event) => {
        event.preventDefault();
        toggleEdit();
        var msgs = ["The following data was sent: \n", ]
        for (let data in inputData) {
            msgs.push("data: " + inputData[data] + "\n");
        }
        const msg = msgs.join("");
        alert(msg);
    };

    return (
        <>
            <h1>CV Application</h1>
            <form class="body-block">
                <div class='personal'>
                    Name <input name='name' disabled={!editable} value={inputData.name} onChange={handleChange}></input>
                    Email <input name='email' disabled={!editable} value={inputData.email} onChange={handleChange}></input>
                    Phone # <input name='phone' disabled={!editable} value={inputData.phone} onChange={handleChange}></input>
                </div>
                
                <div class='education'>
                    <>Education <input name='education' disabled={!editable} value={inputData.education} onChange={handleChange}></input></>
                    <>Field of study <input name='field' disabled={!editable} value={inputData.field} onChange={handleChange}></input></>
                    <>Study date <input type='date' name='date' disabled={!editable} value={inputData.date} onChange={handleChange}></input></>
                </div>
                
                <div class='function'>
                    <button type='submit' onClick={submission} disabled={!editable}>Submit</button>
                    <button onClick={editing}>Edit</button>
                </div>
                
            </form>
        </>
    )
}

export default CV;
