import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import"./App.css"
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import DeleteFriend from './components/DeleteFriend';
import Home from './components/Home';


  function App() {
        return (
                <Router>
                    <div className="Nav">
                     
                      <ul>
                        <li>
                           <h1 className='title'> Friend Finder</h1> 
                           </li>
                           <li>
                          <Link to='/Home'>Home</Link>
                          </li>
                          <li>
                          <Link to='/login'>Login</Link>
                          </li>
                          <li>
                          <Link to='/friends-list'>View Friends</Link> 
                          </li>
                          <li>
                          <Link to='/add-friend'>Add Friends</Link>   
                          </li>
                          <li>
                          <Link to='/delete-friend'>Delete Friends</Link>   
                          
                        </li>
                      </ul>
                    </div>
                    

                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route exact path='/home' component={Home} />
                        <PrivateRoute exact path='/friends-list' component={FriendsList} />
                        <PrivateRoute exact path='/add-friend' component={AddFriend} />
                        <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
                    </Switch>

                </Router>
           
        )
  }
//     }

// }

export default App; 
