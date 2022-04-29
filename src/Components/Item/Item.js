import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Item.css'

const Item = ({item}) => {
    const  {name, image, description, price } = item;
    return (
        <div>
            <Col className="">
        <Card className="courseCard m-3 p-2 border-0" >
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title><h3 className="ms-3">{name}</h3></Card.Title>
                <Card.Text className="ms-3 text-secondary">
                    {description}
                </Card.Text>
            </Card.Body>

            <div className="d-flex justify-content-between">
            <div>
            <Card.Text className="ms-3"><h4 className="ms-3">Price: ${price}</h4></Card.Text>

            </div>
            <div className="me-3">
              {/* <Link to={`/booking/${id}`}> */}
              <button className="btn btn-primary rounded text-white">BUY NOW</button>
              {/* </Link> */}
            </div>
            </div>
            
        </Card>
        </Col>
        </div>
    );
};

export default Item;