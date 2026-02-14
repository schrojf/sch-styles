const i={title:"Designs/Simple Styles/Text",parameters:{layout:"fullscreen"}},s=()=>`
    <h1 class="my-2.5 text-4xl font-normal">Heading 1 (36px)</h1>
    <h2 class="my-2.5 text-3xl font-normal">Heading 2 (30px)</h2>
    <h3 class="my-2.5 text-2xl font-normal">Heading 3 (24px)</h3>
    <h4 class="my-2.5 text-xl font-normal">Heading 4 (20px)</h4>
    <h5 class="my-2.5 text-lg font-normal">Heading 5 (18px)</h5>
    <h6 class="my-2.5 text-base font-normal">Heading 6 (16px)</h6>
`,e=()=>`
    <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    <p class="my-3.5">Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur. Suspendisse vestibulum dignissim odio, nec vehicula ex lobortis sit amet.</p>
    <p class="my-3.5">Donec ex lacus, fringilla quis auctor interdum, posuere ac arcu. Sed elementum bibendum sem, non lacinia quam consequat quis.</p>
`,t=()=>`
    <b>bold</b> <br>
    <span class="font-bold">bold</span> <br>
    <span class="font-semibold">semibold</span> <br>
    <strong>strong</strong> <br>
`,a=()=>`
    <a class="hover:underline" href="#" onclick="return false;">Link 1</a> <br>
    <a class="underline hover:no-underline" href="#" onclick="return false;">Link 2</a> <br>
`,l=()=>`
    <div style="font-size: 80%;">text-small (80%)</div>
    <div class="text-xs">text-xs</div>
    <div class="text-sm">text-sm</div>
    <div class="text-base">text-base</div>
    <div class="text-lg">text-lg</div>
    <div class="text-xl">text-xl</div>
    <div class="text-2xl">text-2xl</div>
    <div class="text-3xl">text-3xl</div>
    <div class="text-4xl">text-4xl</div>
    <div class="text-5xl">text-5xl</div>
    <div class="text-6xl">text-6xl</div>
    <div class="text-7xl">text-7xl</div>
    <div class="text-8xl">text-8xl</div>
    <div class="text-9xl">text-9xl</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <h1 class="my-2.5 text-4xl font-normal">Heading 1 (36px)</h1>
    <h2 class="my-2.5 text-3xl font-normal">Heading 2 (30px)</h2>
    <h3 class="my-2.5 text-2xl font-normal">Heading 3 (24px)</h3>
    <h4 class="my-2.5 text-xl font-normal">Heading 4 (20px)</h4>
    <h5 class="my-2.5 text-lg font-normal">Heading 5 (18px)</h5>
    <h6 class="my-2.5 text-base font-normal">Heading 6 (16px)</h6>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
    <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis.</p>
    <p class="my-3.5">Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur. Suspendisse vestibulum dignissim odio, nec vehicula ex lobortis sit amet.</p>
    <p class="my-3.5">Donec ex lacus, fringilla quis auctor interdum, posuere ac arcu. Sed elementum bibendum sem, non lacinia quam consequat quis.</p>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
    <b>bold</b> <br>
    <span class="font-bold">bold</span> <br>
    <span class="font-semibold">semibold</span> <br>
    <strong>strong</strong> <br>
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <a class="hover:underline" href="#" onclick="return false;">Link 1</a> <br>
    <a class="underline hover:no-underline" href="#" onclick="return false;">Link 2</a> <br>
\``,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
    <div style="font-size: 80%;">text-small (80%)</div>
    <div class="text-xs">text-xs</div>
    <div class="text-sm">text-sm</div>
    <div class="text-base">text-base</div>
    <div class="text-lg">text-lg</div>
    <div class="text-xl">text-xl</div>
    <div class="text-2xl">text-2xl</div>
    <div class="text-3xl">text-3xl</div>
    <div class="text-4xl">text-4xl</div>
    <div class="text-5xl">text-5xl</div>
    <div class="text-6xl">text-6xl</div>
    <div class="text-7xl">text-7xl</div>
    <div class="text-8xl">text-8xl</div>
    <div class="text-9xl">text-9xl</div>
\``,...l.parameters?.docs?.source}}};const n=["HTMLHeadings","Paragraphs","Bold","Links","FontSizeClasses"];export{t as Bold,l as FontSizeClasses,s as HTMLHeadings,a as Links,e as Paragraphs,n as __namedExportsOrder,i as default};
