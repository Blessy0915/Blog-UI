import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  usersReducer  from '../reducers/users'
import  postsReducer  from '../reducers/posts'
import commentReducer from '../reducers/commentReducer'

const configureStore = () =>
{
    const store = createStore(combineReducers({
        users : usersReducer,
        posts : postsReducer,
        comments : commentReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore