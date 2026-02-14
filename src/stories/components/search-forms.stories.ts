import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Components/Search forms',
    parameters: {
        layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded' | 'none';
    },
} satisfies Meta;

export default meta;

export const Empty = () => `
    <div class="p-4 max-w-xl mx-auto">
        <div class="relative">
            <label for="search" class="sr-only">Query</label>
            <input id="search" class="block w-full py-2 pl-2 pr-12 border border-neutral-400 rounded bg-neutral-100 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-neutral-700 focus:ring-4 focus:ring-amber-200" type="text" placeholder="Search...">
            <div class="flex absolute right-0 inset-y-0 p-[1px]">
                <button type="button" class="p-2 rounded-r text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-amber-200 focus:text-neutral-900" aria-label="Submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;

export const Empty2 = () => `
    <div class="p-4 my-4 mx-4 sm:max-w-xl sm:mx-auto border rounded-2xl">
        <h1 class="mb-4 pb-2 text-2xl tracking-tight border-b">Search form</h1>
        <div class="relative">
            <label for="search" class="sr-only">Query</label>
            <input id="search" class="block w-full py-2 pl-2 pr-12 border border-neutral-400 rounded bg-neutral-100 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-neutral-700 focus:ring-4 focus:ring-amber-200" type="text" placeholder="Search...">
            <div class="flex absolute right-0 inset-y-0 ">
                <button type="button" class="p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none focus:ring-4 focus:ring-amber-200 focus:text-neutral-900" aria-label="Submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;
