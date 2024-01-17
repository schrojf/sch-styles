import type {Preview} from "@storybook/html";
import {withThemeByClassName} from '@storybook/addon-themes';
// import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/main.css';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators = [
    withThemeByClassName({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
    }),
];

// export const decorators = [
//     withThemeByDataAttribute({
//         themes: {
//             light: 'light',
//             dark: 'dark',
//         },
//         defaultTheme: 'light',
//         attributeName: 'data-mode',
//     }),
// ];

export default preview;
