import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Users(props)
{
    return(
            <div className = "container offset col-md-5">
                <h3 className = "text-center">Users List</h3>
                <ul class="list-group">
                    {
                        props.users.map((user)=>
                        {
                            return(
                                <li className="list-group-item list-group-item-success" key = {user.id}><Link to = {`/users/${user.id}`}>{user.name}</Link></li>
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
        users : state.users
    })   
}


export default connect(mapStateToProps)(Users)