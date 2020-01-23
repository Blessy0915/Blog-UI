import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function Posts(props)
{
    return(
            <div className = "container offset col-md-6">
                <h3 className = "text-center"> Listing Posts </h3>
                <ul className="list-group">
                    {
                        props.posts.map((post)=>
                        {
                            return(
                                <li className ="list-group-item list-group-item-success" key = {post.id}><Link to = {`/posts/${post.id}`}>{post.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
    )
}
const mapStateToProps = (state) =>
{
    return({
        posts : state.posts
    })
}
export default connect(mapStateToProps)(Posts)