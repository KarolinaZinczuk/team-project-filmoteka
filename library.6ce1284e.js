var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=e.parcelRequire62bd;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var l=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){r[e]=t},e.parcelRequire62bd=l);var i=l("31AGq"),d=l("dd0jq");const s=document.querySelector("[js-btn-watched]"),a=document.querySelector("[js-btn-queue]");let n=(0,i.load)("watchedList");s.addEventListener("click",(()=>{a.classList.remove("library__btn--selected"),s.classList.add("library__btn--selected"),n=(0,i.load)("watchedList"),(0,d.getAllLibraryMovies)(n,"watchedList")})),a.addEventListener("click",(()=>{s.classList.remove("library__btn--selected"),a.classList.add("library__btn--selected"),n=(0,i.load)("queueList"),(0,d.getAllLibraryMovies)(n,"queueList")})),(0,d.getAllLibraryMovies)(n,"watchedList");
//# sourceMappingURL=library.6ce1284e.js.map