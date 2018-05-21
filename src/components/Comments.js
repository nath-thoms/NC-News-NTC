import React, { Component } from 'react';
import axios from 'axios';


class Comments extends Component {

    state = {
        comments: [],
        newComment: "",
        username: "",
        currentComment: "",
    }

    handleCommentVote(comment, vote, commentCount) {
        commentCount++;
        let url = "http://northcoders-news-api.herokuapp.com/api/comments/" + comment + "?vote="
        axios.put(url + vote)
    }

    postComment = (event) => {
        if (!this.props.loggedIn) {
            event.preventDefault();
            alert('You must be logged in!')
        } else {
            event.preventDefault();
            let newComment = {
                body: this.state.newComment,
                created_by: this.props.loggedIn
            }
            let newCommentArray = this.props.comments
            newCommentArray.push(newComment)
            this.setState({
                comments: newCommentArray
            })
        }
    }

    handleComment = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }


    render() {
        return (
            <div className="commentSection">
                {this.props.comments.map(comment => {
                    return (

                        <div key={comment._id} className="row">
                            <div className="col s12 m6">
                                <div className="card red accent-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{comment.created_by}</span>
                                        <p>{comment.body}</p>
                                        <p>{comment.votes}</p>
                                    </div>
                                    <div className="card-action">
                                        <a onClick={() => this.handleCommentVote(comment._id, "up", comment.votes)} className="waves-effect waves-light btn-small white-text"><i className="material-icons left">mood</i>Like</a>
                                        <a className="waves-effect waves-light btn-small white-text"><i className="material-icons left">mood_bad</i>Dislike</a>
                                        <a className="waves-effect waves-light btn-small white-text"><i className="material-icons right">delete_forever</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}

                <div className="comment-form">
                    <div className="row">
                        <form onSubmit={this.postComment} className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea onChange={this.handleComment} id="icon_prefix2" className="materialize-textarea" placeholder="Add comment..."></textarea>
                                    <label for="icon_prefix2"></label>
                                    <button className="btn waves-effect waves-light red accent-1" type="submit" name="action">Submit
                                     <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}


export default Comments;