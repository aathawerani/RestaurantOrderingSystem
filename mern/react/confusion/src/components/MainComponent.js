import React, { Component } from 'react';
import Home from '../components/HomeComponent';
import Menu from '../components/MenuComponent';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/HeaderComponent'
import { connect } from 'react-redux'
import { fetchDishes } from '../redux/ActionCreaters';


const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => {dispatch(fetchDishes())}
})

class Main extends Component {

  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render(){
    
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
      )
    }

  return (
    <div>
      <div>
        <Header/>
        <Routes>
          <Route path="/home" Component={HomePage}></Route>
          <Route exact path="/menu" Component={() => <Menu dishes={this.props.dishes}/>}/>
        </Routes>      
        <Navigate to="/home"/>
      </div>
    </div>
  );
}
}

export default useNavigate(connect(mapStateToProps)(Main));
