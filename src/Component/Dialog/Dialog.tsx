import React from 'react'
import { useState,useEffect } from 'react'
import './dialog.scss'

const Dialog  = (props:any) => {
const [visi, setvisi] = useState(false);


useEffect(() => {
          if(props.isit){
            console.log("data Changed");
                    setvisi(true)
          }else{
            setvisi(false)
          }
}, [props.isit])

          return (
                    <>
                  {visi?   <div className="dialog_div">
                            <div className='dialog_div_indiv'>
                              <div className="dialog_info">
                                        <h3 style={{paddingLeft:"3%",color:'red',borderBottom:"1px solid red"}}>{props.movien}</h3>
                                        <p style={{margin:'0',color:'white'}}>Lorem ipsum dolor sit amet consectetur.</p>
                                        <p style={{fontSize:'0.7rem',color:'gray'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ipsam harum accusantium iusto molestiae nulla facere aperiam quisquam earum animi!</p>
                                                   <button className='btnlist'>Play</button>
                                                  <button className='btnlist'>My List</button>
                            </div>
                              <img src={props.data} alt="Movie Image" />
                          <span className="exit" onClick={()=>{
                            props.isitClosed()
                          }}>x</span>
                            </div>
                          
                           </div>
:<div>
          </div>}
                                      </>
          )
}

export default Dialog
