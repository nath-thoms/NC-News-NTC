import React from 'react';
import { Link } from 'react-router-dom';

function ReadArticle({ match, article }) {
    return (
        <div>
            <div className="article-card">
                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="http://lorempixel.com/output/cats-h-c-169-170-7.jpg" alt="placeholder img" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-title">
                                {article.title}
                            </div>
                            <div className="card-content">
                                <p>{Array.from(article.body).slice(0, 400).join('') + '...'}</p>
                            </div>
                            <div className="card-action">
                                <Link to={`/articles/${article._id}`}> Read </Link>
                                <a className="waves-effect waves-light btn-small"><i className="material-icons left">mood</i>Like</a>
                                <a className="waves-effect waves-light btn-small"><i className="material-icons left">mood_bad</i>Dislike</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}







export default ReadArticle;