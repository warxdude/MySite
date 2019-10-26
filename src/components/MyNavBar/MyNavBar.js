import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './MyNavBar.css';
import pillImage from '../../images/pills.jpg';

let imgstyle = {
   top:"-13px",
   left:"-16px",
   position:"relative",
   height:"160px",
   width:"160px",
   margin:"0px"
}

let icon = (
  <span class="logo">
    <a href="/">
      <img src={pillImage} style={imgstyle} alt="text here" /></a>
  </span>
);


class MyNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navstyle: 'mynav fixed',
      winWidth: 0
    };
    console.log('The window width is ' + this.state.winWidth);
  }
  
  updateNavImageOnResize = () => {
      if (window.innerWidth > this.state.winWidth && this.state.navstyle === 'mynav flex') {
         this.setState({ navstyle: 'mynav fixed'});
      }
      this.setState({ winWidth: window.innerWidth });
  }
  
  componentDidMount() {
       window.addEventListener('resize', this.updateNavImageOnResize);
  }

  toggle()  {
    this.setState({
      isOpen: !this.state.isOpen,
      navstyle: (!this.state.isOpen) ? 'mynav flex' : 'mynav fixed'
    });
  }

    render() {
        return(
            <div className={this.state.navstyle}>
              <Navbar expand="md">
                <NavbarBrand >{icon}<span className="text-white display-4" style={{"text-shadow": "4px 4px #0d0c0d"}}>Cake Rx Solutions</span></NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="custom-toggler"/>
                <Collapse isOpen={this.state.isOpen} navbar >
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/components/" className="text-white" style={{"font-size":"20px"}}>Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="custom-dropdown-menu">
                          <DropdownToggle  nav caret className="text-white" style={{"font-size":"20px"}}>
                            Tools
                          </DropdownToggle>
                          <DropdownMenu right className="mydropdown">
                            <DropdownItem style={{ "color":"#2672DD", "font-weight":"bold" }}>
                              Option 1
                            </DropdownItem>
                            <DropdownItem style={{ "color":"#2672DD", "font-weight":"bold" }}>
                              Option 2
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                          <NavLink href="/components/" className="text-white" style={{"font-size":"20px"}}>Resume</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="https://github.com/reactstrap/reactstrap" className="text-white" style={{"font-size":"20px"}}>About</NavLink>
                        </NavItem>
                      </Nav>
                  </Collapse>
                </Navbar>
              </div>

        );
    }
}

export default MyNavBar;