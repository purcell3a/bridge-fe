import './Chatroom.css';

const Chatroom = () => {
    return (
        <div className='Chatroom'>
            <div className="header">
                <div className='logo'>
                    <img src="bridge.webp" alt="logo" className='logo'/>
                    <div>Bridge</div>
                </div>
                <div className='routes'>
                    <a href="/">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="/signin">Sign In</a>
                </div>
            </div>
            <div className="chat">
                <div className="sent">
                    <p>Please Tell me my Age and hair color</p>
                </div>
                <div className="received">
                    <p>18 and blue</p>          
                </div>
            </div>
            <input type="text" placeholder="Enter Prompt" />
        </div>
    );
};

export default Chatroom;
