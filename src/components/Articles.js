import React from 'react';
import ReadArticle from './ReadArticle';

function Articles({ articles }) {
    return (
        <div key={articles._id}>
            {articles.map((article) => <ReadArticle article={article} />)}
        </div>
    );
}





export default Articles;