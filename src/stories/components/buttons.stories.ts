import type {Meta} from "@storybook/html";

const meta = {
    title: 'Components/Buttons',
    // render: () => createPage(),
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const Simple = () => `
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
    </button>
`;
