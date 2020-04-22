import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component{

    constructor(){
        super();
        this.state = { friends: [], id: '', deletedFriend: ''}
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

    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/api/friends/${this.state.id}`)
        .then(res => {
            console.log(res)
            alert(`Deleted friend with id of: ${this.state.id}`);
        })
        .catch(err => console.log(err))
    }

    changeHandler = (event) => {
        this.setState( { id: event.target.value})
        console.log(this.state.id)
    }

    render(){
        return(
            <div className="FriendsList">
                <h2 className='friendhead'>Friend List</h2>
                <div className="ListOfFriends">
                    {this.state.friends.map(friend => 
                        <div className='card' key={friend.id}>
                            <h4>{`ID: ${friend.id}`}</h4>
                            <h4>{`${friend.name}`}</h4>
                            <h4>{`${friend.age} years old`}</h4>
                            <h4>{`${friend.email}`}</h4>
                            <div className="DeleteFriend">
                <h2>Delete Friend :(</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Enter an id"/>
                    <button>Delete Friend</button>
                </form>
            </div>
                          
                        </div>)
                    }
                </div>
            </div>
        )
    }

}


export default FriendsList 