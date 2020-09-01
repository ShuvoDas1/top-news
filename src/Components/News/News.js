import React from 'react';
import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    console.log(props);
    const {title,description,urlToImage} = props.news;
    
    return (
        <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <div>
                            <img src={urlToImage} style={{width:'250px'}} alt=""/>
                        </div>
                        <div>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </div>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default News;