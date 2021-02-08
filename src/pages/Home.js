import React from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../config'
import MovieCard from '../components/MovieCard'
import ImageCarousel from '../components/Carousel'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Home = () => {

    const [trendings, setTrendings] = React.useState([])
    const [playingNow, setPlayingNow] = React.useState([])
    const [topRated, setTopRated] = React.useState([])

    React.useEffect(() => {
        getTrendingMovies();
        getPlayingNowMovies();
        getTopRated()
    }, [])

    const getTrendingMovies = async () => {
        const res = await axios.get(`${BASE_URL}/trending/movie/week`, { params: { api_key: API_KEY } })

        setTrendings(res.data.results)
    }

    const getPlayingNowMovies = () => {
        axios.get(`${BASE_URL}/movie/now_playing`, { params: { api_key: API_KEY } }).then(res => {
            setPlayingNow(res.data.results.splice(0, 6));
        }).catch(err => {
            console.log(err)
        })
    }

    const getTopRated = () => {
        axios.get(`${BASE_URL}/movie/top_rated`, { params: { api_key: API_KEY } }).then(res => {
            setTopRated(res.data.results)
        })
    }

    return (

        <div>


            <div className="movie_carousel">
                <ImageCarousel movies={playingNow} />
            </div>
            <div className="container-fluid">
                <div className="mt-2 text-light card bg-info p-2">
                    <h3>Now Playing</h3>
                </div>
                <div className="row">
                    {
                        playingNow.map(movie => {
                            return <div className="col-md-2"><MovieCard movie={movie} /></div>
                        })
                    }
                </div>
                <div className="mt-2 text-light card bg-info p-2">
                    <h3>Trending Now</h3>
                </div>
                <div className="row">
                    {
                        trendings.map(movie => {
                            return <div className="col-md-2"><MovieCard movie={movie} /></div>
                        })
                    }
                </div>
                <div className="mt-2 text-light card bg-info p-2">
                    <h3>Top Rated</h3>
                </div>
                <div className="row">
                    {
                        topRated.map(movie => {
                            return <div className="col-md-2"><MovieCard movie={movie} /></div>
                        })
                    }
                </div>

            </div>
        </div >
    )
}

export default Home 