import React from 'react';
import './scss/user-profile.scss';

export default function UserProfile(props) {
    let x = props.data;
    return (
        <>
            <div className="user-profile">
                <div className="profile-content">
                    <img
                        className="bell"
                        src="./bell.svg"
                        alt="bell symbol"
                    ></img>
                    <span className="name">{x.name}</span>
                    <span>View Profile</span>
                    <img src={x.avatarImage?.views[3].url} alt="profile"></img>
                </div>
                <div className="blurred"></div>
            </div>
        </>
    );
}
