import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const MovieCard = ({ movie }) => {
    return (
        <Card className="mt-2">
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{movie.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
}

export default MovieCard