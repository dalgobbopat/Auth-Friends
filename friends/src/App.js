import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import"./App.css"
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import DeleteFriend from './components/DeleteFriend';
import Home from './components/Home';

class App extends React.Component {

    constructor() {
        super();
        this.state = { credentials: {} }
    }

    render() {
        return (
            <div className="Container">
                <Router>
                    <div className="Nav">
                        <Link to='/Home'><p>Home</p></Link>
                        <Link to='/login'><p>Login</p></Link>
                        <Link to='/friends-list'><p>View Friends</p></Link> 
                        <Link to='/add-friend'><p>Add Friends</p></Link>   
                        <Link to='/delete-friend'><p>Delete Friends</p></Link>   
                        <h1 className='title'> Friend Finder</h1>   
                      
                    </div>

                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path='/home' component={Home} />
                        <PrivateRoute exact path='/friends-list' component={FriendsList} />
                        <PrivateRoute exact path='/add-friend' component={AddFriend} />
                        <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
                    </Switch>

                </Router>
            </div>
        )
    }

}

export default App; 
