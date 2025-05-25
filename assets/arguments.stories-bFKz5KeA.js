const a={title:"Playground/Arguments",parameters:{layout:"fullscreen"}},e={render:o=>`
        <div class="max-w-full overflow-auto p-4 text-sm text-slate-600 bg-slate-50 border-l-4 border-slate-600">
            <section><figure>
                <pre><code>${JSON.stringify(o,null,2)}</code></pre>
            </figure></section>
        </div>
    `,argTypes:{label:{control:"text"},type:{control:"inline-radio",options:["primary","secondary"]}},args:{label:"Hello",featured:!1}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => \`
        <div class="max-w-full overflow-auto p-4 text-sm text-slate-600 bg-slate-50 border-l-4 border-slate-600">
            <section><figure>
                <pre><code>\${JSON.stringify(args, null, 2)}</code></pre>
            </figure></section>
        </div>
    \`,
  argTypes: {
    label: {
      control: 'text'
    },
    type: {
      control: 'inline-radio',
      options: ['primary', 'secondary']
    }
  },
  args: {
    label: 'Hello',
    featured: false
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const s=["StoryArguments"];export{e as StoryArguments,s as __namedExportsOrder,a as default};
