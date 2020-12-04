import React from 'react'
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";
import Post from "./post";
import './scss/posts.scss'

const query = loader('./getProfileBySlug.gql');

export default function Posts(props) {
    const { data, loading } = useQuery(query,
      {
        variables: {
          "slug": props.slug
        }
      });
      console.log(data);
      
    return (
        <>
        <div className="posts-list">
        {
          (!loading)
          ? data.profile.posts.nodes.map(x => <Post data={x}/>)
          : <div className="loading-posts"></div>
        }
        </div>
        </>
    )
  }
