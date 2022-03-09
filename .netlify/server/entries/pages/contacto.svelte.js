var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Contacto
});
var import_index_6a85fedf = require("../../chunks/index-6a85fedf.js");
const Contacto = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `
     <section>
        <div class="${"w-full lg:flex "}"><div class="${"relative flex-grow justify-center px-8 lg:px-20 flex items-center py-20 lg:py-48 rounded-r-full overflow-hidden"}"><div class="${"absolute top-0 right-0 bottom-0 left-0 bg-baseColor2"}"></div>
            
            <div class="${"z-10"}"><h2 class="${"text-2xl mb-5 text-black font-inconsolata uppercase font-bold"}">Contacto
              </h2>

              <div><div class="${"flex items-center mb-10"}"><div class="${"p-2 rounded-full mr-6 bg-gray-100"}"><img src="${"./static/images/svg/accept-call.svg"}" width="${"30"}" height="${"30"}" alt="${"telephone icon"}"></div>
                  <div><span class="${"block text-xs font-medium text-black"}">Tel.</span>
                    <span class="${"block font-medium text-black"}"><a href="${"tel:+34678518892"}">(+34) 678 518 892</a></span></div></div></div>
              <div class="${"flex items-center mb-10"}"><div class="${"p-2 rounded-full mr-6 bg-gray-100"}"><img src="${"./static/images/svg/email-received.svg"}" height="${"30"}" width="${"30"}" alt="${"email icon"}"></div>
                <div><span class="${"block text-xs font-medium text-black"}">Email Address</span>
                  <span class="${"block font-medium text-black"}"><a href="${"mailto:info@agencyga.com"}">info@agencyga.com</a></span></div></div>
              <div class="${"flex items-center mb-10"}"><div class="${"p-2 rounded-full bg-gray-100 mr-6"}"><img src="${"./static/images/svg/google-map.svg"}" width="${"30"}" height="${"30"}" alt="${"google maps pin point"}"></div>
                <div><span class="${"block text-xs font-medium text-black"}">Oficina
                  </span>
                  <span class="${"block font-medium text-black"}">Avenida Zarautz, 20018 San Sebastian</span></div></div></div></div>
          
          <div class="${"flex-grow justify-center bg-baseColor2 px-8 lg:px-20 py-20 lg:py-48"}"><div class="${"flex justify-center"}"><div><h2 class="${"text-2xl mb-5 text-black font-handwriting"}">Deja una nota
                </h2>
                <span class="${"mb-5 text-3xl font-bold text-brightPink"}">TODO EMPIEZA CON UN HOLA</span>
                
                <form name="${"contacto"}" data-netlify="${"true"}" autocomplete="${"off"}" netlify-honeypot="${"bot-field"}"><p class="${"hidden"}"><label>No llenes esto si eres humano: <input name="${"bot-field"}"></label></p>
                  <div class="${"input-animated"}"><label htmlfor="${"name"}" class="${"w-full label-name"}"><span class="${"content-name w-full"}">Nombre e Apellidos</span></label>
                    <input type="${"text"}" id="${"name"}" name="${"name"}" required="${""}" pattern="${"\\S+.*"}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

                  <div class="${"input-animated"}"><label htmlfor="${"company"}" class="${"w-full label-name"}"><span class="${"content-name w-full"}">Nombre Empresa</span></label>
                    <input type="${"text"}" id="${"company"}" name="${"company"}" pattern="${"\\S+.*"}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

                  <div class="${"input-animated"}"><label htmlfor="${"website"}" class="${"w-full label-name"}"><span class="${"content-name w-full"}">Website (Opcional)</span></label>
                    <input type="${"text"}" id="${"website"}" name="${"website"}" pattern="${"\\S+.*"}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

                  <div class="${"input-animated"}"><label htmlfor="${"email"}" class="${"label-email"}"><span class="${"content-email"}">Email</span></label>
                    <input type="${"email"}" id="${"email"}" name="${"email"}" required="${""}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

                  <div class="${"mt-2 w-full"}"><textarea name="${"question"}" placeholder="${"Mensaje"}" id="${"question"}" cols="${"35"}" rows="${"6"}" minlength="${"10"}" maxlength="${"100"}" required="${""}" class="${"border-gray-300 w-full"}"></textarea></div>
                  <button type="${"submit"}" id="${"submit-button"}" class="${"text-dark w-full uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"}">Enviar
                  </button>
                  <span id="${"success"}" class="${"hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"}">\xA1Gracias! Nos pondremos en contacto pronto.</span>
                  <span id="${"error"}" class="${"hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"}">Whoops... Algo sali\xF3 mal.</span></form></div></div></div></div></section>`;
});
module.exports = __toCommonJS(stdin_exports);
