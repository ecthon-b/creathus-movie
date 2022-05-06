import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --blue: #263470;
    --orange: #F3722D;

    --title: #27272A;
    --text: #71717A;
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
    font-family: 'Rajdhani';
    font-weight: 700;
}

button {
    cursor: pointer;
}
`
