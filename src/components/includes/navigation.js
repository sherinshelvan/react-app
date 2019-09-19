import React from 'react';
import { NavLink} from 'react-router-dom';
class Home extends React.Component {
  render() {
    return (
      <div className="navigation">
       <nav>
		    <div className="nav-wrapper">
		    	<NavLink exact activeClassName="active" className="brand-logo" to="/">Logo</NavLink>
		      <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
		      <ul className="right hide-on-med-and-down">
		        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
		        <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
		        <li>
		        	<a href="#!" className="dropdown-trigger" data-target="sub_users">
		      			Users
		      			<i className="material-icons right">arrow_drop_down</i>
		      		</a>
		      		<ul id="sub_users" className="dropdown-content">
							  <li><NavLink activeClassName="active" to="/users/One">One</NavLink></li>
							  <li><NavLink activeClassName="active" to="/users/Two">Two</NavLink></li>
							  <li><NavLink activeClassName="active" to="/users/Three">Three</NavLink></li>
							</ul>
		      	</li>
		      	<li><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
		      	
    
		      </ul>
		    </div>
		  </nav>

		  <ul className="sidenav" id="mobile-demo">
		    <li><a href="sass.html">Sass</a></li>
		    <li><a href="badges.html">Components</a></li>
		    <li><a href="collapsible.html">Javascript</a></li>
		    <li><a href="mobile.html">Mobile</a></li>
		  </ul>
      </div>
    )
  }
}
export default Home