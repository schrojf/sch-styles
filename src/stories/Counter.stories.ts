import type {Meta, StoryObj} from "@storybook/html-vite";
import typescriptLogo from '../typescript.svg'
import viteLogo from '/vite.svg'
import {setupCounter} from "../counter.ts";

const meta = {
    title: 'Example/Counter',
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'dark',
                    value: '#242424',
                },
                {
                    name: 'light',
                    value: '#ffffff',
                },
            ],
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
    render: () => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'bg-gray-300 py-2 px-4 font-medium cursor-pointer rounded-lg border border-transparent hover:border-gray-800 transition-colors focus:outline-none focus:shadow-outline focus:border-blue-300';

        setupCounter(btn);

        return btn;
    },
    parameters: {
        layout: 'centered',
        backgrounds: {default: 'dark'},
    },
};

export const Page = () => {
    const div = document.createElement('div');
    div.className = 'flex m-0 place-items-center min-h-screen min-w-20';
    div.innerHTML = `
        <div class="container text-center mx-auto p-8">
            <a href="https://vitejs.dev" class="font-medium text-purple-600 hover:text-purple-800" target="_blank">
                <img src="${viteLogo}" class="inline h-24 m-6 transition-shadow hover:drop-shadow-2xl" alt="Vite logo" />
            </a>
            <a href="https://www.typescriptlang.org/" class="font-medium text-purple-600 hover:text-purple-800" target="_blank">
                <img src="${typescriptLogo}" class="inline h-24 m-6 transition-shadow hover:drop-shadow-2xl" alt="TypeScript logo" />
            </a>
            <h1 class="text-5xl leading-tight">Vite + TypeScript</h1>
            <div class="p-4">
                <button id="counter" type="button" class="bg-gray-300 py-2 px-4 font-medium cursor-pointer rounded-lg border border-transparent hover:border-purple-800 transition-colors focus:outline-black"></button>
            </div>
            <p class="text-gray-600">
                Click on the Vite and TypeScript logos to learn more
            </p>
        </div>
`;

    setupCounter(div.querySelector<HTMLButtonElement>('#counter')!);

    return div;
};
