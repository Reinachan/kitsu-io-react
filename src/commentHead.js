import React from 'react'
import './scss/commentHead.scss'

export default function CommentHead(props) {
  console.log(props.user);
  return (
      <a  href={props.user.url} className="comment-head">
        <img src={props.user.avatarImage?.views[2].url} alt="commenter"></img>
        <a href={props.user.url}>@{props.user.slug}</a>
        <h2>{props.user.name}</h2>
        <p>{props.date?.toLocaleString()}</p>
      </a>
  )
}