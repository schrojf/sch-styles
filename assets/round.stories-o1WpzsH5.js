const w={title:"Designs/Simple Styles/Round",parameters:{layout:"fullscreen"}},s=()=>`
    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">Round Panels</h2>

        <div class="flow-root px-4 my-4 rounded-sm bg-teal-600 text-white">
            <p class="my-3.5">rounded-sm (2px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded bg-teal-600 text-white">
            <p class="my-3.5">rounded (4px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-md bg-teal-600 text-white">
            <p class="my-3.5">rounded-md (6px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-lg bg-teal-600 text-white">
            <p class="my-3.5">rounded-lg (8px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-xl (12px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-2xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-2xl (16px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-3xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-3xl (24px)</p>
        </div>
    </div>
`,e=()=>`
    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">An image as a circle (rounded-full)</h2>
        <img class="rounded-full max-w-80" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
    </div>

    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">An image as a circle (rounded-[50%])</h2>
        <img class="rounded-[50%] max-w-80" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
    </div>
`,l=()=>`
    <div class="py-8 rounded-[50%] text-center bg-red-500 text-white">
        <h1 class="my-2.5 text-4xl font-medium">Text inside a circle</h1>
    </div>
`,d=()=>`
    <div class="md:flex">
        <div class="md:w-1/2">
            <div class="flow-root px-4">
                <h2 class="my-2.5 text-3xl font-normal">A Circle image in a Circle</h2>
                <div class="py-8 rounded-[50%] bg-green-600">
                    <img class="rounded-[50%] w-3/4" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
                </div>
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="flow-root px-4">
                <h2 class="my-2.5 text-3xl font-normal">A Circle with text in a Circle</h2>
                <div class="py-8 rounded-[50%] bg-green-600 text-white">
                    <div class="py-8 w-[55%] rounded-[50%] text-center bg-red-500">
                        <p class="my-3.5 text-xl font-medium">Hello<br>W3.Tailwind!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;var r,t,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">Round Panels</h2>

        <div class="flow-root px-4 my-4 rounded-sm bg-teal-600 text-white">
            <p class="my-3.5">rounded-sm (2px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded bg-teal-600 text-white">
            <p class="my-3.5">rounded (4px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-md bg-teal-600 text-white">
            <p class="my-3.5">rounded-md (6px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-lg bg-teal-600 text-white">
            <p class="my-3.5">rounded-lg (8px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-xl (12px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-2xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-2xl (16px)</p>
        </div>

        <div class="flow-root px-4 my-4 rounded-3xl bg-teal-600 text-white">
            <p class="my-3.5">rounded-3xl (24px)</p>
        </div>
    </div>
\``,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">An image as a circle (rounded-full)</h2>
        <img class="rounded-full max-w-80" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
    </div>

    <div class="flow-root px-4">
        <h2 class="my-2.5 text-3xl font-normal">An image as a circle (rounded-[50%])</h2>
        <img class="rounded-[50%] max-w-80" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
    </div>
\``,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
    <div class="py-8 rounded-[50%] text-center bg-red-500 text-white">
        <h1 class="my-2.5 text-4xl font-medium">Text inside a circle</h1>
    </div>
\``,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,u,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`
    <div class="md:flex">
        <div class="md:w-1/2">
            <div class="flow-root px-4">
                <h2 class="my-2.5 text-3xl font-normal">A Circle image in a Circle</h2>
                <div class="py-8 rounded-[50%] bg-green-600">
                    <img class="rounded-[50%] w-3/4" src="markus-spiske-8aF7KHNrHpU-unsplash.jpg" alt="Lotus Esprit Turbo S3 2.2 – Year: 1985, 211 PS">
                </div>
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="flow-root px-4">
                <h2 class="my-2.5 text-3xl font-normal">A Circle with text in a Circle</h2>
                <div class="py-8 rounded-[50%] bg-green-600 text-white">
                    <div class="py-8 w-[55%] rounded-[50%] text-center bg-red-500">
                        <p class="my-3.5 text-xl font-medium">Hello<br>W3.Tailwind!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
\``,...(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const g=["Display","CircleImage","CircleText","CircleInsideCircle"];export{e as CircleImage,d as CircleInsideCircle,l as CircleText,s as Display,g as __namedExportsOrder,w as default};
