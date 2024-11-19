import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent'

const DishDetail = (props) => {
    if(props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        )
    }
    else if(props.errMess)
    {
        return(
            <div className="container">
                <div></div>
            </div>
        )
    }
}

class DishDetail extends Component {

    render(){
        const dish = this.props.dish.map((dish) => {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    });

    return(
        <div className="row">
            {dish}
        </div>
    );
}
}

export default DishDetail