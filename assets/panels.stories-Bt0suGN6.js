const H={title:"Designs/Simple Styles/Panels",parameters:{layout:"fullscreen"}},t=()=>`
    <div class="flow-root px-4 my-4 bg-red-500 text-white">
        <p class="my-3.5">I am a panel.</p>
    </div>
    <div class="flow-root px-4 my-4 bg-green-500 text-white">
        <p class="my-3.5">I am a panel.</p>
    </div>

    <div class="flow-root px-4 bg-red-500 text-white">
        <p class="my-3.5">I am a container.</p>
    </div>
    <div class="flow-root px-4 bg-green-500 text-white">
        <p class="my-3.5">I am a container.</p>
    </div>
`,s=()=>`
    <div class="flow-root px-4 my-4 bg-emerald-100 text-emerald-950">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
    </div>
`,r=()=>`
    <div class="flow-root px-4 my-4 border-l-[6px] border-gray-300 bg-yellow-50 text-3xl font-serif">
        <p class="my-3.5"><i>"Make it as simple as possible, but not simpler."</i></p>
    </div>
`,o=()=>`
    <div class="flow-root px-4 my-4 bg-red-500 text-white">
        <h3 class="my-2.5 text-2xl">Danger!</h3>
        <p class="my-3.5">Red often indicates a dangerous or negative situation.</p>
    </div>
`,a=()=>`
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white shadow-xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
`,n=()=>`
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white rounded-2xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
`,i=()=>{const e=document.createElement("div");return e.innerHTML=`
        <div class="flex justify-between items-start px-4 my-4 bg-red-500 text-white">
            <p class="my-3.5">Click on<br>the X<br>to close<br>this panel.</p>
            <button id="closeBtn" class="p-2 mt-4 flex items-center justify-center select-none bg-red-500 hover:bg-red-600 text-white hover:text-zinc-100 rounded-full" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    `,e.querySelector("#closeBtn").addEventListener("click",function(P){const c=P.currentTarget.parentElement;c.style.display="none",setTimeout(()=>c.style.display="",1e3)}),e},l=()=>{const e=document.createElement("div");return e.innerHTML=`
        <button id="openBtn" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-green-700">Show panel</button>

        <div id="panel" class="hidden flex justify-between items-start px-4 my-4 bg-green-600 text-white">
            <p class="my-3.5">Click on the X<br>to close this panel.</p>
            <button id="closeBtn" class="p-2 mt-4 flex items-center justify-center select-none bg-green-600 hover:bg-green-700 text-white hover:text-zinc-100 rounded-full" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    `,e.querySelector("#openBtn").addEventListener("click",function(){e.querySelector("#panel").classList.remove("hidden")}),e.querySelector("#closeBtn").addEventListener("click",function(){e.querySelector("#panel").classList.add("hidden")}),e};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 my-4 bg-red-500 text-white">
        <p class="my-3.5">I am a panel.</p>
    </div>
    <div class="flow-root px-4 my-4 bg-green-500 text-white">
        <p class="my-3.5">I am a panel.</p>
    </div>

    <div class="flow-root px-4 bg-red-500 text-white">
        <p class="my-3.5">I am a container.</p>
    </div>
    <div class="flow-root px-4 bg-green-500 text-white">
        <p class="my-3.5">I am a container.</p>
    </div>
\``,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,v,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 my-4 bg-emerald-100 text-emerald-950">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
    </div>
\``,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,w,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 my-4 border-l-[6px] border-gray-300 bg-yellow-50 text-3xl font-serif">
        <p class="my-3.5"><i>"Make it as simple as possible, but not simpler."</i></p>
    </div>
\``,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 my-4 bg-red-500 text-white">
        <h3 class="my-2.5 text-2xl">Danger!</h3>
        <p class="my-3.5">Red often indicates a dangerous or negative situation.</p>
    </div>
\``,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var L,q,S;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white shadow-xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
\``,...(S=(q=a.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var M,B,k;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white rounded-2xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
\``,...(k=(B=n.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var C,E,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const content = document.createElement('div');
  content.innerHTML = \`
        <div class="flex justify-between items-start px-4 my-4 bg-red-500 text-white">
            <p class="my-3.5">Click on<br>the X<br>to close<br>this panel.</p>
            <button id="closeBtn" class="p-2 mt-4 flex items-center justify-center select-none bg-red-500 hover:bg-red-600 text-white hover:text-zinc-100 rounded-full" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    \`;
  content.querySelector('#closeBtn')!.addEventListener('click', function (e: Event) {
    const panel = (e.currentTarget as HTMLButtonElement).parentElement as HTMLDivElement;
    panel.style.display = 'none';
    setTimeout(() => panel.style.display = '', 1000);
  });
  return content;
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var j,I,Q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const content = document.createElement('div');
  content.innerHTML = \`
        <button id="openBtn" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-green-700">Show panel</button>

        <div id="panel" class="hidden flex justify-between items-start px-4 my-4 bg-green-600 text-white">
            <p class="my-3.5">Click on the X<br>to close this panel.</p>
            <button id="closeBtn" class="p-2 mt-4 flex items-center justify-center select-none bg-green-600 hover:bg-green-700 text-white hover:text-zinc-100 rounded-full" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    \`;
  content.querySelector('#openBtn')!.addEventListener('click', function () {
    content.querySelector('#panel')!.classList.remove('hidden');
  });
  content.querySelector('#closeBtn')!.addEventListener('click', function () {
    content.querySelector('#panel')!.classList.add('hidden');
  });
  return content;
}`,...(Q=(I=l.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};const z=["Panel","PanelForNote","PanelForQuote","Alert","Card","Rounded","Closable","Showable"];export{o as Alert,a as Card,i as Closable,t as Panel,s as PanelForNote,r as PanelForQuote,n as Rounded,l as Showable,z as __namedExportsOrder,H as default};
