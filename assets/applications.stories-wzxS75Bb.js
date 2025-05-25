const c=`<div class="min-h-screen bg-slate-100 text-slate-500 antialiased">
    <div id="app">
        <header class="">
            <button
                id="openSidebarBtn"
                type="button"
                class="block px-4 py-3 lg:hidden"
            >
                <span class="sr-only">Open sidebar</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </header>
        <nav
            id="appSidebar"
            class="fixed inset-0 z-20 hidden w-full max-w-72 border-r bg-white lg:block lg:border-r-0 lg:bg-transparent"
        >
            <div class="flex h-full min-h-full flex-col">
                <div class="px-4 pt-4">
                    <img src="/logoipsum-254.svg" alt="Logo Ipsum" />
                </div>
                <div class="mt-16 flex-grow overflow-y-auto px-4">
                    <ul class="space-y-1">
                        <li>
                            <a
                                class="flex items-center gap-2.5 rounded-lg p-2 font-medium leading-tight text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                                href="#"
                                onclick="return false;"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6 flex-shrink-0"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
                                Overview
                            </a>
                        </li>
                        <li>
                            <a
                                class="flex items-center gap-2.5 rounded-lg bg-gray-200 p-2 font-medium leading-tight text-gray-800"
                                href="#"
                                onclick="return false;"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6 flex-shrink-0"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                    />
                                </svg>
                                Documents
                            </a>
                        </li>
                        <li>
                            <a
                                class="flex items-center gap-2.5 rounded-lg p-2 font-medium leading-tight text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                                href="#"
                                onclick="return false;"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6 flex-shrink-0"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                    />
                                </svg>
                                Analytics
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center p-4">
                    <div class="flex-shrink-0">
                        <img
                            class="h-10 w-10 rounded-full border border-gray-800 bg-white p-0.5"
                            src="/kaitlin-dowis-3YnT86K0CdE-unsplash.jpg"
                            alt=""
                        />
                    </div>
                    <div class="ml-3">
                        <div
                            class="text-base font-medium leading-none text-gray-800"
                        >
                            Maccaw
                        </div>
                    </div>
                    <button
                        type="button"
                        class="ml-auto flex-shrink-0 rounded border border-gray-300 bg-white p-1.5 text-gray-700 shadow-sm hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span class="sr-only">Open settings</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="absolute left-full top-0 pl-2 pt-4 lg:hidden">
                <button id="closeSidebarBtn" class="ml-[1px] p-2.5 text-white">
                    <span class="sr-only">Close sidebar</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </nav>
        <button
            id="appBackDrop"
            class="fixed inset-0 z-10 hidden bg-slate-950/75 opacity-100 lg:hidden"
            tabindex="-1"
        ></button>
        <div class="lg:pl-72">
            <main class="px-2 py-4">
                <div
                    class="mx-auto max-w-7xl rounded-2xl border bg-white px-4 py-6 shadow"
                >
                    <div class="flex items-center justify-between">
                        <div
                            class="flex items-center overflow-hidden text-slate-900"
                        >
                            <!-- or min-w-6 -->
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6 flex-shrink-0"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                />
                            </svg>
                            <h2 class="ml-2 truncate text-xl font-bold">
                                Document file.pdf
                            </h2>
                        </div>
                        <button
                            type="button"
                            class="block flex-shrink-0 rounded-lg border bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-gray-200 hover:text-gray-800 active:bg-gray-300"
                        >
                            Create Link
                        </button>
                    </div>
                    <div
                        class="mt-4 h-80 rounded-lg border border-dashed border-slate-300 bg-slate-100 opacity-90 hover:border-slate-400 hover:bg-slate-100/80"
                    ></div>
                </div>
            </main>
            <footer class="mb-4">
                <p class="text-center text-sm tracking-tight md:text-base">
                    Application layout.
                    <span xmlns:cc="http://creativecommons.org/ns#"
                        >This work is marked with
                        <a
                            href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1"
                            target="_blank"
                            rel="license noopener noreferrer"
                            >CC0 1.0</a
                        ></span
                    >
                </p>
            </footer>
        </div>
    </div>
</div>
`,h={title:"Layouts/Applications",parameters:{layout:"fullscreen"}},s=()=>{var i;const e=document.createElement("div");e.innerHTML=c;const t=e.querySelector("#appSidebar"),n=e.querySelector("#appBackDrop"),r=e.querySelector("#closeSidebarBtn");(i=e.querySelector("#openSidebarBtn"))==null||i.addEventListener("click",function(){t&&(t.classList.remove("hidden"),n==null||n.classList.remove("hidden"))});function o(){t==null||t.classList.add("hidden"),n==null||n.classList.add("hidden")}return n==null||n.addEventListener("click",o),r==null||r.addEventListener("click",o),e.firstElementChild};var l,a,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const div = document.createElement('div');
  div.innerHTML = SimplePage;
  const appSidebar = div.querySelector('#appSidebar');
  const appBackDrop = div.querySelector('#appBackDrop');
  const closeSidebarBtn = div.querySelector('#closeSidebarBtn');
  div.querySelector('#openSidebarBtn')?.addEventListener('click', function () {
    if (!appSidebar) {
      return;
    }
    appSidebar.classList.remove('hidden');
    appBackDrop?.classList.remove('hidden');
  });
  function closeSidebar() {
    appSidebar?.classList.add('hidden');
    appBackDrop?.classList.add('hidden');
  }
  appBackDrop?.addEventListener('click', closeSidebar);
  closeSidebarBtn?.addEventListener('click', closeSidebar);
  return div.firstElementChild;
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const p=["Simple"];export{s as Simple,p as __namedExportsOrder,h as default};
