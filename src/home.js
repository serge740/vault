import Navbar from "./Navbar";
import HomeSides from "./homeSides";
import backVideo from './img/bg.mp4'


const Home = () => {

    return (  
      <div id="home">
      <div className="back-video">
      <video src={backVideo} muted autoPlay loop ></video>
      </div>
        <Navbar/>
        <HomeSides/>
      </div>
      );
} 
export default Home;