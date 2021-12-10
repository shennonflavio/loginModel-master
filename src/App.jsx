import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from  'axios';

class App extends Component{
  constructor(){
    super()
    this.state={
      fullName:'',
      userName:'',
      email:'',
      password:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(e){
    this.setState({
      fullName:e.target.value
    })
  }
  changeUserName(e){
    this.setState({
      userName:e.target.value
    })
  }
  changeEmail(e){
    this.setState({
      email:e.target.value
    })
  }
  changePassword(e){
    this.setState({
      password:e.target.value
    })
  }


  onSubmit(e){
    e.preventDefault()
    const registered ={
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:5000/app/signup', registered)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

    this.setState({
        fullName:'',
      userName:'',
      email:'',
      password:''
    })
  }




  render(){
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input className="form-control form-group" type="text" name="" placeholder="Full Name" id="" onChange={this.changeFullName} value={this.state.fullName}/>
              <input className="form-control form-group" type="text" name="" placeholder="User Name" id="" onChange={this.changeUserName} value={this.state.userName}/>
              <input className="form-control form-group" type="email" name="" placeholder="Email" id="" onChange={this.changeEmail} value={this.state.email}/>
              <input className="form-control form-group" type="password" name="" placeholder="password" id="" onChange={this.changePassword} value={this.state.password}/>
              <input type="submit" value="submit" className="btn btn-danger btn-block" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;