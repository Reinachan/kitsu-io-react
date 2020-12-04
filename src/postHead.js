import React from 'react'
import './scss/postHead.scss'

export default function PostHead(props) {
  console.log(props.user);
  return (
      <div className="post-head">
        <img src={props.user.avatarImage?.views[3].url}></img>
        <a href={"https://www.kitsu.io/users/" + props.user.slug}>@{props.user.slug}</a>
        <h2>{props.user.name}</h2>
        <p>{props.date?.toLocaleString()}</p>
      </div>
  )
}