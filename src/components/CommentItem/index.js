import './index.css'

const CommentItem = props => {
  const {details, onClickLikeBtn, onDelete} = props
  const {id, name, comment, isLiked, date, bgColor} = details

  const onClickDelete = () => {
    onDelete(id)
  }

  const onlike = () => {
    onClickLikeBtn(id)
  }

  const likeColor = isLiked ? (
    <p className="likecolor">Like</p>
  ) : (
    <p className="aljdfjfj">Like</p>
  )

  const like = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="profile">
        <div className="bg-profile">
          <p className={bgColor}>{name[0]}</p>
        </div>
        <p className="nameaa">{name}</p>
        <p className="dc">{date}</p>
      </div>
      <p className="">{comment}</p>
      <div className="bgdsls">
        <button className="like" type="button" onClick={onlike}>
          <img className="avjadslkjdsjkl" src={like} alt={like} /> {likeColor}
        </button>
        <button
          className="dell"
          data-testid="delete"
          type="button"
          onClick={onClickDelete}
        >
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
