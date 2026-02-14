const p={title:"Designs/Simple Styles/Display",parameters:{layout:"padded"}},t=()=>`
    <div class="relative bg-green-600 text-white h-[300px]">
        <div class="absolute left-0 top-0">Top Left</div>
        <div class="absolute right-0 top-0">Top Right</div>
        <div class="absolute left-0 bottom-0">Bottom Left</div>
        <div class="absolute right-0 bottom-0">Bottom Right</div>
        <div class="absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`,e=()=>`
    <div class="relative bg-green-600 text-white h-[300px]">
        <div class="px-4 py-2 absolute left-0 top-0">Top Left</div>
        <div class="px-4 py-2 absolute right-0 top-0">Top Right</div>
        <div class="px-4 py-2 absolute left-0 bottom-0">Bottom Left</div>
        <div class="px-4 py-2 absolute right-0 bottom-0">Bottom Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="px-4 py-2 absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="px-4 py-2 absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="px-4 py-2 absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`,s=()=>`
    <div class="relative text-white">
        <img src="marc-wieland-trnTvywx2Rg-unsplash.jpg" alt="Lights" class="w-full">
        <div class="px-4 py-2 absolute left-0 top-0">Top Left</div>
        <div class="px-4 py-2 absolute right-0 top-0">Top Right</div>
        <div class="px-4 py-2 absolute left-0 bottom-0">Bottom Left</div>
        <div class="px-4 py-2 absolute right-0 bottom-0">Bottom Right</div>
        <div class="px-4 py-2 absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="px-4 py-2 absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="px-4 py-2 absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="px-4 py-2 absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`,o=()=>`
    <div class="group relative bg-zinc-200 h-[300px]">
        <div class="hidden group-hover:block absolute left-0 top-0">Top Left</div>
        <div class="hidden group-hover:block absolute right-0 top-0">Top Right</div>
        <div class="hidden group-hover:block absolute left-0 bottom-0">Bottom Left</div>
        <div class="hidden group-hover:block absolute right-0 bottom-0">Bottom Right</div>
        <div class="hidden group-hover:block absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="hidden group-hover:block absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Mouse over this box!</div>
        <div class="hidden group-hover:block absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="hidden group-hover:block absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
`,a=()=>`
    <div class="group relative inline-block hover:opacity-60">
        <img src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Avatar" class="max-w-xs">
        <div class="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">John Doe</button>
        </div>
    </div>
`,l=()=>`
    <div class="w-full overflow-hidden bg-zinc-200">
        <div class="float-left bg-red-500 text-white px-4 py-2">float-left</div>
        <div class="float-right bg-blue-500 text-white px-4 py-2">float-right</div>
    </div>
`,i=()=>`
    <p class="block">I am shown (display: block).</p>
    <p class="hidden">I am hidden (display: none).</p>
`,d=()=>`
    <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 max-sm:block max-sm:w-full">Link</button>
`,r=()=>`
    <div class="relative shadow-lg w-[350px] h-[200px]">
        <div class="bg-red-500 absolute left-0 top-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 top-0 w-3/5 h-2/5"></div>
        <div class="bg-red-500 absolute left-0 bottom-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 bottom-0 w-3/5 h-2/5"></div>
    </div>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
    <div class="relative bg-green-600 text-white h-[300px]">
        <div class="absolute left-0 top-0">Top Left</div>
        <div class="absolute right-0 top-0">Top Right</div>
        <div class="absolute left-0 bottom-0">Bottom Left</div>
        <div class="absolute right-0 bottom-0">Bottom Right</div>
        <div class="absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
    <div class="relative bg-green-600 text-white h-[300px]">
        <div class="px-4 py-2 absolute left-0 top-0">Top Left</div>
        <div class="px-4 py-2 absolute right-0 top-0">Top Right</div>
        <div class="px-4 py-2 absolute left-0 bottom-0">Bottom Left</div>
        <div class="px-4 py-2 absolute right-0 bottom-0">Bottom Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="px-4 py-2 absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="px-4 py-2 absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="px-4 py-2 absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div class="relative text-white">
        <img src="marc-wieland-trnTvywx2Rg-unsplash.jpg" alt="Lights" class="w-full">
        <div class="px-4 py-2 absolute left-0 top-0">Top Left</div>
        <div class="px-4 py-2 absolute right-0 top-0">Top Right</div>
        <div class="px-4 py-2 absolute left-0 bottom-0">Bottom Left</div>
        <div class="px-4 py-2 absolute right-0 bottom-0">Bottom Right</div>
        <div class="px-4 py-2 absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="px-4 py-2 absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="px-4 py-2 absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="px-4 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Middle</div>
        <div class="px-4 py-2 absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
\``,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
    <div class="group relative bg-zinc-200 h-[300px]">
        <div class="hidden group-hover:block absolute left-0 top-0">Top Left</div>
        <div class="hidden group-hover:block absolute right-0 top-0">Top Right</div>
        <div class="hidden group-hover:block absolute left-0 bottom-0">Bottom Left</div>
        <div class="hidden group-hover:block absolute right-0 bottom-0">Bottom Right</div>
        <div class="hidden group-hover:block absolute top-1/2 left-0 -translate-y-1/2">Left</div>
        <div class="hidden group-hover:block absolute top-1/2 right-0 -translate-y-1/2">Right</div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Mouse over this box!</div>
        <div class="hidden group-hover:block absolute left-1/2 top-0 -translate-x-1/2">Top Mid</div>
        <div class="hidden group-hover:block absolute left-1/2 bottom-0 -translate-x-1/2">Bottom Mid</div>
    </div>
\``,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <div class="group relative inline-block hover:opacity-60">
        <img src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Avatar" class="max-w-xs">
        <div class="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">John Doe</button>
        </div>
    </div>
\``,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
    <div class="w-full overflow-hidden bg-zinc-200">
        <div class="float-left bg-red-500 text-white px-4 py-2">float-left</div>
        <div class="float-right bg-blue-500 text-white px-4 py-2">float-right</div>
    </div>
\``,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
    <p class="block">I am shown (display: block).</p>
    <p class="hidden">I am hidden (display: none).</p>
\``,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'() => `\n    <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 max-sm:block max-sm:w-full">Link</button>\n`',...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
    <div class="relative shadow-lg w-[350px] h-[200px]">
        <div class="bg-red-500 absolute left-0 top-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 top-0 w-3/5 h-2/5"></div>
        <div class="bg-red-500 absolute left-0 bottom-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 bottom-0 w-3/5 h-2/5"></div>
    </div>
\``,...r.parameters?.docs?.source}}};const n=["DisplayPositions","DisplayPositionsPadded","TextOverlayOnImage","DisplayHover","HoverWithOpacity","FloatClasses","ShowHide","MobileResponsiveButton","FlagDesign"];export{o as DisplayHover,t as DisplayPositions,e as DisplayPositionsPadded,r as FlagDesign,l as FloatClasses,a as HoverWithOpacity,d as MobileResponsiveButton,i as ShowHide,s as TextOverlayOnImage,n as __namedExportsOrder,p as default};
