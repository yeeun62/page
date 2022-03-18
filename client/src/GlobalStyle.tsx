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
<<<<<<< HEAD
	font-style: unset;
	text-decoration: unset;
=======
    font-style: unset;
    text-decoration: unset;
>>>>>>> e270a35c3152464144dd65fbea44747cda21d022
}

body,
input,
textarea {
<<<<<<< HEAD
	font-family: 'GmarketSansLight', 'Noto Sans TC', sans-serif;
}

li{
=======
    font-family: 'GmarketSansLight', 'Noto Sans TC', sans-serif;
}

*{
>>>>>>> e270a35c3152464144dd65fbea44747cda21d022
  list-style: none;
}

button{
<<<<<<< HEAD
	cursor: pointer;
=======
  cursor: pointer;
>>>>>>> e270a35c3152464144dd65fbea44747cda21d022
  border: none;
}
`;
