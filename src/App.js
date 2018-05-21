import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Footer from './components/Footer';
import Users from './components/Users';
import * as API from './API'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';



class App extends Component {

  state = {
    articles: [],
    loggedIn: ""
  }


  componentDidMount() {

    API.getAllArticles()
      .then(articles => this.setState({
        articles
      }))
  }

  loginFunc = (username) => {

    this.setState({
      loggedIn: username
    })
  }

  render() {
    return (
      <Router>
        <div className="App">


          <Navbar />


          <Route exact path="/" render={props => (
            <Users {...props} loginFunc={this.loginFunc} loggedIn={this.loggedIn} />
          )} />

          <Route exact path="/home" render={() => (
            <div className="home-body">
              <Articles articles={this.state.articles} />
            </div>
          )}
          />

          <Route path="/topics/:topic" render={(props) => {
            const topic = props.match.params.topic
            const topicArticles = this.state.articles.filter(article => article.belongs_to === topic)
            return <Articles articles={topicArticles} />
          }}
          />

          <Route exact path="/articles/:article_id" render={(props) => {
            <div className="comment-box"></div>
            return <SingleArticle loggedIn={this.state.loggedIn} />
          }}
          />

          <footer>
            <Footer loggedIn={this.state.loggedIn} />
          </footer>

        </div>
      </Router>
    );
  }
}

export default withRouter(App);
