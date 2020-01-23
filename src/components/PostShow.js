import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startSetComment } from '../actions/comments'


class PostShow extends React.Component
{
    render()
    {
        {this.props.dispatch(startSetComment(this.props.match.params.id))}
        return(
            <div>
                {
                    (!_.isEmpty(this.props.post) && !_.isEmpty(this.props.user))  &&
                
                     
                    <div className = "container offset col-md-8">
                        <h3 className = "text-center"><u>{this.props.user.name}</u></h3>
                        <h4 className = "text-center">{this.props.post.title}</h4>
                        <h5 ><br/>{this.props.post.body}</h5>
                        <hr/>
                <h2 className = "text-center">COMMENTS</h2>
                <ul className = "container offset col-md-8list-group ">
                    {
                        this.props.comments.map((comment)=>
                        {
                            return(
                                <li className="list-group-item list-group-item-info" key = {comment.id}>{comment.body}</li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <h4><Link to = {`/users/${this.props.user.id}`}>More Post of {this.props.user.name}</Link></h4>
                    </div>
                }
                </div>

        )
    }
} 

const mapStateToProps = (state, props) =>
{
    const id = props.match.params.id
    const post = state.posts.find(post => post.id == id)
    let user
    if(post)
    {
        user = state.users.find(user => user.id == post.userId) 
    }
    return({
        post,
        user,
        comments : state.comments.filter(comment => comment.postId == id)
    })
}
export default connect(mapStateToProps)(PostShow)