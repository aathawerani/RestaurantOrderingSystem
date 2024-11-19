import { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
      }

      toggleNav()
      {
        this.setState({
            isNavOpen: !this.state.isNavOpen
          }
        )
      }

      render(){
    
        return (
            <div>
                <Navbar >
                <div className='container'>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand href='/'>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen}>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/aboutus">About us</NavLink>
                        <NavLink className="nav-link" to="/menu">Menu</NavLink>
                        <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </div>
                </Navbar>
            </div>
        );
    }    
}

export default Header