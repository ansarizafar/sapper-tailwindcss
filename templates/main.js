import { init } from 'sapper/runtime.js';

import '../assets/tailwind.css'

// `routes` is an array of route objects injected by Sapper
init(document.querySelector('#sapper'), __routes__);