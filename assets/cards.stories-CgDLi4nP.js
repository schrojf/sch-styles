const d={title:"Designs/Simple Styles/Cards",parameters:{layout:"fullscreen"}},s=()=>`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Cards</h3>
        <p class="my-3.5">Create paper-like cards with the shadow classes:</p>

        <div class="flow-root px-4 my-4 shadow-sm">
            <p class="my-3.5">shadow-sm</p>
        </div>

        <div class="flow-root px-4 my-4 shadow">
            <p class="my-3.5">shadow</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-md">
            <p class="my-3.5">shadow-md</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-lg">
            <p class="my-3.5">shadow-lg</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-xl">
            <p class="my-3.5">shadow-xl</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-2xl">
            <p class="my-3.5">shadow-2xl</p>
        </div>
    </div>
`,o=()=>`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Cards</h3>
        <p class="my-3.5">Create paper-like cards with the shadow classes:</p>

        <div class="flow-root px-4 my-4 shadow-sm border border-black/5">
            <p class="my-3.5">shadow-sm</p>
        </div>

        <div class="flow-root px-4 my-4 shadow border border-black/5">
            <p class="my-3.5">shadow</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-md border border-black/5">
            <p class="my-3.5">shadow-md</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-lg border border-black/5">
            <p class="my-3.5">shadow-lg</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-xl border border-black/5">
            <p class="my-3.5">shadow-xl</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-2xl border border-black/5">
            <p class="my-3.5">shadow-2xl</p>
        </div>
    </div>
`,a=()=>`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Cards</h3>
        <p class="my-3.5">Create paper-like cards with the shadow classes, and use a background color class to add a color:</p>

        <div class="sm:grid sm:grid-flow-col sm:justify-stretch sm:gap-4">
            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-md">
                <p class="my-3.5">shadow-md</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-lg">
                <p class="my-3.5">shadow-lg</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-xl">
                <p class="my-3.5">shadow-xl</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-2xl">
                <p class="my-3.5">shadow-2xl</p>
            </div>
        </div>

        <div class="sm:grid sm:grid-flow-col sm:justify-stretch sm:gap-4">
            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-md border border-black/5">
                <p class="my-3.5">shadow-md</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-lg border border-black/5">
                <p class="my-3.5">shadow-lg</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-xl border border-black/5">
                <p class="my-3.5">shadow-xl</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-2xl border border-black/5">
                <p class="my-3.5">shadow-2xl</p>
            </div>
        </div>
    </div>
`,l=()=>`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Card Content</h3>
        <p class="my-3.5">Add containers inside the card to create different sections:</p>

        <div class="flex items-start gap-4 flex-col sm:flex-row">
            <div class="max-w-sm shadow-xl">
                <header class="flow-root px-4 bg-blue-500 text-white">
                    <h2 class="my-2.5 text-3xl font-normal">Header</h2>
                </header>
                <div class="flow-root px-4">
                    <p class="my-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus magna nec ipsum imperdiet laoreet. Vivamus aliquet enim lacus, sit amet lobortis orci vestibulum ac.
                    </p>
                </div>
                <footer class="flow-root px-4 bg-blue-500 text-white">
                    <h5 class="my-2.5 text-lg font-normal">Footer</h5>
                </footer>
            </div>

            <div class="max-w-sm shadow-xl border border-black/10">
                <header class="flow-root px-4 bg-blue-500 text-white">
                    <h2 class="my-2.5 text-3xl font-normal">Header</h2>
                </header>
                <div class="flow-root px-4">
                    <p class="my-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus magna nec ipsum imperdiet laoreet. Vivamus aliquet enim lacus, sit amet lobortis orci vestibulum ac.
                    </p>
                </div>
                <footer class="flow-root px-4 bg-blue-500 text-white">
                    <h5 class="my-2.5 text-lg font-normal">Footer</h5>
                </footer>
            </div>
        </div>
    </div>
`,r={render:e=>`
        <div class="flow-root px-4">
            <h3 class="my-2.5 text-2xl font-normal">Photo Card (${e.Shadow})</h3>
            <div class="max-w-sm ${e.Shadow}">
                <img src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
                <div class="flow-root px-4 py-3.5 text-center">
                    Photo by <a class="underline hover:no-underline" onclick="return false;" href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Markus Spiske</a> on <a class="underline hover:no-underline" onclick="return false;" href="https://unsplash.com/photos/white-bmw-m-3-coupe-8aF7KHNrHpU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
                </div>
            </div>
        </div>
    `,argTypes:{Shadow:{control:"select",options:["shadow-none","shadow-sm","shadow","shadow-md","shadow-lg","shadow-xl","shadow-2xl"]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Cards</h3>
        <p class="my-3.5">Create paper-like cards with the shadow classes:</p>

        <div class="flow-root px-4 my-4 shadow-sm">
            <p class="my-3.5">shadow-sm</p>
        </div>

        <div class="flow-root px-4 my-4 shadow">
            <p class="my-3.5">shadow</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-md">
            <p class="my-3.5">shadow-md</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-lg">
            <p class="my-3.5">shadow-lg</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-xl">
            <p class="my-3.5">shadow-xl</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-2xl">
            <p class="my-3.5">shadow-2xl</p>
        </div>
    </div>
\``,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Cards</h3>
        <p class="my-3.5">Create paper-like cards with the shadow classes:</p>

        <div class="flow-root px-4 my-4 shadow-sm border border-black/5">
            <p class="my-3.5">shadow-sm</p>
        </div>

        <div class="flow-root px-4 my-4 shadow border border-black/5">
            <p class="my-3.5">shadow</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-md border border-black/5">
            <p class="my-3.5">shadow-md</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-lg border border-black/5">
            <p class="my-3.5">shadow-lg</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-xl border border-black/5">
            <p class="my-3.5">shadow-xl</p>
        </div>

        <div class="flow-root px-4 my-4 shadow-2xl border border-black/5">
            <p class="my-3.5">shadow-2xl</p>
        </div>
    </div>
\``,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Cards</h3>
        <p class="my-3.5">Create paper-like cards with the shadow classes, and use a background color class to add a color:</p>

        <div class="sm:grid sm:grid-flow-col sm:justify-stretch sm:gap-4">
            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-md">
                <p class="my-3.5">shadow-md</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-lg">
                <p class="my-3.5">shadow-lg</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-xl">
                <p class="my-3.5">shadow-xl</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-2xl">
                <p class="my-3.5">shadow-2xl</p>
            </div>
        </div>

        <div class="sm:grid sm:grid-flow-col sm:justify-stretch sm:gap-4">
            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-md border border-black/5">
                <p class="my-3.5">shadow-md</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-lg border border-black/5">
                <p class="my-3.5">shadow-lg</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-xl border border-black/5">
                <p class="my-3.5">shadow-xl</p>
            </div>

            <div class="min-h-24 flow-root px-4 my-4 bg-yellow-300 shadow-2xl border border-black/5">
                <p class="my-3.5">shadow-2xl</p>
            </div>
        </div>
    </div>
\``,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4">
        <h3 class="my-2.5 text-2xl font-normal">Card Content</h3>
        <p class="my-3.5">Add containers inside the card to create different sections:</p>

        <div class="flex items-start gap-4 flex-col sm:flex-row">
            <div class="max-w-sm shadow-xl">
                <header class="flow-root px-4 bg-blue-500 text-white">
                    <h2 class="my-2.5 text-3xl font-normal">Header</h2>
                </header>
                <div class="flow-root px-4">
                    <p class="my-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus magna nec ipsum imperdiet laoreet. Vivamus aliquet enim lacus, sit amet lobortis orci vestibulum ac.
                    </p>
                </div>
                <footer class="flow-root px-4 bg-blue-500 text-white">
                    <h5 class="my-2.5 text-lg font-normal">Footer</h5>
                </footer>
            </div>

            <div class="max-w-sm shadow-xl border border-black/10">
                <header class="flow-root px-4 bg-blue-500 text-white">
                    <h2 class="my-2.5 text-3xl font-normal">Header</h2>
                </header>
                <div class="flow-root px-4">
                    <p class="my-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus magna nec ipsum imperdiet laoreet. Vivamus aliquet enim lacus, sit amet lobortis orci vestibulum ac.
                    </p>
                </div>
                <footer class="flow-root px-4 bg-blue-500 text-white">
                    <h5 class="my-2.5 text-lg font-normal">Footer</h5>
                </footer>
            </div>
        </div>
    </div>
\``,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: (args: {
    Shadow: string;
  }) => \`
        <div class="flow-root px-4">
            <h3 class="my-2.5 text-2xl font-normal">Photo Card (\${args.Shadow})</h3>
            <div class="max-w-sm \${args.Shadow}">
                <img src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
                <div class="flow-root px-4 py-3.5 text-center">
                    Photo by <a class="underline hover:no-underline" onclick="return false;" href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Markus Spiske</a> on <a class="underline hover:no-underline" onclick="return false;" href="https://unsplash.com/photos/white-bmw-m-3-coupe-8aF7KHNrHpU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>
                </div>
            </div>
        </div>
    \`,
  argTypes: {
    Shadow: {
      control: 'select',
      options: ['shadow-none', 'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl']
    }
  }
}`,...r.parameters?.docs?.source}}};const t=["Simple","Bordered","Colored","Content","PhotoCard"];export{o as Bordered,a as Colored,l as Content,r as PhotoCard,s as Simple,t as __namedExportsOrder,d as default};
