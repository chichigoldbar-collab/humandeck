import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "public/assets");

const assets = [
  ["focus-owl.svg", "owl", ["#89d4ff", "#5a7cff"], "#f4f8ff"],
  ["focus-monkey.svg", "monkey", ["#ffca7c", "#ff8a4c"], "#fff6eb"],
  ["focus-butterfly.svg", "butterfly", ["#ff7bbf", "#9f7bff"], "#fff1fb"],
  ["focus-dolphin.svg", "dolphin", ["#7de0ff", "#4db6ff"], "#eefbff"],
  ["focus-dog.svg", "dog", ["#ffd382", "#ff9c72"], "#fff5ec"],

  ["stress-sloth.svg", "sloth", ["#c9d3ea", "#95abc9"], "#f4f7fb"],
  ["stress-panda.svg", "panda", ["#ffca8b", "#ff9f6d"], "#fff7ef"],
  ["stress-wolf.svg", "wolf", ["#91abff", "#637cff"], "#f2f5ff"],
  ["stress-monkey.svg", "monkey", ["#ffba82", "#ff8b61"], "#fff5ef"],
  ["stress-fox.svg", "fox", ["#ffc08a", "#ff8b5c"], "#fff4ee"],
  ["stress-boar.svg", "boar", ["#f1a29d", "#d16f7a"], "#fff3f4"],
  ["stress-penguin.svg", "penguin", ["#9ad6ff", "#5cb6ff"], "#eef9ff"],

  ["ghost-wolf.svg", "wolf", ["#7968ff", "#3d2f72"], "#191325"],
  ["ghost-bear.svg", "bear", ["#8d6cff", "#493e8b"], "#1d1730"],
  ["ghost-cat.svg", "cat", ["#b480ff", "#6a46b8"], "#1e1430"],
  ["ghost-owl.svg", "owl", ["#9e8eff", "#5142aa"], "#18122a"],
  ["ghost-fox.svg", "fox", ["#ff8ba1", "#7f3f7b"], "#241225"],
  ["ghost-ant.svg", "ant", ["#8dc9ff", "#4569c7"], "#141b2a"],

  ["persona-fox.svg", "fox", ["#ffbf8d", "#ff8f66"], "#fff5ef"],
  ["persona-deer.svg", "deer", ["#d6b78c", "#b08a5a"], "#fff8f0"],
  ["persona-cat.svg", "cat", ["#aab8de", "#7187c1"], "#f5f8ff"],
  ["persona-lion.svg", "lion", ["#ffd681", "#f0aa42"], "#fff9ec"],
  ["persona-monkey.svg", "monkey", ["#ffba82", "#ff8c64"], "#fff6ef"],
  ["persona-wolf.svg", "wolf", ["#9eb4e2", "#6c86c4"], "#f2f6ff"],
  ["persona-hedgehog.svg", "hedgehog", ["#c4a08d", "#8a6c5a"], "#fbf5f1"],
  ["persona-peacock.svg", "peacock", ["#86d9d1", "#58b7ff"], "#effcff"],

  ["music-whale.svg", "whale", ["#86abff", "#5770ff"], "#f2f6ff"],
  ["music-cheetah.svg", "cheetah", ["#ffcb7c", "#ff9657"], "#fff8ef"],
  ["music-owl.svg", "owl", ["#9fb4ff", "#6687ff"], "#f2f7ff"],
  ["music-otter.svg", "otter", ["#ffc1ab", "#ff8d91"], "#fff5f2"],
  ["music-capybara.svg", "capybara", ["#d2be9c", "#a68c66"], "#f8f4ec"],
  ["music-fox.svg", "fox", ["#ffb38d", "#ff8461"], "#fff5ef"],
  ["music-rabbit.svg", "rabbit", ["#ffb8d0", "#ff8db0"], "#fff4f8"],
  ["music-wolf.svg", "wolf", ["#9db0df", "#667fb8"], "#f3f6ff"],

  ["movie-lion.svg", "lion", ["#ffd986", "#f5b04c"], "#fff9ec"],
  ["movie-wolf.svg", "wolf", ["#9eb5e0", "#6f86be"], "#f2f6ff"],
  ["movie-cheetah.svg", "cheetah", ["#ffc17a", "#ff9157"], "#fff6ed"],
  ["movie-owl.svg", "owl", ["#b5a7ff", "#7b69e3"], "#f6f3ff"],
  ["movie-squirrel.svg", "squirrel", ["#e0c28a", "#b98b48"], "#fff8ee"],
  ["movie-fox.svg", "fox", ["#ffb78f", "#ff855e"], "#fff5ef"],
  ["movie-bear.svg", "bear", ["#baa7ea", "#8067c8"], "#f7f2ff"],
  ["movie-octopus.svg", "octopus", ["#92dcff", "#59b6d8"], "#eefbff"],
];

