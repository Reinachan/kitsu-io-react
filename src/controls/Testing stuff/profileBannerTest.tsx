import React from 'react'
import '../scss/Profiles/profile-banner.scss'

// The debounce function receives our function as a parameter
const debounce = (fn: any) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame: number;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params: any) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
	let scrolledPast
	if (window.scrollY > 100) {
		scrolledPast = "true";
	}
  document.documentElement.dataset.scroll = scrolledPast;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

export default function profileBannerTest() {
  return (
    <>
    <div className="profile-banner">
      <div className="banner-image"><div></div></div>
      <div className="profile">
        <div className="profile-grid">
          <img src="http://static4.wikia.nocookie.net/__cb20130713163131/k-on/images/4/4b/Yui_Hirasawa_new_mugshot.png" className="pfp" alt="profile"/>
          <h1 className="username">Reina</h1>
        </div>
      </div>
      <div className="top-hide"></div>
    </div>
    </>
  )
}
