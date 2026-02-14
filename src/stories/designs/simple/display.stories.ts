import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Designs/Simple Styles/Display',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta;

export default meta;

export const DisplayPositions = () => `
    <div class="relative bg-green-600 text-white h-[300px]">
        <div class="absolute left-0 top-0">Top Left</div>
        <div class="absolute right-0 top-0">Top Right</div>
        <div class="absolute left-0 bottom-0">Bottom Left</div>
        <div class="absolute right-0 bottom-0">Bottom Right</div>
        <div class="absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`;

export const DisplayPositionsPadded = () => `
    <div class="relative bg-green-600 text-white h-[300px]">
        <div class="px-4 py-2 absolute left-0 top-0">Top Left</div>
        <div class="px-4 py-2 absolute right-0 top-0">Top Right</div>
        <div class="px-4 py-2 absolute left-0 bottom-0">Bottom Left</div>
        <div class="px-4 py-2 absolute right-0 bottom-0">Bottom Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="px-4 py-2 absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="px-4 py-2 absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="px-4 py-2 absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`;

export const TextOverlayOnImage = () => `
    <div class="relative text-white">
        <img src="marc-wieland-trnTvywx2Rg-unsplash.jpg" alt="Lights" class="w-full">
        <div class="px-4 py-2 absolute left-0 top-0">Top Left</div>
        <div class="px-4 py-2 absolute right-0 top-0">Top Right</div>
        <div class="px-4 py-2 absolute left-0 bottom-0">Bottom Left</div>
        <div class="px-4 py-2 absolute right-0 bottom-0">Bottom Right</div>
        <div class="px-4 py-2 absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="px-4 py-2 absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="px-4 py-2 absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="px-4 py-2 absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`;

export const DisplayHover = () => `
    <div class="group relative bg-zinc-200 h-[300px]">
        <div class="hidden group-hover:block absolute left-0 top-0">Top Left</div>
        <div class="hidden group-hover:block absolute right-0 top-0">Top Right</div>
        <div class="hidden group-hover:block absolute left-0 bottom-0">Bottom Left</div>
        <div class="hidden group-hover:block absolute right-0 bottom-0">Bottom Right</div>
        <div class="hidden group-hover:block absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="hidden group-hover:block absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Mouse over this box!</div>
        <div class="hidden group-hover:block absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="hidden group-hover:block absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`;

export const HoverWithOpacity = () => `
    <div class="group relative inline-block hover:opacity-60">
        <img src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Avatar" class="max-w-xs">
        <div class="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">John Doe</button>
        </div>
    </div>
`;

export const FloatClasses = () => `
    <div class="w-full overflow-hidden bg-zinc-200">
        <div class="float-left bg-red-500 text-white px-4 py-2">float-left</div>
        <div class="float-right bg-blue-500 text-white px-4 py-2">float-right</div>
    </div>
`;

export const ShowHide = () => `
    <p class="block">I am shown (display: block).</p>
    <p class="hidden">I am hidden (display: none).</p>
`;

export const MobileResponsiveButton = () => `
    <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 max-sm:block max-sm:w-full">Link</button>
`;

export const FlagDesign = () => `
    <div class="relative shadow-lg w-[350px] h-[200px]">
        <div class="bg-red-500 absolute left-0 top-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 top-0 w-3/5 h-2/5"></div>
        <div class="bg-red-500 absolute left-0 bottom-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 bottom-0 w-3/5 h-2/5"></div>
    </div>
`;
