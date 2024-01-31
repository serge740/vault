



const Navbar = () => {
    return ( 
        <nav className="navbar">


          <img src={require("./img/Vault-Logo.webp")} alt="" />

            <div className="links" >
            
            <a href="#">home</a>
            <a href="#features">features</a>
            <a href="#app">apps</a>
            <a href="#">why us</a>
            <a href="#">pricing</a>
            <a href="#">feedback</a>
            </div>

          <div className="signShits">
          <div className="nav-log">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M46.214844 7.847656C38.8125 6.222656 34.441406 3.921875 31.25 2.242188C28.769531 0.941406 26.980469 0 25 0C23.019531 0 21.230469 0.941406 18.75 2.242188C15.558594 3.921875 11.1875 6.222656 3.785156 7.847656L3 8.019531L3 8.824219C3 39.285156 24.363281 49.503906 24.582031 49.601563L25.019531 49.804688L25.453125 49.585938C25.667969 49.472656 47 38.273438 47 8.824219L47 8.019531 Z M 29 31.5L21 31.5L22.8125 23.34375C21.722656 22.628906 21 21.402344 21 20C21 17.789063 22.789063 16 25 16C27.210938 16 29 17.789063 29 20C29 21.402344 28.277344 22.628906 27.1875 23.34375Z"/></svg>
            <p>login</p>
            </div>

            <button>sign up- it's free</button>
          </div>

        </nav>
      );
}
 
export default Navbar;