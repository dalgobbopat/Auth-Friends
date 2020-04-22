import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component{

    constructor(){
        super();
        this.state = { friends: [], }
    }

    componentDidMount() {
        this.getFriendsList();
    }

    getFriendsList = () => {
         axiosWithAuth().get("/api/friends")
        .then(res => {
            console.log("Successfully got friends",res);
            this.setState({ friends: res.data});
           
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    render(){
        return(
            <div className="FriendsList">
                <h2>Friend List</h2>
                <div className="ListOfFriends">
                    {this.state.friends.map(friend => 
                        <div key={friend.id}>
                            <h4>{`ID: ${friend.id}`}</h4>
                            <h4>{`${friend.age} years old`}</h4>
                            <h4>{`${friend.email}`}</h4>
                        </div>)
                    }
                </div>
            </div>
        )
    }

}


export default FriendsList 