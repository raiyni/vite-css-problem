import { readable } from 'svelte/store';

// watch for hash changes
export const location = readable(
    window.document.location.hash,
    function start(set) {
        const update = () => {
            set(window.document.location.hash)
        }
        window.addEventListener('hashchange', update, false)
        return function stop() {
            window.removeEventListener('hashchange', update, false)
        }
    }
)