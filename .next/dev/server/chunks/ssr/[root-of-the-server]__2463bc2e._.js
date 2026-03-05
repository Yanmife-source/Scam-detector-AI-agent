module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/promises [external] (node:stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/promises", () => require("node:stream/promises"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/scam_shield_ai/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertLevel",
    ()=>AlertLevel
]);
var AlertLevel = /*#__PURE__*/ function(AlertLevel) {
    AlertLevel["GREEN"] = "GREEN";
    AlertLevel["YELLOW"] = "YELLOW";
    AlertLevel["RED"] = "RED";
    return AlertLevel;
}({});
}),
"[project]/scam_shield_ai/components/ThreatMeter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreatMeter",
    ()=>ThreatMeter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/types.ts [app-ssr] (ecmascript)");
;
;
const ThreatMeter = ({ level })=>{
    const getProgress = ()=>{
        switch(level){
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].RED:
                return '100%';
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].YELLOW:
                return '60%';
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].GREEN:
                return '20%';
            default:
                return '0%';
        }
    };
    const getColor = ()=>{
        switch(level){
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].RED:
                return 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]';
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].YELLOW:
                return 'bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]';
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].GREEN:
                return 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]';
            default:
                return 'bg-slate-600';
        }
    };
    const getLabel = ()=>{
        switch(level){
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].RED:
                return 'HIGH RISK: SCAM DETECTED';
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].YELLOW:
                return 'CAUTION: SUSPICIOUS ACTIVITY';
            case __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].GREEN:
                return 'SECURE: NO THREATS DETECTED';
            default:
                return 'SCANNING...';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold tracking-widest text-slate-400 uppercase",
                        children: "Threat Level"
                    }, void 0, false, {
                        fileName: "[project]/scam_shield_ai/components/ThreatMeter.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-bold tracking-tight ${level === __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].RED ? 'text-red-400' : level === __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].YELLOW ? 'text-amber-400' : 'text-emerald-400'}`,
                        children: getLabel()
                    }, void 0, false, {
                        fileName: "[project]/scam_shield_ai/components/ThreatMeter.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scam_shield_ai/components/ThreatMeter.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-full bg-slate-800 rounded-full border border-slate-700 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-full transition-all duration-700 ease-out ${getColor()}`,
                    style: {
                        width: getProgress()
                    }
                }, void 0, false, {
                    fileName: "[project]/scam_shield_ai/components/ThreatMeter.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scam_shield_ai/components/ThreatMeter.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scam_shield_ai/components/ThreatMeter.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scam_shield_ai/components/AudioVisualizer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioVisualizer",
    ()=>AudioVisualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const AudioVisualizer = ({ isActive, stream })=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive || !stream || !canvasRef.current) return;
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const draw = ()=>{
            if (!isActive) return;
            requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const barWidth = canvas.width / bufferLength * 2.5;
            let x = 0;
            for(let i = 0; i < bufferLength; i++){
                const barHeight = dataArray[i] / 255 * canvas.height;
                // Color gradient based on activity
                const hue = 200 + dataArray[i] / 255 * 50;
                ctx.fillStyle = `hsla(${hue}, 80%, 60%, 0.8)`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth + 1;
            }
        };
        draw();
        return ()=>{
            audioContext.close();
        };
    }, [
        isActive,
        stream
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-24 bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: 600,
                height: 100,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/scam_shield_ai/components/AudioVisualizer.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center text-slate-500 text-sm font-medium",
                children: "Monitor Inactive"
            }, void 0, false, {
                fileName: "[project]/scam_shield_ai/components/AudioVisualizer.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scam_shield_ai/components/AudioVisualizer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/scam_shield_ai/utilss/audioProcessor.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @google/genai utility functions for audio processing
__turbopack_context__.s([
    "createBlob",
    ()=>createBlob,
    "decode",
    ()=>decode,
    "decodeAudioData",
    ()=>decodeAudioData,
    "encode",
    ()=>encode
]);
function encode(bytes) {
    let binary = '';
    const len = bytes.byteLength;
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function decode(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
async function decodeAudioData(data, ctx, sampleRate, numChannels) {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for(let channel = 0; channel < numChannels; channel++){
        const channelData = buffer.getChannelData(channel);
        for(let i = 0; i < frameCount; i++){
            channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
        }
    }
    return buffer;
}
function createBlob(data) {
    const l = data.length;
    const int16 = new Int16Array(l);
    for(let i = 0; i < l; i++){
        int16[i] = data[i] * 32768;
    }
    return {
        data: encode(new Uint8Array(int16.buffer)),
        // The supported audio MIME type is 'audio/pcm'.
        mimeType: 'audio/pcm;rate=16000'
    };
}
}),
"[project]/scam_shield_ai/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/node_modules/@google/genai/dist/node/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$components$2f$ThreatMeter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/components/ThreatMeter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$components$2f$AudioVisualizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/components/AudioVisualizer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$utilss$2f$audioProcessor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scam_shield_ai/utilss/audioProcessor.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const SYSTEM_INSTRUCTION = `You are the "Scam-Shield AI," a real-time cybersecurity monitor for voice calls. 
Objective: Listen to the conversation and identify "Social Engineering" tactics.

Psychological Markers to Watch For:
1. Forced Urgency: Immediate, arrest, warrant, expired, locked, or fast speech.
2. Authority Impersonation: Banks, gov agencies, tech support without context.
3. Cognitive Overload: Complex instructions to confuse the user.

Detection Logic:
- Evaluate the "Vibe": Is the tone aggressive, grooming, or robotic?
- Cross-Reference: If they mention a bank, remind the user banks never ask for OTPs.
- Alert Level:
    - GREEN: Normal conversation.
    - YELLOW: Suspicious tactics detected (e.g., asking for "verification").
    - RED: High-risk scam (e.g., asking for OTP, remote access, or gift cards).

Response Style:
If you detect a scam, do not wait. Interrupt with a calm, assertive "Cyber-Alert." 
Explain EXACTLY which psychological tactic is being used (e.g., "This caller is using 'Forced Urgency' to make you panic. Hang up and call your bank directly.")`;
const App = ()=>{
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [alertLevel, setAlertLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].GREEN);
    const [transcriptions, setTranscriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stream, setStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [needsKey, setNeedsKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs for audio processing and session management
    const nextStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const audioContextsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        input: null,
        output: null
    });
    const sourcesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const transcriptionBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        user: '',
        model: ''
    });
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check if key is already selected on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkKey = async ()=>{
            if (window.aistudio) {
                try {
                    const hasKey = await window.aistudio.hasSelectedApiKey();
                    setNeedsKey(!hasKey);
                } catch (e) {
                    console.error("Failed to check API key status", e);
                }
            }
        };
        checkKey();
    }, []);
    const stopSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsActive(false);
        if (sessionRef.current) {
            try {
                sessionRef.current.close();
            } catch (e) {}
            sessionRef.current = null;
        }
        if (stream) {
            stream.getTracks().forEach((track)=>track.stop());
            setStream(null);
        }
        sourcesRef.current.forEach((source)=>{
            try {
                source.stop();
            } catch (e) {}
        });
        sourcesRef.current.clear();
        if (audioContextsRef.current.input) {
            audioContextsRef.current.input.close();
            audioContextsRef.current.input = null;
        }
        if (audioContextsRef.current.output) {
            audioContextsRef.current.output.close();
            audioContextsRef.current.output = null;
        }
        nextStartTimeRef.current = 0;
    }, [
        stream
    ]);
    const handleKeySelection = async ()=>{
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            setNeedsKey(false);
        // After selecting key, we assume it's valid as per guidelines
        }
    };
    const startSession = async ()=>{
        try {
            setError(null);
            setTranscriptions([]);
            setAlertLevel(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].GREEN);
            // Check key requirement
            if (window.aistudio && !await window.aistudio.hasSelectedApiKey()) {
                await handleKeySelection();
            }
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            setStream(mediaStream);
            // Initialize AI with the key from process.env.API_KEY.
            // Create a new instance right before use to ensure latest API key is used.
            const ai = new __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
                apiKey: process.env.API_KEY
            });
            const inputAudioContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 16000
            });
            const outputAudioContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 24000
            });
            // Browsers often suspend contexts until user interaction
            if (inputAudioContext.state === 'suspended') await inputAudioContext.resume();
            if (outputAudioContext.state === 'suspended') await outputAudioContext.resume();
            audioContextsRef.current = {
                input: inputAudioContext,
                output: outputAudioContext
            };
            const sessionPromise = ai.live.connect({
                model: 'gemini-2.5-flash-native-audio-preview-12-2025',
                config: {
                    responseModalities: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modality"].AUDIO
                    ],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: {
                                voiceName: 'Kore'
                            }
                        }
                    },
                    systemInstruction: SYSTEM_INSTRUCTION,
                    outputAudioTranscription: {},
                    inputAudioTranscription: {}
                },
                callbacks: {
                    onopen: ()=>{
                        setIsActive(true);
                        const source = inputAudioContext.createMediaStreamSource(mediaStream);
                        const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
                        scriptProcessor.onaudioprocess = (e)=>{
                            const inputData = e.inputBuffer.getChannelData(0);
                            const pcmBlob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$utilss$2f$audioProcessor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBlob"])(inputData);
                            // CRITICAL: Ensure input is sent only after session promise resolves.
                            sessionPromise.then((session)=>{
                                session.sendRealtimeInput({
                                    media: pcmBlob
                                });
                            });
                        };
                        source.connect(scriptProcessor);
                        scriptProcessor.connect(inputAudioContext.destination);
                    },
                    onmessage: async (message)=>{
                        // 1. Handle Transcriptions
                        if (message.serverContent?.inputTranscription) {
                            transcriptionBufferRef.current.user += message.serverContent.inputTranscription.text;
                        }
                        if (message.serverContent?.outputTranscription) {
                            transcriptionBufferRef.current.model += message.serverContent.outputTranscription.text;
                        }
                        if (message.serverContent?.turnComplete) {
                            // Copy buffer to local variables before clearing to avoid async update issues.
                            const { user, model } = transcriptionBufferRef.current;
                            const newEntries = [];
                            if (user.trim()) {
                                newEntries.push({
                                    id: Math.random().toString(36).substr(2, 9),
                                    speaker: 'User',
                                    text: user.trim(),
                                    timestamp: new Date()
                                });
                            }
                            if (model.trim()) {
                                newEntries.push({
                                    id: Math.random().toString(36).substr(2, 9),
                                    speaker: 'Model',
                                    text: model.trim(),
                                    timestamp: new Date()
                                });
                                const lowerText = model.toLowerCase();
                                if (lowerText.includes('cyber-alert') || lowerText.includes('scam') || lowerText.includes('hang up')) {
                                    setAlertLevel(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].RED);
                                } else if (lowerText.includes('suspicious') || lowerText.includes('caution') || lowerText.includes('tactics')) {
                                    setAlertLevel(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertLevel"].YELLOW);
                                }
                            }
                            setTranscriptions((prev)=>[
                                    ...prev,
                                    ...newEntries
                                ]);
                            transcriptionBufferRef.current = {
                                user: '',
                                model: ''
                            };
                        }
                        // 2. Handle Audio Output (Model Turn)
                        if (message.serverContent?.modelTurn?.parts && audioContextsRef.current.output) {
                            const ctx = audioContextsRef.current.output;
                            for (const part of message.serverContent.modelTurn.parts){
                                if (part.inlineData?.data) {
                                    const base64Audio = part.inlineData.data;
                                    nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                                    try {
                                        const audioBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$utilss$2f$audioProcessor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAudioData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$utilss$2f$audioProcessor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(base64Audio), ctx, 24000, 1);
                                        const source = ctx.createBufferSource();
                                        source.buffer = audioBuffer;
                                        source.connect(ctx.destination);
                                        source.addEventListener('ended', ()=>{
                                            sourcesRef.current.delete(source);
                                        });
                                        source.start(nextStartTimeRef.current);
                                        nextStartTimeRef.current += audioBuffer.duration;
                                        sourcesRef.current.add(source);
                                    } catch (playbackError) {
                                        console.error('Audio playback error:', playbackError);
                                    }
                                }
                            }
                        }
                        // 3. Handle Interruption
                        if (message.serverContent?.interrupted) {
                            sourcesRef.current.forEach((s)=>{
                                try {
                                    s.stop();
                                } catch (e) {}
                            });
                            sourcesRef.current.clear();
                            nextStartTimeRef.current = 0;
                        }
                    },
                    onerror: (e)=>{
                        console.error('Gemini Session Error:', e);
                        const msg = e?.message || "";
                        if (msg.includes("Requested entity was not found")) {
                            setNeedsKey(true);
                            setError("API Key verification failed. Please select a valid key.");
                        } else {
                            setError("Network error detected. Check your connection or API key status.");
                        }
                        stopSession();
                    },
                    onclose: (e)=>{
                        console.log('Gemini Session Closed', e);
                        stopSession();
                    }
                }
            });
            sessionRef.current = await sessionPromise;
        } catch (err) {
            console.error('Initialization error:', err);
            const msg = err?.message || "";
            if (msg.includes("Requested entity was not found")) {
                setNeedsKey(true);
            }
            setError("Shield engagement failed. Verify your system permissions and API key.");
            setIsActive(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-slate-800 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-8 h-8 text-emerald-500",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                        }, void 0, false, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 8v4"
                                        }, void 0, false, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 16h.01"
                                        }, void 0, false, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold tracking-tight flex items-center gap-2",
                                        children: [
                                            "Scam-Shield ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500",
                                                children: "AI"
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 font-medium mono uppercase tracking-widest flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Real-Time Security Protocol"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            needsKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleKeySelection,
                                className: "px-6 py-3 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3m-3-3l-2.25-2.25"
                                        }, void 0, false, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 145
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Set API Key"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: isActive ? stopSession : startSession,
                                className: `group relative overflow-hidden px-8 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 flex items-center gap-3 shadow-xl ${isActive ? 'bg-red-500 hover:bg-red-600 text-white pulse-danger' : 'bg-emerald-500 hover:bg-emerald-600 text-slate-900'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 flex items-center gap-2",
                                    children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "6",
                                                    y: "6",
                                                    width: "12",
                                                    height: "12",
                                                    rx: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 151
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Halt Monitor"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "5 3 19 12 5 21 5 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 151
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Engage Shield"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scam_shield_ai/app/page.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-8 w-full flex-1 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-4 opacity-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-24 h-24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 147
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Analysis Matrix"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$components$2f$ThreatMeter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThreatMeter"], {
                                        level: alertLevel
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$components$2f$AudioVisualizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioVisualizer"], {
                                            isActive: isActive,
                                            stream: stream
                                        }, void 0, false, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4",
                                        children: "Live Heuristics"
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            {
                                                label: 'Neural Audio Processing',
                                                status: isActive ? 'ACTIVE' : 'IDLE'
                                            },
                                            {
                                                label: 'Semantic Risk Extraction',
                                                status: isActive ? 'SCANNING' : 'IDLE'
                                            },
                                            {
                                                label: 'Voice Fingerprinting',
                                                status: 'IDLE'
                                            }
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center p-4 rounded-2xl bg-slate-800/40 border border-slate-700/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-slate-300 tracking-wide",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest ${item.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : item.status === 'SCANNING' ? 'bg-blue-500/10 text-blue-400 animate-pulse border border-blue-500/20' : 'bg-slate-700/50 text-slate-500 border border-transparent'}`,
                                                        children: item.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8 flex flex-col bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl min-h-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 border-b border-slate-800 bg-slate-900/40 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold text-slate-500 uppercase tracking-[0.2em]",
                                        children: "Operational Intelligence Log"
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 375,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent",
                                children: transcriptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col items-center justify-center text-slate-600 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-20 h-20 opacity-5",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 161
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 border-2 border-slate-800 border-t-slate-600 rounded-full animate-spin opacity-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold uppercase tracking-widest opacity-40",
                                                    children: "System Awaiting Input"
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs italic opacity-30",
                                                    children: "Monitoring sequence initiated once the shield is engaged."
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : transcriptions.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-col group ${entry.speaker === 'Model' ? 'items-start' : 'items-end'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[90%] sm:max-w-[75%] rounded-3xl px-5 py-4 transition-all duration-300 ${entry.speaker === 'Model' ? 'bg-slate-800 border border-slate-700 text-emerald-400 shadow-lg' : 'bg-emerald-600/5 border border-emerald-500/10 text-slate-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${entry.speaker === 'Model' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-700 text-slate-400'}`,
                                                            children: entry.speaker === 'Model' ? 'Shield-AI Core' : 'Intercepted Voice'
                                                        }, void 0, false, {
                                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] mono opacity-30 group-hover:opacity-60 transition-opacity",
                                                            children: entry.timestamp.toLocaleTimeString([], {
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                                second: '2-digit'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm leading-relaxed ${entry.speaker === 'Model' ? 'font-medium' : 'font-normal opacity-90'}`,
                                                    children: entry.text
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, entry.id, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "m-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-500 rounded-full p-1.5 text-white flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-4 h-4",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 147
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 190
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scam_shield_ai/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold text-red-400 uppercase tracking-tight",
                                                children: "System Fault Detected"
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-red-300/60 uppercase mono tracking-tighter",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    error.includes("Key") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleKeySelection,
                                        className: "ml-auto text-[10px] font-bold bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1.5 rounded-lg border border-red-500/30 uppercase transition-colors",
                                        children: "Configure"
                                    }, void 0, false, {
                                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scam_shield_ai/app/page.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/scam_shield_ai/app/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full mt-8 py-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-4 px-6 py-2 rounded-full bg-slate-900/40 border border-slate-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scam_shield_ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-slate-500 font-bold mono uppercase tracking-[0.3em]",
                        children: [
                            "© SHIELD-SYSTEMS ",
                            new Date().getFullYear(),
                            " // ENCRYPTION AES-256"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scam_shield_ai/app/page.tsx",
                        lineNumber: 446,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/scam_shield_ai/app/page.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/scam_shield_ai/app/page.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/scam_shield_ai/app/page.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2463bc2e._.js.map