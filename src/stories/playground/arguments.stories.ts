import type { Meta, StoryObj } from '@storybook/html';

const meta = {
    title: 'Playground/Arguments',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const StoryArguments: StoryObj<{
    label: string;
    featured: boolean;
    type?: 'primary' | 'secondary';
}> = {
    render: (args) => `
        <div class="max-w-full overflow-auto p-4 text-sm text-slate-600 bg-slate-50 border-l-4 border-slate-600">
            <section><figure>
                <pre><code>${JSON.stringify(args, null, 2)}</code></pre>
            </figure></section>
        </div>
    `,
    argTypes: {
        label: { control: 'text' },
        type: { control: 'inline-radio', options: ['primary', 'secondary'] },
    },
    args: {
        label: 'Hello',
        featured: false,
    },
};
