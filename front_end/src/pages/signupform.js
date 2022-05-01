import {Component} from 'react';
import axios from 'axios';
import classes from "./signup.module.css"


export default class Signupform extends Component{



constructor(props) {
  super(props)

  this.onChangeFirstName= this.onChangeFirstName.bind(this);
  this.onChangeLastName= this.onChangeLastName.bind(this);
  this.onChangeUserName = this.onChangeUserName.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangePassWord = this.onChangePassWord.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
      firstname: '',
      lastname:'',
      username:'',
      email: '',
      password:''

  }
}
onChangePassWord(e) {
  this.setState({ password: e.target.value })
}


onChangeUserName(e) {
  this.setState({ username: e.target.value })
}

onChangeEmail(e) {
  this.setState({ email: e.target.value })
}

onChangeFirstName(e) {
  this.setState({ firstname: e.target.value })
}
onChangeLastName(e) {
  this.setState({ lastname: e.target.value })
}

onSubmit(e) {
  e.preventDefault()

  const RealateUser = {
      
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    username: this.state.username,
    password: this.state.password,
      email: this.state.email
  };

  axios.post('http://localhost:8080/api/v1/registration/signup', RealateUser)
      .then((res) => {
          console.log(res.data)

      }).catch((error) => {
          console.log(error)
      });

  this.setState({
  firstname: '',
  lastname:'',
  username:'',
  email: '',
  password:''
  })
}


render() {
  return (
      <div className={classes.main}>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label >Firstname</label>
                  <input  type="text" value={this.state.firstname} onChange={this.onChangeFirstName} className={["form-control",classes.feild1]} />
              </div>
              <div className="form-group">
                  <label>Lastname</label>
                  <input type="text"  value={this.state.lastname} onChange={this.onChangeLastName} className={["form-control",classes.feild2]}/>
              </div>
              <div className="form-group">
                  <label>Username</label>
                  <input type="text"  value={this.state.username} onChange={this.onChangeUserName} className={["form-control",classes.feild3]} />
              </div>
              <div className="form-group">
                  <label>Email</label>
                  <input type="text"  value={this.state.email} onChange={this.onChangeEmail} className={["form-control",classes.feild4]} />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="text"  value={this.state.password} onChange={this.onChangePassWord} className={["form-control",classes.feild5]} />
              </div>
              <div className="form-group">
                  <input type="submit" value="Register" className="btn btn-success btn-block" />
              </div>
          </form>
      </div>
  )
}

}

