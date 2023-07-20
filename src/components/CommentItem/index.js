import './index.css'

const CommentItem = props => {
  const {details, onClickLikeBtn, onDelete} = props
  const {id, name, comment, isLiked, date, initialBgColorClassName} = details

  const onClickDelete = () => {
    onDelete(id)
  }

  const onlike = () => {
    onClickLikeBtn(id)
  }

  const like = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <p className="bg-profile">{name[0]}</p>
      <div>
        <p>{name}</p>
        <p>{date}</p>
      </div>
      <p>{comment}</p>
      <div>
        <button onClick={onlike}>
          <img src={like} alt={like} />
        </button>
        <button type="button" onClick={onClickDelete}>
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
