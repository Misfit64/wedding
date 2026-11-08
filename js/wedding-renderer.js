/**
 * ✦ WEDDING PAGE DYNAMIC RENDERER ENGINE ✦
 * 
 * Automatically applies all values from window.WEDDING_CONFIG (wedding-config.js)
 * to the DOM so users only ever have to edit wedding-config.js.
 */

(function() {
    'use strict';

    // SVG Icons Library for Ceremonial Cards & Actions
    const ICONS = {
        lotus: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="w-5 h-5 sm:w-6 sm:h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.51,73.51,0,0,0-22.17-2.22c4-19.85,1-35.55-2.06-44.86a16.15,16.15,0,0,0-18.79-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.48,94.48,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.15,16.15,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.51,73.51,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.27c3.39,12.57,13.8,36.48,45.33,55.32S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.32A16,16,0,0,0,245.83,121.63ZM59.14,72.14a.2.2,0,0,1,.23-.15A70.43,70.43,0,0,1,85.18,83.66,118.65,118.65,0,0,0,80,119.17c0,18.74,3.77,34,9.11,46.28A123.59,123.59,0,0,1,69.57,140C51.55,108.62,55.3,84,59.14,72.14Zm3,103.35C35.47,159.57,26.82,140.05,24,129.7a59.82,59.82,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4ZM170.82,83.66A70.43,70.43,0,0,1,196.63,72a.2.2,0,0,1,.23.15C200.7,84,204.45,108.62,186.43,140a123.32,123.32,0,0,1-19.54,25.48c5.34-12.26,9.11-27.54,9.11-46.28A118.65,118.65,0,0,0,170.82,83.66ZM232,129.72c-2.77,10.25-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z"></path></svg>`,
        shehnai: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-5 h-5 sm:w-6 sm:h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M228.47 47.906v42.908H19.53V109.5h208.94v21.875H19.53v18.688h208.94V343.03c-16.86-14.274-43.56-23.457-73.626-23.405-50.982.088-92.313 26.714-92.313 59.5s41.332 59.307 92.314 59.22c26.19-.047 49.822-7.113 66.625-18.408h277.467V401.25H240.344c4.22-6.653 6.627-13.906 6.812-21.5.006-.25.03-.5.03-.75h251.75l.002-18.688H247.155V182.25c24.89 40.517 45.422 63.12 64.5 74.656 23.127 13.983 44.285 9.79 60.688 3.28 16.403-6.508 29.112-13.624 42.406-11.655 13.294 1.97 30.884 13.118 55.594 50.595l16.5 25c-11.733-45.096-41.555-105.8-75.72-121.28 27.93-4.62 53.664 11.71 76.376 29.718l-1.53-2.313c-13.05-20.11-24.207-33.715-34.658-42.75-10.45-9.035-20.606-13.596-30.343-14.125-19.477-1.058-32.544 12.03-44.595 18.656-6.025 3.314-11.596 5.395-17.813 5.44-6.216.043-13.607-1.854-23.562-8.47-19.91-13.232-48.717-45.747-89.188-112.5L228.47 47.906z"></path></svg>`,
        haldi: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="w-5 h-5 sm:w-6 sm:h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.51,73.51,0,0,0-22.17-2.22c4-19.85,1-35.55-2.06-44.86a16.15,16.15,0,0,0-18.79-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.48,94.48,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.15,16.15,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.51,73.51,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.27c3.39,12.57,13.8,36.48,45.33,55.32S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.32A16,16,0,0,0,245.83,121.63ZM59.14,72.14a.2.2,0,0,1,.23-.15A70.43,70.43,0,0,1,85.18,83.66,118.65,118.65,0,0,0,80,119.17c0,18.74,3.77,34,9.11,46.28A123.59,123.59,0,0,1,69.57,140C51.55,108.62,55.3,84,59.14,72.14Zm3,103.35C35.47,159.57,26.82,140.05,24,129.7a59.82,59.82,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4ZM170.82,83.66A70.43,70.43,0,0,1,196.63,72a.2.2,0,0,1,.23.15C200.7,84,204.45,108.62,186.43,140a123.32,123.32,0,0,1-19.54,25.48c5.34-12.26,9.11-27.54,9.11-46.28A118.65,118.65,0,0,0,170.82,83.66ZM232,129.72c-2.77,10.25-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z"></path></svg>`,
        sangeet: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-5 h-5 sm:w-6 sm:h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476.865 25.514L282.941 145.422l19.32 9.215L486.333 40.822l-9.467-15.308zM73.6 65.508l-7.748 16.246 286.595 136.709 1.389 2.715c3.244 6.346 9.677 12.524 17.723 16.373l.003.002.004.002c8.566 4.084 17.188 5.364 23.63 4.373 6.443-.992 10.352-3.63 12.523-8.18 2.17-4.55 1.665-8.39-1.725-13.603-3.39-5.213-10.122-10.882-18.935-15.086-8.063-3.843-16.927-4.961-23.91-3.487l-2.983.63L73.6 65.507zm121.097 97.65c-40.936 2.913-77.435 8.644-106.084 16.283-21.165 5.644-38.06 12.392-48.953 19.26C28.767 205.57 25 211.723 25 216c0 4.277 3.767 10.43 14.66 17.299 10.894 6.868 27.788 13.616 48.953 19.26C130.943 263.847 190.374 271 256 271c49.18 0 94.88-4.017 132.512-10.781-8.123-.325-16.546-2.53-24.703-6.422l-.002-.002-.004-.002c-10.2-4.878-18.614-12.38-24.135-21.484l-72.705-34.68-36.498 22.566c-4.5 9.65-12.051 18.021-21.662 23.977l-.002.002-.004.002c-10.715 6.625-22.297 10.072-33.281 9.588-10.985-.484-21.794-5.485-27.856-15.29-6.062-9.803-5.366-21.696-.515-31.294 4.85-9.598 13.3-17.76 23.785-24.243l.002-.001h.002c9.63-5.951 20.504-8.973 31.16-8.688l6.904-4.27-14.3-6.82zm127.432.36l-.545.336 41.3 19.7c10.563-1.44 21.702.385 31.92 5.257h.005c11.125 5.306 20.412 12.504 26.275 21.52 5.863 9.014 7.844 20.763 2.88 31.167-3.08 6.457-8.178 11.27-14.2 14.395 4.699-1.07 9.273-2.174 13.623-3.334 21.165-5.644 38.06-12.392 48.953-19.26C483.233 226.43 487 220.277 487 216c0-4.277-3.767-10.43-14.66-17.299-10.894-6.868-27.788-13.616-48.953-19.26-27.516-7.337-62.286-12.91-101.258-15.923zm-93.81 15.677l-21.499 13.293-3.033-.3c-7.102-.708-15.793 1.364-23.39 6.058l-.002.002c-8.305 5.135-14.382 11.502-17.186 17.05-2.804 5.55-2.89 9.422-.238 13.71 2.651 4.288 6.822 6.486 13.336 6.773 6.513.287 14.949-1.923 23.023-6.916 7.58-4.699 13.305-11.538 15.842-18.199l1.086-2.85 31.383-19.404-19.323-9.217zM39.642 253.912l26.941 44.9 33.31-24.982a408.545 408.545 0 0 1-15.92-3.879c-17.352-4.627-32.253-9.928-44.331-16.039zm432.714 0c-12.078 6.11-26.98 11.412-44.332 16.04-6.926 1.846-14.283 3.565-21.949 5.175l38.926 24.377 27.355-45.592zM487 264.492l-17.576 29.293a90.955 90.955 0 0 0 2.209-.97c5.948-2.72 10.255-5.583 12.627-7.944 2.371-2.361 2.74-3.683 2.74-4.871v-15.508zm-462 .002V280c0 1.188.369 2.51 2.74 4.871 2.372 2.361 6.679 5.224 12.627 7.943.712.326 1.45.65 2.207.971L25 264.495zm98.639 14.027l-36.737 27.553c1.874.36 3.74.72 5.674 1.065 21.728 3.862 47.224 6.792 74.612 8.775l-36.143-36.143a573.54 573.54 0 0 1-7.406-1.25zm233.996 4.538c-23.345 2.877-48.603 4.787-75.155 5.552l37.08 27.809 38.075-33.361zm27.261.045l-37.195 32.59c26.286-1.979 50.764-4.83 71.723-8.555 1.011-.18 1.972-.373 2.967-.557l-37.495-23.478zm-224.369.697l32.317 32.316 36.676-27.506c-24.226-.698-47.389-2.342-68.993-4.81zM256 291.25l-36.322 27.242c12.024.332 24.171.508 36.322.508 12.15 0 24.298-.176 36.322-.508L256 291.25zM25 305.121V440c0 5.5 4.3 11.699 16.09 18.436 3.953 2.259 8.63 4.452 13.91 6.554V317.13c-8.28-2.377-15.693-5.007-22.117-7.943-2.813-1.287-5.44-2.63-7.883-4.065zm462 0c-2.443 1.435-5.07 2.778-7.883 4.065-6.424 2.936-13.838 5.566-22.117 7.943V464.99c5.28-2.103 9.957-4.295 13.91-6.554C482.7 451.699 487 445.5 487 440V305.121zM73 321.63v149.488c6.196 1.816 12.868 3.523 19.953 5.098 25.716 5.714 56.789 9.79 90.047 12.2V334.978c-34.264-1.945-66.46-5.297-93.576-10.118A430.035 430.035 0 0 1 73 321.63zm366 0a430.032 430.032 0 0 1-16.424 3.232c-27.115 4.82-59.312 8.173-93.576 10.118v153.435c33.258-2.409 64.331-6.485 90.047-12.2 7.085-1.574 13.757-3.281 19.953-5.097V321.63zM201 335.87v153.684c18.028.96 36.517 1.445 55 1.445 18.483 0 36.972-.485 55-1.445V335.87c-18.053.752-36.52 1.129-55 1.129-18.48 0-36.947-.377-55-1.129z"></path></svg>`,
        wedding: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-5 h-5 sm:w-6 sm:h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M122.7 23.32l1.7 21.87-16.7 14.25 21.4 5.17 8.4 20.25L149 66.18l21.8-1.75-14.2-16.71 5.1-21.32-20.3 8.35-18.7-11.43zM464 32a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM239.8 42.5a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zm183.9 6.84c-9.2 1.74-17.7 7.18-25.9 14.28-7.6 6.53-14.7 14.66-20.7 23.45-18.8 3.01-37.6 10.67-50.2 21.13-16.1 13.2-30.4 35.8-38.2 59.1-7.4 3.1-14.4 6.8-20.1 10.8-15.5 10.9-23.5 31.8-29.4 50-5.9 18.3-8.8 34.3-8.8 34.3l17.8 3.2s2.7-15 8.1-31.9c5.5-16.9 14.8-35.3 22.7-40.8 1.3-.9 3-1.9 4.5-2.8-.6 5.7-.6 11.4.3 16.8 1.8 11.4 8 22.3 19 28.2 7.8 4.2 16.6 3.2 24 .2 7.4-3.1 14-8.2 19.7-14.2 5.7-6 10.4-13.1 13.2-20.6 2.8-7.5 3.8-16 .2-23.9h-.1c-3.9-8.4-11.4-13.8-19.4-16.1-8-2.3-16.6-2.2-25.2-.9-1.5.2-2.9.7-4.4 1 7.4-15.8 18-30.7 27.5-38.6 6.2-5.1 16.6-10 27.7-13.6-1.4 3.8-2.5 7.6-3 11.5-1.6 10.5.7 21.9 9.1 29.7 6.1 5.6 14.3 6.5 21.5 5.3 7.1-1.2 14-4.4 20.2-8.5 6.2-4.2 11.7-9.4 15.6-15.5 3.9-6.1 6.5-13.9 4-21.7v-.1c-3.3-10.07-11.5-16.99-20.6-20.27-3.9-1.4-8-2.19-12.2-2.66 2.9-3.26 5.9-6.31 8.9-8.92 6.8-5.84 13.7-9.5 17.6-10.23l-3.4-17.68zM174.8 84.39l-15.2 9.56 34.5 55.25-56.4 2.9 26.5 57.8 16.4-7.6-15.5-33.6 60.6-3.1-50.9-81.21zm216.4 19.31c6.1-.1 11.5.6 15.5 2.1 5.4 1.9 8.1 4.3 9.5 8.8.4 1.1.2 3.3-1.9 6.6-2.2 3.4-6.1 7.2-10.5 10.2-4.5 3-9.5 5.1-13.2 5.7-3.8.7-5.5 0-6.3-.7-3.5-3.2-4.5-7.2-3.5-13.9.8-5.4 3.3-11.9 7-18.6 1.2 0 2.3-.2 3.4-.2zM94.99 123a16 16 0 0 0-16 16 16 16 0 0 0 16 16A16 16 0 0 0 111 139a16 16 0 0 0-16.01-16zm356.11 37.2l-14.4 16.6-21.8-1.8 11.4 18.8-8.5 20.2 21.4-5 16.6 14.3 1.9-21.9 18.7-11.4-20.2-8.5-5.1-21.3zm-123.5 16.5c2.9.1 5.6.5 7.7 1.1 4.3 1.2 6.6 3 8.2 6.4.9 1.9 1 5.4-.7 10-1.7 4.7-5.2 10.1-9.4 14.6s-9.3 8.1-13.5 9.8c-4.2 1.7-6.8 1.6-8.5.7h-.1c-5.8-3.2-8.6-7.8-9.7-15.2-1-6.3-.3-14.3 1.8-22.9 4.9-1.7 9.8-3.1 14.5-3.8 3.5-.5 6.7-.7 9.7-.7zm-202.4 51.9c-7.2-.2-11.7 1.5-14.5 4.3-2.8 2.8-4.5 7.3-4.3 14.5.2 7.3 2.6 16.9 7.2 27.6 9.2 21.5 27.3 47.4 51.6 71.8 24.3 24.3 50.3 42.3 71.8 51.5 10.6 4.6 20.2 7 27.5 7.2 7.3.3 11.7-1.5 14.5-4.3 2.8-2.8 4.6-7.2 4.3-14.5-.2-7.3-2.6-16.9-7.2-27.6-9.2-21.4-27.2-47.4-51.5-71.7-24.3-24.4-50.3-42.4-71.8-51.6-10.7-4.6-20.3-7-27.6-7.2zm232 31.3l-33 54-29.1-27.9-12.4 13 45.1 43.3 33.8-55.2 38.7 32.3 89.3-38.2-7-16.6-79.3 34-46.1-38.7zM93.43 272.6l-17.64 57.9c41.41 49.1 89.71 76.7 142.11 94.7l21.6-6.6c-3.1-1.1-6.4-2.4-9.7-3.8-24.4-10.4-51.7-29.6-77.3-55.3-25.7-25.7-44.9-53-55.34-77.4-1.41-3.2-2.65-6.4-3.73-9.5zm-23.82 78.2l-14.01 46c28.89 27 59 39.2 90.6 50.2l43.4-13.2c-43.2-17.6-84-43.3-119.99-83zM368 352a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM49.81 415.9l-20.29 66.6 88.28-26.9c-22.77-9.1-45.78-20.7-67.99-39.7z"></path></svg>`,
        mapPin: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>`
    };

    function setText(selectorOrEl, text) {
        if (!text) return;
        const el = typeof selectorOrEl === 'string' ? document.querySelector(selectorOrEl) : selectorOrEl;
        if (el) el.textContent = text;
    }

    function setHtml(selectorOrEl, html) {
        if (!html) return;
        const el = typeof selectorOrEl === 'string' ? document.querySelector(selectorOrEl) : selectorOrEl;
        if (el) el.innerHTML = html;
    }

    function setAttr(selectorOrEl, attr, value) {
        if (!value) return;
        const el = typeof selectorOrEl === 'string' ? document.querySelector(selectorOrEl) : selectorOrEl;
        if (el) el.setAttribute(attr, value);
    }

    function applyConfig(cfg) {
        if (!cfg) return;

        // 1. Page Title & Meta
        if (cfg.couple && cfg.couple.pageTitle) {
            document.title = cfg.couple.pageTitle;
        }

        // 2. Audio Background Source
        if (cfg.audio && cfg.audio.src) {
            const audioEl = document.getElementById('bg-music');
            if (audioEl) audioEl.src = cfg.audio.src;
        }

        // 3. Cover Overlay & Cards
        if (cfg.hero && cfg.hero.coverPhoto) {
            // Desktop blurred backdrop
            const backdropImg = document.querySelector('#cover-overlay img[alt="Atmospheric Backdrop"]');
            if (backdropImg) backdropImg.src = cfg.hero.coverPhoto;

            // Centerpiece card portrait photo
            const cardImg = document.querySelector('#cover-card img[data-nimg="fill"]');
            if (cardImg) {
                cardImg.src = cfg.hero.coverPhoto;
                if (cfg.couple && cfg.couple.combinedNames) {
                    cardImg.alt = cfg.couple.combinedNames;
                }
            }
        }

        // Cover Invocations
        if (cfg.invocations) {
            setText('#cover-invocation-symbol', cfg.invocations.symbol);
            setText('#cover-invocation-heading', cfg.invocations.ganeshaHeading);
            setText('#cover-invocation-subtitle', cfg.invocations.ganeshaSubtitle);
            setText('#cover-tagline', cfg.invocations.tagline);
        }

        // Cover Names & Open Button
        if (cfg.couple && cfg.couple.bride) {
            setText('#cover-bride-name', cfg.couple.bride.name);
        }
        if (cfg.couple && cfg.couple.groom) {
            setText('#cover-groom-name', cfg.couple.groom.name);
        }
        if (cfg.hero && cfg.hero.openButtonText) {
            setText('#open-invite-btn-text', cfg.hero.openButtonText);
        }

        // 4. Hero Section Video & Titles
        if (cfg.hero) {
            if (cfg.hero.videoSrc) {
                const videoSource = document.querySelector('#main-content video source');
                if (videoSource) videoSource.src = cfg.hero.videoSrc;
            }
            if (cfg.hero.ganeshaIconSrc) {
                setAttr('#hero-ganesha-img', 'src', cfg.hero.ganeshaIconSrc);
            }
            setText('#hero-subtitle', cfg.hero.subtitle);
            setText('#hero-title', cfg.hero.title);
        }

        // 5. Sacred Sanskrit Shloka Section
        if (cfg.invocations) {
            setText('#shloka-symbol', cfg.invocations.symbol);
            setText('#shloka-line-1', cfg.invocations.shlokaLine1);
            setText('#shloka-line-2', cfg.invocations.shlokaLine2);
            setText('#shloka-attribution', cfg.invocations.shlokaAttribution);
        }

        // 6. Countdown Section
        if (cfg.weddingDate) {
            setText('#countdown-badge', cfg.weddingDate.countdownBadge);
            setText('#countdown-title', cfg.weddingDate.countdownTitle);
            setText('#countdown-subtitle', cfg.weddingDate.countdownSubtitle);
        }

        // 7. Scratch Card (Save Our Date)
        if (cfg.scratchCard) {
            setText('#scratch-badge', cfg.scratchCard.badge);
            setText('#scratch-venue', cfg.scratchCard.venueSummary);
            setText('#scratch-blessing', cfg.scratchCard.blessing);
        }
        if (cfg.couple && cfg.couple.combinedNames) {
            setText('#scratch-names', cfg.couple.combinedNames);
        }
        if (cfg.weddingDate && cfg.weddingDate.displayDate) {
            setText('#scratch-date', cfg.weddingDate.displayDate);
        }

        // 8. Our Story Section
        if (cfg.story) {
            setText('#story-subtitle', cfg.story.subtitle);
            setText('#story-title', cfg.story.title);
            setText('#story-intro', cfg.story.introParagraph);
            if (cfg.story.portraitPhoto) {
                setAttr('#story-portrait-img', 'src', cfg.story.portraitPhoto);
            }
            if (cfg.couple && cfg.couple.bride && cfg.couple.groom) {
                setHtml('#story-couple-names', `${cfg.couple.bride.name}<span class="mx-2 font-display italic text-gold" style="font-size:0.8em">&amp;</span>${cfg.couple.groom.name}`);
            }

            // Dynamically Render Story Timeline Milestones
            if (Array.isArray(cfg.story.timeline)) {
                renderTimeline(cfg.story.timeline);
            }
        }

        // 9. Family Introductions (वधू परिचय / वर परिचय)
        if (cfg.couple) {
            // Bride details
            if (cfg.couple.bride) {
                setText('#bride-hindi-title', cfg.couple.bride.hindiTitle);
                setText('#bride-display-name', cfg.couple.bride.name);
                setText('#bride-display-title', cfg.couple.bride.title);
                setText('#bride-mother-name', cfg.couple.bride.motherName);
                setText('#bride-father-name', cfg.couple.bride.fatherName);
                setText('#bride-city-state', cfg.couple.bride.cityState);
            }

            // Groom details
            if (cfg.couple.groom) {
                setText('#groom-hindi-title', cfg.couple.groom.hindiTitle);
                setText('#groom-display-name', cfg.couple.groom.name);
                setText('#groom-display-title', cfg.couple.groom.title);
                setText('#groom-mother-name', cfg.couple.groom.motherName);
                setText('#groom-father-name', cfg.couple.groom.fatherName);
                setText('#groom-city-state', cfg.couple.groom.cityState);
            }
        }
        if (cfg.invocations && cfg.invocations.familyBlessing) {
            setText('#family-blessing-quote', cfg.invocations.familyBlessing);
        }

        // 10. Wedding Celebrations & Ceremonies (Dynamic Cards)
        if (Array.isArray(cfg.events)) {
            renderCelebrations(cfg.events);
        }

        // 11. Photo Gallery & Lightbox
        if (cfg.gallery && Array.isArray(cfg.gallery.images)) {
            setText('#gallery-section-subtitle', cfg.gallery.subtitle);
            setText('#gallery-section-title', cfg.gallery.title);
            renderGallery(cfg.gallery.images);
        }

        // 12. Main Venue & Directions
        if (cfg.venue) {
            setText('#venue-section-subtitle', cfg.venue.subtitle);
            setText('#venue-section-title', cfg.venue.title);
            if (cfg.venue.directionsUrl) {
                setAttr('#venue-directions-link', 'href', cfg.venue.directionsUrl);
            }
            if (cfg.venue.mapEmbedUrl) {
                setAttr('#venue-map-iframe', 'src', cfg.venue.mapEmbedUrl);
            }
        }

        // 13. Please Join Us / RSVP
        if (cfg.rsvp) {
            setText('#rsvp-blessing-note', cfg.rsvp.blessingNote);
            setText('#rsvp-heading', cfg.rsvp.heading);
            setText('#rsvp-message', cfg.rsvp.message);
        }

        // 14. Footer
        if (cfg.couple && cfg.couple.bride && cfg.couple.groom) {
            setHtml('#footer-couple-names', `${cfg.couple.bride.name}<span class="mx-3 font-display italic" style="font-size:0.55em;color:var(--color-gold)">&amp;</span>${cfg.couple.groom.name}`);
        }
        if (cfg.invocations) {
            setText('#footer-blessing-quote', cfg.invocations.closingBlessing);
            setText('#footer-blessing-tag', cfg.invocations.footerBlessingLine);
        }
        if (cfg.couple && cfg.couple.groom && cfg.couple.groom.instagram) {
            setAttr('#footer-groom-insta', 'href', cfg.couple.groom.instagram.url);
            setText('#footer-groom-insta-handle', cfg.couple.groom.instagram.handle);
        }
        if (cfg.couple && cfg.couple.bride && cfg.couple.bride.instagram) {
            setAttr('#footer-bride-insta', 'href', cfg.couple.bride.instagram.url);
            setText('#footer-bride-insta-handle', cfg.couple.bride.instagram.handle);
        }
        if (cfg.couple && cfg.weddingDate) {
            setText('#footer-hashtag-date', `${cfg.couple.weddingHashtag} · ${cfg.weddingDate.displayDate}`);
        }
    }

    /**
     * Renders Story Timeline Milestones
     */
    function renderTimeline(timeline) {
        const container = document.getElementById('story-timeline-container');
        if (!container) return;

        let html = '';
        timeline.forEach((item, index) => {
            const isLast = index === timeline.length - 1;
            html += `
                <div class="relative flex gap-6">
                    <div class="flex flex-col items-center">
                        <div class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border border-gold bg-dark" style="box-shadow:0 0 8px var(--color-gold-bracket)"></div>
                        ${!isLast ? '<div class="mt-2 w-px flex-1" style="background:linear-gradient(to bottom, var(--color-gold-glow-35), var(--color-gold-glow-06));min-height:100px"></div>' : ''}
                    </div>
                    <div class="pb-16 sm:pb-20">
                        <span class="mb-2 block font-cinzel tracking-[0.35em] text-gold" style="font-size:0.72rem;opacity:0.75"></span>
                        <h4 class="mb-3 font-display" style="font-size:clamp(1.3rem, 3.5vw, 1.75rem);letter-spacing:-0.02em;color:var(--color-name-text)">${item.title}</h4>
                        <p class="font-body font-light leading-relaxed tracking-wider text-muted" style="font-size:clamp(0.88rem, 2vw, 1rem)">${item.description}</p>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    /**
     * Renders Wedding Celebrations / Events
     */
    function renderCelebrations(events) {
        const container = document.getElementById('wedding-events-container');
        if (!container) return;

        let html = '';
        events.forEach((ev, idx) => {
            const isRTL = idx % 2 === 1;
            const directionClass = isRTL ? 'direction:rtl' : 'direction:ltr';
            const iconSvg = ICONS[ev.icon] || ICONS.lotus;

            html += `
            <div class="relative flex flex-col overflow-hidden lg:flex-row" style="border:1px solid var(--color-gold-border-sm);${directionClass}">
                <!-- Event Image Box -->
                <div class="relative h-56 w-full overflow-hidden lg:h-auto lg:w-[42%]" style="direction:ltr">
                    <div class="absolute inset-0 h-full w-full">
                        <img alt="${ev.name}" loading="lazy" decoding="async" class="object-cover object-center w-full h-full" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;" src="${ev.image || 'images/venues/tilak.png'}"/>
                    </div>
                    <div class="absolute inset-0" style="background:linear-gradient(${isRTL ? 'to left' : 'to right'}, var(--color-surface-2xs) 50%, var(--color-surface-lg) 100%)"></div>
                    <div class="absolute inset-0 lg:hidden" style="background:var(--color-surface-md)"></div>
                </div>

                <!-- Event Details Box -->
                <div class="relative flex flex-1 flex-col justify-center px-8 py-9 sm:px-10 lg:py-10" style="background:var(--color-surface-content);backdrop-filter:blur(8px);direction:ltr">
                    <div class="mb-4 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="inline-block" style="width:18px;height:2px;background:var(--color-gold-line);display:block"></span>
                            <span class="font-cinzel uppercase tracking-[0.42em] text-gold" style="font-size:0.9rem;opacity:0.9">${ev.dayDate}</span>
                        </div>
                        <span class="text-gold opacity-80" style="filter:drop-shadow(0 0 6px var(--color-gold-glow-40))">
                            ${iconSvg}
                        </span>
                    </div>

                    <h3 class="mb-4 font-display" style="font-size:clamp(2rem, 4.5vw, 2.8rem);line-height:0.93;letter-spacing:-0.03em;color:var(--color-name-text)">${ev.name}</h3>

                    <div class="flex flex-col gap-4">
                        <div>
                            ${ev.subtitle1 ? `<p class="mb-0.5 font-cinzel uppercase tracking-[0.25em] text-gold" style="font-size:0.85rem;opacity:0.8">${ev.subtitle1}</p>` : ''}
                            <p class="font-display tracking-wide" style="font-size:clamp(1.2rem, 2.2vw, 1.5rem);color:var(--color-name-text)">${ev.time}</p>
                        </div>

                        ${(ev.subtitle2 || ev.venueName || ev.address || ev.dressCode || ev.mapUrl) ? `
                        <div class="h-px w-12" style="background:var(--color-gold-glow-35)"></div>
                        <div>
                            ${ev.subtitle2 ? `<p class="mb-0.5 font-cinzel uppercase tracking-[0.35em] text-gold" style="font-size:0.85rem;opacity:0.8">${ev.subtitle2}</p>` : ''}
                            ${ev.venueName ? `<p class="font-display" style="font-size:clamp(1.3rem, 2.8vw, 1.6rem);line-height:1.25;color:var(--color-name-text)">${ev.venueName}</p>` : ''}
                            ${ev.address ? `<p class="mt-2 font-body font-light text-muted" style="font-size:clamp(1rem, 1.9vw, 1.1rem);line-height:1.6;opacity:0.95">${ev.address}</p>` : ''}

                            ${ev.dressCode ? `
                            <div class="mt-4 flex items-center gap-2">
                                <span class="font-cinzel uppercase tracking-[0.25em] text-gold" style="font-size:0.7rem;opacity:0.75">Dress Code</span>
                                <span class="h-px w-4" style="background:var(--color-gold-glow-35)"></span>
                                <span class="font-display" style="font-size:0.95rem;color:var(--color-name-text)">${ev.dressCode}</span>
                            </div>` : ''}

                            ${ev.mapUrl ? `
                            <a target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 rounded-sm border px-3 py-2 font-cinzel uppercase tracking-[0.15em] text-gold transition-opacity hover:opacity-70" style="font-size:0.8rem;opacity:0.95;border-color:var(--color-gold-glow-35)" href="${ev.mapUrl}">
                                ${ICONS.mapPin}
                                View on Map
                            </a>` : ''}
                        </div>` : ''}
                    </div>
                </div>
            </div>`;
        });

        container.innerHTML = html;
    }

    /**
     * Renders Photo Gallery Cards
     */
    function renderGallery(images) {
        const container = document.getElementById('gallery-grid-container');
        if (!container) return;

        // Sync with global lightbox images array
        window.galleryImages = images;

        let html = '';
        images.forEach((img, idx) => {
            html += `
            <div class="mb-3 break-inside-avoid sm:mb-4">
                <div data-gallery-item="${idx}" class="gallery-card group relative cursor-pointer overflow-hidden" style="aspect-ratio:2/3;border:1px solid var(--color-gold-glow-10);">
                    <div class="absolute inset-0 h-full w-full">
                        <img alt="${img.alt || 'Gallery image'}" loading="lazy" decoding="async" class="object-cover object-center w-full h-full" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;" src="${img.src}"/>
                    </div>
                    <div class="absolute inset-0" style="background:linear-gradient(to top, var(--color-surface-lg) 0%, var(--color-surface-2xs) 60%)"></div>
                    <div class="absolute bottom-4 left-0 right-0 flex justify-center">
                        <span class="font-cinzel uppercase tracking-[0.4em] text-gold-light" style="font-size:0.6rem">View</span>
                    </div>
                </div>
            </div>`;
        });

        container.innerHTML = html;

        // Re-attach lightbox triggers for dynamically generated cards
        container.querySelectorAll('.gallery-card').forEach((card, idx) => {
            card.addEventListener('click', () => {
                if (typeof window.openLightbox === 'function') {
                    window.openLightbox(idx);
                }
            });
        });
    }

    // Initialize as soon as DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            applyConfig(window.WEDDING_CONFIG);
        });
    } else {
        applyConfig(window.WEDDING_CONFIG);
    }

    // Expose globally for instant re-render if needed
    window.applyWeddingConfig = applyConfig;
})();
