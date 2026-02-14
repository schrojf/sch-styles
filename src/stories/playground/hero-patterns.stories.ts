import type { Meta, StoryObj } from '@storybook/html';

type HeroPatternsArgs = {
    BackgroundColor: string;
    PatternOpacity: number;
    Width: string;
    Height: string;
};

const meta = {
    title: 'Playground/Hero Patterns',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const Glamorous: StoryObj<HeroPatternsArgs> = {
    render: (args) => `
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="relative overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="width: ${args.Width}; height: ${args.Height}; background-color: ${args.BackgroundColor};"
            >
                <div
                    class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                    style="opacity: ${args.PatternOpacity};"
                ></div>
            </div>
        </div>
    `,
    argTypes: {
        BackgroundColor: { control: 'color' },
        PatternOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
        Width: { control: 'text' },
        Height: { control: 'text' },
    },
    args: {
        BackgroundColor: '#f5f5f4',
        PatternOpacity: 0.1,
        Width: '400px',
        Height: '300px',
    },
};

export const GlamorousWithContent: StoryObj<HeroPatternsArgs> = {
    render: (args) => `
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="relative overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="width: ${args.Width}; height: ${args.Height}; background-color: ${args.BackgroundColor};"
            >
                <div
                    class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                    style="opacity: ${args.PatternOpacity};"
                ></div>
                <div class="relative flex items-center justify-center h-full">
                    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-8 py-6 text-center max-w-sm">
                        <h2 class="text-2xl font-semibold text-neutral-900 mb-2">Glamorous</h2>
                        <p class="text-neutral-600">Hero Patterns background. Drag the bottom-right corner to resize.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    argTypes: {
        BackgroundColor: { control: 'color' },
        PatternOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
        Width: { control: 'text' },
        Height: { control: 'text' },
    },
    args: {
        BackgroundColor: '#dbeafe',
        PatternOpacity: 0.15,
        Width: '100%',
        Height: '400px',
    },
};

export const GlamorousPresets: StoryObj<{ Preset: string }> = {
    render: (args) => {
        const presets: Record<string, { bg: string; opacity: number; text: string }> = {
            'Light Minimal': { bg: '#ffffff', opacity: 0.05, text: '#000000' },
            'Blue Sky': { bg: '#dbeafe', opacity: 0.15, text: '#1e40af' },
            'Emerald': { bg: '#d1fae5', opacity: 0.15, text: '#065f46' },
            'Warm Sunset': { bg: '#fef3c7', opacity: 0.2, text: '#92400e' },
            'Dark Mode': { bg: '#18181b', opacity: 0.08, text: '#ffffff' },
            'Rose': { bg: '#ffe4e6', opacity: 0.12, text: '#9f1239' },
        };
        const p = presets[args.Preset] ?? presets['Light Minimal'];
        return `
            <div class="h-screen bg-neutral-100 p-8">
                <div
                    class="relative w-full h-80 overflow-auto resize rounded-lg shadow-md border border-neutral-300"
                    style="background-color: ${p.bg};"
                >
                    <div
                        class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                        style="opacity: ${p.opacity};"
                    ></div>
                    <div class="relative flex items-center justify-center h-full">
                        <span class="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            style="background-color: ${p.bg}; color: ${p.text};"
                        >${args.Preset}</span>
                    </div>
                </div>
            </div>
        `;
    },
    argTypes: {
        Preset: {
            control: 'select',
            options: ['Light Minimal', 'Blue Sky', 'Emerald', 'Warm Sunset', 'Dark Mode', 'Rose'],
        },
    },
    args: {
        Preset: 'Blue Sky',
    },
};
