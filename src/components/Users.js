import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends Component {
    state = {
        users: []
    }


    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        let url = "https://northcoders-news-api.herokuapp.com/api/users";
        axios.get(url)
            .then(res => {
                this.setState({
                    users: res.data.users
                })
            })
    }

    render() {
        console.log(this.state)
        return (

            <div className="users-page">

                {this.state.users.map(user => {
                    return (

                        <div>
                            <div className="user-card">
                                <div className="col s4 m7">
                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img src={user.avatar_url} alt="user icon" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-title">
                                                {user.username}
                                            </div>
                                            <div className="card-content">
                                                <p>{user.name}</p>
                                            </div>
                                            <div className="card-action">
                                                <Link to={"/home"} onClick={() => this.props.loginFunc(user.username)} className="waves-effect waves-light btn-small"><i className="material-icons left">assignment_ind</i>Login</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    )
                })}

            </div>
        )
    }

}

export default Users;