import React from 'react';
import './about.css';
import './App.css';
function About (){
        return(
            <>
            <div className="title">About Us</div><br />
                <div className='container-about'>
                    <div className='para1'>
                        <p>
                            <b>1.</b> AudioPhile was established in 2000, we started with a small store in Mumbai.<br />
                            Today we are a family of <strong>20M subscribers!!!</strong><br />
                            AudioPhile was an idea came from a need, our founder Ms. XYZ was a music lover<br />
                            she always wanted to have her own recording studio, and that's when AudioPhile was born.
                        </p>
                    </div>
                    <div className='para2'>
                        <p>
                            2. AudioPhile was established in 2000, we started with a small store in Mumbai.<br />
                            Today we are a family of <strong>20M subscribers!!!</strong><br />
                            AudioPhile was an idea came from a need, our founder Ms. XYZ was a music lover<br />
                            she always wanted to have her own recording studio, and that's when AudioPhile was born.
                        </p>
                    </div>
                    <div className='para3'>
                        <p>
                            3. AudioPhile was established in 2000, we started with a small store in Mumbai.<br />
                            Today we are a family of <strong>20M subscribers!!!</strong><br />
                            AudioPhile was an idea came from a need, our founder Ms. XYZ was a music lover<br />
                            she always wanted to have her own recording studio, and that's when AudioPhile was born.
                        </p>
                    </div>
                    <div className='para4'>
                        <p>
                            4. AudioPhile was established in 2000, we started with a small store in Mumbai.<br />
                            Today we are a family of <strong>20M subscribers!!!</strong><br />
                            AudioPhile was an idea came from a need, our founder Ms. XYZ was a music lover<br />
                            she always wanted to have her own recording studio, and that's when AudioPhile was born.
                        </p>
                    </div>
                </div><br /> <br />

                <div className="title">Our yearly activities...</div><br />
                <div class="row mb-5"> 
                    <div class="column">
                        <img src="./concert1.jpg" style={{width:'100%'}}></img>
                        <img src="./concert5.jpg" style={{width:'100%'}}></img>
                    </div>
                    <div class="column">
                        <img src="./concert3.jpg" style={{width:'100%'}}></img>
                        <img src="./concert4.jpg" style={{width:'100%'}}></img>
                        <img src="./concert10.jpg" style={{width:'100%'}}></img>
                    </div>  
                    <div class="column">
                        <img src="./concert6.jpg" style={{width:'100%'}}></img>
                        <img src="./concert2.jpg" style={{width:'100%'}}></img>
                        <img src="./concert9.jpg" style={{width:'100%'}}></img>
                    </div>
                    <div class="column">
                        <img src="./concert7.jpg" style={{width:'100%'}}></img>
                        <img src="./concert8.jpg" style={{width:'100%'}}></img>
                    </div>
                    </div>
            </>
        );    
}
export default About;