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
            <CardBody className="image-card-body">
                <CardTitle tag="h5">{movie.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">

                    <div className="movie-class">
                        {movie.adult ? <Badge color="info">Adult</Badge> : <Badge color="info p-1">14</Badge>}
                    </div>


                </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default MovieCard