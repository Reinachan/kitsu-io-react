import React from 'react'
import './scss/postHead.scss'

export default function PostHead(props) {
  console.log(props.user);
  return (
      <div className="head">
        <img src={props.user.avatarImage?.views[1].url}></img>
        <a href={props.user.url}>@{props.user.slug}</a>
        <p>{props.user.name}</p>
        <p>{props.date?.toLocaleString()}</p>
      </div>
  )
}