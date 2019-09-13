import React from 'react'
import { Route, NavLink} from 'react-router-dom'
const User = ({ match }) => <p>Current Selection : {match.params.id}</p>
class Users extends React.Component {
  render() {
    
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        
        <ul>
			<li>
				<NavLink exact activeClassName="active" to="/users/One">User One</NavLink>
			</li>
         	<li>
				<NavLink exact activeClassName="active" to="/users/Two">User Two</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="active" to="/users/Three">User Three</NavLink>
			</li>
        </ul>
        <Route path="/users/:id" component={User} />
      </div>
    )
  }
}
export default Users