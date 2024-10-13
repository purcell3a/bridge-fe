
import './Chatroom.css'
import { useState } from 'react'
import Header from './Components/Header.jsx'
function Chatroom () {
    const [prompt, setPrompt] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(prompt)
        fetch('http://localhost:8000/symptoms/generate-summary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                symptom_input: prompt,
                current_user: {
                    id:1,
                    name :"Current User",
                    password: "password",
                    email: "current@user.com",
                }
            }),
        })
    }
    return (
        <div className='Chatroom'>
            <Header />
           <div className="chat">
                <div className="sent">
                    <p>Please Tell me my Age and hair color</p>
                </div>
                <div className="received">
                    <p>18 and blue</p>          
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={prompt} placeholder='Enter Prompt' onChange={e=>setPrompt(e.target.value)} />
            <input type="submit" value="Send"  />
            </form>
            <input type="text" placeholder="Enter Prompt" />
        </div>
    );
};

export default Chatroom;
