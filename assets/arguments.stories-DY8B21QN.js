const t={title:"Playground/Arguments",parameters:{layout:"fullscreen"}},e={render:r=>`
        <div class="max-w-full overflow-auto p-4 text-sm text-slate-600 bg-slate-50 border-l-4 border-slate-600">
            <section><figure>
                <pre><code>${JSON.stringify(r,null,2)}</code></pre>
            </figure></section>
        </div>
    `,argTypes:{label:{control:"text"},type:{control:"inline-radio",options:["primary","secondary"]}},args:{label:"Hello",featured:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const n=["StoryArguments"];export{e as StoryArguments,n as __namedExportsOrder,t as default};
