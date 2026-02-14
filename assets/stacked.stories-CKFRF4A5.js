const g={title:"Layouts/Stacked",parameters:{layout:"fullscreen"}},l=()=>{function n(){return`
            <div class="hidden sm:block relative sm:ml-6">
                <button id="toggleDropdownBtn" class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                    <img class="h-full w-full object-cover" src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Maccaw">
                </button>
                <button id="closeDropdownOverlay" data-toggle-group="dropdown" data-toggle-class='{"opened": "block", "closed": "hidden"}' tabindex="-1" class="fixed inset-0 h-full w-full bg-black/50 cursor-default"></button>
                <div data-toggle-group="dropdown" data-toggle-class='{"opened": "block", "closed": "hidden"}' class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
                    <a class="block px-4 py-2 text-gray-900 hover:bg-indigo-600 hover:text-white" href="#" onclick="return false;">Account settings</a>
                    <a class="block px-4 py-2 text-gray-900 hover:bg-indigo-600 hover:text-white" href="#" onclick="return false;">Support</a>
                    <a class="block px-4 py-2 text-gray-900 hover:bg-indigo-600 hover:text-white" href="#" onclick="return false;">Sign out</a>
                </div>
            </div>
        `}const s=document.createElement("div");s.innerHTML=`
        <div id="app" class="antialiased text-gray-900">
            <div class="bg-gray-100 min-h-screen">
                <header class="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
                    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
                        <div>
                            <img class="h-8" src="logoipsum-289.svg" alt="Logo impsum">
                        </div>
                        <div class="sm:hidden">
                            <button id="toggleMenuBtn" type="button" class="block text-gray-400 hover:text-white focus:text-white focus:outline-none">
                                <svg data-toggle-group="menu" data-toggle-class='{"opened": "hidden", "closed": "block"}' class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                </svg>
                                <svg data-toggle-group="menu" data-toggle-class='{"opened": "block", "closed": "hidden"}' class="h-6 w-6 fill-current hidden" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav data-toggle-group="menu" data-toggle-class='{"opened": "block", "closed": "hidden"}' class="sm:block">
                        <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
                            <a class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700" href="#" onclick="return false;">Dashboard</a>
                            <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2" href="#" onclick="return false;">Analytics</a>
                            <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2" href="#" onclick="return false;">Messages</a>
                            <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2" href="#" onclick="return false;">Settings</a>
                            ${n()}
                        </div>
                        <div class="px-4 py-5 border-t border-gray-700 sm:hidden">
                            <div class="flex items-center">
                                <img class="h-8 w-8 border-2 border-gray-600 rounded-full object-cover" src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Maccaw">
                                <span class="ml-3 font-semibold text-white">Maccaw</span>
                            </div>
                            <div class="mt-4">
                                <a class="block text-gray-300 hover:text-white" href="#" onclick="return false;">Account settings</a>
                                <a class="mt-2 block text-gray-300 hover:text-white" href="#" onclick="return false;">Support</a>
                                <a class="mt-2 block text-gray-300 hover:text-white" href="#" onclick="return false;">Sign out</a>
                            </div>
                        </div>
                    </nav>
                </header>

                <header class="bg-white shadow">
                    <div class="mx-auto max-w-7xl px-4 py-5">
                        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div class="mx-auto max-w-7xl py-5 px-2 sm:px-4">
                        <div class="flex items-center justify-center h-48 bg-white border border-gray-300 rounded-xl">
                            <span class="uppercase tracking-tighter font-medium text-gray-500">content</span>
                        </div>
                    </div>
                </main>
                <footer class="mx-auto max-w-7xl py-2 px-2 sm:px-4">
                    <p class="text-center text-md text-gray-500">Responsive Navbar Layout</p>
                </footer>
            </div>
        </div>
    `;function d(e){const o=JSON.parse(e.dataset.toggleClass);e.classList.remove(o.closed),e.classList.add(o.opened)}function i(e){const o=JSON.parse(e.dataset.toggleClass);e.classList.remove(o.opened),e.classList.add(o.closed)}const t={};function r(e){const o=e.dataset.toggleGroup;o&&o in t&&(t[o].isOpen?d(e):i(e))}s.querySelectorAll("[data-toggle-class]").forEach(e=>{const o=e.dataset.toggleGroup;o&&(o in t||(t[o]={isOpen:!1,items:[]}),r(e),t[o].items.push(e))});function a(e){e in t&&t[e].items.forEach(o=>r(o))}s.querySelector("#toggleMenuBtn").addEventListener("click",()=>{"menu"in t&&(t.menu.isOpen=!t.menu.isOpen,a("menu"))}),s.querySelector("#toggleDropdownBtn").addEventListener("click",()=>{"dropdown"in t&&(t.dropdown.isOpen=!t.dropdown.isOpen,a("dropdown"))}),s.querySelector("#closeDropdownOverlay").addEventListener("click",()=>{"dropdown"in t&&(t.dropdown.isOpen=!1,a("dropdown"))});function c(e){"dropdown"in t&&t.dropdown.isOpen&&(e.key=="Esc"||e.key=="Escape")&&(t.dropdown.isOpen=!1,a("dropdown"))}return s.addEventListener("keydown",c),s};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  function DropdownElement() {
    return \`
            <div class="hidden sm:block relative sm:ml-6">
                <button id="toggleDropdownBtn" class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                    <img class="h-full w-full object-cover" src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Maccaw">
                </button>
                <button id="closeDropdownOverlay" data-toggle-group="dropdown" data-toggle-class='{"opened": "block", "closed": "hidden"}' tabindex="-1" class="fixed inset-0 h-full w-full bg-black/50 cursor-default"></button>
                <div data-toggle-group="dropdown" data-toggle-class='{"opened": "block", "closed": "hidden"}' class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
                    <a class="block px-4 py-2 text-gray-900 hover:bg-indigo-600 hover:text-white" href="#" onclick="return false;">Account settings</a>
                    <a class="block px-4 py-2 text-gray-900 hover:bg-indigo-600 hover:text-white" href="#" onclick="return false;">Support</a>
                    <a class="block px-4 py-2 text-gray-900 hover:bg-indigo-600 hover:text-white" href="#" onclick="return false;">Sign out</a>
                </div>
            </div>
        \`;
  }
  const div = document.createElement('div');
  div.innerHTML = \`
        <div id="app" class="antialiased text-gray-900">
            <div class="bg-gray-100 min-h-screen">
                <header class="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
                    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
                        <div>
                            <img class="h-8" src="logoipsum-289.svg" alt="Logo impsum">
                        </div>
                        <div class="sm:hidden">
                            <button id="toggleMenuBtn" type="button" class="block text-gray-400 hover:text-white focus:text-white focus:outline-none">
                                <svg data-toggle-group="menu" data-toggle-class='{"opened": "hidden", "closed": "block"}' class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                </svg>
                                <svg data-toggle-group="menu" data-toggle-class='{"opened": "block", "closed": "hidden"}' class="h-6 w-6 fill-current hidden" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav data-toggle-group="menu" data-toggle-class='{"opened": "block", "closed": "hidden"}' class="sm:block">
                        <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
                            <a class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700" href="#" onclick="return false;">Dashboard</a>
                            <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2" href="#" onclick="return false;">Analytics</a>
                            <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2" href="#" onclick="return false;">Messages</a>
                            <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2" href="#" onclick="return false;">Settings</a>
                            \${DropdownElement()}
                        </div>
                        <div class="px-4 py-5 border-t border-gray-700 sm:hidden">
                            <div class="flex items-center">
                                <img class="h-8 w-8 border-2 border-gray-600 rounded-full object-cover" src="kaitlin-dowis-3YnT86K0CdE-unsplash.jpg" alt="Maccaw">
                                <span class="ml-3 font-semibold text-white">Maccaw</span>
                            </div>
                            <div class="mt-4">
                                <a class="block text-gray-300 hover:text-white" href="#" onclick="return false;">Account settings</a>
                                <a class="mt-2 block text-gray-300 hover:text-white" href="#" onclick="return false;">Support</a>
                                <a class="mt-2 block text-gray-300 hover:text-white" href="#" onclick="return false;">Sign out</a>
                            </div>
                        </div>
                    </nav>
                </header>

                <header class="bg-white shadow">
                    <div class="mx-auto max-w-7xl px-4 py-5">
                        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div class="mx-auto max-w-7xl py-5 px-2 sm:px-4">
                        <div class="flex items-center justify-center h-48 bg-white border border-gray-300 rounded-xl">
                            <span class="uppercase tracking-tighter font-medium text-gray-500">content</span>
                        </div>
                    </div>
                </main>
                <footer class="mx-auto max-w-7xl py-2 px-2 sm:px-4">
                    <p class="text-center text-md text-gray-500">Responsive Navbar Layout</p>
                </footer>
            </div>
        </div>
    \`;
  function onOpen(El: HTMLElement) {
    const cls = JSON.parse(El.dataset.toggleClass as string);
    El.classList.remove(cls.closed);
    El.classList.add(cls.opened);
  }
  function onClose(El: HTMLElement) {
    const cls = JSON.parse(El.dataset.toggleClass as string);
    El.classList.remove(cls.opened);
    El.classList.add(cls.closed);
  }
  const toggleGroup: {
    [key: string]: {
      isOpen: boolean;
      items: HTMLElement[];
    };
  } = {};
  function updateToggle(El: HTMLElement) {
    const group = El.dataset.toggleGroup;
    if (group && group in toggleGroup) {
      if (toggleGroup[group].isOpen) {
        onOpen(El);
      } else {
        onClose(El);
      }
    }
  }
  div.querySelectorAll('[data-toggle-class]').forEach(El => {
    const group = (El as HTMLElement).dataset.toggleGroup;
    if (!group) {
      return;
    }
    if (!(group in toggleGroup)) {
      toggleGroup[group] = {
        isOpen: false,
        items: []
      };
    }
    updateToggle(El as HTMLElement);
    toggleGroup[group].items.push(El as HTMLElement);
  });
  function updateToggles(group: string) {
    if (group in toggleGroup) {
      toggleGroup[group].items.forEach(El => updateToggle(El));
    }
  }
  div.querySelector('#toggleMenuBtn')!.addEventListener('click', () => {
    if ('menu' in toggleGroup) {
      toggleGroup.menu.isOpen = !toggleGroup.menu.isOpen;
      updateToggles('menu');
    }
  });
  div.querySelector('#toggleDropdownBtn')!.addEventListener('click', () => {
    if ('dropdown' in toggleGroup) {
      toggleGroup.dropdown.isOpen = !toggleGroup.dropdown.isOpen;
      updateToggles('dropdown');
    }
  });
  div.querySelector('#closeDropdownOverlay')!.addEventListener('click', () => {
    if ('dropdown' in toggleGroup) {
      toggleGroup.dropdown.isOpen = false;
      updateToggles('dropdown');
    }
  });
  function handleEscape(e: KeyboardEvent) {
    if ('dropdown' in toggleGroup && toggleGroup.dropdown.isOpen) {
      if (e.key == 'Esc' || e.key == 'Escape') {
        toggleGroup.dropdown.isOpen = false;
        updateToggles('dropdown');
      }
    }
  }
  div.addEventListener('keydown', handleEscape);
  return div;
}`,...l.parameters?.docs?.source}}};const p=["ResponsiveNavbarLayout"];export{l as ResponsiveNavbarLayout,p as __namedExportsOrder,g as default};
