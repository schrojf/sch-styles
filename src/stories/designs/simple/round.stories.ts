import type { Meta } from '@storybook/html';

const meta = {
    title: 'Designs/Simple Styles/Round',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const Display = () => `
    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">Round Panels</h2>

        <div class="flow-root px-4 my-4 rounded-sm bg-teal-600 text-white">
            <p class="my-3.5">rounded-sm (2px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded bg-teal-600 text-white">
            <p class="my-3.5">rounded (4px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-md bg-teal-600 text-white">
            <p class="my-3.5">rounded-md (6px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-lg bg-teal-600 text-white">
            <p class="my-3.5">rounded-lg (8px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-xl (12px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-2xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-2xl (16px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-3xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-3xl (24px)</p>
        </div>
    </div>
`;

export const CircleImage = () => `
    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">An image as a circle (rounded-full)</h2>
        <img class="rounded-full max-w-80" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
    </div>

    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">An image as a circle (rounded-[50%])</h2>
        <img class="rounded-[50%] max-w-80" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
    </div>
`;

export const CircleText = () => `
    <div class="py-8 rounded-[50%] text-center bg-red-500 text-white">
        <h1 class="my-2.5 text-4xl font-medium">Text inside a circle</h1>
    </div>
`;

export const CircleInsideCircle = () => `
    <div class="md:flex">
        <div class="md:w-1/2">
            <div class="flow-root px-4">
                <h2 class="my-2.5 text-3xl font-normal">A Circle image in a Circle</h2>
                <div class="py-8 rounded-[50%] bg-green-600">
                    <img class="rounded-[50%] w-3/4" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
                </div>
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="flow-root px-4">
                <h2 class="my-2.5 text-3xl font-normal">A Circle with text in a Circle</h2>
                <div class="py-8 rounded-[50%] bg-green-600 text-white">
                    <div class="py-8 w-[55%] rounded-[50%] text-center bg-red-500">
                        <p class="my-3.5 text-xl font-medium">Hello<br>W3.Tailwind!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
