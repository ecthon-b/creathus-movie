import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F0F7;
    --blue: #263470;
    --orange: #F3722D;
    --orange-hover: #F0671D;
    --green: #04D361;

    --title: #27272A;
    --text: #71717A;
    --text-label: #9C98A6;
    
    --shape: #FAFAFC;
    --border: #E6E6F0;
    --border-hover: #EBEBF5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size: 16px (Desktop)
html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px 16*0,9375=15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
}

button {
    cursor: pointer;
}
`
