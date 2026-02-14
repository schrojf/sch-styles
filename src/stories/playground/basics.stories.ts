import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Playground/Basics',
    parameters: {
        layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded' | 'none';
    },
} satisfies Meta;

export default meta;

export const Empty = () => ``;

export const HelloWorld = () => `
    <h1 class="text-4xl font-bold text-center text-blue-500">Hello world!</h1>
`;
