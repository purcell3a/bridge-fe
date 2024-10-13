


const Header =  ()=>{    
  
    return (<header className="header">
        <div className='logo'>
            <img src="bridge.webp" alt="logo" className='logo'/>
            <div>Bridge</div>
        </div>
        <div className='routes'>
          <a href="/">Home</a>
          <a href="">Features</a>
          <a href="/symptoms">Symptom Tracker</a>
          <a href="/chatroom">Chat Room</a>
          <a href="/signin">Sign In</a>
          <a href="/signup" >Sign Up</a>
        </div>
    </header>)}

export default Header;