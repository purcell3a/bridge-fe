import './Landingpage.css'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function LandingPage () {
    return (
        <div className="Landing-Page">
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
           <div className="info">
                <div className='p1'>
                    <h3>Your Daily Health Companion</h3>
                    <p>Stay connected with your doctor effortlessly. HealthTrackr makes tracking your health and sharing updates simple and convenient.</p>
                </div>
                <div className='p2'>
                    <img src="bridge.webp" alt="" />
                </div>
           </div>
           <div className="faq">
                <h2>FAQ?</h2>
                <li>
                    How does the app summarize my daily health updates?
                </li>
                <li>    
                    Can I communicate with my doctor through the app?
                </li>
                <li>
                    What kind of information does the app provide to my doctor?
                </li>
                <li>
                    Is my data secure on the app?
                </li>
                <li>
                    Can I set reminders for medication intake?
                </li>
           </div>
        </div>
    )
}

export default LandingPage