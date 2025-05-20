export default {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {"50":"#EBF5FF","100":"#E1EFFE","200":"#C3DDFD","300":"#A4CAFE","400":"#76A9FA","500":"#3F83F8","600":"#1C64F2","700":"#1A56DB","800":"#1E429F","900":"#233876"}
            }
        },
        fontFamily: {
            'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
            'body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
            'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
        }
    },
    safelist: [
        'fixed',
        'bg-gray-900/50',
        'dark:bg-gray-900/80',
        'inset-0',
        'z-40'
    ],
}
