import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({dish}){
    return(
        <Card>
            <Link to='/menu/${dish.id}'>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 mt-5">
                <RenderMenuItem dish={dish} ></RenderMenuItem>
            </div>
        );
    });

    return(
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='col-12'>
                <h3>Menu</h3>
                <hr/>
            </div>
            <div className="row">
                <Card list>
                    {menu}
                </Card>
            </div>
        </div>
    );

}

export default Menu;

