import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className='links'>
                    <NavLink activeClassName='selected' exact to= '/'>
                        Home
                    </NavLink>
                    <NavLink activeClassName='selected' to='/dogs'>
                        Dogs
                    </NavLink>
                    <NavLink activeClassName='selected' to='/cats'>
                        Cats
                    </NavLink>
                </div>
            </header>
        );
    }
}
 
export default Header;