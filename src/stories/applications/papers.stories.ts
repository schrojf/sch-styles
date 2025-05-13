import type {Meta} from "@storybook/html";

const meta = {
    title: 'Applications/Papers',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const Empty = () => `
    <div class="font-sans antialiased text-gray-950">
        <main class="px-4 py-6 mx-auto max-w-4xl">
            <div class="border border-gray-200 rounded-md">
                <div class="py-12 px-6 flex flex-col items-center justify-center text-center">
                    <div class="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-normal text-gray-800 mb-1">No paper class is registered</h2>
                    <p class="text-gray-600 mb-6 max-w-lg">Paper class help you manage and organize your resources.</p>
                    <div class="bg-blue-50 border border-blue-200 rounded-md p-4 text-left w-full max-w-lg mb-6">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="text-blue-500 mt-1">
                                    <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div class="ml-2">
                                <p class="text-sm text-gray-700">Start by creating and registering your first paper class in <code class="bg-gray-100 px-1 py-0.5 rounded text-gray-800 font-mono text-xs">PapersServiceProvider</code>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
`;

export const Index = () => `
    <div class="font-sans antialiased text-gray-950">
        <button class="block sm:hidden fixed inset-0 z-20 bg-black/50"><!-- Side menu backdrop --></button>

        <aside>
            <nav class="fixed bottom-0 top-0 w-full max-w-80 z-20 sm:hidden lg:block bg-white border-r border-gray-200 overflow-auto">
                <div class="px-4 py-3 sticky top-0 h-14 bg-white z-30 border-b border-gray-200 flex items-center justify-between">
                    <h2 class="text-sm font-semibold text-gray-900">Pages</h2>
                    <div class="lg:hidden">
                        <button class="block p-1 rounded hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <ul class="p-4 break-words">
                    <li class="hidden mb-2"><a class=" font-medium text-gray-900 hover:text-gray-900 hover:underline" href="#">Something (Active)</a></li>
                    ${`<li class="mb-2"><a class="text-gray-600 hover:text-gray-900 hover:underline" href="#">Something</a></li>`.repeat(3)}
                </ul>
            </nav>
        </aside>

        <header class="lg:hidden px-4 py-3 sticky top-0 z-10 h-14 bg-white border-b border-gray-200">
            <button class="block p-1 rounded hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>

        <main class="lg:ml-80">
            <div class="px-4 py-6 max-w-4xl mx-auto">
                <div class="border-b border-gray-200 pb-4 mb-4">
                    <h1 class="text-xl font-semibold text-gray-900">No paper class is selected</h1>
                    <p class="mt-1 text-sm text-gray-600">Select which page you want to see.</p>
                </div>

                <div class="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="text-blue-500">
                                <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div class="ml-2">
                            <p class="text-sm text-gray-700">
                                Select a page from the sidebar or choose from the list below.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mb-2">
                    <h2 class="text-sm font-semibold text-gray-700">Pages</h2>
                </div>

                <div class="border border-gray-200 rounded-md overflow-hidden">
                    <ul class="divide-y divide-gray-200">
                        ${`
                            <li>
                                <a href="#" class="block px-4 py-3 group hover:bg-gray-100">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="size-4 text-gray-500 mr-2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        <span class="text-sm group-hover:text-gray-950 text-gray-900">Page One</span>
                                    </div>
                                    <div class="pl-6 pt-1 text-xs text-gray-600">Description...</div>
                                </a>
                            </li>
                        `.repeat(3)}
                    </ul>
                </div>
            </div>
        </main>
    </div>
`;

export const Layout = () => `
    <div class="font-sans antialiased text-gray-950">
        <aside>
            <nav class="fixed bottom-0 top-0 w-full max-w-80 z-30 sm:hidden lg:block bg-white border-r border-gray-200 overflow-auto">
                <div class="px-4 py-3 sticky top-0 h-14 bg-white z-30 border-b border-gray-200 flex items-center justify-between">
                    <h2 class="text-sm font-semibold text-gray-900">Pages</h2>
                    <div class="lg:hidden">
                        <button class="block p-1 rounded hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <ul class="p-4 break-words">
                    <li class="mb-2"><a class="text-gray-600 hover:text-gray-900 hover:underline" href="#">pneumonoultramicroscopicsilicovolcanoconiosis</a></li>
                    <li class="mb-2"><a class="font-medium text-gray-900 hover:text-gray-900 hover:underline" href="#">Something (Active)</a></li>
                    ${`<li class="mb-2"><a class="text-gray-600 hover:text-gray-900 hover:underline" href="#">Something</a></li>`.repeat(3)}
                </ul>
            </nav>
        </aside>

        <button class="block sm:hidden fixed inset-0 z-20 bg-black/50"><!-- Side menu backdrop --></button>

        <header class="lg:hidden px-4 py-3 sticky top-0 z-10 h-14 bg-white border-b border-gray-200">
            <button class="block p-1 rounded hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>

        <main class="lg:ml-80">
            <div class="px-4 py-6 mx-auto max-w-4xl">
                <div class="border-b border-gray-200 pb-4 mb-4">
                    <h1 class="text-xl font-semibold text-gray-900">Page</h1>
                    <div class="mt-2 text-gray-600 text-sm">Description...</div>
                </div>

                <section class="mb-4 border border-gray-200 rounded-md overflow-hidden">
                    <div class="px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                        <h2 class="text-sm font-semibold text-gray-900">First</h2>
                        <div class="flex items-center space-x-2">
                          <button class="text-xs text-gray-500 hover:text-gray-900">Copy</button>
                            <button class="p-1 rounded hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="text-gray-500">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="p-3">
                        content
                    </div>
                </section>

                <section class="mb-4 border border-gray-200 rounded-md overflow-hidden">
                    <div class="px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                        <h2 class="text-sm font-semibold text-gray-900">Empty</h2>
                        <div class="flex items-center space-x-2">
                            <button class="p-1 rounded hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="text-gray-500">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="px-2 py-3 bg-gray-100 text-center text-gray-500 text-sm rounded-sm">Empty cell</div>
                    </div>
                </section>

                <section class="mb-4 border border-gray-200 rounded-md overflow-hidden">
                    <div class="px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                        <h2 class="text-sm font-semibold text-gray-900">Empty 2</h2>
                        <div class="flex items-center space-x-2">
                            <button class="p-1 rounded hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="text-gray-500">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="p-3 bg-gray-50 text-center text-gray-500 text-sm rounded-sm">
                        Empty cell
                    </div>
                </section>

                <section class="mb-4 p-3 border border-gray-200 rounded-md bg-gray-50">
                    <div class="text-sm text-gray-500">
                        Ouput for 3 cells was hidden:
                        <ul class="list-disc list-inside mt-2">
                            <li>Form validation</li>
                            <li>Data processing</li>
                            <li>Email notification</li>
                        </ul>
                    </div>
                </section>

                <section class="mb-4 border border-gray-200 rounded-md overflow-hidden">
                    <div class="px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                        <h2 class="text-sm font-semibold text-gray-900">Exception</h2>
                    </div>
                    <div class="p-3">
                        <div class="border border-red-600 rounded-md break-words overflow-hidden">
                            <div class="px-3 py-2 bg-red-600 text-white font-medium">
                                Symfony\\Component\\Mailer\\Exception\\TransportException
                            </div>
                            <div class="px-3 py-2 bg-red-50 text-red-700 text-sm font-medium">
                                Connection could not be established with host "mailpit:1025": stream_socket_client(): php_network_getaddresses: getaddrinfo for mailpit failed: Temporary failure in name resolution
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-4 border border-gray-200 rounded-md overflow-hidden">
                    <div class="px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                        <h2 class="text-sm font-semibold text-gray-900">Exception 2</h2>
                    </div>
                    <div class="p-3">
                        <div class="break-words font-medium">
                            <div>
                                <span class="text-red-600">Symfony\\Component\\Mailer\\Exception\\TransportException</span>
                                <span class="text-gray-500">(E_ERROR)</span>
                            </div>
                            <div class="mt-1 text-sm">
                                Connection could not be established with host "mailpit:1025": stream_socket_client(): php_network_getaddresses: getaddrinfo for mailpit failed: Temporary failure in name resolution
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-4 p-3 border border-red-200 rounded-md bg-red-50">
                    <div class="text-sm text-red-700">
                        <span class="font-bold">3</span> cells could not be run due to exception in previous cell:
                        <ul class="list-disc list-inside mt-2">
                            <li>Form validation</li>
                            <li>Data processing</li>
                            <li>Email notification</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    </div>
`;
