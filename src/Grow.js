import { useState } from 'react';

const Grow = () => {

    const [tickTabs,setTicks]=useState([
        {ticks:'Amazing communication.' ,id:'1'},
        {ticks:'Best trendinf designing experience.',id:'2'},
        {ticks:'Email & Live chat.',id:'3'}

    ])

    return ( 
       <div id="app">
         <div className="Grow">

<div className="grow-left">

    <div className="way-way">
        
    </div>

    <img className="grow-back" src={require('./img/App-Landing-Apps-Image.webp')} alt="" />

    <img className="grow-infront" src={require('./img/App-Landing-Apps-Card.webp')} alt="" />

</div>
<div className="grow-right">
    <h1>Grow your business by using our <span className="fate-under apps">apps.</span> </h1>
    <p className='special'>We're freely supercharging everyone with the tools, products, and education to look and act like a rockstar</p>
    {
        tickTabs.map((tick)=>(
            <div className="ticks" key={tick.id}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M22.59375 3.5L8.0625 18.1875L1.40625 11.5625L0 13L8.0625 21L24 4.9375Z" fill="#5040FF" />
            </svg>
            <p> {tick.ticks} </p>

        </div>
        ))
    }

    <div className="download">

        <div className="store">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <path d="M14 3.9902344C8.4886661 3.9902344 4 8.4789008 4 13.990234L4 35.990234C4 41.501568 8.4886661 45.990234 14 45.990234L36 45.990234C41.511334 45.990234 46 41.501568 46 35.990234L46 13.990234C46 8.4789008 41.511334 3.9902344 36 3.9902344L14 3.9902344 z M 14 5.9902344L36 5.9902344C40.430666 5.9902344 44 9.5595687 44 13.990234L44 35.990234C44 40.4209 40.430666 43.990234 36 43.990234L14 43.990234C9.5693339 43.990234 6 40.4209 6 35.990234L6 13.990234C6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 22.572266 11.892578C22.187855 11.867986 21.790969 11.952859 21.433594 12.162109C20.480594 12.721109 20.161703 13.947391 20.720703 14.900391L22.53125 17.990234L16.666016 28L12 28C10.896 28 10 28.896 10 30C10 31.104 10.896 32 12 32L27.412109 32C27.569109 31.237 27.473203 30.409531 27.033203 29.644531L27.029297 29.640625C26.642297 28.966625 26.105469 28.416 25.480469 28L21.302734 28L28.978516 14.898438C29.536516 13.945438 29.216672 12.720109 28.263672 12.162109C27.309672 11.604109 26.085344 11.923953 25.527344 12.876953L24.849609 14.033203L24.171875 12.876953C23.8225 12.281328 23.212949 11.933564 22.572266 11.892578 z M 28.310547 19.941406L27.484375 21.314453C26.572375 22.830453 26.542953 24.706859 27.376953 26.255859L33.673828 37.001953C34.045828 37.637953 34.713391 37.990234 35.400391 37.990234C35.743391 37.990234 36.092156 37.902797 36.410156 37.716797C37.363156 37.158797 37.682047 35.933469 37.123047 34.980469L35.376953 32L38 32C39.104 32 40 31.104 40 30C40 28.896 39.104 28 38 28L33.033203 28L28.310547 19.941406 z M 14.625 34.003906C14.068 33.987906 13.526719 34.074328 13.011719 34.236328L12.566406 34.994141C12.007406 35.946141 12.32825 37.172469 13.28125 37.730469C13.59925 37.917469 13.946063 38.005859 14.289062 38.005859C14.976062 38.005859 15.644578 37.650625 16.017578 37.015625L17.09375 35.179688C16.50875 34.496688 15.653859 34.033906 14.630859 34.003906L14.625 34.003906 z"  />
        </svg>
            <div className="store-w">
                <p>download on the <br /> <span>App store</span></p>
               
            </div>
        </div>

        <div className="store">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M11 3L9 5L9 9L3 9L3 27C3 28.093063 3.9069372 29 5 29L27 29C28.093063 29 29 28.093063 29 27L29 9L23 9L23 5L21 3L11 3 z M 11 5L21 5L21 9L11 9L11 5 z M 5 11L27 11L27 27L5 27L5 11 z M 11 14L11 18.5L15.5 18.5L15.5 14L11 14 z M 16.5 14L16.5 18.5L21 18.5L21 14L16.5 14 z M 11 19.5L11 24L15.5 24L15.5 19.5L11 19.5 z M 16.5 19.5L16.5 24L21 24L21 19.5L16.5 19.5 z"/></svg>
        <div className="store-w">
                <p>get it on <br /> <span>Google play</span> </p>
               
            </div>
        </div>

    </div>
</div>

</div>
       </div>
        );
}
 
export default Grow;