import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Designs/Simple Styles/Buttons',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta;

export default meta;

export const Simple = () => `
    <button type="button" class="inline-block px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none cursor-pointer normal-case bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    <a href="#" onclick="return false;" class="inline-block px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</a>
    <div role="button" class="inline-block px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</div>
    <input type="button" class="cursor-pointer px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950" value="Button">
`;

export const ButtonColors = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Black</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-amber-100 text-zinc-950 hover:bg-zinc-300 hover:text-zinc-950">Amber</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Red</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-purple-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Purple</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-cyan-300 text-zinc-950 hover:bg-zinc-300 hover:text-zinc-950">Cyan</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-blue-400 text-white hover:bg-zinc-300 hover:text-zinc-950">Blue</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-indigo-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Indigo</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Green</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Teal</button>
    </div>
`;

export const HoverColors = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-white hover:text-zinc-950">White</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-red-500 hover:text-white">Red</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-purple-600 hover:text-white">Purple</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-cyan-300 hover:text-zinc-950">Cyan</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-blue-400 hover:text-white">Blue</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-green-500 hover:text-white">Green</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-teal-600 hover:text-white">Teal</button>
    </div>
`;

export const ButtonShapes = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-none">Normal</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-s">Rounded S</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded">Rounded</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-sm">Rounded SM</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-md">Rounded MD</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-lg">Rounded LG</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-xl">Rounded XL</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-2xl">Rounded 2XL</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-3xl">Rounded 3XL</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">Rounded FULL</button>
    </div>
`;

export const ButtonSizes = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-xs">text-xs</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-sm">text-sm</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-base">text-base</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-lg">text-lg</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-xl">text-xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-2xl">text-2xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-3xl">text-3xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-4xl hidden">text-4xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-5xl hidden">text-5xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-6xl hidden">text-6xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-7xl hidden">text-7xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-8xl hidden">text-8xl</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 text-9xl hidden">text-9xl</button>
    </div>
`;

export const ButtonBorders = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-[calc(theme(spacing[4])-1px)] py-[calc(theme(spacing[2])-1px)] align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-950 focus:outline-none">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-950 rounded-md">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-950 rounded-lg">Button</button>
    </div>
`;

export const ButtonsWithDifferentTextEffects = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Normal</button>
        <button type="button" class="px-4 py-2 align-middle text-center font-medium whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Medium</button>
        <button type="button" class="px-4 py-2 align-middle text-center font-semibold whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Semibold</button>
        <button type="button" class="px-4 py-2 align-middle text-center font-bold whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Bold</button>
        <button type="button" class="px-4 py-2 align-middle text-center tracking-tight whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Tight</button>
        <button type="button" class="px-4 py-2 align-middle text-center tracking-wide whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Wide</button>
        <button type="button" class="px-4 py-2 align-middle text-center tracking-wider whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Wider</button>
        <button type="button" class="px-4 py-2 align-middle text-center tracking-widest whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Widest</button>
    </div>
    <div class="mt-2 flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Normal</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950"><i>Italic</i></button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950"><b>Bold</b></button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950"><strong>Bold</strong></button>
    </div>
`;

export const ButtonsWitPadding = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-2 py-1 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-6 py-3 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    </div>
`;

export const BlockButtons = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="block w-full px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="block w-full px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-teal-500 hover:text-zinc-950">Button</button>
        <button type="button" class="block w-full px-4 py-2 align-middle text-left whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="block w-1/3 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    </div>
`;

export const DisabledButtons = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950 opacity-30 cursor-not-allowed *:pointer-events-none" tabindex="-1" aria-disabled="true">Disabled</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 opacity-30 cursor-not-allowed *:pointer-events-none" tabindex="-1" aria-disabled="true">Disabled</button>
   </div>
   <div class="mt-2 flex items-center flex-wrap gap-2">
       <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950 disabled:opacity-30 disabled:cursor-not-allowed disabled:*:pointer-events-none">Button</button>
       <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950 disabled:opacity-30 disabled:cursor-not-allowed disabled:*:pointer-events-none" disabled>Disabled</button>
   </div>
   <div class="mt-2 flex items-center flex-wrap gap-2">
       <input type="button" class="cursor-pointer px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950 disabled:opacity-30 disabled:cursor-not-allowed disabled:*:pointer-events-none" value="Input Button">
       <input type="button" class="cursor-pointer px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950 disabled:opacity-30 disabled:cursor-not-allowed disabled:*:pointer-events-none" value="Disabled" disabled>
   </div>
   <div class="mt-2 flex items-center flex-wrap gap-2">
       <a href="#" onclick="return false;" class="inline-block px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Link Button</a>
       <a href="#" onclick="return false;" class="inline-block px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950 opacity-30 cursor-not-allowed *:pointer-events-none" tabindex="-1" aria-disabled="true">Disabled</a>
   </div>
