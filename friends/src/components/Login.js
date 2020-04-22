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
        <div className='navbody'>
            <div className="LoginPage">
                <h2 className='loghead'>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className='user' name="username" placeholder="Username" onChange={this.handleChange}/> <br/>
                    <input className='pass' type = "password"name="password" placeholder="Password" onChange={this.handleChange}/> <br/>
                    <button className='log'>Login</button>
                </form>
                
            </div>
        </div>
        )
    }
}

export default Login