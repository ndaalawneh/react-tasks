
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom" ;
import axios from "axios";
import './movie.css' ;


export default function Movie(){
const {id} = useParams()  ;
const [movie , setMovie]=useState({});


useEffect(()=>{
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page=1`).
    then((res)=>
    setMovie(res.data)) ;
 
});

    return(
    //    <div>
    //    <h3>
    //    Movie
    //    </h3>
    //    <p>this is movie page  </p>
    //   <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    //    <h1>{movie.title}</h1>
    //    <h2>{movie.overview}</h2>
    //    </div>
 
<>
  
<h1>Movie details</h1>




<div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>{movie.title}</h1>
				<div className="card_cat">
					<p className="PG">{movie.vote_average}</p>
					<p className="year">{movie.release_date}</p>
					<p className="genre"> </p>
					<p className="time">2h 28m</p>
				</div>
				<p className="disc">{movie.overview}</p>
				<a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
			<div className="social-btn">
     
				<button>
					<i className="fas fa-play"></i> SEE TRAILER
				</button>
			
				<button>
					<i className="fas fa-download"></i> DOWNLOAD
				</button>
			
				<button>
					<i className="fas fa-thumbs-up"></i> 97%
				</button>
			
			
			</div>	
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
				<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
				</div>
				<div className="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" target="_blank">
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
	</div>







</>


  );
}

