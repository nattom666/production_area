// 品目のイラスト。外部画像は使わず、すべてこの場で SVG を組み立てる。
// 形（SHAPES のキー）と色を品目ごとに割り当てる。形は使い回す。
const SHAPES = {
  // ── まるい実 ──
  ball: (c) => `<circle cx="50" cy="56" r="30" fill="${c.a}"/>
    <ellipse cx="40" cy="45" rx="9" ry="6" fill="#fff" opacity=".35"/>
    <path d="M50 26c0-6 5-9 10-10-2 6-4 9-10 10z" fill="${c.b || '#5aa84f'}"/>
    <rect x="48" y="20" width="4" height="10" rx="2" fill="#7a5230"/>`,
  apple: () => `<path d="M50 32c14-10 34-2 32 16 -2 20-14 34-22 34-4 0-6-2-10-2s-6 2-10 2c-8 0-20-14-22-34-2-18 18-26 32-16z" fill="#e63946"/>
    <ellipse cx="38" cy="48" rx="7" ry="10" fill="#fff" opacity=".28"/>
    <rect x="48" y="18" width="4" height="14" rx="2" fill="#7a5230"/>
    <path d="M52 24c6-6 14-7 18-6-2 8-10 12-18 10z" fill="#5aa84f"/>`,
  pear: (c) => `<path d="M50 22c8 0 10 8 8 14 10 4 16 14 16 26 0 14-11 22-24 22S26 76 26 62c0-12 6-22 16-26-2-6 0-14 8-14z" fill="${c.a}"/>
    <ellipse cx="40" cy="62" rx="7" ry="11" fill="#fff" opacity=".3"/>
    <rect x="48" y="12" width="4" height="12" rx="2" fill="#7a5230"/>`,
  grape: (c) => `<g fill="${c.a}">
    <circle cx="50" cy="34" r="9"/><circle cx="38" cy="46" r="9"/><circle cx="62" cy="46" r="9"/>
    <circle cx="50" cy="52" r="9"/><circle cx="32" cy="62" r="9"/><circle cx="68" cy="62" r="9"/>
    <circle cx="50" cy="70" r="9"/><circle cx="40" cy="80" r="8"/><circle cx="60" cy="80" r="8"/></g>
    <circle cx="46" cy="31" r="3" fill="#fff" opacity=".4"/>
    <path d="M50 26V14" stroke="#7a5230" stroke-width="4" stroke-linecap="round"/>
    <path d="M52 18c8-6 16-4 20 0-6 6-14 8-20 4z" fill="#5aa84f"/>`,
  cherry: (c) => `<circle cx="36" cy="68" r="16" fill="${c.a}"/><circle cx="66" cy="72" r="14" fill="${c.a}"/>
    <circle cx="31" cy="62" r="4" fill="#fff" opacity=".4"/>
    <path d="M36 52C40 30 50 20 58 16M66 58C64 40 60 26 58 16" stroke="#5aa84f" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M58 16c8-4 16 0 18 4-6 6-14 6-18 0z" fill="#5aa84f"/>`,
  berry: () => `<path d="M50 88C34 80 24 64 24 48c0-8 10-12 26-12s26 4 26 12c0 16-10 32-26 40z" fill="#e63946"/>
    <g fill="#ffe680"><circle cx="40" cy="52" r="2.4"/><circle cx="52" cy="50" r="2.4"/><circle cx="62" cy="55" r="2.4"/>
    <circle cx="46" cy="63" r="2.4"/><circle cx="58" cy="66" r="2.4"/><circle cx="50" cy="76" r="2.4"/></g>
    <path d="M50 36c-10 0-18-4-22-8 8-2 14-2 22 2 8-4 14-4 22-2-4 4-12 8-22 8z" fill="#4caf50"/>
    <rect x="48" y="16" width="4" height="14" rx="2" fill="#5aa84f"/>`,
  melon: (c) => `<circle cx="50" cy="56" r="31" fill="${c.a}"/>
    <g stroke="#f2f5e4" stroke-width="2.5" fill="none" opacity=".9">
    <path d="M22 46c12 6 44 6 56 0M22 66c12-6 44-6 56 0M40 27c-6 16-6 42 0 58M60 27c6 16 6 42 0 58"/></g>
    <rect x="48" y="20" width="5" height="10" rx="2" fill="#7a5230"/>`,
  watermelon: () => `<circle cx="50" cy="56" r="31" fill="#2e8b57"/>
    <g stroke="#1f6b41" stroke-width="5" fill="none"><path d="M30 32c6 16 6 32 0 48M50 25v62M70 32c-6 16-6 32 0 48"/></g>`,
  pineapple: () => `<path d="M50 18c4 8 4 14 2 20 6-6 12-8 18-8-4 8-10 12-16 14 8-2 14 0 18 4-8 4-16 4-22 2 6 2 10 6 12 12-8-2-14-6-18-12-4 6-10 10-18 12 2-6 6-10 12-12-6 2-14 2-22-2 4-4 10-6 18-4-6-2-12-6-16-14 6 0 12 2 18 8-2-6-2-12 2-20z" fill="#5aa84f"/>
    <ellipse cx="50" cy="66" rx="24" ry="26" fill="#f2c14e"/>
    <g stroke="#c98f2b" stroke-width="2" fill="none">
    <path d="M28 54l44 24M28 78l44-24M50 40v52M26 66h48"/></g>`,
  kiwi: () => `<circle cx="50" cy="56" r="31" fill="#8d6a3f"/><circle cx="50" cy="56" r="26" fill="#b7d16a"/>
    <ellipse cx="50" cy="56" rx="9" ry="10" fill="#f4f7e6"/>
    <g fill="#3b3b2b"><circle cx="50" cy="38" r="1.8"/><circle cx="62" cy="44" r="1.8"/><circle cx="66" cy="58" r="1.8"/>
    <circle cx="58" cy="70" r="1.8"/><circle cx="42" cy="70" r="1.8"/><circle cx="34" cy="58" r="1.8"/><circle cx="38" cy="44" r="1.8"/></g>`,
  chestnut: () => `<path d="M50 24c18 0 30 16 30 32 0 8-4 12-12 12H32c-8 0-12-4-12-12 0-16 12-32 30-32z" fill="#8d5524"/>
    <path d="M20 68h60c0 8-14 12-30 12S20 76 20 68z" fill="#5e3413"/>
    <ellipse cx="40" cy="44" rx="6" ry="9" fill="#fff" opacity=".25"/>
    <path d="M50 24c-2-6-1-10 0-12 1 2 2 6 0 12z" fill="#5e3413"/>`,
  persimmon: (c) => `<circle cx="50" cy="60" r="28" fill="${c.a}"/>
    <ellipse cx="40" cy="50" rx="8" ry="6" fill="#fff" opacity=".3"/>
    <path d="M50 32c-8 0-16-2-20-6 6-2 12-2 20 0 8-2 14-2 20 0-4 4-12 6-20 6z" fill="#4a7c2f"/>
    <path d="M34 26c6 6 26 6 32 0" stroke="#4a7c2f" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="48" y="16" width="4" height="10" rx="2" fill="#6b4423"/>`,
  // ── ねもの ──
  root: (c) => `<path d="M50 90c-8-8-12-24-12-38 0-10 5-16 12-16s12 6 12 16c0 14-4 30-12 38z" fill="${c.a}"/>
    <g stroke="${c.b || '#4caf50'}" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M50 36V16M50 30L36 14M50 30l14-16"/></g>`,
  daikon: (c) => `<path d="M50 92c-9-10-14-28-14-42 0-9 6-14 14-14s14 5 14 14c0 14-5 32-14 42z" fill="${c.a}"/>
    <g stroke="#5aa84f" stroke-width="5" fill="none" stroke-linecap="round">
    <path d="M50 36V14M50 32L34 12M50 32l16-20"/></g>`,
  lotus: (c) => `<ellipse cx="50" cy="56" rx="30" ry="26" fill="${c.a}"/>
    <g fill="#d8cdad"><circle cx="50" cy="42" r="5"/><circle cx="34" cy="52" r="5"/><circle cx="66" cy="52" r="5"/>
    <circle cx="40" cy="68" r="5"/><circle cx="60" cy="68" r="5"/><circle cx="50" cy="56" r="5"/></g>`,
  potato: (c) => `<ellipse cx="50" cy="56" rx="31" ry="24" fill="${c.a}" transform="rotate(-8 50 56)"/>
    <g fill="#8a6a45" opacity=".7"><ellipse cx="38" cy="50" rx="3" ry="2"/><ellipse cx="58" cy="48" rx="3" ry="2"/>
    <ellipse cx="50" cy="64" rx="3" ry="2"/><ellipse cx="66" cy="60" rx="3" ry="2"/></g>`,
  bulb: (c) => `<path d="M50 88c-16 0-26-11-26-24 0-12 10-26 26-32 16 6 26 20 26 32 0 13-10 24-26 24z" fill="${c.a}"/>
    <g stroke="#b07a3c" stroke-width="1.8" fill="none" opacity=".6"><path d="M50 34v52M36 40c-4 14-2 34 6 46M64 40c4 14 2 34-6 46"/></g>
    <path d="M50 32c-2-8-6-12-10-14 6 0 10 2 10 4 0-2 4-4 10-4-4 2-8 6-10 14z" fill="#8fae5a"/>`,
  garlic: () => `<path d="M50 88c-15 0-25-10-25-22 0-12 9-26 25-32 16 6 25 20 25 32 0 12-10 22-25 22z" fill="#f4efe4"/>
    <g stroke="#d8ceb8" stroke-width="2" fill="none"><path d="M50 34v54M36 42c-4 14-2 32 6 44M64 42c4 14 2 32-6 44"/></g>
    <path d="M50 34c-2-10-4-14-6-18 6 4 8 10 6 18z" fill="#b6a98c"/>`,
  ginger: (c) => `<path d="M28 62c0-10 8-16 18-14 2-10 12-14 20-8 8 6 6 18-2 22 6 6 4 18-6 20-8 2-14-2-16-8-8 4-16-2-14-12z" fill="${c.a}"/>
    <g fill="#c9a06a" opacity=".7"><ellipse cx="42" cy="56" rx="4" ry="3"/><ellipse cx="60" cy="52" rx="4" ry="3"/><ellipse cx="54" cy="72" rx="4" ry="3"/></g>`,
  // ── はもの ──
  leafball: (c) => `<circle cx="50" cy="58" r="30" fill="${c.a}"/>
    <g stroke="#fff" stroke-width="2.5" fill="none" opacity=".65">
    <path d="M50 28c-10 12-14 30-10 50M50 28c10 12 14 30 10 50M22 54c14 2 42 2 56 0"/></g>
    <path d="M50 28c-14-4-24 2-28 8 10 2 20 0 28-8z" fill="${c.b || '#7fb069'}"/>`,
  leafy: (c) => `<g fill="${c.a}">
    <path d="M50 88c-14-10-22-28-20-44 10 4 18 16 20 28 2-12 10-24 20-28 2 16-6 34-20 44z"/>
    <path d="M50 72c-10-8-16-20-14-32 8 4 12 12 14 20 2-8 6-16 14-20 2 12-4 24-14 32z" opacity=".8"/></g>
    <path d="M50 90V52" stroke="#e8f0d0" stroke-width="4" stroke-linecap="round"/>`,
  stalk: (c) => `<path d="M44 88V44c0-6 2-10 6-10s6 4 6 10v44z" fill="${c.a}"/>
    <path d="M50 40c-8-12-8-22-6-28 6 6 8 18 6 28zM50 40c8-12 8-22 6-28-6 6-8 18-6 28z" fill="${c.b || '#4caf50'}"/>
    <path d="M44 74h12" stroke="#fff" stroke-width="2" opacity=".5"/>`,
  broccoli: (c) => `<g fill="${c.a}"><circle cx="34" cy="42" r="13"/><circle cx="50" cy="34" r="15"/><circle cx="66" cy="42" r="13"/>
    <circle cx="42" cy="54" r="12"/><circle cx="58" cy="54" r="12"/></g>
    <path d="M44 88V58h12v30z" fill="${c.b || '#a8d08d'}"/>`,
  // ── 実もの ──
  tomato: (c) => `<circle cx="50" cy="58" r="29" fill="${c.a}"/>
    <ellipse cx="39" cy="48" rx="8" ry="6" fill="#fff" opacity=".3"/>
    <path d="M50 30c-6 0-10-4-14-8 6-2 10 0 14 4 4-4 8-6 14-4-4 4-8 8-14 8z" fill="#4a8f3c"/>
    <path d="M36 24c8 8 20 8 28 0" stroke="#4a8f3c" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="48" y="14" width="4" height="10" rx="2" fill="#4a8f3c"/>`,
  bell: (c) => `<path d="M50 86c-14 0-22-10-22-24 0-12 6-24 12-24 4 0 6 4 10 4s6-4 10-4c6 0 12 12 12 24 0 14-8 24-22 24z" fill="${c.a}"/>
    <path d="M44 42c0-8 2-12 6-12s6 4 6 12" fill="none" stroke="#3d7a30" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="38" cy="60" rx="5" ry="12" fill="#fff" opacity=".22"/>`,
  eggplant: (c) => `<path d="M62 34c14 6 18 24 8 38-10 14-30 18-40 8s-4-30 10-38c8-5 15-10 22-8z" fill="${c.a}"/>
    <path d="M60 36c-6-6-4-14 0-18 4 6 8 6 12 6-2 6-6 10-12 12z" fill="#4a8f3c"/>
    <ellipse cx="44" cy="58" rx="5" ry="13" fill="#fff" opacity=".2" transform="rotate(-30 44 58)"/>`,
  cucumber: (c) => `<path d="M30 78c-8-10-4-28 8-40s28-16 34-8-2 26-14 38-20 20-28 10z" fill="${c.a}"/>
    <g fill="#2f6f2f" opacity=".5"><circle cx="42" cy="60" r="2"/><circle cx="52" cy="50" r="2"/><circle cx="60" cy="40" r="2"/><circle cx="46" cy="70" r="2"/></g>
    <rect x="66" y="22" width="4" height="9" rx="2" fill="#5aa84f" transform="rotate(35 68 26)"/>`,
  pumpkin: (c) => `<ellipse cx="50" cy="60" rx="32" ry="26" fill="${c.a}"/>
    <g stroke="#1f5030" stroke-width="2.5" fill="none" opacity=".8">
    <path d="M38 36c-6 14-6 34 0 48M62 36c6 14 6 34 0 48M50 34v52"/></g>
    <rect x="47" y="24" width="6" height="12" rx="3" fill="#6b4423"/>`,
  corn: () => `<ellipse cx="50" cy="56" rx="18" ry="32" fill="#f2c14e"/>
    <g stroke="#d19b2a" stroke-width="1.6" fill="none"><path d="M50 24v64M38 30c-2 20-2 36 0 52M62 30c2 20 2 36 0 52M34 44h32M34 58h32M34 72h32"/></g>
    <path d="M32 40c-10 6-14 24-8 40 10-6 12-24 8-40zM68 40c10 6 14 24 8 40-10-6-12-24-8-40z" fill="#5aa84f"/>`,
  pod: (c) => `<path d="M24 66c0-14 12-28 28-28 12 0 22 6 24 14 2 8-6 12-16 14-12 2-22 8-26 14-6 2-10-6-10-14z" fill="${c.a}"/>
    <g fill="#fff" opacity=".35"><circle cx="40" cy="58" r="4"/><circle cx="52" cy="52" r="4"/><circle cx="64" cy="50" r="4"/></g>`,
  edamame: (c) => `<path d="M26 70c-4-12 4-26 18-32s28-2 32 8-6 22-20 28-26 6-30-4z" fill="${c.a}"/>
    <g fill="#fff" opacity=".3"><circle cx="40" cy="62" r="5"/><circle cx="54" cy="55" r="5"/><circle cx="66" cy="50" r="4"/></g>
    <path d="M76 44c6-4 10-4 14-2-4 4-8 6-14 4z" fill="#4a8f3c"/>`,
  cauliflower: (c) => `<g fill="${c.a}"><circle cx="36" cy="46" r="13"/><circle cx="50" cy="38" r="15"/><circle cx="64" cy="46" r="13"/>
    <circle cx="43" cy="56" r="12"/><circle cx="57" cy="56" r="12"/></g>
    <path d="M26 58c6 14 16 20 24 20s18-6 24-20c-4 12-10 22-24 22s-20-10-24-22z" fill="#8fae5a"/>`,
  asparagus: (c) => `<g fill="${c.a}"><path d="M42 88V40c0-6 1-10 3-10s3 4 3 10v48z"/><path d="M52 88V36c0-6 1-10 3-10s3 4 3 10v52z"/></g>
    <g fill="${c.b || '#3d7a30'}"><path d="M45 30l-4-8 4-6 4 6zM55 26l-4-8 4-6 4 6z"/></g>`,
  negi: () => `<path d="M46 88V50h8v38z" fill="#f2f5e4"/>
    <path d="M50 52c-6-14-8-28-6-38 6 8 8 24 6 38zM50 52c6-14 8-28 6-38-6 8-8 24-6 38z" fill="#5aa84f"/>
    <path d="M46 60h8" stroke="#dfe8c0" stroke-width="2"/>`,
};

