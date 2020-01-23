import axios from 'axios'

export const setComment = (comments) =>
{
    return({
        type : 'SET_COMMENT' ,
        payload : comments
    })
} 

export const startSetComment = (id) =>
{
    return (dispatch) =>
    {
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>
        {
            const comments = response.data
            dispatch(setComment(comments))
        })
    }
}