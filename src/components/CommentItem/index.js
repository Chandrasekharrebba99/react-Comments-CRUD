// Write your code here
import './index.css'

const CommentItem = props => {
  const {arr, onLikeComment, onDelete} = props
  const {name, comment, islike, id, lasttime} = arr

  const onLikeChange = () => {
    onLikeComment(id)
  }
  const onDeleteitem = () => {
    onDelete(id)
  }

  return (
    <li className="listCard">
      <div className="rowel">
        <p className="firstletter">{name.slice(0, 1)}</p>
        <p>{name}</p>
        <p className="time"> {lasttime}</p>
      </div>
      <div className="comment">
        <p>{comment}</p>
      </div>

      <div className="colmitem">
        {islike ? (
          <button type="button" onClick={onLikeChange}>
            <img
              className="img2"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
            />
          </button>
        ) : (
          <button type="button" onClick={onLikeChange}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          </button>
        )}
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="img2"
            onClick={onDeleteitem}
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
