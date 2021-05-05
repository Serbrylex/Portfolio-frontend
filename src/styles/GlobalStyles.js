import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    *{        
        margin: 0;
        padding: 0; 
        font-family: 'Open Sans', sans-serif;
    }    
    body{
    	width: 100%;
    	height: auto;
    }
`
