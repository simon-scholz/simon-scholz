import 'styled-components';

interface IColors {
    black: string
    white: string
    snow: string
    snowDark: string
    snowDarker: string
    smoke: string
    smokeDark: string
    smokeDarker: string
    darkGrey: string
    grey: string
    slate: string
    concrete: string
    silver: string
    
    blue: string
    blueDark: string

    purpleLight: string
    purple: string,
    purpleDark: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: string[]
        space: string[]
        fontSizes: string[]
        fonts: {
            body: string
            monospace: string
        }
        fontWeights: {
            body: number
            subheading: number
            link: number
            bold: number
            heading: number
        }
        lineHeights: {
            body: number,
            bodyLong: number,
            heading: number,
            code: number,
        },
        shadows: {
            default: string
            hover: string
            active: string
            button: string
            lightFromBelow: string
            largeHover: string
            list: string
            listHover: string
        },
        animations: {
            default: string
            hover: string
            active: string
        }
        colors: IColors
    }
}