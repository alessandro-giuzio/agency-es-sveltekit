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
  default: () => _layout
});
var import_index_6a85fedf = require("../../chunks/index-6a85fedf.js");
var import_theme_change = require("theme-change");
const warn = (msg, val) => console.warn(`[svelte-headroom]:`, msg, val);
function validate({ duration, offset, tolerance }) {
  if (typeof offset !== "number")
    warn("The `offset` prop is not a number: ", offset);
  if (typeof tolerance !== "number")
    warn("The `tolerance` prop is not a number: ", tolerance);
  if (typeof duration !== "string")
    warn("The `duration` prop is not a string such as '200ms': ", duration);
}
var index_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1ql6gaa{position:fixed;width:100%;top:0;transition:transform 300ms linear;transform:translateY(0%)}.svelte-headroom--unpin.svelte-1ql6gaa{transform:translateY(-100%)}",
  map: null
};
let prefix = "svelte-headroom--";
const Src = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  let { duration = "300ms" } = $$props;
  let { offset = 0 } = $$props;
  let { tolerance = 0 } = $$props;
  let headerClass = "";
  let lastHeaderClass = "";
  let y = 0;
  let lastY = 0;
  const dispatch = (0, import_index_6a85fedf.a)();
  function deriveClass(y2 = 0, scrolled = 0) {
    if (y2 < offset)
      return "";
    if (Math.abs(scrolled) < tolerance)
      return headerClass;
    if (scrolled > 0)
      return "";
    if (scrolled < 0)
      return `${prefix}unpin`;
    return headerClass;
  }
  function updateClass(y2 = 0) {
    const scrolledPxs = lastY - y2;
    const result = deriveClass(y2, scrolledPxs);
    lastY = y2;
    return result;
  }
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.tolerance === void 0 && $$bindings.tolerance && tolerance !== void 0)
    $$bindings.tolerance(tolerance);
  $$result.css.add(css$1);
  {
    {
      validate({ duration, offset, tolerance });
      headerClass = updateClass(y);
      if (headerClass !== lastHeaderClass) {
        dispatch(headerClass ? "unpin" : "pin");
      }
      lastHeaderClass = headerClass;
    }
  }
  return `
<div class="${(0, import_index_6a85fedf.e)((0, import_index_6a85fedf.n)(headerClass)) + " svelte-1ql6gaa"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Theme_select = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<div><select data-choose-theme class="${"pr-9 select select-bordered select-primary bg-base-100 select-xs text-base-content "}"><option value="${""}">Choose a theme</option><option value="${"bumblebee"}">Bumblebee</option><option value="${"cupcake"}">Cupcake</option><option value="${"cyberpunk"}">Cyberpunk</option><option value="${"dark"}">Dark</option><option value="${"emerald"}">Emerald</option><option value="${"light"}">Light</option><option value="${"retro"}">Retro</option><option value="${"synthwave"}">Synthwave</option><option value="${"valentine"}">Valentine</option><option value="${"wireframe"}">Wireframe</option></select></div>`;
});
var nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media only screen and (max-width: 640px){.themeS.svelte-icms7h{display:none}}",
  map: null
};
const Nav = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_6a85fedf.v)(Src, "Headroom").$$render($$result, {}, {}, {
    default: () => {
      return `<header class="${"pb-2"}"><nav class="${"lg:max-w-screen-xl my-4 ml-auto mr-auto mb-8"}"><ul class="${"flex flex-row flex-wrap justify-evenly uppercase text-xl"}"><li class="${"themeS svelte-icms7h"}">${(0, import_index_6a85fedf.v)(Theme_select, "ThemeSelect").$$render($$result, {}, {}, {})}</li>
        <li><a class="${"text-xl text-candyAppleRed font-bold border-current border-b-4 hover:border-none"}" href="${"/"}">Inicio</a></li>
        <li><a class="${"text-xl text-primary font-bold border-current border-b-4 hover:border-none"}" href="${"/contacto"}">Contacto</a></li>
        <li><a class="${"text-xl text-brightPink font-bold border-current border-b-4 hover:border-none"}" href="${"/blog"}">Blog</a></li>
        <li><a class="${"text-xl text-sapphire font-bold border-current border-b-4 hover:border-none"}" href="${"/sobre-mi"}">Sobre Mi</a></li></ul></nav></header>`;
    }
  })}`;
});
const Logo = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<a class="${"ml-4"}" href="${"/index.html"}"><svg width="${"155"}" height="${"93"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M65.5781 72H57.1016L44.0449 34.2656L30.8516 72H22.3066L39.9434 21.6875H48.0781L65.5781 72ZM48.5566 56.0039L50.5391 61.541H37.4824L39.3965 56.0039H48.5566Z"}" fill="${"black"}"></path><circle cx="${"44"}" cy="${"49"}" r="${"40"}" stroke="${"black"}" stroke-width="${"8"}"></circle><path d="${"M72.6285 26.3462C77.4134 18.1804 84.7038 11.7751 93.4175 8.08103C102.131 4.38698 111.804 3.60107 121 5.83995C130.195 8.07884 138.424 13.2232 144.465 20.5094C150.505 27.7956 154.035 36.8353 154.531 46.2868C155.026 55.7382 152.461 65.0976 147.216 72.9756C141.971 80.8537 134.325 86.8306 125.414 90.019C116.503 93.2075 106.801 93.4377 97.749 90.6753C88.6967 87.913 80.7763 82.3054 75.1635 74.6849L110.591 48.5911L72.6285 26.3462Z"}" fill="${"#0B0A0A"}"></path><path d="${"M119.497 48.923L82.186 71.0315L81.584 27.8636L119.497 48.923Z"}" fill="${"#0B0A0A"}"></path><path d="${"M118.727 31.3262C117.633 30.0046 116.38 29.0475 114.967 28.4551C113.554 27.8626 112.096 27.5664 110.592 27.5664H110.318V20.7988H110.387C113.121 20.7988 115.673 21.2546 118.043 22.166C120.413 23.0775 122.532 24.4447 124.4 26.2676L118.727 31.3262ZM89.4004 46.5703C89.4004 42.651 89.8561 39.1875 90.7676 36.1797C91.679 33.1263 92.9323 30.5514 94.5273 28.4551C96.1224 26.3132 98.0365 24.627 100.27 23.3965C102.503 22.166 104.918 21.3913 107.516 21.0723V27.9082C106.148 28.2728 104.872 28.888 103.688 29.7539C102.548 30.6198 101.523 31.8275 100.611 33.377C99.7454 34.8809 99.0618 36.7266 98.5605 38.9141C98.0592 41.056 97.7858 43.6081 97.7402 46.5703C97.7858 49.5326 98.0592 52.1302 98.5605 54.3633C99.0618 56.5964 99.7454 58.5332 100.611 60.1738C101.523 61.7689 102.548 63.0449 103.688 64.002C104.872 64.959 106.148 65.6198 107.516 65.9844V72.2051C104.918 71.8861 102.503 71.1113 100.27 69.8809C98.0365 68.6048 96.1224 66.8958 94.5273 64.7539C92.9323 62.612 91.679 60.0371 90.7676 57.0293C89.8561 53.9759 89.4004 50.4896 89.4004 46.5703ZM126.998 46.0234V65.5059C125.95 66.8275 124.765 67.9212 123.443 68.7871C122.167 69.6074 120.8 70.291 119.342 70.8379C117.929 71.3848 116.448 71.7721 114.898 72C113.395 72.2279 111.891 72.3418 110.387 72.3418H110.318V66.3262C110.865 66.3262 111.526 66.3034 112.301 66.2578C113.121 66.1667 113.941 66.0527 114.762 65.916C115.628 65.7337 116.425 65.5059 117.154 65.2324C117.929 64.959 118.499 64.5716 118.863 64.0703V51.6289H110.318V46.0234H126.998Z"}" fill="${"white"}"></path></svg></a>`;
});
const Github = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `
<a class="${"hover:text-gray-700"}" href="${"https://github.com/alessandro-giuzio"}" target="${"_blank"}"><svg class="${"mx-4 fill-current"}" width="${"25"}" height="${"25"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Github</title><path d="${"M7.6502 17.4769C7.91359 17.3939 8.05985 17.1132 7.97689 16.8498C7.89393 16.5864 7.61316 16.4401 7.34977 16.5231L7.6502 17.4769ZM2.55196 13.7164L2.06835 13.5894L1.81441 14.5566L2.29802 14.6836L2.55196 13.7164ZM13 20.5V21H14V20.5H13ZM13 13.5L12.9465 13.0029C12.7548 13.0235 12.592 13.1525 12.5282 13.3344C12.4643 13.5164 12.5108 13.7188 12.6476 13.8547L13 13.5ZM17.5 8.2775H18L18 8.27589L17.5 8.2775ZM16.3336 5.46875L15.8675 5.28774C15.7959 5.47224 15.8398 5.68164 15.9795 5.8218L16.3336 5.46875ZM16.2636 2.64512L16.7201 2.44124C16.6599 2.30632 16.543 2.20496 16.401 2.16436L16.2636 2.64512ZM13.2221 3.75375L13.096 4.23758C13.2315 4.27292 13.3757 4.24976 13.4934 4.17375L13.2221 3.75375ZM7.77785 3.75375L7.50664 4.1738C7.6243 4.24977 7.76844 4.27291 7.90396 4.23758L7.77785 3.75375ZM4.73635 2.64512L4.59887 2.1644C4.45684 2.20501 4.34004 2.30636 4.27981 2.44124L4.73635 2.64512ZM4.66635 5.46875L5.02038 5.82183C5.16016 5.68167 5.20409 5.47225 5.13243 5.28774L4.66635 5.46875ZM3.49998 8.30025H3.99998L3.99997 8.29897L3.49998 8.30025ZM7.99999 13.5L8.35294 13.8542C8.48865 13.7189 8.53514 13.518 8.47263 13.3369C8.41013 13.1558 8.24963 13.0263 8.0594 13.0035L7.99999 13.5ZM7.49999 15.6H7.99999C7.99999 15.5878 7.99954 15.5756 7.99864 15.5634L7.49999 15.6ZM6.99999 20.5V21H7.99999V20.5H6.99999ZM7.34977 16.5231C6.47889 16.7974 5.89863 16.7754 5.49248 16.6414C5.08781 16.5078 4.78703 16.2406 4.51527 15.8863C4.37819 15.7076 4.25348 15.5134 4.12637 15.3077C4.0037 15.1091 3.87159 14.8874 3.73711 14.6891C3.47399 14.3011 3.11526 13.8643 2.55196 13.7164L2.29802 14.6836C2.48459 14.7326 2.66639 14.8919 2.90946 15.2503C3.02807 15.4253 3.14047 15.6145 3.2756 15.8332C3.40628 16.0448 3.55266 16.2744 3.72183 16.495C4.06257 16.9391 4.51494 17.3718 5.17909 17.591C5.84175 17.8097 6.64596 17.7932 7.6502 17.4769L7.34977 16.5231ZM14 15.5125C14 14.6987 14.052 13.8402 13.3523 13.1453L12.6476 13.8547C12.9962 14.201 13 14.5763 13 15.5125H14ZM13.0534 13.9971C14.3014 13.863 15.5637 13.5658 16.5061 12.6903C17.464 11.8003 18 10.4025 18 8.2775H17C17 10.2423 16.507 11.3244 15.8254 11.9577C15.1284 12.6053 14.1406 12.8745 12.9465 13.0029L13.0534 13.9971ZM18 8.27589C17.9962 7.0907 17.5245 5.95496 16.6877 5.1157L15.9795 5.8218C16.6303 6.47439 16.997 7.35753 17 8.27911L18 8.27589ZM16.7997 5.64976C16.9991 5.13623 17.0948 4.58826 17.0811 4.03754L16.0814 4.06232C16.0918 4.48092 16.0191 4.89741 15.8675 5.28774L16.7997 5.64976ZM17.0811 4.03754C17.0675 3.48681 16.9448 2.94425 16.7201 2.44124L15.8071 2.84901C15.9778 3.23134 16.0711 3.64373 16.0814 4.06232L17.0811 4.03754ZM16.2636 2.64512C16.401 2.16436 16.4005 2.16423 16.4 2.16409C16.3999 2.16405 16.3994 2.16391 16.399 2.16382C16.3984 2.16364 16.3977 2.16345 16.397 2.16326C16.3957 2.16288 16.3943 2.16249 16.3928 2.1621C16.3898 2.1613 16.3866 2.16046 16.3832 2.1596C16.3763 2.15787 16.3685 2.15601 16.3598 2.1541C16.3423 2.15026 16.321 2.14618 16.296 2.14233C16.2458 2.13462 16.1807 2.12786 16.1002 2.12571C15.939 2.12141 15.7183 2.13565 15.4344 2.1963C14.8674 2.31745 14.051 2.62312 12.9508 3.33375L13.4934 4.17375C14.516 3.51325 15.2203 3.26461 15.6434 3.17423C15.8545 3.12912 15.9961 3.12329 16.0735 3.12535C16.1124 3.12639 16.1356 3.12943 16.144 3.13072C16.1482 3.13136 16.1488 3.13159 16.1458 3.13093C16.1443 3.1306 16.1419 3.13005 16.1386 3.12923C16.137 3.12882 16.1351 3.12834 16.1331 3.12778C16.132 3.1275 16.131 3.12721 16.1298 3.12689C16.1292 3.12674 16.1287 3.12657 16.1281 3.1264C16.1278 3.12632 16.1273 3.12619 16.1272 3.12615C16.1267 3.12602 16.1262 3.12589 16.2636 2.64512ZM13.3482 3.26992C11.4806 2.7831 9.51936 2.7831 7.65174 3.26992L7.90396 4.23758C9.6062 3.79388 11.3938 3.79388 13.096 4.23758L13.3482 3.26992ZM8.04906 3.33369C6.9485 2.62311 6.13214 2.31745 5.56523 2.1963C5.2814 2.13565 5.06073 2.12141 4.8996 2.12571C4.81915 2.12786 4.75406 2.13462 4.7039 2.14234C4.67885 2.14619 4.65759 2.15028 4.64008 2.15412C4.63133 2.15603 4.62352 2.15789 4.61665 2.15962C4.61322 2.16049 4.61002 2.16133 4.60706 2.16213C4.60557 2.16252 4.60415 2.16291 4.60279 2.16329C4.6021 2.16348 4.60144 2.16367 4.60078 2.16385C4.60046 2.16395 4.59998 2.16408 4.59982 2.16413C4.59934 2.16426 4.59887 2.1644 4.73635 2.64512C4.87383 3.12585 4.87337 3.12598 4.87291 3.12612C4.87276 3.12616 4.8723 3.12629 4.872 3.12637C4.8714 3.12654 4.87082 3.1267 4.87025 3.12686C4.86911 3.12718 4.86802 3.12747 4.86699 3.12775C4.86493 3.12831 4.86308 3.12879 4.86144 3.1292C4.85818 3.13003 4.85578 3.13058 4.85427 3.13091C4.85125 3.13157 4.85178 3.13135 4.85597 3.13071C4.8643 3.12943 4.88752 3.12639 4.9263 3.12535C5.00364 3.12329 5.14516 3.12911 5.35625 3.17422C5.77918 3.26461 6.48358 3.51326 7.50664 4.1738L8.04906 3.33369ZM4.27981 2.44124C4.05517 2.94425 3.93247 3.48681 3.91882 4.03754L4.91851 4.06232C4.92889 3.64373 5.02215 3.23134 5.19289 2.84901L4.27981 2.44124ZM3.91882 4.03754C3.90517 4.58826 4.00083 5.13623 4.20027 5.64976L5.13243 5.28774C4.98084 4.89741 4.90814 4.48092 4.91851 4.06232L3.91882 4.03754ZM4.31232 5.11567C3.89481 5.53431 3.56399 6.03119 3.33879 6.57787L4.26342 6.95875C4.43851 6.53368 4.69575 6.14733 5.02038 5.82183L4.31232 5.11567ZM3.33879 6.57787C3.1136 7.12455 2.99846 7.71029 2.99998 8.30153L3.99997 8.29897C3.9988 7.83925 4.08832 7.38382 4.26342 6.95875L3.33879 6.57787ZM2.99998 8.30025C2.99998 10.4117 3.53673 11.7967 4.49523 12.6806C5.43629 13.5484 6.6967 13.8476 7.94058 13.9965L8.0594 13.0035C6.86115 12.8601 5.87155 12.5895 5.17314 11.9455C4.49216 11.3175 3.99998 10.2488 3.99998 8.30025H2.99998ZM7.64703 13.1458C7.29105 13.5006 7.1219 13.9561 7.04431 14.3865C6.96666 14.8172 6.97374 15.261 7.00133 15.6366L7.99864 15.5634C7.97373 15.2242 7.97226 14.8756 8.02845 14.5639C8.0847 14.2518 8.1918 14.0147 8.35294 13.8542L7.64703 13.1458ZM6.99999 15.6V20.5H7.99999V15.6H6.99999ZM14 20.5V15.5125H13V20.5H14Z"}" fill="${"#0A0909"}"></path></svg></a>`;
});
const Twitter = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<a class="${"hover:text-gray-700"}" href="${"https://twitter.com/giuzioale"}" target="${"_blank"}"><svg class="${"mx-4 fill-current"}" width="${"25"}" height="${"25"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Twitter</title><path d="${"M20.4691 2L20.968 1.96692C20.9547 1.76635 20.8226 1.59324 20.6327 1.5275C20.4427 1.46176 20.2319 1.51616 20.0974 1.6656L20.4691 2ZM19.5428 6.22701C19.5428 5.95086 19.3189 5.72701 19.0428 5.72701C18.7666 5.72701 18.5428 5.95086 18.5428 6.22701H19.5428ZM10.5 7.5V8H11V7.5H10.5ZM1.92637 2L2.39462 1.82468C2.32485 1.63834 2.15124 1.5111 1.95255 1.50069C1.75385 1.49027 1.56789 1.59865 1.47902 1.77667L1.92637 2ZM7.5 15L7.85383 15.3533C7.97619 15.2307 8.02642 15.0536 7.98661 14.885C7.94679 14.7165 7.8226 14.5806 7.65833 14.5257L7.5 15ZM0.5 17.7143V17.2143C0.279732 17.2143 0.0854109 17.3584 0.0215057 17.5692C-0.0423996 17.78 0.0391667 18.0078 0.222353 18.1301L0.5 17.7143ZM17.9515 3.39054L17.5806 3.72589L17.7608 3.92513L18.0264 3.88491L17.9515 3.39054ZM19.9702 2.03308C20.0446 3.15499 19.9783 3.86395 19.7838 4.41243C19.5929 4.95047 19.2609 5.38419 18.6968 5.9247L19.3887 6.64673C20.0033 6.0578 20.4605 5.4957 20.7262 4.74676C20.9882 4.00827 21.0458 3.13909 20.968 1.96692L19.9702 2.03308ZM19.5428 7.26785V6.28571H18.5428V7.26785H19.5428ZM19.5428 6.28571V6.22701H18.5428V6.28571H19.5428ZM10 6.5V7.5H11V6.5H10ZM14.8223 1.5C12.125 1.5 10 3.85065 10 6.5H11C11 4.35063 12.7282 2.5 14.8223 2.5V1.5ZM18.5428 7.26785C18.5428 13.5599 13.2624 19 7 19V20C13.8342 20 19.5428 14.0925 19.5428 7.26785H18.5428ZM1.45811 2.17532C2.22305 4.2183 5.10161 8 10.5 8V7C5.62855 7 3.05605 3.59122 2.39462 1.82468L1.45811 2.17532ZM1.47902 1.77667C0.00554863 4.72816 -0.242404 7.59715 0.775073 10.0321C1.79256 12.467 4.03467 14.3702 7.34167 15.4743L7.65833 14.5257C4.54668 13.4869 2.57561 11.7473 1.69776 9.64651C0.819895 7.54571 0.994452 4.98613 2.37372 2.22333L1.47902 1.77667ZM7.14617 14.6467C6.26646 15.5278 3.76165 17.2143 0.5 17.2143V18.2143C4.08491 18.2143 6.83174 16.377 7.85383 15.3533L7.14617 14.6467ZM18.3224 3.0552C17.4594 2.10084 16.2107 1.5 14.8223 1.5V2.5C15.916 2.5 16.8991 2.97214 17.5806 3.72589L18.3224 3.0552ZM18.0264 3.88491C19.0619 3.72808 20.0775 3.18292 20.8409 2.3344L20.0974 1.6656C19.4829 2.34872 18.6743 2.77537 17.8766 2.89618L18.0264 3.88491ZM0.222353 18.1301C2.47016 19.631 4.63313 20 7 20V19C4.75713 19 2.80895 18.6548 0.777647 17.2985L0.222353 18.1301Z"}" fill="${"#0A0909"}"></path></svg></a>`;
});
const Linkedin = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<a class="${"hover:text-gray-900"}" href="${"https://www.linkedin.com/in/alessandrogiuzio/"}" target="${"_blank"}"><svg class="${"mx-4"}" width="${"25"}" height="${"25"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Linkedin</title><path d="${"M5.5 8V16M15.5 16V12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12V16V8M5 5.5H6M1.5 0.5H19.5C20.0523 0.5 20.5 0.947715 20.5 1.5V19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H1.5C0.947716 20.5 0.5 20.0523 0.5 19.5V1.5C0.5 0.947716 0.947715 0.5 1.5 0.5Z"}" stroke="${"#0A0909"}"></path></svg></a>`;
});
const Footer = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"py-16 bg-baseColor2"}"><div class="${"flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-xl"}"><div class="${"flex items-center"}">
            ${(0, import_index_6a85fedf.v)(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
          <ul class="${"flex flex-col lg:flex-row items-center text-lg font-extrabold text-black py-12 lg:py-0"}"><li class="${"mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase"}"><a href="${"/"}">Empieza Aqui</a></li>
            <li class="${"mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase"}"><a href="${"/contacto"}">CONTACTO</a></li>
            <li class="${"mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase"}"><a href="${"/blog"}">CONSEJOS DE CRECIMIENTO</a></li>
            <li class="${"mx-7 hover:text-gray-700 mb-2 lg:mb-0 uppercase"}"><a href="${"/sobre-mi"}">Sobre mi</a></li></ul>
          <div class="${"flex text-gray-500"}">
           ${(0, import_index_6a85fedf.v)(Twitter, "Twitter").$$render($$result, {}, {}, {})}
            
            ${(0, import_index_6a85fedf.v)(Github, "Github").$$render($$result, {}, {}, {})}
            
            ${(0, import_index_6a85fedf.v)(Linkedin, "Linkedin").$$render($$result, {}, {}, {})}</div></div>

        
        <div class="${"flex flex-col items-center mt-24 text-sm text-black font-bold uppercase"}"><span>\xA9 Alessandro Giuzio 2022</span></div>
        <div class="${"flex flex-col items-center mt-8 text-xs text-black font-bold uppercase"}"><span><a href="${"/politica-de-privacidad"}">Politica de Privacidad</a></span></div></footer>`;
});
const _layout = (0, import_index_6a85fedf.c)(($$result, $$props, $$bindings, slots) => {
  return `<body class="${"bg-baseColor font-inconsolata w-screen"}">${slots.default ? slots.default({}) : ``}


${(0, import_index_6a85fedf.v)(Nav, "Nav").$$render($$result, {}, {}, {})}

${(0, import_index_6a85fedf.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</body>`;
});
module.exports = __toCommonJS(stdin_exports);
