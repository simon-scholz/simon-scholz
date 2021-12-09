import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        background: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.white : theme.colors.black};
        --bg: ${({theme}) => theme.themeLabel === "light" ? theme.colors.white : theme.colors.black};
        --bg-level1: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.white : theme.colors.darkGrey};
        --bg-level2: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.white : theme.colors.grey};
        --bg-level3: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.white : theme.colors.slate};

        --border-level1: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.snowDark : theme.colors.grey};
        --border-level2: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.snowDark : theme.colors.slate};
        --border-level3: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.snowDark : theme.colors.concrete};

        --text: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.black : theme.colors.snowDark};
        --text-label: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.grey : theme.colors.smokeDark};
        --text-heading: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.darkGrey : theme.colors.smoke};
        /* --text-secondary: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.black : theme.colors.snowDark}; */

        --text-link: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.black : theme.colors.snowDark};
        
        --primary: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.purple : theme.colorsDark.purple};
        --primary-dark: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.purpleDark : theme.colorsDark.purpleDark};
        --primary-hover: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.purpleDark : theme.colorsDark.purpleLight};

        --primary-low-opacity: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.purpleLowOpacity : theme.colorsDark.purpleLowOpacity};

        --input-bg: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.snowDark : theme.colors.black};
        --input-bg-hover: ${({ theme }) => theme.themeLabel === "light" ? theme.colors.snowDarker : theme.colors.black};
        
    }


    html { font-family: "Inter", "system-ui"; }

    @supports (font-variation-settings: normal) {
    html { font-family: "Inter var", "system-ui"; }
    }
    

    @font-face {
        font-family: "JetBrains Mono";
        src: url("/fonts/JetBrains-Mono/JetBrainsMono-Regular.woff2");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
   
    body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    }

    * {
    box-sizing: border-box;
    }

    img {
    max-width: 100%;
    display: block;
    }
`;

export default GlobalStyle;