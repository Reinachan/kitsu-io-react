import React from 'react'
import styled from 'styled-components'

type BannerProps = {
  url: any,
  className: string
}

export default function BannerImage(props: BannerProps) {

  const Banner:any = styled.div`
		position: relative;

		background-size: cover;
    background-position: center center;

		&::before {
			content: '';
			height: 200px;
			width: 100%;
			position: absolute;
			bottom: 0;

			background: linear-gradient(0deg, #161116ff 0%, #16111600 100%);
		}
  `

  return (
      <Banner className={props.className} style={{ backgroundImage: `url(${props.url})`}} />
  )
}
