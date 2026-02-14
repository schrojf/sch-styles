const b={title:"Playground/Incubator",parameters:{layout:"fullscreen"}},e=()=>"",n=()=>`
    <div class="p-2 sm:p-4 bg-yellow-50">
        <div class="border border-neutral-300 rounded-xl overflow-hidden bg-red-50 mx-auto max-w-2xl">
            <div class="p-2 sm:p-4 bg-white">
                <h2 class="pb-2 mb-2 text-2xl tracking-tight text-neutral-900 border-b border-neutral-300">Component name</h2>
                <!-- Component content start -->
                    ...
                <!-- Component content end -->
            </div>
            <div class="p-2 sm:p-4 border-t border-neutral-300 bg-neutral-100">
                <h3 class="mb-2 text-xl tracking-tight text-neutral-900">Code</h3>
                <div class="p-2 border-l-4 border-green-600 bg-white font-mono text-neutral-900 overflow-x-auto align-middle">
                    <pre><code>...<br>This is <span class="py-0.5 px-1 -mx-1 bg-neutral-200/75 font-medium text-neutral-950 rounded">highlighted</span> text.</code></pre>
                </div>
                <p class="mt-2 text-sm text-neutral-600">Component description...</p>
            </div>
        </div>
    </div>
`;function t(i){let p=document.createElement("div");return p.innerText=i,p.innerHTML}const o=()=>`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="border border-neutral-300 rounded-xl bg-white overflow-hidden mx-auto max-w-2xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-300 bg-neutral-100">
                <pre class="flex px-2 sm:px-4 py-4 border-l-4 border-r-4 border-neutral-600 font-mono text-neutral-900 overflow-x-auto align-middle">
                    <code>${t('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
`,s=()=>`
    <div class="p-2 sm:p-4">
        <div class="mx-auto max-w-screen-2xl">
            <div class="mb-4">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>

            <ul class="flex p-2 mb-4 border border-neutral-300 rounded-xl overflow-hidden">
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded py-2 px-4 bg-gray-300 hover:bg-gray-200 text-gray-900">XS</button>
                </li>
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">SM</button>
                </li>
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">MD</button>
                </li>
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">LG</button>
                </li>
                <li class="flex-1">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">XL</button>
                </li>
            </ul>

            <div class="px-2 py-4 mb-4 sm:px-4 sm:py-6 border border-neutral-300 rounded-xl bg-white overflow-hidden max-w-screen-sm">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>

            <div class="rounded-xl overflow-hidden shadow">
                <pre class="flex px-2 sm:px-4 py-4 font-mono bg-neutral-100 text-neutral-900 overflow-x-auto align-middle">
                    <code>${t('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
`,l=()=>`
    <div class="p-2 sm:p-4">
        <div class="mx-auto max-w-screen-2xl">
            <div class="mb-4">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>

            <div class="flex mb-2">
                <div class="grid grid-cols-5 mb-2 bg-white">
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                        <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                        </svg>
                        <p class="text-xs">xs</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path
                                d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                        <p class="text-xs">sm</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path
                                d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                        <p class="text-xs">md</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                        </svg>
                        <p class="text-xs">lg</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                        </svg>
                        <p class="text-xs">xl</p>
                    </button>
                </div>
            </div>

            <div class="mb-4 bg-neutral-100 border border-neutral-300 rounded-xl overflow-hidden">
                <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 border-r border-neutral-300 rounded-xl bg-white overflow-hidden max-w-screen-sm">
                    <!-- Component content start -->
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                    <!-- Component content end -->
                </div>
            </div>

            <div class="rounded-xl border border-neutral-300 text-neutral-900 overflow-hidden">
                <pre class="flex px-2 sm:px-4 py-4 font-mono overflow-x-auto align-middle">
                    <code>${t('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
`,r=()=>`
    <div class="p-2 sm:p-4">
        <div class="mx-auto max-w-screen-2xl">
            <div class="mb-4">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>

            <div class="mb-4 border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden">
                <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                    <div class="flex justify-center">
                        <div class="grid grid-cols-5 mb-2 bg-white">
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                                <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                                </svg>
                                <p class="text-xs">xs</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path
                                        d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                                <p class="text-xs">sm</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path
                                        d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                                <p class="text-xs">md</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                                </svg>
                                <p class="text-xs">lg</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                                </svg>
                                <p class="text-xs">xl</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-300">
                    <!-- Component content start -->
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                    <!-- Component content end -->
                </div>
            </div>

            <div class="rounded-xl border border-neutral-300 text-neutral-900 overflow-hidden">
                <pre class="flex px-2 sm:px-4 py-4 font-mono overflow-x-auto align-middle">
                    <code>${t('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
`,a=()=>`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="mb-4 mx-auto max-w-screen-xl">
            <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
            <p class="mb-2 text-sm text-neutral-600">Component description...</p>
        </div>
        <div class="border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden mx-auto max-w-screen-xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <div class="flex justify-center">
                    <div class="grid grid-cols-5 mb-2 bg-white">
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                            <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">xs</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">sm</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">md</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">lg</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                            </svg>
                            <p class="text-xs">xl</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-200">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-200">
                <pre class="flex px-2 sm:px-4 py-4 font-mono text-neutral-900 overflow-x-auto align-middle">
                    <code>${t('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
`,d=()=>`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden mx-auto max-w-screen-xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <div class="flex justify-center">
                    <div class="grid grid-cols-5 mb-2 bg-white">
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                            <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">xs</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">sm</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">md</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">lg</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                            </svg>
                            <p class="text-xs">xl</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-200">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-200">
                <pre class="flex px-2 sm:px-4 py-4 font-mono text-neutral-900 overflow-x-auto align-middle">
                    <code>${t('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
`,c=()=>`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden mx-auto max-w-screen-xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>
            <div class="px-2 sm:px-4 border-b border-neutral-300 bg-white">
                <div class="flex justify-center">
                    SHOW CONTROL
                </div>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-200">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-200">
                <div class="flex justify-center">
                    SHOW CODE
                </div>
            </div>
        </div>
    </div>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => ``",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4 bg-yellow-50">
        <div class="border border-neutral-300 rounded-xl overflow-hidden bg-red-50 mx-auto max-w-2xl">
            <div class="p-2 sm:p-4 bg-white">
                <h2 class="pb-2 mb-2 text-2xl tracking-tight text-neutral-900 border-b border-neutral-300">Component name</h2>
                <!-- Component content start -->
                    ...
                <!-- Component content end -->
            </div>
            <div class="p-2 sm:p-4 border-t border-neutral-300 bg-neutral-100">
                <h3 class="mb-2 text-xl tracking-tight text-neutral-900">Code</h3>
                <div class="p-2 border-l-4 border-green-600 bg-white font-mono text-neutral-900 overflow-x-auto align-middle">
                    <pre><code>...<br>This is <span class="py-0.5 px-1 -mx-1 bg-neutral-200/75 font-medium text-neutral-950 rounded">highlighted</span> text.</code></pre>
                </div>
                <p class="mt-2 text-sm text-neutral-600">Component description...</p>
            </div>
        </div>
    </div>
\``,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="border border-neutral-300 rounded-xl bg-white overflow-hidden mx-auto max-w-2xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-300 bg-neutral-100">
                <pre class="flex px-2 sm:px-4 py-4 border-l-4 border-r-4 border-neutral-600 font-mono text-neutral-900 overflow-x-auto align-middle">
                    <code>\${escapeHTML('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
\``,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4">
        <div class="mx-auto max-w-screen-2xl">
            <div class="mb-4">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>

            <ul class="flex p-2 mb-4 border border-neutral-300 rounded-xl overflow-hidden">
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded py-2 px-4 bg-gray-300 hover:bg-gray-200 text-gray-900">XS</button>
                </li>
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">SM</button>
                </li>
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">MD</button>
                </li>
                <li class="flex-1 mr-2">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">LG</button>
                </li>
                <li class="flex-1">
                    <button class="text-center block w-full rounded bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-4">XL</button>
                </li>
            </ul>

            <div class="px-2 py-4 mb-4 sm:px-4 sm:py-6 border border-neutral-300 rounded-xl bg-white overflow-hidden max-w-screen-sm">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>

            <div class="rounded-xl overflow-hidden shadow">
                <pre class="flex px-2 sm:px-4 py-4 font-mono bg-neutral-100 text-neutral-900 overflow-x-auto align-middle">
                    <code>\${escapeHTML('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
\``,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4">
        <div class="mx-auto max-w-screen-2xl">
            <div class="mb-4">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>

            <div class="flex mb-2">
                <div class="grid grid-cols-5 mb-2 bg-white">
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                        <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                        </svg>
                        <p class="text-xs">xs</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path
                                d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                        <p class="text-xs">sm</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path
                                d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                        <p class="text-xs">md</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                        </svg>
                        <p class="text-xs">lg</p>
                    </button>
                    <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                        <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                            <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                        </svg>
                        <p class="text-xs">xl</p>
                    </button>
                </div>
            </div>

            <div class="mb-4 bg-neutral-100 border border-neutral-300 rounded-xl overflow-hidden">
                <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 border-r border-neutral-300 rounded-xl bg-white overflow-hidden max-w-screen-sm">
                    <!-- Component content start -->
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                    <!-- Component content end -->
                </div>
            </div>

            <div class="rounded-xl border border-neutral-300 text-neutral-900 overflow-hidden">
                <pre class="flex px-2 sm:px-4 py-4 font-mono overflow-x-auto align-middle">
                    <code>\${escapeHTML('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
\``,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4">
        <div class="mx-auto max-w-screen-2xl">
            <div class="mb-4">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>

            <div class="mb-4 border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden">
                <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                    <div class="flex justify-center">
                        <div class="grid grid-cols-5 mb-2 bg-white">
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                                <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                                </svg>
                                <p class="text-xs">xs</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path
                                        d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                                <p class="text-xs">sm</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path
                                        d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                                <p class="text-xs">md</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                                </svg>
                                <p class="text-xs">lg</p>
                            </button>
                            <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                                <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                    <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                                </svg>
                                <p class="text-xs">xl</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-300">
                    <!-- Component content start -->
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                    <!-- Component content end -->
                </div>
            </div>

            <div class="rounded-xl border border-neutral-300 text-neutral-900 overflow-hidden">
                <pre class="flex px-2 sm:px-4 py-4 font-mono overflow-x-auto align-middle">
                    <code>\${escapeHTML('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
\``,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="mb-4 mx-auto max-w-screen-xl">
            <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
            <p class="mb-2 text-sm text-neutral-600">Component description...</p>
        </div>
        <div class="border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden mx-auto max-w-screen-xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <div class="flex justify-center">
                    <div class="grid grid-cols-5 mb-2 bg-white">
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                            <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">xs</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">sm</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">md</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">lg</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                            </svg>
                            <p class="text-xs">xl</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-200">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-200">
                <pre class="flex px-2 sm:px-4 py-4 font-mono text-neutral-900 overflow-x-auto align-middle">
                    <code>\${escapeHTML('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
\``,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden mx-auto max-w-screen-xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <div class="flex justify-center">
                    <div class="grid grid-cols-5 mb-2 bg-white">
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-800">
                            <svg width="8.57142857142857" height="24" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">xs</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="11.999999999999998" height="24" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">sm</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="22.28571428571428" height="24" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path
                                    d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="text-xs">md</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs">lg</p>
                        </button>
                        <button type="button" class="inline-block text-center cursor-pointer select-none px-3 text-neutral-500">
                            <svg width="30.85714285714285" height="24" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" class="fill-current block mx-auto mb-1">
                                <path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"></path>
                            </svg>
                            <p class="text-xs">xl</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-200">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-200">
                <pre class="flex px-2 sm:px-4 py-4 font-mono text-neutral-900 overflow-x-auto align-middle">
                    <code>\${escapeHTML('<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>')}</code>
                </pre>
            </div>
        </div>
    </div>
\``,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
    <div class="p-2 sm:p-4 bg-slate-100 h-screen">
        <div class="border border-neutral-300 rounded-xl bg-neutral-100 overflow-hidden mx-auto max-w-screen-xl">
            <div class="px-2 sm:px-4 pt-3 pb-1 border-b border-neutral-300 bg-white">
                <h2 class="mb-2 text-2xl tracking-tight text-neutral-900">Component name</h2>
                <p class="mb-2 text-sm text-neutral-600">Component description...</p>
            </div>
            <div class="px-2 sm:px-4 border-b border-neutral-300 bg-white">
                <div class="flex justify-center">
                    SHOW CONTROL
                </div>
            </div>
            <div class="px-2 py-4 sm:px-4 sm:py-6 -mr-1 max-w-screen-sm bg-white border-r border-neutral-200">
                <!-- Component content start -->
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                <!-- Component content end -->
            </div>
            <div class="border-t border-neutral-200">
                <div class="flex justify-center">
                    SHOW CODE
                </div>
            </div>
        </div>
    </div>
\``,...c.parameters?.docs?.source}}};const u=["Empty","ComponentCodeWrapper","SimplerComponentCodeWrapper","ComponentWithCode","ComponentWithCodeAndButtons","ComponentWithCodeAndButtons2","ComponentCodeWrapperWithButtons","ComponentCodeWrapperWithButtons2","ComponentCodeWrapperWithButtons2Collapsed"];export{n as ComponentCodeWrapper,a as ComponentCodeWrapperWithButtons,d as ComponentCodeWrapperWithButtons2,c as ComponentCodeWrapperWithButtons2Collapsed,s as ComponentWithCode,l as ComponentWithCodeAndButtons,r as ComponentWithCodeAndButtons2,e as Empty,o as SimplerComponentCodeWrapper,u as __namedExportsOrder,b as default};
