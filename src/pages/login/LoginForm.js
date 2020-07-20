import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import swal from 'sweetalert';
import LandingPage from '../LandingPage';
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            messageError: "",
            homePage: false,
        }
    }

    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({ ...this.state, [name]: event.target.value })
    }

    handleSubmit = () => {
        if (this.state.email === "" && this.state.password === "") {
            this.setState({
                messageError: "email and password cant be empty !!!",
            });
        } else if (this.state.email === "") {
            this.setState({
                messageError: "email cant be empty !!!",
            });
        } else if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
            this.setState({
                messageError: "email must have @ and . !!!",
            });
        } else if (this.state.password === "") {
            this.setState({
                messageError: "password cant be empty !!!",
            });
        }
        else {
            swal("Successfully logged in !", "Go to menu page", "success")
                .then((pressOK) => {
                    if (pressOK) {
                        this.setState({
                            email: this.state.email,
                            password: this.state.password,
                            messageError: "",
                            homePage: true
                        })
                    }
                });
        }
    }


    render() {
        let errorMessage
        if (this.state.messageError !== "") {
            errorMessage =
                <div className="alert alert-danger" role="alert">
                    {this.state.messageError}
                </div>
        } else {
            errorMessage = <></>
        }
        if (this.state.homePage) {
            return (
                <LandingPage />
            )
        }
        return (
            <div>
                <div className="container float-right col-5">
                    <br /><br /><br /><br />
                    <div className="card ">
                        <div className="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <br />
                                <input className="form-control" placeholder="Email" type="text" name="email" value={this.state.name} onChange={this.handleChangeInput} />
                                <br />
                                <input className="form-control" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChangeInput} />
                                <br />
                                <br /><br />
                                {errorMessage}
                                <div className="App">
                                    <button className="btn btn-outline-primary" type="button" onClick={this.handleSubmit}>Login</button>
                                </div>
                            </form>
                            <br /><br />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default LoginForm;