import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const MovieCard = ({ movie }) => {
    return (
        <Card className="mt-2">
            <CardImg top width="100%" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{movie.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <div>
                        Vote Count : {movie.vote_count}
                    </div>
                    <div>
                        Popularity : {movie.popularity}
                    </div>
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default MovieCard