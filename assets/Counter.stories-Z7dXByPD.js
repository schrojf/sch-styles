const m="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23007ACC'%20d='M0%20128v128h256V0H0z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='m56.612%20128.85l-.081%2010.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.4-.244-44.983-.203l-44.74.122l-.121%2010.443Zm149.955-10.742c6.501%201.625%2011.459%204.51%2016.01%209.224c2.357%202.52%205.851%207.111%206.136%208.208c.08.325-11.053%207.802-17.798%2011.988c-.244.162-1.22-.894-2.317-2.52c-3.291-4.795-6.745-6.867-12.028-7.233c-7.76-.528-12.759%203.535-12.718%2010.321c0%201.992.284%203.17%201.097%204.795c1.707%203.536%204.876%205.649%2014.832%209.956c18.326%207.883%2026.168%2013.084%2031.045%2020.48c5.445%208.249%206.664%2021.415%202.966%2031.208c-4.063%2010.646-14.14%2017.879-28.323%2020.276c-4.388.772-14.79.65-19.504-.203c-10.28-1.828-20.033-6.908-26.047-13.572c-2.357-2.6-6.949-9.387-6.664-9.874c.122-.163%201.178-.813%202.356-1.504c1.138-.65%205.446-3.129%209.509-5.485l7.355-4.267l1.544%202.276c2.154%203.29%206.867%207.801%209.712%209.305c8.167%204.307%2019.383%203.698%2024.909-1.26c2.357-2.153%203.332-4.388%203.332-7.68c0-2.966-.366-4.266-1.91-6.501c-1.99-2.845-6.054-5.242-17.595-10.24c-13.206-5.69-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.617-1.22-12.678-.447-16.335c2.723-12.76%2012.353-21.659%2026.25-24.3c4.51-.853%2014.994-.528%2019.424.569Z'%3e%3c/path%3e%3c/svg%3e",g=""+new URL("../vite.svg",import.meta.url).href;function p(e){let o=0;const n=u=>{o=u,e.innerHTML=`count is ${o}`};e.addEventListener("click",()=>n(o+1)),n(0)}const h={title:"Example/Counter",parameters:{layout:"fullscreen",backgrounds:{default:"light",values:[{name:"dark",value:"#242424"},{name:"light",value:"#ffffff"}]}}},t={render:()=>{const e=document.createElement("button");return e.type="button",e.className="bg-gray-300 py-2 px-4 font-medium cursor-pointer rounded-lg border border-transparent hover:border-gray-800 transition-colors focus:outline-none focus:shadow-outline focus:border-blue-300",p(e),e},parameters:{layout:"centered",backgrounds:{default:"dark"}}},r=()=>{const e=document.createElement("div");return e.className="flex m-0 place-items-center min-h-screen min-w-20",e.innerHTML=`
        <div class="container text-center mx-auto p-8">
            <a href="https://vitejs.dev" class="font-medium text-purple-600 hover:text-purple-800" target="_blank">
                <img src="${g}" class="inline h-24 m-6 transition-shadow hover:drop-shadow-2xl" alt="Vite logo" />
            </a>
            <a href="https://www.typescriptlang.org/" class="font-medium text-purple-600 hover:text-purple-800" target="_blank">
                <img src="${m}" class="inline h-24 m-6 transition-shadow hover:drop-shadow-2xl" alt="TypeScript logo" />
            </a>
            <h1 class="text-5xl leading-tight">Vite + TypeScript</h1>
            <div class="p-4">
                <button id="counter" type="button" class="bg-gray-300 py-2 px-4 font-medium cursor-pointer rounded-lg border border-transparent hover:border-purple-800 transition-colors focus:outline-black"></button>
            </div>
            <p class="text-gray-600">
                Click on the Vite and TypeScript logos to learn more
            </p>
        </div>
`,p(e.querySelector("#counter")),e};var a,s,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bg-gray-300 py-2 px-4 font-medium cursor-pointer rounded-lg border border-transparent hover:border-gray-800 transition-colors focus:outline-none focus:shadow-outline focus:border-blue-300';
    setupCounter(btn);
    return btn;
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const div = document.createElement('div');
  div.className = 'flex m-0 place-items-center min-h-screen min-w-20';
  div.innerHTML = \`
        <div class="container text-center mx-auto p-8">
            <a href="https://vitejs.dev" class="font-medium text-purple-600 hover:text-purple-800" target="_blank">
                <img src="\${viteLogo}" class="inline h-24 m-6 transition-shadow hover:drop-shadow-2xl" alt="Vite logo" />
            </a>
            <a href="https://www.typescriptlang.org/" class="font-medium text-purple-600 hover:text-purple-800" target="_blank">
                <img src="\${typescriptLogo}" class="inline h-24 m-6 transition-shadow hover:drop-shadow-2xl" alt="TypeScript logo" />
            </a>
            <h1 class="text-5xl leading-tight">Vite + TypeScript</h1>
            <div class="p-4">
                <button id="counter" type="button" class="bg-gray-300 py-2 px-4 font-medium cursor-pointer rounded-lg border border-transparent hover:border-purple-800 transition-colors focus:outline-black"></button>
            </div>
            <p class="text-gray-600">
                Click on the Vite and TypeScript logos to learn more
            </p>
        </div>
\`;
  setupCounter(div.querySelector<HTMLButtonElement>('#counter')!);
  return div;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Button","Page"];export{t as Button,r as Page,v as __namedExportsOrder,h as default};
