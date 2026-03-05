module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/scam_shield_ai/node_modules/https-proxy-agent/dist/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__628548b3._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/scam_shield_ai/node_modules/https-proxy-agent/dist/index.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/scam_shield_ai/node_modules/node-fetch/src/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/3e987_node-fetch_src_utils_multipart-parser_60d46e9f.js",
  "server/chunks/ssr/3e987_cbd58e54._.js",
  "server/chunks/ssr/[externals]__561934d4._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/scam_shield_ai/node_modules/node-fetch/src/index.js [app-ssr] (ecmascript)");
    });
});
}),
];