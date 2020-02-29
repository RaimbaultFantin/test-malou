import React from 'react';
import { Card } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Product({ name, tagline, redirectUrl, username, imgUrl }) {

    return (
        <Card style={{ width: '14rem', height: "550px" }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{name} By {username}</Card.Title>
                <Card.Text>
                    {tagline}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={redirectUrl}>see {name}</Card.Link>
            </Card.Body>
        </Card>
    )
}