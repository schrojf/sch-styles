import type { Meta } from '@storybook/html-vite';

const meta = {
    title: 'Designs/Simple Styles/Containers',
    parameters: {
        layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded' | 'none';
    },
} satisfies Meta;

export default meta;

export const Container = () => `
    <div>
        <h1 class="my-2.5 text-4xl">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="my-3.5">Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>

    <div class="flow-root px-4">
        <h1 class="my-2.5 text-4xl">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="my-3.5">Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>
`;

export const ContainerPadding = () => `
    <div class="flow-root px-4 bg-blue-500 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
`;

export const Header = () => `
    <header class="flow-root px-4 bg-teal-600 text-white">
      <h1 class="my-2.5 text-4xl font-sans font-medium">Header</h1>
    </header>
`;

export const HeaderPage = () => `
    <header class="flow-root px-4 bg-teal-600 text-white">
      <h1 class="my-2.5 text-4xl">Header</h1>
    </header>

    <div class="flow-root px-4">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>
`;

export const HeaderAndText = () => `
    <div class="flow-root px-4 bg-blue-500 text-white">
        <h1 class="my-2.5 text-4xl font-medium">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="my-3.5">Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>
`;

export const Sections = () => `
    <div class="flow-root px-4">
        <h1 class="my-2.5 text-3xl">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr>
    </div>

    <article class="flow-root px-4">
        <h1 class="my-2.5 text-3xl">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr>
    </article>

    <section class="flow-root px-4">
        <h1 class="my-2.5 text-3xl">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr>
    </section>
`;

export const Page = () => `
    <header class="flow-root px-4 bg-teal-600 text-white">
        <h1 class="my-2.5 text-4xl">Header</h1>
    </header>

    <img src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">

    <article class="flow-root px-4">
        <p class="my-3.5">Photo by <a class="underline" href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Markus Spiske</a> on <a class="underline" href="https://unsplash.com/photos/white-bmw-m-3-coupe-8aF7KHNrHpU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a></p>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </article>

    <footer class="flow-root px-4 bg-teal-600 text-white">
        <h5 class="my-2.5 text-lg">Footer</h5>
    </footer>
`;

export const PageSM = () => `
    <section class="max-w-screen-sm mx-auto sm:border sm:border-zinc-300">
        <header class="flow-root px-4 bg-teal-600 text-white">
            <h1 class="my-2.5 text-4xl">Header</h1>
        </header>

        <img src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">

        <article class="flow-root px-4">
            <p class="my-3.5">Photo by <a class="underline hover:no-underline" onclick="return false;" href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Markus Spiske</a> on <a class="underline hover:no-underline" onclick="return false;" href="https://unsplash.com/photos/white-bmw-m-3-coupe-8aF7KHNrHpU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a></p>
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
        </article>

        <footer class="flow-root px-4 bg-teal-600 text-white">
            <h5 class="my-2.5 text-lg">Footer</h5>
        </footer>
    </section>
`;
