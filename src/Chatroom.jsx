import './Chatroom.css'
import { useState } from 'react'
function Chatroom () {
    const [prompt, setPrompt] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(prompt)
        fetch('http://localhost:8000/utils/call_kindo_api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
            }),
        })
    }
    return (
        <div className='Chatroom'>
            <div className="header">
                <div className='logo'>
                    <img src="bridge.webp" alt="logo" className='logo'/>
                    <div>Bridge</div>
                </div>
                <div className='routes'>
                  <a href="/">Home</a>
                  <a href="">Features</a>
                  <a href="">About</a>
                  <a href="">Contact</a>
                  <a href="/">Sign In</a>
                </div>
            </div>
           <div className="chat">
                <div className="sent">
                    <p>Please Tell me my Age and hair color</p>
                </div>
                <div className="recieved">
                    <p>18 and blue</p>          
                </div>
                
            </div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={prompt} placeholder='Enter Prompt' onChange={e=>setPrompt(e.target.value)} />
            <input type="submit" value="Send"  />
            </form>
        </div>
    )
}

export default Chatroom