import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Designs/Simple Styles/Borders',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta;

export default meta;

export const LeftBar = () => `
    <div class="flow-root mb-4 px-4 border-l-4 border-indigo-500">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
    <div class="flow-root mb-4 px-4 border-l-4 border-indigo-500 bg-indigo-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
    <div class="flow-root mb-4 px-4 border-l-8 border-indigo-500 bg-indigo-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
`;

export const TobAndBottomBar = () => `
    <div class="flow-root px-4 border-y-4 border-red-500 bg-red-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
`;

export const HoverBorder = () => `
    <div class="flow-root mb-4 px-4 border-8 border-transparent hover:border-green-500 bg-neutral-100">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>

    <div class="flow-root mb-4 px-4 border-y-8 border-transparent hover:border-b-green-500 bg-neutral-100">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
`;
