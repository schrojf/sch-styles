import type { Meta } from '@storybook/html';

const meta = {
    title: 'Designs/Simple Styles/Panels',
    parameters: {
        layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded' | 'none';
    },
} satisfies Meta;

export default meta;

export const Panel = () => `
    <div class="flow-root px-4 my-4 bg-red-500 text-white">
        <p class="my-3.5">I am a panel.</p>
    </div>
    <div class="flow-root px-4 my-4 bg-green-500 text-white">
        <p class="my-3.5">I am a panel.</p>
    </div>

    <div class="flow-root px-4 bg-red-500 text-white">
        <p class="my-3.5">I am a container.</p>
    </div>
    <div class="flow-root px-4 bg-green-500 text-white">
        <p class="my-3.5">I am a container.</p>
    </div>
`;

export const PanelForNote = () => `
    <div class="flow-root px-4 my-4 bg-emerald-100 text-emerald-950">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
    </div>
`;

export const PanelForQuote = () => `
    <div class="flow-root px-4 my-4 border-l-[6px] border-gray-300 bg-yellow-50 text-3xl font-serif">
        <p class="my-3.5"><i>"Make it as simple as possible, but not simpler."</i></p>
    </div>
`;

export const Alert = () => `
    <div class="flow-root px-4 my-4 bg-red-500 text-white">
        <h3 class="my-2.5 text-2xl">Danger!</h3>
        <p class="my-3.5">Red often indicates a dangerous or negative situation.</p>
    </div>
`;

export const Card = () => `
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white shadow-xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
`;

export const Rounded = () => `
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white rounded-2xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
`;

export const Closable = () => {
    const content = document.createElement('div');

    content.innerHTML = `
        <div class="flex justify-between items-start px-4 my-4 bg-red-500 text-white">
            <p class="my-3.5">Click on<br>the X<br>to close<br>this panel.</p>
            <button id="closeBtn" class="p-2 mt-4 flex items-center justify-center select-none bg-red-500 hover:bg-red-600 text-white hover:text-zinc-100 rounded-full" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    `;

    content
        .querySelector('#closeBtn')!
        .addEventListener('click', function (e: Event) {
            const panel = (e.currentTarget as HTMLButtonElement)
                .parentElement as HTMLDivElement;
            panel.style.display = 'none';
            setTimeout(() => (panel.style.display = ''), 1000);
        });

    return content;
};

export const Showable = () => {
    const content = document.createElement('div');

    content.innerHTML = `
        <button id="openBtn" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-green-700">Show panel</button>

        <div id="panel" class="hidden flex justify-between items-start px-4 my-4 bg-green-600 text-white">
            <p class="my-3.5">Click on the X<br>to close this panel.</p>
            <button id="closeBtn" class="p-2 mt-4 flex items-center justify-center select-none bg-green-600 hover:bg-green-700 text-white hover:text-zinc-100 rounded-full" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    `;

    content.querySelector('#openBtn')!.addEventListener('click', function () {
        content.querySelector('#panel')!.classList.remove('hidden');
    });

    content.querySelector('#closeBtn')!.addEventListener('click', function () {
        content.querySelector('#panel')!.classList.add('hidden');
    });

    return content;
};
