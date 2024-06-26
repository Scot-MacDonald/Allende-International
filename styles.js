import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --bg: #141414;
  --text: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg);
  color: var(--text);
}

  body {
    margin: auto;
    
    place-items: center;
    min-height: 100vh;
    
  }

  button {
    appearance: none;
    border: none;
    background: var(--color-water-10);
    font-size: larger;
    padding: 0.5rem 1rem;
    margin: .5rem 0;
    box-shadow: 0px 1px 5px -2px var(--color-granite);
  } 

  a {
    text-decoration: none;
   
    color: inherit;
    border: none;
    
  } 

  a:visited {
    color: inherit;
  }


 


  

  


`;
