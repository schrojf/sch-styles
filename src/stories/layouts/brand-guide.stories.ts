import type { Meta } from '@storybook/html';

const meta = {
    title: 'Layouts/Brand Guide',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const Empty = () => `
    <div id="app" class="antialiased">
        <header class="sm:ml-72 fixed z-30 top-0 w-full flex h-14 p-2 shadow-md bg-white lg:hidden">
            <button class="block p-2 text-zinc-400 hover:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
                <svg class="h-6 w-6 fill-current hidden" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                </svg>
            </button>
        </header>
        <button class="fixed z-20 inset-0 bg-zinc-900/50 sm:hidden" tabindex="-1"></button>
        <nav class="mt-14 z-20 sm:mt-0 fixed inset-y-0 w-full max-w-64 sm:max-w-72 bg-zinc-100 lg:border-r-2 lg:border-zinc-300 overflow-y-auto">
            <div class="h-[1000px] w-8 mx-auto rounded-2xl my-4 bg-zinc-200"></div>
        </nav>
        <main class="sm:ml-72 mt-14 lg:mt-0">
            <div class="flow-root">
                <div class="h-[1500px] w-8 mx-auto rounded-2xl my-4 bg-zinc-200"></div>
            </div>
        </main>
    </div>
`;

export const Intro = () => `
<div id="app" class="antialiased">
        <header class="sm:ml-72 fixed z-30 top-0 w-full flex h-14 p-2 shadow-md bg-white lg:hidden">
            <button class="block p-2 text-zinc-400 hover:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
                <svg class="h-6 w-6 fill-current hidden" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                </svg>
            </button>
        </header>
        <button class="fixed z-20 inset-0 bg-zinc-900/50 sm:hidden" tabindex="-1"></button>
        <nav class="mt-14 z-20 sm:mt-0 fixed inset-y-0 w-full max-w-64 sm:max-w-72 bg-zinc-100 lg:border-r lg:border-zinc-300 overflow-y-auto">
            <div class="flex py-16 px-8">
                <img class="w-full" src="/logoipsum-289.svg" alt="Logo ipsum">
            </div>
            <ul class="mb-16 border-b border-zinc-300">
                <li class="border-t border-zinc-300">
                    <a class="flex items-center justify-between p-4 font-semibold text-zinc-500 hover:text-zinc-600" href="#" onclick="return false;">
                        <span>Welcome</span>
                        <svg class="w-4 h-4 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                    <ul class="py-1 bg-zinc-200/35 border-t border-zinc-300">
                        <li><a class="block py-3 pl-6 pr-4 font-medium text-sm text-zinc-950 hover:text-zinc-600" href="#" onclick="return false;">Introduction</a></li>
                        <li><a class="block py-3 pl-6 pr-4 font-medium text-sm text-zinc-500 hover:text-zinc-600" href="#" onclick="return false;">Introduction</a></li>
                        <li><a class="block py-3 pl-6 pr-4 font-medium text-sm text-zinc-500 hover:text-zinc-600" href="#" onclick="return false;">Introduction</a></li>
                        <li><a class="block py-3 pl-6 pr-4 font-medium text-sm text-zinc-500 hover:text-zinc-600 truncate" href="#" onclick="return false;">Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word in the English language.</a></li>
                    </ul>
                </li>
                <li class="border-t border-zinc-300">
                    <a class="flex items-center justify-between p-4 font-semibold text-zinc-500 hover:text-zinc-600" href="#" onclick="return false;">
                        <span>Components</span>
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                </li>
                <li class="border-t border-zinc-300">
                    <a class="flex items-center justify-between p-4 font-semibold text-zinc-500 hover:text-zinc-600" href="#" onclick="return false;">
                        <span class="truncate">Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word in the English language.</span>
                        <svg class="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                </li>
                <li class="border-t border-zinc-300">
                    <a class="flex items-center justify-between p-4 font-semibold text-zinc-500 hover:text-zinc-600" href="#" onclick="return false;">
                        <span class="break-all">Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word in the English language.</span>
                        <svg class="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
        <main class="sm:ml-72 mt-14 lg:mt-0 px-2 sm:px-4">
            <div class="flow-root max-w-3xl mx-auto lg:my-16">
                <h1 class="mt-4 mb-6 text-2xl sm:text-3xl tracking-wide text-zinc-950">Introduction</h1>
                <p class="my-3 text-lg text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem lectus, pulvinar a porta eu, volutpat a est. Donec at lobortis leo. Nulla libero lectus, tincidunt malesuada pharetra a, dignissim nec risus. Nam tincidunt bibendum ex, ut malesuada eros cursus ac. Ut eget ante nec tortor faucibus tempus. Cras ornare nulla vel est imperdiet sodales. In ornare nunc ac quam tempus luctus. Nulla facilisi.</p>
                <p class="my-3 text-lg text-zinc-500">Aliquam molestie quam nec odio accumsan, sed efficitur massa euismod. Aliquam ac dui diam. Sed lectus libero, faucibus nec quam sit amet, aliquam sagittis odio. Vestibulum vel magna leo. Sed mauris metus, ultrices vitae nisi aliquet, venenatis sollicitudin nulla. Vestibulum quis varius lacus. Duis eu ligula velit. Quisque venenatis nunc vitae ante vulputate, a hendrerit arcu vulputate. Pellentesque consequat urna eu mi rhoncus lobortis. Maecenas ac justo purus. Phasellus leo dui, pretium eget molestie quis, semper pretium sapien.</p>
                <p class="my-3 text-lg text-zinc-500">Maecenas vel hendrerit libero. Sed metus quam, tristique ac eros eu, semper egestas lectus. Proin vel maximus eros. Vestibulum a est molestie, cursus enim at, sodales neque. Mauris et orci leo. Pellentesque lectus mauris, vehicula rhoncus fermentum eu, tempor at lacus. Integer aliquam sem justo, id tincidunt metus placerat sit amet. Curabitur nulla justo, mattis maximus hendrerit a, sagittis nec purus. Nulla facilisi. Aliquam tincidunt ornare ex, a dignissim purus pharetra quis. Cras gravida lectus neque, at semper sapien sodales at.</p>
                <button class="flex mt-6 mb-4 px-4 py-2.5 rounded-lg bg-orange-500 text-white font-medium border border-orange-600 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2">Continue</button>
            </div>
        </main>
    </div>
`;

export const Components = () => `
    <div id="app" class="antialiased">
        <header class="sm:ml-72 fixed z-30 top-0 w-full flex h-14 p-2 shadow-md bg-white lg:hidden">
            <button class="block p-2 text-zinc-400 hover:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
                <svg class="h-6 w-6 fill-current hidden" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                </svg>
            </button>
        </header>
        <button class="fixed z-20 inset-0 bg-zinc-900/50 sm:hidden" tabindex="-1"></button>
        <nav class="mt-14 z-20 sm:mt-0 fixed inset-y-0 w-full max-w-64 sm:max-w-72 bg-zinc-100 lg:border-r-2 lg:border-zinc-300 overflow-y-auto">
            <div class="h-[1000px] w-8 mx-auto rounded-2xl my-4 bg-zinc-200"></div>
        </nav>
        <main class="sm:ml-72 mt-14 lg:mt-0">
            <div class="flow-root max-w-3xl mx-auto lg:my-16">
                <h1 class="mt-4 mb-6 text-2xl sm:text-3xl tracking-wide text-zinc-950">Components</h1>
                <div class="" style="max-width: 512px;">
                    <iframe class="w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10" srcdoc="<h1>Hello from another world.</h1>"></iframe>
                </div>
                <div class="" style="max-width: 512px;">
                    <iframe class="w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10" src="http://localhost:6006/iframe.html?args=&id=components-buttons--simple&viewMode=story"></iframe>
                </div>
            </div>
        </main>
    </div>
`;
