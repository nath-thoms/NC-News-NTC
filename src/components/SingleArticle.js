import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Comments from './Comments';


class SingleArticle extends Component {

    state = {
        likes: 0,
        singleArticle: {},
        comments: [],
        newComment: "",
        username: "",
        currentComment: "",
        loggedIn: this.props.loggedIn

    }



    componentDidMount() {
        this.getArticle();
        this.getComments();


    }

    getArticle() {
        let url = "https://northcoders-news-api.herokuapp.com/api/articles";
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(({ articles }) => {
                this.setState({
                    singleArticle: this.getSingleArticleInformation(articles)
                })
                this.getSingleArticleInformation(articles)

            })

    }

    getComments() {
        const { article_id } = this.props.match.params
        let url = 'https://northcoders-news-api.herokuapp.com/api/articles/' + article_id + '/comments'
        axios.get(url)
            .then(res => {
                this.setState({
                    comments: res.data.comments
                })
            })
    }

    getSingleArticleInformation(articles) {
        const { article_id } = this.props.match.params
        return articles.find(article => article._id === article_id)
    }

    handleArticleVote(vote) {
        const { article_id } = this.props.match.params
        let url = 'http://northcoders-news-api.herokuapp.com/api/articles/' + article_id + '?vote='
        axios.put(url + vote)
            .then(res => {
                this.setState({
                    singleArticle: res.data
                })
            })
    }


    render() {


        return (
            <div>
                <div className="article-full">
                    <div className="col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="http://lorempixel.com/output/cats-h-c-167-170-7.jpg" alt="placeholder" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-title">
                                    {this.state.singleArticle.title}
                                </div>
                                <div className="card-content">
                                    <p>{this.state.singleArticle.body}</p>
                                    <p>Likes: {this.state.singleArticle.votes}</p>
                                </div>
                                <div className="card-action">

                                    <a onClick={() => this.handleArticleVote("up")} className="waves-effect waves-light btn-small"><i className="material-icons left">mood</i>Like</a>
                                    <a onClick={() => this.handleArticleVote("down")} className="waves-effect waves-light btn-small"><i className="material-icons left">mood_bad</i>Dislike</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Comments comments={this.state.comments} loggedIn={this.props.loggedIn} />


                </div>
            </div>
        )
    }
}

export default withRouter(SingleArticle);