
import './skills.css'
import { useState } from 'react';

function Skills() {
    const [level1,setLevel1]=useState(90)
    const [level2,setLevel2]=useState(50)
    const [level3,setLevel3]=useState(2)

    return (
        <>
        
            <div class="text-center mt  " id="section2">
               
                <div class="w-75 mx-auto">
                
                <h1 class="fw-bold " >Skills</h1>
            As a passionate software engineer,
             I specialize in crafting innovative and efficient 
             software solutions that drive business success
              and enhance user experiences. With a solid 
              foundation in software engineering principles 
              and a keen eye for detail, I thrive on 
              transforming complex problems into intuitive 
              and scalable applications.
              </div>
              <div class="container text-center">
                     <div class="row mt-5">
                        <div class="col d-flex flex-column ">
                            <p className='w-100'>My Focus
                            <hr></hr>
                            

                            </p>
                            
                            <p>Ui/Ux Design</p>
                            <p>Responsive Design</p>
                            <p>Web Design</p>
                            <p>Mobile App Design</p>
                          </div>
                        <div class="col">
                          <div class="flex flex-column ">
                            <div class="row mb-2" >
                                <div class="col row" >
                                    <div class="col-4 bg-secondary " >HTML</div>
                                    <div class="col-8  p-0 bg-light" >
                                        <div class="bg-success m-0 bar1 h-100 opacity-75" style={{width:`${level1}%`}}></div>
                                    </div>

                                </div>
                                
                            </div>
                            <div class="row mb-2" >
                                <div class="col row " >
                                    <div class="col-4 bg-secondary " >Javascript</div>
                                    <div class="col-8  p-0 bg-light" >
                                        <div class="bg-success m-0 bar1 h-100 opacity-75" style={{width:`${level2}%`}}></div>
                                    </div>

                                </div>
                                
                            </div>
                            <div class="row" >
                                <div class="col row" >
                                    <div class="col-4 bg-secondary " >CSS</div>
                                    <div class="col-8  p-0 bg-light" >
                                        <div class="bg-success m-0 bar1 h-100 opacity-75" style={{width:`${level3}%`}}></div>
                                    </div>

                                </div>
                                
                            </div>
                          </div>
                          </div>
                    </div>
              </div>
            </div>
          
        
        
        </>
    )
}

export default Skills;