const l={title:"Playground/Hero Patterns",parameters:{layout:"fullscreen"}},r={render:e=>`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="relative overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="width: ${e.Width}; height: ${e.Height}; background-color: ${e.BackgroundColor};"
            >
                <div
                    class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                    style="opacity: ${e.PatternOpacity};"
                ></div>
            </div>
        </div>
    `,argTypes:{BackgroundColor:{control:"color"},PatternOpacity:{control:{type:"range",min:0,max:1,step:.05}},Width:{control:"text"},Height:{control:"text"}},args:{BackgroundColor:"#f5f5f4",PatternOpacity:.1,Width:"400px",Height:"300px"}},o={render:e=>`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="relative overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="width: ${e.Width}; height: ${e.Height}; background-color: ${e.BackgroundColor};"
            >
                <div
                    class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                    style="opacity: ${e.PatternOpacity};"
                ></div>
                <div class="relative flex items-center justify-center h-full">
                    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-8 py-6 text-center max-w-sm">
                        <h2 class="text-2xl font-semibold text-neutral-900 mb-2">Glamorous</h2>
                        <p class="text-neutral-600">Hero Patterns background. Drag the bottom-right corner to resize.</p>
                    </div>
                </div>
            </div>
        </div>
    `,argTypes:{BackgroundColor:{control:"color"},PatternOpacity:{control:{type:"range",min:0,max:1,step:.05}},Width:{control:"text"},Height:{control:"text"}},args:{BackgroundColor:"#dbeafe",PatternOpacity:.15,Width:"100%",Height:"400px"}},a={render:e=>{const s={"Light Minimal":{bg:"#ffffff",opacity:.05,text:"#000000"},"Blue Sky":{bg:"#dbeafe",opacity:.15,text:"#1e40af"},Emerald:{bg:"#d1fae5",opacity:.15,text:"#065f46"},"Warm Sunset":{bg:"#fef3c7",opacity:.2,text:"#92400e"},"Dark Mode":{bg:"#18181b",opacity:.08,text:"#ffffff"},Rose:{bg:"#ffe4e6",opacity:.12,text:"#9f1239"}},t=s[e.Preset]??s["Light Minimal"];return`
            <div class="h-screen bg-neutral-100 p-8">
                <div
                    class="relative w-full h-80 overflow-auto resize rounded-lg shadow-md border border-neutral-300"
                    style="background-color: ${t.bg};"
                >
                    <div
                        class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                        style="opacity: ${t.opacity};"
                    ></div>
                    <div class="relative flex items-center justify-center h-full">
                        <span class="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            style="background-color: ${t.bg}; color: ${t.text};"
                        >${e.Preset}</span>
                    </div>
                </div>
            </div>
        `},argTypes:{Preset:{control:"select",options:["Light Minimal","Blue Sky","Emerald","Warm Sunset","Dark Mode","Rose"]}},args:{Preset:"Blue Sky"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => \`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="relative overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="width: \${args.Width}; height: \${args.Height}; background-color: \${args.BackgroundColor};"
            >
                <div
                    class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                    style="opacity: \${args.PatternOpacity};"
                ></div>
            </div>
        </div>
    \`,
  argTypes: {
    BackgroundColor: {
      control: 'color'
    },
    PatternOpacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05
      }
    },
    Width: {
      control: 'text'
    },
    Height: {
      control: 'text'
    }
  },
  args: {
    BackgroundColor: '#f5f5f4',
    PatternOpacity: 0.1,
    Width: '400px',
    Height: '300px'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => \`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="relative overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="width: \${args.Width}; height: \${args.Height}; background-color: \${args.BackgroundColor};"
            >
                <div
                    class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                    style="opacity: \${args.PatternOpacity};"
                ></div>
                <div class="relative flex items-center justify-center h-full">
                    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-8 py-6 text-center max-w-sm">
                        <h2 class="text-2xl font-semibold text-neutral-900 mb-2">Glamorous</h2>
                        <p class="text-neutral-600">Hero Patterns background. Drag the bottom-right corner to resize.</p>
                    </div>
                </div>
            </div>
        </div>
    \`,
  argTypes: {
    BackgroundColor: {
      control: 'color'
    },
    PatternOpacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05
      }
    },
    Width: {
      control: 'text'
    },
    Height: {
      control: 'text'
    }
  },
  args: {
    BackgroundColor: '#dbeafe',
    PatternOpacity: 0.15,
    Width: '100%',
    Height: '400px'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const presets: Record<string, {
      bg: string;
      opacity: number;
      text: string;
    }> = {
      'Light Minimal': {
        bg: '#ffffff',
        opacity: 0.05,
        text: '#000000'
      },
      'Blue Sky': {
        bg: '#dbeafe',
        opacity: 0.15,
        text: '#1e40af'
      },
      'Emerald': {
        bg: '#d1fae5',
        opacity: 0.15,
        text: '#065f46'
      },
      'Warm Sunset': {
        bg: '#fef3c7',
        opacity: 0.2,
        text: '#92400e'
      },
      'Dark Mode': {
        bg: '#18181b',
        opacity: 0.08,
        text: '#ffffff'
      },
      'Rose': {
        bg: '#ffe4e6',
        opacity: 0.12,
        text: '#9f1239'
      }
    };
    const p = presets[args.Preset] ?? presets['Light Minimal'];
    return \`
            <div class="h-screen bg-neutral-100 p-8">
                <div
                    class="relative w-full h-80 overflow-auto resize rounded-lg shadow-md border border-neutral-300"
                    style="background-color: \${p.bg};"
                >
                    <div
                        class="absolute inset-0 bg-[url(glamorous.svg)] bg-repeat"
                        style="opacity: \${p.opacity};"
                    ></div>
                    <div class="relative flex items-center justify-center h-full">
                        <span class="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            style="background-color: \${p.bg}; color: \${p.text};"
                        >\${args.Preset}</span>
                    </div>
                </div>
            </div>
        \`;
  },
  argTypes: {
    Preset: {
      control: 'select',
      options: ['Light Minimal', 'Blue Sky', 'Emerald', 'Warm Sunset', 'Dark Mode', 'Rose']
    }
  },
  args: {
    Preset: 'Blue Sky'
  }
}`,...a.parameters?.docs?.source}}};const i=["Glamorous","GlamorousWithContent","GlamorousPresets"];export{r as Glamorous,a as GlamorousPresets,o as GlamorousWithContent,i as __namedExportsOrder,l as default};
