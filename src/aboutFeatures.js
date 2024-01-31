import { useState } from "react";





const AboutFeatures = () => {

 

    {
    window.addEventListener("scroll",function(){
      let fateUnder=document.querySelectorAll(".fate-under");
      fateUnder.forEach(Fate=>{
        var windowHeight=window.innerHeight;
        var fateTop=Fate.getBoundingClientRect().top;
        var fatePoint=250;
    
        if(fateTop< windowHeight - fatePoint){
          Fate.classList.add("show-under")
        }
      })
    
    })
    }
      
  

    
const[features,setFeatures] = useState([
    { icon: <div className="fete-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M30,48c-0.178,0-0.356-0.047-0.515-0.143l-10-6C19.184,41.677,19,41.351,19,41V23.396L3.272,6.686C3.097,6.5,3,6.255,3,6V3 c0-0.552,0.448-1,1-1h42c0.552,0,1,0.448,1,1v3c0,0.255-0.097,0.5-0.272,0.686L31,23.396V47c0,0.36-0.194,0.693-0.507,0.87 C30.34,47.957,30.17,48,30,48z M46,6h0.01H46z" fill="#FF611C" />
  </svg> </div> ,  header:'core WP', word:'Download the app to use your data to unlock paywalls and access premium content.',id:'1'}

  ,  { icon: <div className="fete-icon" style={{backgroundColor:"#1cffc227" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <path d="M13 14.488281L8 10.820313L3 14.488281L3 3.5C3 2.671875 3.671875 2 4.5 2L11.5 2C12.328125 2 13 2.671875 13 3.5Z" fill="#1CFFC4" />
    </svg> </div> ,  header:'Easy Customizable', word:'Earn points by sharing your data, answering surveys, referring friends and more.',id:'2'}

,  { icon: <div className="fete-icon" style={{backgroundColor:' #ff1cce42'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M24.613281 3.011719L13.753906 14.542969L16.179688 3.011719 Z M 33.765625 3.011719L36.238281 14.542969L25.496094 3.011719 Z M 35.742188 17L14.25 17L25 5.441406 Z M 11.210938 17L1.257813 17L14.027344 3.566406 Z M 11.328125 19L21.058594 44.65625L1.183594 19 Z M 13.5 19L36.5 19L25 48.816406 Z M 38.78125 17L35.914063 3.511719L48.660156 17 Z M 28.949219 44.636719L38.675781 19L48.78125 19Z" fill="#FF1CCF" />
            </svg> </div> ,  header:'Fast Support', word:'Spend your points to access premium content you love. New content updated daily.',id:'3'}
])

    return ( 

      <div id="features">

        <div className="app-fate">
        
        <div className="our-application">
        <h1>Our Application <span className="fate-under" >Features.</span></h1>
        
        <p>With Vault, you can earn points by completing simple steps and using those points to gain subscription-free access to premium articles. Your feed is updated daily with fresh news stories.</p>
        </div>
  
  
          <div className="aboutFeatures">
  
  
              
              {
  
                features.map((fete)=>(
  
                  <div className="fete-dash" key={fete.id}>
                    {fete.icon}
                    <h1>{fete.header}</h1>
                    <p>{fete.word}</p>
                  </div>
                ))
  
              }
              
  
  
          </div>
  
         
  
        </div>
      </div>

      );
}
 
export default AboutFeatures;