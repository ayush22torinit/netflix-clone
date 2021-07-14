import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Cards.scss'


const Cards = ( props:any) => {

const [arrayhook, setarrayhook] = useState([])
const [moviename, setmoviename] = useState([]);
const API_KEY = 'api_key=6aca97d69be3c690dbad4a7606dc2bb7';
const BASE_URL = 'https://api.themoviedb.org/3';
const url = BASE_URL+`/discover/movie?sort_by=${props.movietype}.desc&`+API_KEY;
const path = 'https://image.tmdb.org/t/p/w500';

useEffect(() => {
    
  
    getMovies(url);

    function getMovies(url:any){
      fetch(url).then((res)=>res.json()).then((data)=>{
            let array:any = [];
            let name:any = [];
            data.results.forEach((element:any , i:any) => {
              array[i] = element.poster_path
              name[i] = element.original_title;
              console.log(name);
              
            });
            setmoviename(name)
            console.log("8888888 "+moviename);
            
            setarrayhook(array); 
      })
    }
    
   
  }, [])  
  
  
  // console.log(imgarray);
   

          const settings = {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "50px",
                    slidesToShow: 5,
                    speed: 500
                  };
          return (
                    <div className="big_div">
                          <div>
        <h5 className="movie_type_Name">{props.title}</h5>
        <Slider {...settings}>
          {arrayhook.map((data , i)=>{    
            return(
               
        <div className="card_div" key={i}>
        <div className="inner_slider_div">
          {console.log(" -- - -"+data)}
               <img src={'https://image.tmdb.org/t/p/w500'+data} onClick={()=>{
                 {console.log("===========> "+moviename[i])
                 }
           props.clicked('https://image.tmdb.org/t/p/w500'+data , data,moviename[i]);
            }} alt="MovieImage" />
      </div>
</div>
            )
          })}

        </Slider>
      </div>     
                    </div>
          )
}

export default Cards
