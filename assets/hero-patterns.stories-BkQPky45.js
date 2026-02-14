const l=(e,o)=>`url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='${encodeURIComponent(e)}' fill-opacity='${o}' fill-rule='evenodd'/%3E%3C/svg%3E")`,x={title:"Playground/Hero Patterns",parameters:{layout:"fullscreen"}},t=()=>`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="overflow-auto w-[400px] h-[300px] resize bg-[url(glamorous.svg)] bg-repeat border border-neutral-300 rounded-lg shadow-md"
            ></div>
        </div>
`,a={render:e=>`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="
                    width: ${e.Width};
                    height: ${e.Height};
                    background-color: ${e.BackgroundColor};
                    background-image: ${l(e.PatternColor,e.PatternOpacity)};
                "
            ></div>
        </div>
    `,argTypes:{BackgroundColor:{control:"color"},PatternColor:{control:"color"},PatternOpacity:{control:{type:"range",min:0,max:1,step:.05}},Width:{control:"text"},Height:{control:"text"}},args:{BackgroundColor:"#f5f5f4",PatternColor:"#000000",PatternOpacity:.1,Width:"400px",Height:"300px"}},s={render:e=>`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="
                    width: ${e.Width};
                    height: ${e.Height};
                    background-color: ${e.BackgroundColor};
                    background-image: ${l(e.PatternColor,e.PatternOpacity)};
                "
            >
                <div class="flex items-center justify-center h-full">
                    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-8 py-6 text-center max-w-sm">
                        <h2 class="text-2xl font-semibold text-neutral-900 mb-2">Glamorous</h2>
                        <p class="text-neutral-600">Hero Patterns background. Drag the bottom-right corner to resize.</p>
                    </div>
                </div>
            </div>
        </div>
    `,argTypes:{BackgroundColor:{control:"color"},PatternColor:{control:"color"},PatternOpacity:{control:{type:"range",min:0,max:1,step:.05}},Width:{control:"text"},Height:{control:"text"}},args:{BackgroundColor:"#dbeafe",PatternColor:"#1e3a5f",PatternOpacity:.15,Width:"100%",Height:"400px"}},n={render:e=>{const o={"Light Minimal":{bg:"#ffffff",fg:"#000000",opacity:.05},"Blue Sky":{bg:"#dbeafe",fg:"#1e40af",opacity:.15},Emerald:{bg:"#d1fae5",fg:"#065f46",opacity:.15},"Warm Sunset":{bg:"#fef3c7",fg:"#92400e",opacity:.2},"Dark Mode":{bg:"#18181b",fg:"#ffffff",opacity:.08},Rose:{bg:"#ffe4e6",fg:"#9f1239",opacity:.12}},r=o[e.Preset]??o["Light Minimal"];return`
            <div class="h-screen bg-neutral-100 p-8">
                <div
                    class="w-full h-80 overflow-auto resize rounded-lg shadow-md border border-neutral-300"
                    style="
                        background-color: ${r.bg};
                        background-image: ${l(r.fg,r.opacity)};
                    "
                >
                    <div class="flex items-center justify-center h-full">
                        <span class="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            style="background-color: ${r.bg}; color: ${r.fg};"
                        >${e.Preset}</span>
                    </div>
                </div>
            </div>
        `},argTypes:{Preset:{control:"select",options:["Light Minimal","Blue Sky","Emerald","Warm Sunset","Dark Mode","Rose"]}},args:{Preset:"Blue Sky"}};var d,c,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="overflow-auto w-[400px] h-[300px] resize bg-[url(glamorous.svg)] bg-repeat border border-neutral-300 rounded-lg shadow-md"
            ></div>
        </div>
\``,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var g,u,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => \`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="
                    width: \${args.Width};
                    height: \${args.Height};
                    background-color: \${args.BackgroundColor};
                    background-image: \${glamorousSvg(args.PatternColor, args.PatternOpacity)};
                "
            ></div>
        </div>
    \`,
  argTypes: {
    BackgroundColor: {
      control: 'color'
    },
    PatternColor: {
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
    PatternColor: '#000000',
    PatternOpacity: 0.1,
    Width: '400px',
    Height: '300px'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => \`
        <div class="h-screen bg-neutral-100 p-8">
            <div
                class="overflow-auto resize border border-neutral-300 rounded-lg shadow-md"
                style="
                    width: \${args.Width};
                    height: \${args.Height};
                    background-color: \${args.BackgroundColor};
                    background-image: \${glamorousSvg(args.PatternColor, args.PatternOpacity)};
                "
            >
                <div class="flex items-center justify-center h-full">
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
    PatternColor: {
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
    PatternColor: '#1e3a5f',
    PatternOpacity: 0.15,
    Width: '100%',
    Height: '400px'
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const presets: Record<string, {
      bg: string;
      fg: string;
      opacity: number;
    }> = {
      'Light Minimal': {
        bg: '#ffffff',
        fg: '#000000',
        opacity: 0.05
      },
      'Blue Sky': {
        bg: '#dbeafe',
        fg: '#1e40af',
        opacity: 0.15
      },
      'Emerald': {
        bg: '#d1fae5',
        fg: '#065f46',
        opacity: 0.15
      },
      'Warm Sunset': {
        bg: '#fef3c7',
        fg: '#92400e',
        opacity: 0.2
      },
      'Dark Mode': {
        bg: '#18181b',
        fg: '#ffffff',
        opacity: 0.08
      },
      'Rose': {
        bg: '#ffe4e6',
        fg: '#9f1239',
        opacity: 0.12
      }
    };
    const p = presets[args.Preset] ?? presets['Light Minimal'];
    return \`
            <div class="h-screen bg-neutral-100 p-8">
                <div
                    class="w-full h-80 overflow-auto resize rounded-lg shadow-md border border-neutral-300"
                    style="
                        background-color: \${p.bg};
                        background-image: \${glamorousSvg(p.fg, p.opacity)};
                    "
                >
                    <div class="flex items-center justify-center h-full">
                        <span class="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            style="background-color: \${p.bg}; color: \${p.fg};"
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
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const z=["External","Glamorous","GlamorousWithContent","GlamorousPresets"];export{t as External,a as Glamorous,n as GlamorousPresets,s as GlamorousWithContent,z as __namedExportsOrder,x as default};