const animalFill = {
  wolf: "#f4f0f8",
  fox: "#fff7ef",
  cat: "#fcfbff",
  lion: "#fff4d8",
  monkey: "#ffe7c7",
  owl: "#f8fbff",
  butterfly: "#fff7ff",
  dolphin: "#f3fdff",
  dog: "#fff4e2",
  sloth: "#f2efe9",
  panda: "#fcfcfd",
  boar: "#f3d2cf",
  penguin: "#f7fbff",
  bear: "#f5f1eb",
  deer: "#f6eadb",
  hedgehog: "#f0e3da",
  peacock: "#f5fcff",
  whale: "#eef7ff",
  cheetah: "#fff2dc",
  otter: "#fff0ea",
  capybara: "#f2e6d2",
  rabbit: "#fff0f5",
  squirrel: "#f7efe0",
  octopus: "#f3fbff",
  ant: "#eef6ff",
};

function svgWrap(inner, bg1, bg2, bgBase = "#ffffff") {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="96" y1="64" x2="416" y2="448" gradientUnits="userSpaceOnUse">
      <stop stop-color="${bg1}"/>
      <stop offset="1" stop-color="${bg2}"/>
    </linearGradient>
    <filter id="shadow" x="72" y="88" width="368" height="340" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#111827" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="512" height="512" rx="128" fill="${bgBase}"/>
  <circle cx="256" cy="236" r="156" fill="url(#bg)" opacity="0.16"/>
  <g filter="url(#shadow)">
    <rect x="88" y="112" width="336" height="304" rx="92" fill="url(#bg)"/>
    <rect x="104" y="128" width="304" height="272" rx="78" fill="${bgBase}" fill-opacity="0.94"/>
  </g>
  ${inner}
</svg>`;
}

function eyes() {
  return `
    <ellipse cx="222" cy="236" rx="10" ry="12" fill="#1f2937"/>
    <ellipse cx="290" cy="236" rx="10" ry="12" fill="#1f2937"/>
    <circle cx="218" cy="232" r="3" fill="#ffffff"/>
    <circle cx="286" cy="232" r="3" fill="#ffffff"/>`;
}

function snout(fill = "#fff8f2", nose = "#b86d6d") {
  return `
    <ellipse cx="256" cy="272" rx="38" ry="28" fill="${fill}"/>
    <ellipse cx="256" cy="262" rx="10" ry="7" fill="${nose}"/>
    <path d="M244 277C248 284 252 287 256 287C260 287 264 284 268 277" stroke="#6b4f4f" stroke-width="4" stroke-linecap="round"/>`;
}

function faceBase(animal, extras = "") {
  const fill = animalFill[animal] ?? "#fffaf5";
  return `
    <ellipse cx="256" cy="250" rx="94" ry="86" fill="${fill}"/>
    ${eyes()}
    ${extras}
    <ellipse cx="256" cy="346" rx="86" ry="42" fill="${fill}" opacity="0.96"/>
  `;
}

function wolfLike(type) {
  const earFill = type === "fox" ? "#ffb183" : type === "cat" ? "#d5dcf4" : "#c8d1e8";
  const cheek = type === "fox" ? "#ffd7bf" : "#ffffff";
  return `
    <polygon points="186,188 220,144 234,204" fill="${earFill}"/>
    <polygon points="326,188 292,144 278,204" fill="${earFill}"/>
    ${faceBase(type, `${snout(cheek, "#9f6b6b")}`)}
  `;
}

function dog() {
  return `
    <ellipse cx="194" cy="196" rx="28" ry="42" fill="#c58e58"/>
    <ellipse cx="318" cy="196" rx="28" ry="42" fill="#c58e58"/>
    ${faceBase("dog", `${snout("#fff8f2", "#a96b53")}`)}
  `;
}

function lion() {
  return `
    <circle cx="256" cy="244" r="112" fill="#f2b24f"/>
    <circle cx="256" cy="248" r="84" fill="${animalFill.lion}"/>
    <circle cx="194" cy="186" r="22" fill="#f7c76a"/>
    <circle cx="318" cy="186" r="22" fill="#f7c76a"/>
    ${eyes()}
    ${snout("#fff6e8", "#b67c46")}
    <ellipse cx="256" cy="346" rx="86" ry="42" fill="${animalFill.lion}" opacity="0.96"/>
  `;
}

function monkey() {
  return `
    <circle cx="194" cy="206" r="28" fill="#c08457"/>
    <circle cx="318" cy="206" r="28" fill="#c08457"/>
    ${faceBase("monkey", `<ellipse cx="256" cy="258" rx="54" ry="46" fill="#fff3e1"/>${snout("#fff1dc", "#b8795e")}`)}
  `;
}

function owl() {
  return `
    <polygon points="204,168 226,146 236,184" fill="#6d7cc8"/>
    <polygon points="308,168 286,146 276,184" fill="#6d7cc8"/>
    <ellipse cx="256" cy="246" rx="92" ry="92" fill="${animalFill.owl}"/>
    <circle cx="222" cy="236" r="24" fill="#f8d782"/>
    <circle cx="290" cy="236" r="24" fill="#f8d782"/>
    <circle cx="222" cy="236" r="11" fill="#1f2937"/>
    <circle cx="290" cy="236" r="11" fill="#1f2937"/>
    <polygon points="256,254 242,272 270,272" fill="#f59e0b"/>
    <path d="M230 292C238 300 247 304 256 304C265 304 274 300 282 292" stroke="#7380a6" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="256" cy="346" rx="86" ry="42" fill="${animalFill.owl}" opacity="0.96"/>
  `;
}

function butterfly() {
  return `
    <ellipse cx="208" cy="224" rx="42" ry="56" fill="#ffb0db"/>
    <ellipse cx="304" cy="224" rx="42" ry="56" fill="#b6a2ff"/>
    <ellipse cx="216" cy="292" rx="36" ry="44" fill="#ff87c2"/>
    <ellipse cx="296" cy="292" rx="36" ry="44" fill="#8ea6ff"/>
    <ellipse cx="256" cy="258" rx="22" ry="74" fill="#4b5563"/>
    <circle cx="246" cy="206" r="6" fill="#4b5563"/>
    <circle cx="266" cy="206" r="6" fill="#4b5563"/>
    <path d="M246 200C242 184 236 176 226 170" stroke="#4b5563" stroke-width="4" stroke-linecap="round"/>
    <path d="M266 200C270 184 276 176 286 170" stroke="#4b5563" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="256" cy="364" rx="86" ry="24" fill="#f1ecff" opacity="0.96"/>
  `;
}

function dolphin() {
  return `
    <path d="M166 282C178 202 246 168 318 188C338 194 352 208 356 224C364 260 336 304 292 318C270 324 250 324 232 318L204 340L212 304C184 298 168 292 166 282Z" fill="#79cfff"/>
    <path d="M252 216C268 202 296 198 314 206C302 206 286 214 278 224C266 236 262 248 262 260C252 250 246 236 252 216Z" fill="#48aef2"/>
    <circle cx="236" cy="244" r="9" fill="#17324d"/>
    <circle cx="232" cy="240" r="3" fill="#ffffff"/>
    <path d="M224 274C234 282 248 286 262 286C278 286 292 280 304 268" stroke="#3b7dad" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="256" cy="356" rx="92" ry="28" fill="#eefbff" opacity="0.96"/>
  `;
}

function sloth() {
  return `
    <circle cx="194" cy="204" r="24" fill="#bcb3ac"/>
    <circle cx="318" cy="204" r="24" fill="#bcb3ac"/>
    ${faceBase("sloth", `
      <ellipse cx="222" cy="236" rx="26" ry="20" fill="#c5bab0"/>
      <ellipse cx="290" cy="236" rx="26" ry="20" fill="#c5bab0"/>
      <circle cx="222" cy="236" r="9" fill="#1f2937"/>
      <circle cx="290" cy="236" r="9" fill="#1f2937"/>
      <circle cx="218" cy="232" r="3" fill="#ffffff"/>
      <circle cx="286" cy="232" r="3" fill="#ffffff"/>
      ${snout("#f4efe8", "#8b6b64")}
    `)}
  `;
}

function panda() {
  return `
    <circle cx="196" cy="190" r="24" fill="#1f2937"/>
    <circle cx="316" cy="190" r="24" fill="#1f2937"/>
    ${faceBase("panda", `
      <ellipse cx="222" cy="236" rx="24" ry="30" fill="#1f2937"/>
      <ellipse cx="290" cy="236" rx="24" ry="30" fill="#1f2937"/>
      <circle cx="222" cy="236" r="9" fill="#ffffff"/>
      <circle cx="290" cy="236" r="9" fill="#ffffff"/>
      <circle cx="222" cy="236" r="5" fill="#1f2937"/>
      <circle cx="290" cy="236" r="5" fill="#1f2937"/>
      ${snout("#fffdf8", "#5a5a5a")}
    `)}
  `;
}

function boar() {
  return `
    <polygon points="186,202 202,174 222,202" fill="#ba7b77"/>
    <polygon points="326,202 310,174 290,202" fill="#ba7b77"/>
    ${faceBase("boar", `
      ${snout("#f7e1de", "#9e6766")}
      <path d="M220 276C214 286 208 292 202 296" stroke="#f7f1ec" stroke-width="5" stroke-linecap="round"/>
      <path d="M292 276C298 286 304 292 310 296" stroke="#f7f1ec" stroke-width="5" stroke-linecap="round"/>
    `)}
  `;
}

function penguin() {
  return `
    <ellipse cx="256" cy="244" rx="86" ry="96" fill="#1f2937"/>
    <ellipse cx="256" cy="260" rx="60" ry="78" fill="#f6fbff"/>
    <circle cx="222" cy="232" r="10" fill="#1f2937"/>
    <circle cx="290" cy="232" r="10" fill="#1f2937"/>
    <polygon points="256,250 236,268 276,268" fill="#f59e0b"/>
    <ellipse cx="256" cy="348" rx="82" ry="40" fill="#f6fbff" opacity="0.96"/>
  `;
}

function bear() {
  return `
    <circle cx="196" cy="192" r="24" fill="#c6aa86"/>
    <circle cx="316" cy="192" r="24" fill="#c6aa86"/>
    ${faceBase("bear", `${snout("#fff4ea", "#9c6d56")}`)}
  `;
}

function deer() {
  return `
    <path d="M210 176C198 156 194 140 196 124" stroke="#a67d51" stroke-width="8" stroke-linecap="round"/>
    <path d="M302 176C314 156 318 140 316 124" stroke="#a67d51" stroke-width="8" stroke-linecap="round"/>
    <path d="M198 140L180 126" stroke="#a67d51" stroke-width="6" stroke-linecap="round"/>
    <path d="M204 148L184 148" stroke="#a67d51" stroke-width="6" stroke-linecap="round"/>
    <path d="M314 140L332 126" stroke="#a67d51" stroke-width="6" stroke-linecap="round"/>
    <path d="M308 148L328 148" stroke="#a67d51" stroke-width="6" stroke-linecap="round"/>
    ${faceBase("deer", `${snout("#fff5ea", "#8d6a59")}`)}
  `;
}

function hedgehog() {
  return `
    <path d="M168 228C184 172 232 148 282 154C330 160 360 194 358 246C356 286 334 316 298 332L214 330C184 316 164 282 168 228Z" fill="#9f7a69"/>
    <path d="M178 216L164 198" stroke="#8b6757" stroke-width="6" stroke-linecap="round"/>
    <path d="M196 188L188 164" stroke="#8b6757" stroke-width="6" stroke-linecap="round"/>
    <path d="M224 172L222 148" stroke="#8b6757" stroke-width="6" stroke-linecap="round"/>
    <path d="M288 172L292 148" stroke="#8b6757" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="256" cy="252" rx="82" ry="78" fill="${animalFill.hedgehog}"/>
    ${eyes()}
    ${snout("#f7eee8", "#8b6760")}
    <ellipse cx="256" cy="346" rx="84" ry="40" fill="${animalFill.hedgehog}" opacity="0.96"/>
  `;
}

function peacock() {
  return `
    <circle cx="256" cy="182" r="20" fill="#5dc0c8"/>
    <path d="M242 166L232 150" stroke="#4a83d8" stroke-width="4" stroke-linecap="round"/>
    <path d="M256 162L256 144" stroke="#4a83d8" stroke-width="4" stroke-linecap="round"/>
    <path d="M270 166L280 150" stroke="#4a83d8" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="196" cy="228" rx="36" ry="56" fill="#7ce0cf"/>
    <ellipse cx="256" cy="220" rx="38" ry="62" fill="#6dc7ff"/>
    <ellipse cx="316" cy="228" rx="36" ry="56" fill="#8bc4ff"/>
    <ellipse cx="256" cy="262" rx="54" ry="78" fill="${animalFill.peacock}"/>
    ${eyes()}
    <polygon points="256,258 242,272 270,272" fill="#f59e0b"/>
    <ellipse cx="256" cy="346" rx="82" ry="38" fill="${animalFill.peacock}" opacity="0.96"/>
  `;
}

function whale() {
  return `
    <path d="M168 272C178 206 238 178 306 192C342 200 364 226 366 256C368 296 336 324 286 326L300 350L266 334C222 334 182 316 170 290C168 286 166 280 168 272Z" fill="#86abff"/>
    <path d="M286 204C312 212 326 230 326 254C326 270 320 282 308 292C314 264 308 232 286 204Z" fill="#5b74ff"/>
    <circle cx="230" cy="244" r="9" fill="#213047"/>
    <circle cx="226" cy="240" r="3" fill="#ffffff"/>
    <path d="M220 278C230 286 244 290 258 290C270 290 282 286 292 278" stroke="#5470c2" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="256" cy="356" rx="92" ry="28" fill="#eef7ff" opacity="0.96"/>
  `;
}

function cheetah() {
  return `
    <polygon points="190,188 220,152 234,204" fill="#f3b566"/>
    <polygon points="322,188 292,152 278,204" fill="#f3b566"/>
    ${faceBase("cheetah", `
      ${snout("#fff6ea", "#ab714f")}
      <circle cx="206" cy="214" r="5" fill="#6c4b2a"/>
      <circle cx="236" cy="198" r="4" fill="#6c4b2a"/>
      <circle cx="306" cy="214" r="5" fill="#6c4b2a"/>
      <circle cx="280" cy="198" r="4" fill="#6c4b2a"/>
      <path d="M214 248L224 282" stroke="#6c4b2a" stroke-width="4" stroke-linecap="round"/>
      <path d="M298 248L288 282" stroke="#6c4b2a" stroke-width="4" stroke-linecap="round"/>
    `)}
  `;
}

function otter() {
  return `
    <circle cx="196" cy="196" r="22" fill="#d39878"/>
    <circle cx="316" cy="196" r="22" fill="#d39878"/>
    ${faceBase("otter", `<ellipse cx="256" cy="258" rx="56" ry="46" fill="#fff7f0"/>${snout("#fff6ef", "#9d6d59")}`)}
  `;
}

function capybara() {
  return `
    <ellipse cx="256" cy="246" rx="102" ry="88" fill="${animalFill.capybara}"/>
    <rect x="186" y="170" width="28" height="28" rx="10" fill="#b99364"/>
    <rect x="298" y="170" width="28" height="28" rx="10" fill="#b99364"/>
    ${eyes()}
    ${snout("#fff1de", "#8f6d52")}
    <ellipse cx="256" cy="346" rx="90" ry="42" fill="${animalFill.capybara}" opacity="0.96"/>
  `;
}

function rabbit() {
  return `
    <ellipse cx="206" cy="162" rx="18" ry="54" fill="#ffbdd4"/>
    <ellipse cx="306" cy="162" rx="18" ry="54" fill="#ffbdd4"/>
    <ellipse cx="206" cy="168" rx="8" ry="38" fill="#ffd9e5"/>
    <ellipse cx="306" cy="168" rx="8" ry="38" fill="#ffd9e5"/>
    ${faceBase("rabbit", `${snout("#fff8fb", "#b77e91")}`)}
  `;
}

function squirrel() {
  return `
    <polygon points="192,188 220,154 232,204" fill="#d3a15f"/>
    <polygon points="320,188 292,154 280,204" fill="#d3a15f"/>
    ${faceBase("squirrel", `${snout("#fff6ed", "#94694c")}`)}
    <path d="M324 286C352 276 368 252 368 228C368 206 356 188 338 176" stroke="#d3a15f" stroke-width="12" stroke-linecap="round"/>
  `;
}

function octopus() {
  return `
    <path d="M176 266C176 202 212 160 256 160C300 160 336 202 336 266V288C336 296 334 304 330 310L320 324C314 332 300 332 294 324L286 314L278 324C272 332 258 332 252 324L244 314L236 324C230 332 216 332 210 324L202 314L194 324C188 332 174 332 168 324L160 314C156 308 154 300 154 292V286C154 278 160 272 168 272H176V266Z" fill="#7fd0ea"/>
    <circle cx="222" cy="238" r="10" fill="#1f2937"/>
    <circle cx="290" cy="238" r="10" fill="#1f2937"/>
    <circle cx="218" cy="234" r="3" fill="#ffffff"/>
    <circle cx="286" cy="234" r="3" fill="#ffffff"/>
    <path d="M230 278C238 288 246 292 256 292C266 292 274 288 282 278" stroke="#4f95ad" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="256" cy="356" rx="92" ry="28" fill="#eefbff" opacity="0.96"/>
  `;
}

function ant() {
  return `
    <circle cx="256" cy="224" r="64" fill="${animalFill.ant}"/>
    <circle cx="222" cy="234" r="10" fill="#1f2937"/>
    <circle cx="290" cy="234" r="10" fill="#1f2937"/>
    <circle cx="218" cy="230" r="3" fill="#ffffff"/>
    <circle cx="286" cy="230" r="3" fill="#ffffff"/>
    <path d="M226 176C216 156 206 146 192 138" stroke="#5a6cd6" stroke-width="5" stroke-linecap="round"/>
    <path d="M286 176C296 156 306 146 320 138" stroke="#5a6cd6" stroke-width="5" stroke-linecap="round"/>
    <circle cx="190" cy="136" r="10" fill="#86a9ff"/>
    <circle cx="322" cy="136" r="10" fill="#86a9ff"/>
    ${snout("#f6fbff", "#7586cb")}
    <ellipse cx="256" cy="346" rx="84" ry="40" fill="${animalFill.ant}" opacity="0.96"/>
  `;
}

function render(type, bg1, bg2, bgBase) {
  switch (type) {
    case "wolf":
    case "fox":
    case "cat":
      return svgWrap(wolfLike(type), bg1, bg2, bgBase);
    case "dog":
      return svgWrap(dog(), bg1, bg2, bgBase);
    case "lion":
      return svgWrap(lion(), bg1, bg2, bgBase);
    case "monkey":
      return svgWrap(monkey(), bg1, bg2, bgBase);
    case "owl":
      return svgWrap(owl(), bg1, bg2, bgBase);
    case "butterfly":
      return svgWrap(butterfly(), bg1, bg2, bgBase);
    case "dolphin":
      return svgWrap(dolphin(), bg1, bg2, bgBase);
    case "sloth":
      return svgWrap(sloth(), bg1, bg2, bgBase);
    case "panda":
      return svgWrap(panda(), bg1, bg2, bgBase);
    case "boar":
      return svgWrap(boar(), bg1, bg2, bgBase);
    case "penguin":
      return svgWrap(penguin(), bg1, bg2, bgBase);
    case "bear":
      return svgWrap(bear(), bg1, bg2, bgBase);
    case "deer":
      return svgWrap(deer(), bg1, bg2, bgBase);
    case "hedgehog":
      return svgWrap(hedgehog(), bg1, bg2, bgBase);
    case "peacock":
      return svgWrap(peacock(), bg1, bg2, bgBase);
    case "whale":
      return svgWrap(whale(), bg1, bg2, bgBase);
    case "cheetah":
      return svgWrap(cheetah(), bg1, bg2, bgBase);
    case "otter":
      return svgWrap(otter(), bg1, bg2, bgBase);
    case "capybara":
      return svgWrap(capybara(), bg1, bg2, bgBase);
    case "rabbit":
      return svgWrap(rabbit(), bg1, bg2, bgBase);
    case "squirrel":
      return svgWrap(squirrel(), bg1, bg2, bgBase);
    case "octopus":
      return svgWrap(octopus(), bg1, bg2, bgBase);
    case "ant":
      return svgWrap(ant(), bg1, bg2, bgBase);
    default:
      return svgWrap(faceBase("bear", snout()), bg1, bg2, bgBase);
  }
}

fs.mkdirSync(outDir, { recursive: true });

for (const [filename, type, [bg1, bg2], bgBase] of assets) {
  fs.writeFileSync(path.join(outDir, filename), render(type, bg1, bg2, bgBase), "utf8");
}

console.log(`Generated ${assets.length} SVG assets in ${outDir}`);
