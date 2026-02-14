const s={title:"Designs/Simple Styles/Borders",parameters:{layout:"padded"}},e=()=>`
    <div class="flow-root mb-4 px-4 border-l-4 border-indigo-500">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
    <div class="flow-root mb-4 px-4 border-l-4 border-indigo-500 bg-indigo-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
    <div class="flow-root mb-4 px-4 border-l-8 border-indigo-500 bg-indigo-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
`,r=()=>`
    <div class="flow-root px-4 border-y-4 border-red-500 bg-red-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
`,i=()=>`
    <div class="flow-root mb-4 px-4 border-8 border-transparent hover:border-green-500 bg-neutral-100">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>

    <div class="flow-root mb-4 px-4 border-y-8 border-transparent hover:border-b-green-500 bg-neutral-100">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root mb-4 px-4 border-l-4 border-indigo-500">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
    <div class="flow-root mb-4 px-4 border-l-4 border-indigo-500 bg-indigo-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
    <div class="flow-root mb-4 px-4 border-l-8 border-indigo-500 bg-indigo-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
\``,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 border-y-4 border-red-500 bg-red-50">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
\``,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root mb-4 px-4 border-8 border-transparent hover:border-green-500 bg-neutral-100">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>

    <div class="flow-root mb-4 px-4 border-y-8 border-transparent hover:border-b-green-500 bg-neutral-100">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    </div>
\``,...i.parameters?.docs?.source}}};const o=["LeftBar","TobAndBottomBar","HoverBorder"];export{i as HoverBorder,e as LeftBar,r as TobAndBottomBar,o as __namedExportsOrder,s as default};
