import React from 'react'
import { from } from 'rxjs'
import { useObservable } from 'rxjs-hooks';
import { switchMap, shareReplay, map } from 'rxjs/operators';
import './posts.css'

const query = `
query {
  findProfileBySlug(slug: "Reinachan") {
    about
    name
    posts (first: 5) {
      nodes {
        author {name}
        createdAt
        content
        id
        comments (first: 5) {
          nodes {
            author {
              ...user
            }
            content
            likes (first: 10) {
              totalCount
            }
            replies (first: 5) {
              nodes {
                author {
                  ...user
                }
                content
                likes (first: 10) {
             		 	totalCount
            		}
              }
            }
          }
        }
      }
    }
  }
}

fragment user on Profile {
  name
  avatarImage {
    views {
      name,
      url
    }
  }
}
`;

const url = 'https://kitsu.io/api/graphql'
const	options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				query: query
			})
		};

const profile = from( // turn promise into observable
    fetch(url, options)
  )
  .pipe(  // pipe lets us do some operations on the observable here we tell it to map the response async to the json and then just share whatever we got
    switchMap(response => from(response.json())),
    map(json => json.data.findProfileBySlug),
    shareReplay() // if we dont share here it would issue a new request to the kitsu api each time you would subscribe
  );

export default function Posts() {
    const p = useObservable(() => profile);

    return (
        <>
        <div className="posts-list">
        {
          (p != null)
          ? p.posts.nodes.map(x => (
              <div key={x.id} className="post-with-content">
                <a src={x.author}/>
                <div className="poster-user">{x.author.name}</div>
                <div classname="post-content">{x.content}</div>
              </div>
            ))
          : <div> Loading </div>
        }
        </div>
        </>
    )
}
