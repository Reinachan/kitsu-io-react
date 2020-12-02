import React from 'react'
import './scss/postHead.scss'

export default function PostHead(props) {
  console.log(props.user);
  return (
      <a  href={props.user.url} className="post-head">
        <img src={props.user.avatarImage?.views[1].url}></img>
        <a src={`https://kitsu.io/users/` + props.user.slug}>@{props.user.slug}</a>
        <h2>{props.user.name}</h2>
        <p>{props.date?.toLocaleString()}</p>
      </a>
  )
}