// 品目（統計の名前）→ 形と色
const ART = {
  'みかん': ['ball', '#ff9f1c'], 'りんご': ['apple', ''], '日本なし': ['pear', '#c9a227'],
  '西洋なし': ['pear', '#d8c24a'], 'かき': ['persimmon', '#f2761a'], 'びわ': ['ball', '#f5b642'],
  'もも': ['ball', '#f7a1b5'], 'すもも': ['ball', '#b0407a'], 'おうとう': ['cherry', '#d62246'],
  'うめ': ['ball', '#9ccc65'], 'ぶどう': ['grape', '#7b4b94'], 'くり': ['chestnut', ''],
  'パインアップル': ['pineapple', ''], 'キウイフルーツ': ['kiwi', ''],
  'いちご': ['berry', ''], 'メロン': ['melon', '#a8c66c'], 'すいか': ['watermelon', ''],
  'だいこん': ['daikon', '#f6f7f0'], 'かぶ': ['root', '#f6f7f0'], 'にんじん': ['root', '#f4801a'],
  'ごぼう': ['root', '#9c6b3f'], 'れんこん': ['lotus', '#f0ead6'], 'ばれいしょ': ['potato', '#d9b382'],
  'さといも': ['potato', '#a67b5b'], 'やまのいも': ['potato', '#cbb994'],
  'はくさい': ['leafball', '#e4ecb4'], 'こまつな': ['leafy', '#4caf50'], 'キャベツ': ['leafball', '#a8d08d'],
  'ちんげんさい': ['leafy', '#6bbf59'], 'ほうれんそう': ['leafy', '#2f8f2f'], 'ふき': ['stalk', '#9ccc65'],
  'みつば': ['leafy', '#66bb6a'], 'しゅんぎく': ['leafy', '#6bbf59'], 'みずな': ['leafy', '#7cb342'],
  'セルリー': ['stalk', '#b5d16a'], 'アスパラガス': ['asparagus', '#7cb342'],
  'カリフラワー': ['cauliflower', '#f2efe4'], 'ブロッコリー': ['broccoli', '#4a8f3c'],
  'レタス': ['leafball', '#c3e0a0'], 'ねぎ': ['negi', ''], 'にら': ['leafy', '#4caf50'],
  'たまねぎ': ['bulb', '#e0a458'], 'にんにく': ['garlic', ''], 'きゅうり': ['cucumber', '#3f8f3f'],
  'かぼちゃ': ['pumpkin', '#2f6f3f'], 'なす': ['eggplant', '#6b3fa0'], 'トマト': ['tomato', '#e63946'],
  'ピーマン': ['bell', '#4caf50'], 'スイートコーン': ['corn', ''], 'さやいんげん': ['pod', '#6bbf59'],
  'さやえんどう': ['pod', '#8bc34a'], 'グリーンピース': ['pod', '#6bbf59'],
  'そらまめ': ['edamame', '#8bc34a'], 'えだまめ': ['edamame', '#6bbf59'], 'しょうが': ['ginger', '#e0b878'],
};

function artSvg(statName) {
  const spec = ART[statName];
  if (!spec) return '';
  const [shape, color] = spec;
  return `<svg viewBox="0 0 100 100" role="img" aria-hidden="true">${SHAPES[shape]({ a: color })}</svg>`;
}
