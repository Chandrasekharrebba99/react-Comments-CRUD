import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const alComments = []
class Comments extends Component {
  state = {allComments: alComments, name: '', comment: ''}

  commentUpdate = event => {
    this.setState({comment: event.target.value})
  }

  nameUpdate = event => {
    this.setState({name: event.target.value})
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      allComments: prevState.allComments.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, islike: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      allComments: prevState.allComments.filter(
        eachContact => eachContact.id !== id,
      ),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      islike: false,
      lasttime: formatDistanceToNow(new Date()),
    }
    this.setState(prevState => ({
      allComments: [...prevState.allComments, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {allComments, name, comment} = this.state

    return (
      <div className="topbg">
        <div className="inputrow">
          <div className="inputColumn">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form className="inputColumn">
              <input
                placeholder="Your Name"
                value={name}
                onChange={this.nameUpdate}
              />
              <textarea
                placeholder="Your Comment"
                rows="4"
                cols="50"
                onChange={this.commentUpdate}
                value={comment}
              />
            </form>
            <button className="count" type="submit" onClick={this.onAddComment}>
              Add comment
            </button>
          </div>
          <div className="imagebg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div className="horrizontalrow"> </div>

        <div className="leftal">
          <div className="rowClass">
            <span className="count">{allComments.length}</span>
            <p> Comments</p>
          </div>
          <ul>
            {allComments.map(arr => (
              <CommentItem
                key={arr.id}
                arr={arr}
                onLikeComment={this.onLikeComment}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
