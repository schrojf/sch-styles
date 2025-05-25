const g={title:"Designs/Simple Styles/Cards",parameters:{layout:"fullscreen"}},s=()=>`
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
    `,argTypes:{Shadow:{control:"select",options:["shadow-none","shadow-sm","shadow","shadow-md","shadow-lg","shadow-xl","shadow-2xl"]}}};var d,t,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
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
\``,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,n,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
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
\``,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,h,w;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
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
\``,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var x,v,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`
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
\``,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var u,f,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const k=["Simple","Bordered","Colored","Content","PhotoCard"];export{o as Bordered,a as Colored,l as Content,r as PhotoCard,s as Simple,k as __namedExportsOrder,g as default};
