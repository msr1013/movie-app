import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge
} from 'reactstrap';
import { IMAGE_BASE_URL } from '../config'


const MovieCard = ({ movie }) => {
    return (
        <Card className="mt-2">
            <CardImg top width="100%" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{movie.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <div>
                        Vote Count : {movie.vote_count}
                    </div>
                    <div>
                        Popularity : {movie.popularity}
                    </div>
                    <div className="movie-class">
                        {movie.adult ? <Badge color="info">Adult</Badge> : <Badge color="danger p-1">HD</Badge>}
                    </div>


                </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default MovieCard