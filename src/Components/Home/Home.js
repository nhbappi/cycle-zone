import React from 'react';
import { Row } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';

import Header from '../Header/Header';
import Item from '../Item/Item';

const Home = () => {
    const [items] = useItems();
    
    return (
        <div>
            <Header></Header>

            <div>
            <div className="">
        <div className="">
        <h1 className="d-flex justify-content-center text-light">New Arrival Items</h1>
        </div>
             <div className="m-5 courseCard">
       <Row xs={1} md={3} className="gaps">


 {
     items.slice(0,6).map(item => <Item
     key={item.id}
     item={item}>

     </Item>)
 }
 </Row>
</div>
    </div>
        </div>
            
        </div>
    );
};

export default Home;