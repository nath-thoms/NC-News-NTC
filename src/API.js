import axios from 'axios'
const url = "https://northcoders-news-api.herokuapp.com/api/"

export const getAllArticles = () => {
    return axios.get(`${url}/articles`)
        .then(res => res.data.articles)
}

export const getArticleComments = (article_Id) => {
    return axios.get(`${url}/articles/${article_Id}/comments`)
        .then(res => res.data.comments)
}
