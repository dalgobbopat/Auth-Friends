import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
   		this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }});
        console.log(this.state.credentials);
    }

    handleSubmit = e => {
    	e.preventDefault();
      

        axiosWithAuth().post('/api/login', this.state.credentials)
        .then(res => {
            
            localStorage.setItem('token', res.data.payload);
           
            
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.log(err);
          
        })

    }   

    render() {
        return (
            <div className="LoginPage">
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" placeholder="Username" onChange={this.handleChange}/>
                    <input type = "password"name="password" placeholder="Password" onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div><h3>Logging in</h3></div>}
            </div>
        )
    }
}

export default Login