import type { Meta } from '@storybook/html-vite';
import SimplePage from './html/simple-page.html?raw';

const meta = {
    title: 'Layouts/Applications',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const Simple = () => {
    const div = document.createElement('div');
    div.innerHTML = SimplePage;

    const appSidebar = div.querySelector('#appSidebar');
    const appBackDrop = div.querySelector('#appBackDrop');
    const closeSidebarBtn = div.querySelector('#closeSidebarBtn');

    div
        .querySelector('#openSidebarBtn')
        ?.addEventListener('click', function () {
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
};
