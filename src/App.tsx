import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarC from './Component/Navbar/NavbarC';
import Cards from './Component/Cards/Cards';
import Dialog from './Component/Dialog/Dialog';
import { useState } from 'react';




function App() {
  const [clicked, setclicked] = useState(false)
  const [dialogimage, setdialogimage] = useState('')
  const [moviename, setmoviename] = useState('')

  const movieClicked = (e:any,mpath:any,name:any)=>{
    setclicked(true)
    setdialogimage(e);
    setmoviename(name)
    
  }
  const movieClosed = (e1:any)=>{
    console.log("closed ");
    setclicked(false)
  }
  const diclicked = (path:any,moviename:any)=>{
    console.log(path);
    setclicked(true)    
    setdialogimage(path)
    setmoviename(moviename)

  }
  
  return (
   <>
      <NavbarC dialogclick = {diclicked} />
      <Cards clicked={movieClicked} title={'Popular'} movietype={"popularity"}/>
      <Cards clicked={movieClicked} title={'Most Revenue'} movietype={"revenue"}/>
      <Cards clicked={movieClicked} title={'Most Famous'} movietype={"vote_count"} />
      <Dialog isit={clicked} isitClosed={movieClosed} data={dialogimage} movien={moviename}/>

   </>
  );
}

export default App;
