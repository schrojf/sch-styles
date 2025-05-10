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
        <main class="px-2 sm:px-4 mx-auto max-w-4xl">
            <h1 class="mt-4 mb-2 text-3xl font-bold">
                No papers classes are registered
            </h1>
            <section class="mt-4 text-gray-600 bg-gray-50 border border-gray-300 rounded-md shadow-sm overflow-hidden">
                <div class="px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                    </svg>
                    Start by creating and registering your first paper page.
                </div>
            </section>
        </main>
    </div>
`;

export const Index = () => `
    <div class="font-sans antialiased text-gray-950">
        <aside>
            <nav class="fixed bottom-0 top-0 w-full max-w-80 z-20 hidden lg:block bg-white border-r border-gray-300 overflow-auto">
                <div class="flex items-center mt-4">
                    <h2 class="flex-1 px-4 font-bold">Pages</h2>
                    <div class="lg:hidden">
                        <button class="block mx-4 outline-gray-950 focus:bg-gray-300 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <ul class="px-4 break-words">
                    ${`<li class="mt-2"><a class="text-gray-600 hover:text-gray-950 hover:underline" href="#">Something</a></li>`.repeat(3)}
                </ul>
            </nav>
        </aside>
        <header class="flow-root lg:hidden x-border-b border-gray-300">
            <button class="block m-1 p-1 sm:m-2 sm:p-2 outline-gray-950 focus:bg-gray-300 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>
        <section class="lg:ml-80">
            <div class="px-2 sm:px-4 mx-auto max-w-4xl">
                <h1 class="mt-4 mb-2 text-3xl font-bold">
                    No papers class is selected
                </h1>
                <p class="mb-6 text-sm font-normal">
                    Select which page you want to see.
                </p>
                <h2 class="font-bold">Pages</h2>
                <ul class="break-words">
                    ${`
                        <li class="mt-4 pb-4 border-b border-gray-300 last:border-0">
                            <a class="text-gray-600 hover:text-gray-950 underline" href="#">Something</a>
                        </li>
                    `.repeat(3)}
                </ul>
            </div>
        </h1>
    </div>
`;

export const Layout = () => `
    <div class="font-sans antialiased text-gray-950">
        <aside>
            <nav class="fixed bottom-0 top-0 w-full max-w-80 z-20 hidden lg:block bg-white border-r border-gray-300 overflow-auto">
                <div class="flex items-center mt-4">
                    <h2 class="flex-1 px-4 font-bold">Pages</h2>
                    <div class="lg:hidden">
                        <button class="block mx-4 outline-gray-950 focus:bg-gray-300 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <ul class="px-4 break-words">
                    <li class="mt-2"><a class="text-gray-600 hover:text-gray-950 hover:underline" href="#">pneumonoultramicroscopicsilicovolcanoconiosis</a></li>
                    <li class="mt-2"><a class="font-medium hover:underline" href="#">Something</a></li>
                    ${`<li class="mt-2"><a class="text-gray-600 hover:text-gray-950 hover:underline" href="#">Something</a></li>`.repeat(15)}
                </ul>
            </nav>
        </aside>
        <header class="flow-root lg:hidden x-border-b border-gray-300">
            <button class="block m-1 p-1 sm:m-2 sm:p-2 outline-gray-950 focus:bg-gray-300 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>
        <section class="lg:ml-80">
            <div class="px-2 sm:px-4 mx-auto max-w-4xl">
                <h1 class="mt-4 text-3xl font-bold">Page</h1>
                <article class="mt-4 border border-gray-300 rounded-md shadow-sm overflow-hidden">
                    <h2 class="px-2 py-2 font-semibold bg-gray-50 border-b border-gray-300">First</h2>
                    <div class="px-2 py-2">
                        content
                    </div>
                </article>
                <article class="mt-4 border border-gray-300 rounded-md shadow-sm overflow-hidden">
                    <h2 class="px-2 py-2 font-semibold bg-gray-50 border-b border-gray-300">Empty</h2>
                    <div class="px-2 py-2">
                        <div class="px-2 py-2 bg-gray-100 text-center text-gray-600 text-sm x-rounded-md">Empty cell</div>
                    </div>
                </article>
                <article class="mt-4 border border-gray-300 rounded-md shadow-sm overflow-hidden">
                    <h2 class="px-2 py-2 font-semibold bg-gray-50 border-b border-gray-300">Exception</h2>
                    <div class="px-2 py-2">
                        <div class="bg-red-600 rounded break-words overflow-hidden">
                            <div class="px-2 py-1 bg-black/10 text-red-50 text-sm font-bold">
                                Symfony\\Component\\Mailer\\Exception\\TransportException
                            </div>
                            <div class="px-2 py-1 text-white text-lg font-bold">
                                Connection could not be established with host "mailpit:1025": stream_socket_client(): php_network_getaddresses: getaddrinfo for mailpit failed: Temporary failure in name resolution
                            </div>
                        </div>
                    </div>
                </article>
                <article class="mt-4 border border-gray-300 rounded-md shadow-sm overflow-hidden">
                    <h2 class="px-2 py-2 font-semibold bg-gray-50 border-b border-gray-300">Exception 2</h2>
                    <div class="px-2 py-2">
                        <div class="break-words font-bold">
                            <div class="">
                                <span class="text-red-600">Symfony\\Component\\Mailer\\Exception\\TransportException</span>
                                <span class="text-gray-600">(E_ERROR)</span>
                            </div>
                            <div class="mt-1 text-xl">
                                Connection could not be established with host "mailpit:1025": stream_socket_client(): php_network_getaddresses: getaddrinfo for mailpit failed: Temporary failure in name resolution
                            </div>
                        </div>
                    </div>
                </article>

                <article class="mt-4 px-2 text-gray-600 text-sm">
                    3 cells could not be runned due to execption in previous cell.
                    <ul class="list-disc list-inside">
                        <li class=""><div class="inline-block -ml-2.5">aaa</div></li>
                    </ul>
                </article>

            </div>
        </h1>
    </div>
`;
