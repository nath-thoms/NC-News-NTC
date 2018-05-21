import React from 'react';
import { Link } from 'react-router-dom';

function TopicArticles({ match, articles }) {
    console.log(articles)
    return (
        <div>

            {articles.filter(article => article.belongs_to === match.params.topics).map(article =>

                <div className="article-card">
                    <div class="col s12 m7">
                        <div class="card horizontal">
                            <div class="card-image">
                                <img src="http://lorempixel.com/output/cats-h-c-169-170-7.jpg" alt="placeholder" />
                            </div>
                            <div class="card-stacked">
                                <div className="card-title">
                                    {article.title}
                                </div>
                                <div class="card-content">
                                    <p>{Array.from(article.body).slice(0, 400).join('') + '...'}</p>
                                </div>
                                <div class="card-action">
                                    <Link to={`/articles/${article._id}`}> Read </Link>
                                    <a class="waves-effect waves-light btn-small"><i class="material-icons left">mood</i>Like</a>
                                    <a class="waves-effect waves-light btn-small"><i class="material-icons left">mood_bad</i>Dislike</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            )
            }




        </div>
    )
}



export default TopicArticles;