import React from "react";
import { Badge } from "reactstrap";



const ApiUsed = (props) => {
  return (
    <div id="Apiused">
      <div className="main_Api">

        TrendingMovies :{" "}
        <Badge
          href="https://developers.themoviedb.org/3/movies/get-popular-movies"
          color="light"
        >
          https://developers.themoviedb.org/3/movies/get-popular-movies
          </Badge>


          UpcommingMovies :{" "}
        <Badge href="https://www.themoviedb.org/movie/upcoming" color="light">
          https://www.themoviedb.org/movie/upcoming
          </Badge>


          NowPLayingMovies :{" "}
        <Badge
          href="https://www.themoviedb.org/movie/now-playing"
          color="light"
        >
          https://www.themoviedb.org/movie/now-playing
          </Badge>


          TopRatedMovies :{" "}
        <Badge
          href="https://www.themoviedb.org/movie/top-rated"
          color="light"
        >
          https://www.themoviedb.org/movie/top-rated
          </Badge>

      </div>
    </div>
  );
};

export default ApiUsed;