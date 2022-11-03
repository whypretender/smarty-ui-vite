export declare const config: {
    plugins: (import("vite").Plugin | import("vite").Plugin[])[];
    build: {
        rollupOptions: {
            external: string[];
            output: {
                globals: {
                    vue: string;
                };
            };
        };
        minify: string;
        sourcemap: boolean;
        brotliSize: boolean;
        cssCodeSplit: boolean;
        lib: {
            entry: string;
            name: string;
            fileName: string;
            formats: string[];
        };
        outDir: string;
    };
};
declare const _default: import("vite").UserConfigExport;
export default _default;
