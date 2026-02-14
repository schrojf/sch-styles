const C={title:"Designs/Simple Styles/Display",parameters:{layout:"padded"}},t=()=>`
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
`;var p,n,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
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
\``,...(v=(n=t.parameters)==null?void 0:n.docs)==null?void 0:v.source}}};var c,b,h;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
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
\``,...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var u,g,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`
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
\``,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,f,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`
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
\``,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,k,T;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`
    <div class="group relative inline-block hover:opacity-60">
        <img src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Avatar" class="max-w-xs">
        <div class="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950">John Doe</button>
        </div>
    </div>
\``,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var L,R,B;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`
    <div class="w-full overflow-hidden bg-zinc-200">
        <div class="float-left bg-red-500 text-white px-4 py-2">float-left</div>
        <div class="float-right bg-blue-500 text-white px-4 py-2">float-right</div>
    </div>
\``,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var M,z,S;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`
    <p class="block">I am shown (display: block).</p>
    <p class="hidden">I am hidden (display: none).</p>
\``,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var D,O,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:'() => `\n    <button type="button" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-zinc-950 text-white hover:bg-zinc-300 hover:text-zinc-950 max-sm:block max-sm:w-full">Link</button>\n`',...(H=(O=d.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var I,P,j;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`
    <div class="relative shadow-lg w-[350px] h-[200px]">
        <div class="bg-red-500 absolute left-0 top-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 top-0 w-3/5 h-2/5"></div>
        <div class="bg-red-500 absolute left-0 bottom-0 w-1/4 h-2/5"></div>
        <div class="bg-red-500 absolute right-0 bottom-0 w-3/5 h-2/5"></div>
    </div>
\``,...(j=(P=r.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const F=["DisplayPositions","DisplayPositionsPadded","TextOverlayOnImage","DisplayHover","HoverWithOpacity","FloatClasses","ShowHide","MobileResponsiveButton","FlagDesign"];export{o as DisplayHover,t as DisplayPositions,e as DisplayPositionsPadded,r as FlagDesign,l as FloatClasses,a as HoverWithOpacity,d as MobileResponsiveButton,i as ShowHide,s as TextOverlayOnImage,F as __namedExportsOrder,C as default};