`;

export const ButtonBars = () => `
    <div class="flex gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Black</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Teal</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Red</button>
    </div>
    <div class="mt-2 flex">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Black</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Teal</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Red</button>
    </div>
    <div class="mt-2 flex justify-center">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Black</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Teal</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Red</button>
    </div>
    <div class="mt-2 inline-flex">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Black</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Teal</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Red</button>
    </div>
    <div class="mt-2 inline-flex">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Black</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Teal</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Red</button>
    </div>
    <div class="mt-2 flex">
        <button type="button" class="flex-1 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Black</button>
        <button type="button" class="flex-1 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-teal-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Teal</button>
        <button type="button" class="flex-1 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Red</button>
    </div>
`;

export const NavigationBars = () => `
    <div class="flex flex-wrap bg-zinc-950">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    </div>
    <div class="mt-3 flex flex-wrap bg-green-600">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    </div>
    <div class="mt-3 flex flex-wrap bg-red-500">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-red-500 text-white hover:bg-zinc-300 hover:text-zinc-950">Button</button>
    </div>
    <div class="mt-3 flex flex-wrap bg-white border border-zinc-300">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 hover:bg-zinc-300">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 hover:bg-zinc-300">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 hover:bg-zinc-300">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-white text-zinc-950 hover:bg-zinc-300">Button</button>
    </div>
`;

export const LeftAndRightButtons = () => `
    <div class="flex justify-between bg-zinc-950">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Left</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">Right</button>
    </div>
    <div class="mt-3 flex justify-between">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-200 text-zinc-950 hover:bg-zinc-300 hover:text-zinc-950">« Previous</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-zinc-300 hover:text-zinc-950">Next »</button>
    </div>
`;

export const ButtonsWithRippleEffects = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 active:transition-opacity active:opacity-50">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 active:transition-opacity active:duration-0 active:opacity-50">Button</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 active:opacity-50">Button</button>
    </div>
`;

export const DivElementButton = () => `
    <div class="inline-block max-w-xs">
        <div role="button" class="inline-block align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 active:opacity-50">
            <img src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
            <p class="px-4 py-2">Lotus Esprit Turbo S3 2.2</p>
        </div>
    </div>
    <div class="inline-block max-w-xs">
        <button type="button" class="inline-block align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 active:opacity-50">
            <img src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
            <p class="px-4 py-2">Lotus Esprit Turbo S3 2.2</p>
        </button>
    </div>
`;

export const CircularButtons = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="flex items-center justify-center w-12 h-12 text-2xl align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="flex items-center justify-center w-10 h-10 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="flex items-center justify-center w-6 h-6 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
    </div>
    <div class="mt-2 flex items-center flex-wrap gap-2">
        <button type="button" class="w-12 h-12 px-4 py-2 text-2xl align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="w-10 h-10 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="w-6 h-6 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
    </div>
    <div class="mt-2 flex items-center flex-wrap gap-2">
        <button type="button" class="flex items-center justify-center w-12 h-12 px-4 py-2 text-2xl align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="flex items-center justify-center px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="flex items-center justify-center w-10 h-10 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="flex items-center justify-center w-6 h-6 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
        <button type="button" class="flex items-center justify-center w-3 h-3 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 rounded-full">+</button>
    </div>
`;

export const SquareButtons = () => `
    <div class="flex items-center flex-wrap gap-2">
        <button type="button" class="flex items-center justify-center w-12 h-12 text-2xl align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
        <button type="button" class="flex items-center justify-center w-10 h-10 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
        <button type="button" class="flex items-center justify-center w-6 h-6 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
    </div>
    <div class="mt-2 flex items-center flex-wrap gap-2">
        <button type="button" class="px-4 py-2 text-2xl align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
        <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
    </div>
    <div class="mt-2 flex items-center flex-wrap gap-2">
        <button type="button" class="flex items-center justify-center w-12 h-12 px-4 py-2 text-2xl align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
        <button type="button" class="flex items-center justify-center w-10 h-10 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
        <button type="button" class="flex items-center justify-center w-6 h-6 px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">+</button>
    </div>
`;
