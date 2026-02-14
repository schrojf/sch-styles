import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Playground/Layouts',
    parameters: {
        layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded' | 'none';
    },
} satisfies Meta;

export default meta;

export const TopnavAndTwoPanelContent = () => `
    <div class="absolute top-0 h-12 w-full min-w-96 bg-slate-200 overflow-hidden border-b border-slate-300">
        <div class="flex justify-between px-4 py-2 h-full">
            <img src="logoipsum-254.svg" alt="Logo ipsum">
            <button class="flex gap-1 justify-center items-center px-2 py-1 text-sm border border-slate-700 hover:border-transparent hover:bg-slate-300 text-slate-700 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div>Sign in</div>
            </button>
        </div>
    </div>
    <div class="absolute top-12 bottom-0 w-full min-w-96 h-auto bg-slate-100 overflow-hidden">
        <div class="flex px-2 py-4 h-full">
            <div class="text-center mx-2 w-1/2 bg-white border border-slate-300 shadow-sm overflow-auto">1/2</div>
            <div class="text-center mx-2 w-1/2 bg-white border border-slate-300 shadow-sm overflow-auto">
                ${'.<br>'.repeat(40)}
            </div>
        </div>
    </div>
`;

export const HeaderEqualColumnsAndFooter = () => `
    <div class="flex flex-col min-h-dvh bg-stone-100 text-stone-950">
        <header class="p-[30px]">
          <h2 class="text-center text-[35px] font-bold">Header</h2>
        </header>
        <main class="flex-1 flex flex-col sm:flex-row">
          <section class="flex-1 p-2.5 bg-stone-400">Column #1</section>
          <section class="flex-1 p-2.5 bg-stone-300">Column #2</section>
          <section class="flex-1 p-2.5 bg-stone-200">Column #3</section>
        </main>
        <footer>
          <p class="p-2.5 text-center">Footer</p>
        </footer>
    </div>
`;

export const HeaderUnequalColumnsAndFooter = () => `
    <div class="flex flex-col min-h-dvh bg-stone-100 text-stone-950">
        <header class="p-8">
          <h2 class="text-center text-4xl font-bold">Header</h2>
        </header>
        <main class="flex-1 flex flex-col sm:flex-row">
          <aside class="flex-1 p-2.5 bg-stone-400">Column #1</aside>
          <section class="flex-[2] p-2.5 bg-stone-300">Column #2</section>
          <aside class="flex-1 p-2.5 bg-stone-200">Column #3</aside>
        </main>
        <footer>
          <p class="p-2.5 text-center">Footer</p>
        </footer>
    </div>
`;

export const TopnavAndContentAndFooter = () => `
    <div class="flex flex-col min-h-dvh text-stone-950">
        <nav class="flex bg-stone-700 overflow-hidden">
          <a class="block py-3.5 px-4 text-center text-white hover:bg-stone-300 hover:text-stone-950" href="#">Link</a>
          <a class="block py-3.5 px-4 text-center text-white hover:bg-stone-300 hover:text-stone-950" href="#">Link</a>
          <a class="block py-3.5 px-4 text-center text-white hover:bg-stone-300 hover:text-stone-950" href="#">Link</a>
        </nav>
        <main class="flex-1 p-2.5 bg-stone-300">
          <h2 class="my-2.5 text-3xl font-bold">CSS Template</h2>
          <p class="my-3.5">A topnav, content and a footer.</p>
        </main>
        <footer class="p-2.5 bg-stone-100">
          <p class="my-3.5">Footer</p>
        </footer>
    </div>
`;

export const SidenavAndContent = () => `
    <div>
        <nav class="fixed z-10 top-0 left-0 h-full w-60 bg-gray-950 overflow-x-hidden">
            <div class="p-4 mb-4 bg-red-500">
                <img class="w-full" src="logoipsum-372.svg" alt="Logoipsum">
            </div>
            <a class="block p-4 font-medium hover:bg-gray-200 hover:text-gray-950 text-gray-50" href="#">Link</a>
            <a class="block p-4 font-medium hover:bg-gray-200 hover:text-gray-950 text-gray-50" href="#">Link</a>
            <a class="block p-4 font-medium hover:bg-gray-200 hover:text-gray-950 text-gray-50" href="#">Link</a>
        </nav>
        <section class="ml-60 pl-5">
            <h2 class="my-2.5 text-3xl font-bold">CSS Template</h2>
            <p class="my-3.5">A full-height, fixed sidenav and content.</p>
        </section>
    </div>
`;
