import axios from "axios";

import './movielist.css' ;
import { useEffect , useState } from "react";
import {Link} from 'react-router-dom'

export default function Movies(){
const [movies , setMovies ]=useState([]);
const [Loading , setLoading]=useState(true);

useEffect(()=>{

axios('https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page=1').then((res)=>{
    setMovies(res.data.results);
    console.log(res);
    setLoading(false)

})

})
    return(
       <div>
      <h1>Our Movies</h1>
<div className="container">
{Loading?<h1>Is loading</h1>: movies.map((movie)=>(
    <>
    <Link to={`${movie.id}`}>



  


	<div className="card">
		<figure className="card__thumb">
			<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="card__image"/>
			<figcaption className="card__caption">
				<h2 className="card__title">{movie.title}</h2>
				<p className="card__snippet">{movie.overview}</p>
				<a href="" className="card__button">Read more</a>
			</figcaption>
		</figure>
	</div>
   




<p className="disclaimer">All pictures were taken from <a className="disclaimer__link" href="https://unsplash.com/" target="_blank">Unsplash.</a></p>

    </Link>
    </>

  
))}
 </div>
       </div>
    );
}