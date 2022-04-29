import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items] = useItems();

    return (
        <div>
            <div className="back">
        <div className="new-pro">
        <h1 className="d-flex justify-content-center text-light">New Arrival Items</h1>
        </div>
             <div className="m-5 courseCard">
       <Row xs={1} md={3} className="gaps">


 {
     items.map(item => <Item
     key={item.id}
     item={item}>

     </Item>)
 }
 </Row>
</div>
    </div>
        </div>
    );
};

export default Items;