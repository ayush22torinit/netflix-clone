import React, { useState } from 'react'
import './NavbarC.scss'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import { InputBase } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      color:'white',
      border:'1px solid white',
      borderRadius:'10px'
    },
    inputsearch:{
          //     border:'1px solid white',
              color:'white',
              margin:'0',
              padding:'0',
    },
    searchicon:{
         fontSize:'2rem',
//          border:'1px solid white',
         margin:'0' ,
         padding:'0',
    },
  }),
);


const NavbarC = (props:any) => {
  const [searchitem, setsearchitem] = useState('');
  const [visible, setvisible] = useState(false)
  const [imgpatharray, setimgpatharray] = useState([])
  const [moviename, setmoviename] = useState([]);
  const API_KEY = 'api_key=6aca97d69be3c690dbad4a7606dc2bb7';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const url = BASE_URL+`/search/movie?${API_KEY}&query=${searchitem}`;
  const path = 'https://image.tmdb.org/t/p/w500';
  
  const change = (e:any)=>{
     setsearchitem(e.target.value)
     console.log(searchitem);
     setvisible(true)
     if (searchitem.length >=1) {
       console.log("now search");
     fetch(url).then((res)=>res.json()).then((data)=>{
      // setarray((prev):any=>{
      //   return [...prev,data]
      // })
      if (data) {
        let array:any = [];
        let movie:any = [];
        data.results.forEach((element:any , i:any) => {
          array[i] = element.poster_path
          movie[i] = element.original_title
        });
        setmoviename(movie)
        setimgpatharray(array);
      
        
      }
      
      // let array:any = []; 
})
}
     
    //  if (searchitem.length ===0) {
    //    console.log("Empthy");    
    //   }else{
    //   console.log("somthing");
    //  }


  }
          const classes = useStyles();
          const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 5,
            speed: 500
          };
          return (
                    <div className="banner">
                    <div className="linear_grediant_baner">
                    <div className="Navbar_div">
                         <h2 className="Netflix">NETFLIX</h2>   
                         <ul className="list_ul">
                                   <li>Home</li>
                                   <li>TV Shows</li>
                                   <li>Movies</li>
                                   <li>MyList</li>
                         </ul>
                    <div className="search_div">
                         <div className={classes.margin}>
                              <Grid container  spacing={1} alignItems="flex-end">
                                        <Grid item className="grid_items" >
                                                  <SearchIcon className={classes.searchicon} />
                                        </Grid>
                                        <Grid item className="grid_items" >
                                        <InputBase value={searchitem} onChange={change} className={classes.inputsearch}  id="input-with-icon-grid" placeholder="Search Movies" />
                                        </Grid>
                              </Grid>
                              </div>
                    </div>
                              <ul className="after_search_ul">
                                        <li>KIDS</li>
                                        <li>DVD</li>
                                        <li><NotificationsIcon /></li>
                                        <li><CallToActionIcon /></li>
                              </ul>
                    </div>
                    {!visible? <div className="info">
                             <ul>
                                       <li>
                                                 <button>Play</button>
                                       </li>
                                       <li>
                                       <button>MyList</button>
                                       </li>
                             </ul>
                             <p style={{color:'white',marginLeft:'40px'}}> Nostrum asperiores enim nihil ea blanditiis cum consequatur magni reiciendis commodi quos.</p>
                    </div>:
                    <div className="sarch_outerdiv">
                            <Slider {...settings}>
          {imgpatharray.map((data , i)=>{    
            return(
               
        <div className="card_div" key={i}>
        <div className="inner_slider_div">
          {console.log(" -- - -"+data)}
               <img src={'https://image.tmdb.org/t/p/w500'+data} onClick={()=>{
           props.dialogclick('https://image.tmdb.org/t/p/w500'+data ,moviename[i]);
            }} alt="MovieImage" />
      </div>
</div>
            )
          })}

        </Slider> 
        <span className="cancel" onClick={()=>{setvisible(false)}} >x</span>                 
                    </div>}
                   
                    </div>

                    </div>          
          )
}

export default NavbarC
