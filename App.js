import logo from './IMG_20231023_154627-removebg-preview.png';
import git from './github3.png';
import linkd from './linkedin1.png';
import twitter from './twitter1.png';
import insta from './insta1.png';
import backg from './color-splash-blue-11549385196fzngamwrse-removebg-preview.png';
import frontg from './fotor-ai-2023102116512-removebg.png';
import './App.css'; 
function App() {
  return ( 
    <>
    <div className="nav-bar">
     <div className="left">
      <img src={logo} alt='logo' id= "logo"/>
     </div>
     <div className="right">
      <nav className = "navigation">

     <li className="nav-link">Home</li>
     <li className="nav-link">Services</li>
      <li className="nav-link">Projects</li>
      <li className="nav-link">About</li>
      <li className="nav-link">Contact</li>
      </nav>
     </div>
    </div>
    <body className='main'>
     <div className="b-left">
        <img src={backg} alt ="backg" id="backimg"/> 
        <img src={frontg} alt ="frontimg" id="fimg"/> 
     </div>
     <div className="b-right">
        <h1> <span id= 'greet'>Hello!</span> I'm <span id='title'>Sarthak Gupta</span></h1>
        <h2>Basically, a <span id='dev'>Web Developer</span></h2>
        <p><b>from IT Branch pursuing BTECH in KIET COLLEGE Ghaziabad, I have done my schooling from Kanpur. I am inclined towards WebDev and doing CP in C++ on CodeShef Platform and my current rating is 1124 and started exploring Kali Linux Tools.<br></br>My mail id - <a href='/'>smartsarthakgupta12345@gmail.com</a></b></p>
        <div className="links">
         <li> <a href="https://github.com/sarthak-stranger" target='_blank'><img src={git} alt = "git-link" className='all-links'/></a> </li>
         <li> <a href="https://www.linkedin.com/in/sarthak-stranger?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={linkd} alt = "Linkedin-link" className='all-links'id='linkd'/></a> </li>
         <li> <a href="https://x.com/sarthakstranger?t=L2L9nyWH2Tc-mvzk9MOTWA&s=08" target='_blank'><img src={twitter} alt = "twitter-link" className='all-links'id='twit'/></a> </li>
         <li> <a href="https://instagram.com/sarthak.stranger?igshid=YjAwc2VpeDVlbm51" target='_blank'><img src={insta} alt = "insta-link" className='all-links'/></a> </li>
          

        </div>
     </div>

    </body>
     </> 
  );
}

export default App;
