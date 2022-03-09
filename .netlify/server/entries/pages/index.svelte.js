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
  default: () => Routes
});
var import_index_6a85fedf = require("../../chunks/index-6a85fedf.js");
const Main = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `
<section class="${"py-16 lg:py-24 shadow-inner bg-baseColor2"}"><div class="${"lg:flex justify-evenly gap-x-18"}">

     <div class="${"mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center"}"><img src="${"/paint-bucket.2afab6d5.svg"}" alt="${"bucket of blue paint dropping"}" width="${"30"}" height="${"30"}">
     <h2 class="${"text-3xl lg:text-2xl mt-3 mb-6 font-semibold text-white"}">Dise\xF1o de P\xE1ginas Web
     </h2>
     <p class="${"text-2xl text-center text-black"}">Me encargo de dise\xF1ar sitios web aptos para todos los dispositivos y
       pantallas. Una experiencia de usuario \xF3ptima mejora dr\xE1sticamente
       las ventas.
     </p></div>
   
   <div class="${"mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center"}"><img src="${"/startup-rocket-launch.bef1e50a.svg"}" height="${"30"}" width="${"30"}" alt="${" rocket launch"}">

   <h2 class="${"text-3xl lg:text-2xl mt-3 mb-6 font-semibold text-white"}">SEO
   </h2>
   <p class="${"text-2xl text-center text-black"}">Optimizar tu p\xE1gina web y dirigir el tr\xE1fico a tu web de la manera
     correcta puede llevarlo al \xE9xito; yo me encargo.
   </p></div>

<div class="${"mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center"}"><img src="${"../static/images/svg/digital-media.svg"}" alt="${" mobile phone screen with message icons "}" height="${"30"}" width="${"30"}">

          <h2 class="${"text-3xl lg:text-2xl mt-3 mb-6 font-semibold text-white"}">Redes Sociales
          </h2>
          <p class="${"text-2xl text-center text-black"}">Las redes sociales son esenciales para conseguir una buena
            reputaci\xF3n, rejuvenecer tu marca y posicionarla en el mercado
            competitivo de manera eficaz.
          </p></div></div></section>`;
});
const Hero = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero pt-16 pb-16 lg:py-20 lg:flex justify-center items-center bg-gray-100 "}"><div class="${"hero-content flex-col lg:flex-row-reverse text-left"}">
     <div class="${"avatar"}"><div class="${"w-64 mask mask-hexagon"}"><img src="${"../static/profile.18e0f915.webp"}" alt="${""}"></div></div>
      <div><h1 class="${"text-4xl font-bold text-black"}">\xA1Hola! Soy Alessandro, dise\xF1ador y desarrollador dedicado a crear
            soluciones web efectivas que construir\xE1n tu empresa.</h1>
        <p class="${"text-2xl py-6 text-black"}">Aprovecho mi valiosa practica en dise\xF1o y desarrollo para crear
            <strong class="${"highlight"}">experiencias de usuario agradables, receptivas y centradas en la
              versatilidad.
            </strong></p>
        
        <a href="${"/contacto"}"><button type="${"button"}" class="${"text-black font-inconsolata font-semibold uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"}">P\xCDDEME UNA PROPUESTA GRATUITA
            </button></a></div></div></div>`;
});
const Trabajos = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"pt-8 lg:pt-40 pb-4"}"><h2 class="${"text-center text-4xl lg:text-4xl font-semibold uppercase text-black mb-20 lg:mb-24"}">Mis trabajos anteriores
    </h2>

    
    <div class="${"flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0"}"><div class="${"lg:flex items-center justify-center gap-x-14"}">
        <div class="${"lg:w-1/4"}"><h2 class="${"inline-block text-2xl font-semibold uppercase text-black highlight"}">Resume
          </h2>
          <p class="${"text-xl leading-relaxed my-6 text-black"}">Mi primer trabajo con Bootstrap, un marco frontend utilizado para
            crear p\xE1ginas web con capacidad de respuesta m\xF3vil que son
            r\xE1pidas.
          </p>
          <a href="${"https://giuzio.me/"}" target="${"_blank"}"><button type="${"button"}" class="${"text-black font-inconsolata uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"}">Ver proyecto
            </button></a></div>
        
        <div class="${"relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tl-10xl lg:rounded-br-10xl overflow-hidden"}"><div class="${"absolute top-0 right-0 left-0 bottom-0 opacity-30"}"></div>
          <img class="${"h-full w-full object-cover"}" src="${"../static/images/works/resume.webp"}" alt="${"m\xE1quina de escritura mec\xE1nica."}"></div></div></div>

    
    <div class="${"flex flex-col items-center my-24 lg:my-40 mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0"}"><div class="${"lg:flex flex-row-reverse items-center justify-center gap-x-14"}">
        <div class="${"lg:w-1/4"}"><h2 class="${"inline-block highlight text-2xl font-semibold uppercase text-black"}">PrometeoCV
          </h2>
          <p class="${"text-xl leading-relaxed my-6 text-black"}">PrometeoCV dise\xF1a y fabrica sistemas de suelos y sistemas de
            calefacci\xF3n. Chimeneas y estufas de las mejores marcas de Italia.
            Dise\xF1o y construcci\xF3n de sistemas solares t\xE9rmicos e integraci\xF3n
            con peque\xF1os generadores
          </p>
          <a href="${"https://prometeocv.com/"}" target="${"_blank"}"><button type="${"button"}" class="${"text-black font-inconsolata uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"}">Ver Proyecto
            </button></a></div>
        
        <div class="${"relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tr-10xl lg:rounded-bl-10xl overflow-hidden"}"><div class="${"absolute top-0 right-0 left-0 bottom-0 opacity-30"}"></div>
          <img class="${"h-full w-full object-cover"}" src="${"/prometeocv.4d6e2e81.webp"}" alt="${"artista de estrada hechando fuego por la boca"}"></div></div></div>

    
    <div class="${"flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0"}"><div class="${"lg:flex items-center justify-center gap-x-14"}">
        <div class="${"lg:w-1/4"}"><h2 class="${"inline-block text-2xl font-semibold uppercase text-black highlight"}">Travel To Space - Scrimba &amp; Kevin Powell Proyecto
          </h2>
          <p class="${"text-xl leading-relaxed my-6 text-black"}">Seamos realistas; si quieres ir al espacio, tambi\xE9n podr\xEDas ir
            genuinamente al espacio exterior y no flotar en el borde de eso.
            Pues si\xE9ntate y rel\xE1jate porque te daremos un esta experiencia
            mundial!
          </p>
          <a href="${"https://space-kp.netlify.app"}" target="${"_blank"}"><button type="${"button"}" class="${"text-black font-inconsolata uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"}">Ver proyecto
            </button></a></div>
        
        <div class="${"relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tl-10xl lg:rounded-br-10xl overflow-hidden"}"><div class="${"absolute top-0 right-0 left-0 bottom-0 opacity-30"}"></div>
          <img class="${"h-full w-full object-cover"}" src="${"/space.3ec8181d.webp"}" alt="${"un imagene de la Tierra vista desde el espacio."}"></div></div></div></section>`;
});
const Form = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `
<section class="${"pt-16"}">
    <div class="${"w-full lg:flex "}"><div class="${"relative flex-grow justify-center px-8 lg:px-20 flex items-center py-20 lg:py-48 rounded-r-full overflow-hidden"}"><div class="${"absolute top-0 right-0 bottom-0 left-0 "}"></div>
        
        <div class="${"z-10"}"><h2 class="${"text-2xl mb-5 text-black font-inconsolata uppercase font-bold"}">Contacto
          </h2>

          <div><div class="${"flex items-center mb-10"}"><div class="${"p-2 rounded-full mr-6 "}"><img-100 src="${"../static/images/svg/accept-call.svg"}" width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" alt="${"telephone icon"}"></img-100></div>
              <div><span class="${"block text-xl font-medium text-black"}">Tel.</span>
                <span class="${"block font-medium text-xl text-black"}"><a href="${"tel:+34678518892"}">(+34) 678 518 892</a></span></div></div></div>
          <div class="${"flex items-center mb-10"}"><div class="${"p-2 rounded-full mr-6 "}"><img src="${"../static/images/svg/email-received.svg"}" height="${"30"}" width="${"30"}" alt="${"email icon"}" viewBox="${"0 0 30 30"}"></div>
            <div><span class="${"block font-medium text-black text-xl"}">Email Address</span>
              <span class="${"block font-medium text-black text-xl"}"><a href="${"mailto:info@agencyga.com"}">info@agencyga.com</a></span></div></div>
          <div class="${"flex items-center mb-10"}"><div class="${"p-2 rounded-full mr-6"}"><img src="${"../static/images/svg/google-map.svg"}" width="${"30"}" height="${"30"}" alt="${"google maps pin point"}"></div>
            <div><span class="${"block font-medium text-black text-xl"}">Oficina
              </span>
              <span class="${"block font-medium text-black text-xl"}">Avenida Zarautz, 20018 San Sebastian</span></div></div></div></div>
      
      <div class="${"flex-grow justify-center px-8 lg:px-20 py-20 lg:py-48"}"><div class="${"flex justify-center"}"><div><h2 class="${"text-4xl mb-5 text-black font-handwriting"}">Deja una nota
            </h2>
            <span class="${"text-3xl font-bold text-brightPink mb-5"}">TODO EMPIEZA CON UN HOLA</span>
            
            <form name="${"contacto"}" data-netlify="${"true"}" autocomplete="${"off"}" netlify-honeypot="${"bot-field"}"><p class="${"hidden"}"><label>No llenes esto si eres humano: <input name="${"bot-field"}"></label></p>
              <div class="${"input-animated"}"><label htmlfor="${"name"}" class="${"w-full label-name"}"><span class="${"content-name w-full text-l"}">Nombre e Apellidos</span></label>
                <input type="${"text"}" id="${"name"}" name="${"name"}" required="${""}" pattern="${"\\S+.*"}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

              <div class="${"input-animated"}"><label htmlfor="${"company"}" class="${"w-full label-name"}"><span class="${"content-name w-full text-l"}">Nombre Empresa</span></label>
                <input type="${"text"}" id="${"company"}" name="${"company"}" pattern="${"\\S+.*"}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

              <div class="${"input-animated"}"><label htmlfor="${"website"}" class="${"w-full label-name"}"><span class="${"content-name w-full text-l"}">Website (Opcional)</span></label>
                <input type="${"text"}" id="${"website"}" name="${"website"}" pattern="${"\\S+.*"}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

              <div class="${"input-animated"}"><label htmlfor="${"email"}" class="${"label-email"}"><span class="${"content-email text-l "}">Email</span></label>
                <input type="${"email"}" id="${"email"}" name="${"email"}" required="${""}" placeholder="${""}" class="${"w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1"}"></div>

              <div class="${"mt-2 w-full"}"><textarea name="${"question"}" placeholder="${"Mensaje"}" id="${"question"}" cols="${"35"}" rows="${"6"}" minlength="${"10"}" maxlength="${"100"}" required="${""}" class="${"border-gray-300 w-full"}"></textarea></div>
              <button type="${"submit"}" id="${"submit-button"}" class="${"text-dark w-full uppercase hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"}">Enviar
              </button>
              <span id="${"success"}" class="${"hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"}">\xA1Gracias! Nos pondremos en contacto pronto.</span>
              <span id="${"error"}" class="${"hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"}">Whoops... Algo sali\xF3 mal.</span></form></div></div></div></div></section>`;
});
const Routes = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Web Design Especialista en Marketing Digital y SEO</title>`, ""}<meta content="${"\xA1Hola! Soy Alessandro, dise\xF1ador y desarrollador dedicado a crear soluciones web efectivas que construir\xE1n su empresa."}" name="${"description"}" data-svelte="svelte-flsy9c"><meta property="${"og:title"}" content="${"Alessandro Giuzio| WEB Design | Agency GA | Especialista SEO | Donostia - San Sebastian | GIPUZKOA"}" data-svelte="svelte-flsy9c"><meta name="${"keywords"}" content="${"dise\xF1o web donostia, dise\xF1o web san sebastian, dise\xF1o web gipuzkoa, posicionamiento web donostia, posicionamiento web san sebastian, seo donostia, dise\xF1o paginas web donostia, desarrollo web donostia"}" data-svelte="svelte-flsy9c"><meta property="${"og:url"}" content="${"https://agencyga.com/"}" data-svelte="svelte-flsy9c"><meta property="${"og:image"}" content="${"https://agencyga.com/logo-brand.png"}" data-svelte="svelte-flsy9c"><meta name="${"twitter:image"}" content="${"https://agencyga.com/logo-brand.png"}" data-svelte="svelte-flsy9c"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-flsy9c">`, ""}


<body>${(0, import_index_6a85fedf.v)(Hero, "Hero").$$render($$result, {}, {}, {})}
    ${(0, import_index_6a85fedf.v)(Main, "Main").$$render($$result, {}, {}, {})}
    ${(0, import_index_6a85fedf.v)(Trabajos, "Trabajos").$$render($$result, {}, {}, {})}
    ${(0, import_index_6a85fedf.v)(Form, "Form").$$render($$result, {}, {}, {})}</body>`;
});
module.exports = __toCommonJS(stdin_exports);
