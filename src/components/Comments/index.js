import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import {formatDistanceToNow} from 'date-fns'

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

const comentsList = []

class Comments extends Component {
  state = {
    comentsList: comentsList,
    count: 0,
    name: '',
    comment: '',
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment, count} = this.state

    const initialBgColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComent = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      bgColor: initialBgColorClassName,
    }

    this.setState(prevState => ({
      comentsList: [...comentsList, newComent],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      comentsList: prevState.commentList.filter(eachone => {
        if (id !== eachone.id) {
          return [...comentsList, eachone]
        }
      }),
    }))
  }

  onClickLikeBtn = id => {
    this.setState(prevState => ({
      comentsList: prevState.comentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onClickName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onClickComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {count, name, comment} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1>Comments</h1>
          <p className="about">Say something about 4.0 Technologies</p>
          <div className="align-row">
            <form onSubmit={this.onSubmitComment}>
              <input
                onChange={this.onClickName}
                className="input1"
                type="search"
                placeholder="Your Name"
              />
              <input
                onChange={this.onClickComment}
                className="input2"
                type="textarea"
                placeholder="Comment"
              />
              <button type="submit">Add Comment</button>
            </form>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr />
        <div className="row-align">
          <p className="count-style">{count}</p>
          <p> Comments</p>
          <ul>
            {comentsList.map(eachComent => (
              <CommentItem
                details={eachComent}
                key={eachComent.id}
                onClickLikeBtn={this.onClickLikeBtn}
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
