import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Designs/Simple Styles/Inputs',
    parameters: {
        layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded' | 'none';
    },
} satisfies Meta;

export default meta;
// type Story = StoryObj<typeof meta>;

export const Simple = () => `
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Inputs</h3>
        <input type="text" class="inline-block p-2 align-middle border-b border-zinc-300" placeholder="Enter name...">
        <button type="button" class="inline-block px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none cursor-pointer normal-case bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    </div>
`;
