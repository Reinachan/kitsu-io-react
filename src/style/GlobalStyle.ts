import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --base-font: 'Open Sans', sans-serif;

  // Major Elements Colour
  --background-colour: #161116;
  --post-background-colour: #433443;
  --poster-username-foreground-colour: #524052;
  --comment-background: #1a141a;
  --comment-foreground: #312831;
  --reply-foreground: #241c24;
  --user-profile-nav: #302632;
  --card-foreground: #312631;

  // Navbar Colours
  --sidebar: #312631;

  // Text Colours
  --primary-text: #fff;
  --highlighted-text: #ff8d78;
  --grayed-out-text: #c3c3c3;
  --tag-divider: #312631;
  }

  * {
	  box-sizing: border-box;
  }
  body {
    background: var(--background-colour);
    color: white;
    font-family: var(--base-font);
    margin: 0;
  }
  a {
    margin: 0;
    font-size: 0.7rem;
    color: var(--highlighted-text);
  }

`;

export default GlobalStyle;
