const c={title:"Designs/Simple Styles/Containers",parameters:{layout:"fullscreen"}},e=()=>`
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
`,s=()=>`
    <div class="flow-root px-4 bg-blue-500 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
`,t=()=>`
    <header class="flow-root px-4 bg-teal-600 text-white">
      <h1 class="my-2.5 text-4xl font-sans font-medium">Header</h1>
    </header>
`,r=()=>`
    <header class="flow-root px-4 bg-teal-600 text-white">
      <h1 class="my-2.5 text-4xl">Header</h1>
    </header>

    <div class="flow-root px-4">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>
`,a=()=>`
    <div class="flow-root px-4 bg-blue-500 text-white">
        <h1 class="my-2.5 text-4xl font-medium">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="my-3.5">Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>
`,o=()=>`
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
`,i=()=>`
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
`,l=()=>`
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
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
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
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 bg-blue-500 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
\``,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
    <header class="flow-root px-4 bg-teal-600 text-white">
      <h1 class="my-2.5 text-4xl font-sans font-medium">Header</h1>
    </header>
\``,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
    <header class="flow-root px-4 bg-teal-600 text-white">
      <h1 class="my-2.5 text-4xl">Header</h1>
    </header>

    <div class="flow-root px-4">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>
\``,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 bg-blue-500 text-white">
        <h1 class="my-2.5 text-4xl font-medium">Lorem ipsum</h1>
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="my-3.5">Vivamus id pulvinar orci. Mauris ipsum purus, placerat at dolor sed, pellentesque venenatis augue. Mauris bibendum erat efficitur commodo ultricies.</p>
    </div>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
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
\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
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
\``,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
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
\``,...l.parameters?.docs?.source}}};const u=["Container","ContainerPadding","Header","HeaderPage","HeaderAndText","Sections","Page","PageSM"];export{e as Container,s as ContainerPadding,t as Header,a as HeaderAndText,r as HeaderPage,i as Page,l as PageSM,o as Sections,u as __namedExportsOrder,c as default};
