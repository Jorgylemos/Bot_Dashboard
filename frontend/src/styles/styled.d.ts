import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        background: string;
        navbar: string;
        link: string;
        color: string;
    }
}