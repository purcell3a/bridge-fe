import './Chatroom.css'

function Chatroom () {
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
            <input type="text" placeholder='Enter Prompt' />
        </div>
    )
}

export default Chatroom