const p={title:"Designs/Simple Styles/Panels",parameters:{layout:"fullscreen"}},t=()=>`
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
    `,e.querySelector("#closeBtn").addEventListener("click",function(d){const c=d.currentTarget.parentElement;c.style.display="none",setTimeout(()=>c.style.display="",1e3)}),e},l=()=>{const e=document.createElement("div");return e.innerHTML=`
        <button id="openBtn" class="px-4 py-2 align-middle text-center whitespace-nowrap overflow-hidden select-none bg-green-600 text-white hover:bg-green-700">Show panel</button>

        <div id="panel" class="hidden flex justify-between items-start px-4 my-4 bg-green-600 text-white">
            <p class="my-3.5">Click on the X<br>to close this panel.</p>
            <button id="closeBtn" class="p-2 mt-4 flex items-center justify-center select-none bg-green-600 hover:bg-green-700 text-white hover:text-zinc-100 rounded-full" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    `,e.querySelector("#openBtn").addEventListener("click",function(){e.querySelector("#panel").classList.remove("hidden")}),e.querySelector("#closeBtn").addEventListener("click",function(){e.querySelector("#panel").classList.add("hidden")}),e};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
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
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 my-4 bg-emerald-100 text-emerald-950">
        <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
    </div>
\``,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 my-4 border-l-[6px] border-gray-300 bg-yellow-50 text-3xl font-serif">
        <p class="my-3.5"><i>"Make it as simple as possible, but not simpler."</i></p>
    </div>
\``,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
    <div class="flow-root px-4 my-4 bg-red-500 text-white">
        <h3 class="my-2.5 text-2xl">Danger!</h3>
        <p class="my-3.5">Red often indicates a dangerous or negative situation.</p>
    </div>
\``,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white shadow-xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
    <div class="px-4">
        <div class="flow-root px-4 my-4 bg-sky-500 text-white rounded-2xl">
            <p class="my-3.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vel quam gravida sagittis. Mauris ornare lorem id magna finibus, euismod aliquam orci consectetur.</p>
        </div>
    </div>
\``,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const m=["Panel","PanelForNote","PanelForQuote","Alert","Card","Rounded","Closable","Showable"];export{o as Alert,a as Card,i as Closable,t as Panel,s as PanelForNote,r as PanelForQuote,n as Rounded,l as Showable,m as __namedExportsOrder,p as default};
