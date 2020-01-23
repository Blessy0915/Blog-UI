import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

function UserPost(props)
{
    return(
            <div className = "container offset col-md-6">
                {
                    (props.user && props.posts) && <div>
                        <h2 className = "text-center">{props.user.name} </h2>
                        <ul className = "list-group">
                        {
                            props.posts.map((post)=>
                            {
                                return(
                                    <li className ="list-group-item list-group-item-danger" key ={post.id}><Link to = {`/posts/${post.id}`}>{post.title}</Link></li>
                            )
                        })
                    }
                    </ul>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state, props) =>
{
    const id = props.match.params.id
    return({
        user : state.users.find(user => user.id == id),
        posts : state.posts.filter(posts => posts.userId == id)
    })
}
export default connect(mapStateToProps)(UserPost)




// componentDidMount()
// {
//     axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
//     .then((response)=>
//     {
//         console.log(response.data)
//         const userId = response.data.userId
//         this.setState({userId})
        
//         const userPosts = response.data
//         this.setState({userPosts})
//     })
//     .catch((err)=>
//     {
//         console.log(err)
//     })
//     axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
//     .then((response)=>
//     {
//         const name = response.data.name
//         this.setState({name})
//     })
//     .catch((err)=>
//     {
//         console.log(err)
//     })
// }