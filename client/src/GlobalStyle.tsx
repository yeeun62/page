import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* { 
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: #707070
}

a:link, a:visited, a:active, a:hover {
    font-style: unset;
    text-decoration: unset;
}

body,
input,
textarea {
    font-family: 'GmarketSansLight', 'Noto Sans TC', sans-serif;
}

*{
  list-style: none;
}

button{
  cursor: pointer;
  border: none;
}
`;
