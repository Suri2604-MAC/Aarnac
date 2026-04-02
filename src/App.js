import { useState, useEffect } from "react";

function useWindowWidth() {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

const C = {
  bg: "#fef8f0",
  bgWarm: "#faf0e2",
  card: "#fffcf8",
  dark: "#2c1408",
  darkM: "#3d1c0c",
  cream: "#f5e8d0",
  gold: "#b87030",
  goldL: "#dfa850",
  goldD: "#7a4818",
  brown: "#3a1e0c",
  brownM: "#6b3c1a",
  text: "#2a1208",
  textM: "#5a3218",
  textL: "#9a6840",
  border: "#e0c8a0",
  borderL: "#eedfc0",
};
const CONTACT = {
  phone: "9717277463",
  email: "tarun.sikka@nectarhospitality.com",
  address: "Plot No 485, Udyog Vihar Phase 5, Gurugram 122019, India",
};
const FRAGRANCES = [
  {
    name: "Tea Rose",
    mood: "Tender",
    line: "Fresh, dewy, romantic — like morning light through petals.",
    color: "#f8e8e4",
    txt: "#6a2030",
    acc: "#b85060",
    words: ["Romantic", "Delicate", "Feminine"],
  },
  {
    name: "Lavender",
    mood: "Serene",
    line: "Cool fields at dusk. Calming and restorative.",
    color: "#ece4f4",
    txt: "#3c2858",
    acc: "#7058a0",
    words: ["Calm", "Peaceful", "Restful"],
  },
  {
    name: "Jasmine",
    mood: "Sacred",
    line: "Worn in hair, offered at shrines. India's beloved fragrance.",
    color: "#faf4d8",
    txt: "#4a3808",
    acc: "#988020",
    words: ["Uplifting", "Sacred", "Sensual"],
  },
  {
    name: "Arabian Oudh",
    mood: "Majestic",
    line: "Smoky, resinous — the scent of ancient courts.",
    color: "#281008",
    txt: "#dfc07a",
    acc: "#c87820",
    words: ["Bold", "Luxurious", "Mysterious"],
    dark: true,
  },
  {
    name: "Rose",
    mood: "Timeless",
    line: "Pure, classic, eternal. Perfumed the world for millennia.",
    color: "#fce8ec",
    txt: "#5a1828",
    acc: "#b03858",
    words: ["Classic", "Elegant", "Enduring"],
  },
  {
    name: "Musk",
    mood: "Intimate",
    line: "Skin-close and warm. Lingers long after the room empties.",
    color: "#f4ece0",
    txt: "#3a2818",
    acc: "#7a5838",
    words: ["Warm", "Earthy", "Sensual"],
  },
  {
    name: "Vanilla",
    mood: "Comforting",
    line: "Sweet, familiar, like home. Wraps every room in warmth.",
    color: "#fef4dc",
    txt: "#3a2008",
    acc: "#a07028",
    words: ["Sweet", "Nostalgic", "Cosy"],
  },
];
const CAT_STYLE = {
  glass: {
    bg: "#eef6f8",
    border: "#9ac4d4",
    txt: "#1e5870",
    grad: "linear-gradient(135deg,#c8e8f0,#a0c8d8)",
  },
  metal: {
    bg: "#fdf4d8",
    border: "#d4a840",
    txt: "#6a4c08",
    grad: "linear-gradient(135deg,#f0d890,#d4a840)",
  },
  marble: {
    bg: "#f6f2f0",
    border: "#c0b0a8",
    txt: "#503830",
    grad: "linear-gradient(135deg,#ece8e4,#c8b8b0)",
  },
  wood: {
    bg: "#f6ece0",
    border: "#b88860",
    txt: "#503018",
    grad: "linear-gradient(135deg,#e8d0b0,#b88050)",
  },
  pillar: {
    bg: "#f0f6e4",
    border: "#94b868",
    txt: "#384c18",
    grad: "linear-gradient(135deg,#d0e8b0,#98c060)",
  },
  decorative: {
    bg: "#f6e8f2",
    border: "#bc8cb4",
    txt: "#581858",
    grad: "linear-gradient(135deg,#e8c8e0,#c090b8)",
  },
};
const IMGS = {
  1: "https://res.cloudinary.com/deebenumm/image/upload/v1775110886/Screenshot_2026-04-02_at_11.19.12_AM_wyg9f3.png",
  2: "https://res.cloudinary.com/deebenumm/image/upload/v1775117529/Screenshot_2026-04-02_at_11.19.43_AM_kq0siq.png",
  3: "https://res.cloudinary.com/deebenumm/image/upload/v1775110885/Screenshot_2026-04-02_at_11.19.47_AM_yxx7tf.png",
  4: "https://res.cloudinary.com/deebenumm/image/upload/v1775126788/Screenshot_2026-04-02_at_11.19.54_AM_fx38zt.png",
  5: "https://res.cloudinary.com/deebenumm/image/upload/v1775117618/Screenshot_2026-04-02_at_11.19.57_AM_jlqzp6.png",
  6: "https://res.cloudinary.com/deebenumm/image/upload/v1775117727/Screenshot_2026-04-02_at_11.20.00_AM_ypxbf0.png",
  7: "https://res.cloudinary.com/deebenumm/image/upload/v1775126837/Screenshot_2026-04-02_at_11.20.03_AM_fndgek.png",
  8: "https://res.cloudinary.com/deebenumm/image/upload/v1775126740/Screenshot_2026-04-02_at_11.20.06_AM_aglbzz.png",
  9: "https://res.cloudinary.com/deebenumm/image/upload/v1775126618/Screenshot_2026-04-02_at_11.20.08_AM_s60p6s.png",
  10: "https://res.cloudinary.com/deebenumm/image/upload/v1775118406/Screenshot_2026-04-02_at_11.20.11_AM_a0a8qn.png",
  11: "https://res.cloudinary.com/deebenumm/image/upload/v1775126577/Screenshot_2026-04-02_at_11.20.14_AM_j9wawq.png",
  12: "https://res.cloudinary.com/deebenumm/image/upload/v1775118050/Screenshot_2026-04-02_at_11.20.16_AM_bznm8w.png",
  13: "https://res.cloudinary.com/deebenumm/image/upload/v1775117848/Screenshot_2026-04-02_at_11.20.19_AM_dyljjz.png",
  14: "https://res.cloudinary.com/deebenumm/image/upload/v1775117983/Screenshot_2026-04-02_at_11.20.23_AM_wntcwx.png",
  15: "https://res.cloudinary.com/deebenumm/image/upload/v1775118295/Screenshot_2026-04-02_at_11.20.26_AM_rphn9f.png",
  16: "https://res.cloudinary.com/deebenumm/image/upload/v1775117473/Screenshot_2026-04-02_at_11.20.29_AM_nkusnz.png",
  17: "https://res.cloudinary.com/deebenumm/image/upload/v1775115706/Screenshot_2026-04-02_at_11.20.31_AM_t1xrw1.png",
  18: "https://res.cloudinary.com/deebenumm/image/upload/v1775115607/Screenshot_2026-04-02_at_11.20.38_AM_ywhpjj.png",
  19: "https://res.cloudinary.com/deebenumm/image/upload/v1775117394/Screenshot_2026-04-02_at_11.20.46_AM_jpyx0l.png",
  20: "https://res.cloudinary.com/deebenumm/image/upload/v1775117283/Screenshot_2026-04-02_at_11.20.48_AM_oz1nrd.png",
  21: "https://res.cloudinary.com/deebenumm/image/upload/v1775115651/Screenshot_2026-04-02_at_11.20.56_AM_a6bvoa.png",
  22: "https://res.cloudinary.com/deebenumm/image/upload/v1775115181/copy_of_screenshot_2026-04-02_at_112059_am_vxtomk_5005d4.png",
  23: "https://res.cloudinary.com/deebenumm/image/upload/v1775115318/Screenshot_2026-04-02_at_11.21.04_AM_cu2z52.png",
  24: "https://res.cloudinary.com/deebenumm/image/upload/v1775115476/Screenshot_2026-04-02_at_11.21.10_AM_udzzwb.png",
};
const PRODUCTS = [
  {
    id: 1,
    name: "Capri Candle with Metal Lid",
    code: "NH8765",
    size: "12×12×12 cm",
    burn: "45 hrs",
    cat: "glass",
    desc: "Iridescent pearl glass jar with embossed metal lid. Available in pearl green, white, and soft amber. Each piece catches light beautifully, making it a stunning addition to any gifting ensemble.",
    tags: ["Metal lid", "Iridescent glass"],
  },
  {
    id: 2,
    name: "Dome Candle",
    code: "NH 8799",
    size: "12×12×15 cm",
    burn: "55 hrs",
    cat: "glass",
    desc: "Vibrant coloured glass vessel topped with an elegant glass dome and crystal knob handle. Available in jewel tones — cobalt blue, ruby red, emerald green and more.",
    tags: ["Glass dome", "Multi-colour"],
  },
  {
    id: 3,
    name: "Set of 2 Candy Jar Candle",
    code: "NH8793",
    size: "Set of 2",
    burn: "45 hrs",
    cat: "glass",
    desc: "Crystal-cut ribbed glass candy jars with ornate dome lids sold as a luxurious pair. One large and one small, presented together in premium gift packaging.",
    tags: ["Set of 2", "Crystal glass"],
  },
  {
    id: 4,
    name: "Glass Candle with Wooden Lid",
    code: "NH 8790",
    size: "08×08×10 cm",
    burn: "25 hrs",
    cat: "glass",
    desc: "Clean cylindrical glass jar paired with a natural mango wood lid. The contrast of smooth glass and warm wood creates an earthy, minimalist aesthetic.",
    tags: ["Wooden lid", "Multi-colour"],
  },
  {
    id: 5,
    name: "Sheer Glass with Lid",
    code: "—",
    size: "3.25 × 4 in",
    burn: "—",
    cat: "glass",
    desc: "Elegant sheer glass vessels in rich jewel tones — Winter's Eve crimson, Orange Saffron amber, and Woodland Stories forest green. Each comes with a perfectly matched flat glass lid.",
    tags: ["Jewel tones", "Matching lid"],
  },
  {
    id: 6,
    name: "Metallic Flower Design",
    code: "—",
    size: "2×2.5 & 3×3.5 in",
    burn: "—",
    cat: "metal",
    desc: "Frosted metallic vessels with delicate hand-etched botanical flower motifs. The wax glows warmly through the engravings when lit, creating a lantern-like ambience.",
    tags: ["Etched florals", "Two sizes"],
  },
  {
    id: 7,
    name: "Cut Glass Candle with Lid",
    code: "NH 8798",
    size: "08×08×15 cm",
    burn: "25 hrs",
    cat: "glass",
    desc: "Intricately diamond-cut glass with a decorative floral knob lid. Available in peach, teal, cobalt, and olive — each piece refracts light like a jewel.",
    tags: ["Diamond-cut", "Ornate lid"],
  },
  {
    id: 8,
    name: "Royal Series",
    code: "—",
    size: "4 × 5 in",
    burn: "—",
    cat: "decorative",
    desc: "Goblet-style ribbed glass candles on elegant pedestal bases in antique silver and dusty rose. Inspired by royal Indian court aesthetics.",
    tags: ["Pedestal base", "Ribbed glass"],
  },
  {
    id: 9,
    name: "Ribbed Glass Candle",
    code: "—",
    size: "3 × 3 in",
    burn: "—",
    cat: "glass",
    desc: "Mercury-glass ribbed votives with scalloped rims in gold, silver, and rose champagne. The antique mercury finish creates a warm, diffused glow.",
    tags: ["Mercury glass", "Scalloped rim"],
  },
  {
    id: 10,
    name: "Glass Candle · Wood Bark 3 Wick",
    code: "NH 8891",
    size: "11×11×08 cm",
    burn: "20 hrs",
    cat: "glass",
    desc: "A glass bowl nestled inside a natural wood bark sleeve holding three wicks. The organic texture of real bark paired with three dancing flames creates rustic warmth.",
    tags: ["3 wicks", "Natural bark"],
  },
  {
    id: 11,
    name: "Marble Candle",
    code: "—",
    size: "18 in edge to edge",
    burn: "—",
    cat: "marble",
    desc: "Hand-carved white marble leaf and conch shell vessels holding premium scented wax. At 18 inches edge to edge, these are statement art pieces — heirloom quality.",
    tags: ["Hand-carved", "Leaf & shell"],
  },
  {
    id: 12,
    name: "Marble Lotus Candle",
    code: "—",
    size: "9 & 12 inches",
    burn: "—",
    cat: "marble",
    desc: "White marble lotus-shaped holders with wax poured into an intricate multi-petal bloom. Available in 9-inch and 12-inch diameters. A perfect Diwali gift.",
    tags: ["Lotus design", "Two sizes"],
  },
  {
    id: 13,
    name: "Hand Carving Stone Pot",
    code: "NH 8992",
    size: "07×07×09 cm",
    burn: "20 hrs",
    cat: "marble",
    desc: "Artisanal hand-carved white stone pot with fine leaf engravings all around the exterior. Each piece is unique — a true collector's statement.",
    tags: ["Hand-carved", "Leaf engravings"],
  },
  {
    id: 14,
    name: "Metal Urli · 5 Wick",
    code: "NH 8995",
    size: "20×20×07 cm",
    burn: "60 hrs",
    cat: "metal",
    desc: "Polished gold metal urli bowl with five wicks. Inspired by traditional Indian urli flower bowls. With a 60-hour burn time, this is the ultimate Diwali centrepiece.",
    tags: ["5 wicks", "Polished gold"],
  },
  {
    id: 15,
    name: "Metal Urli · 26 Wick",
    code: "NH 8996",
    size: "40×40×09 cm",
    burn: "45 hrs",
    cat: "metal",
    desc: "Grand polished brass urli at 40cm diameter with 26 individual wicks — when lit, it fills an entire room with warm light. Designed for luxury events.",
    tags: ["26 wicks", "Polished brass"],
  },
  {
    id: 16,
    name: "Hammered Metal Straight",
    code: "—",
    size: "5 × 2 in",
    burn: "—",
    cat: "metal",
    desc: "Hammered copper-finish metal dish with dried marigold, lavender, and botanical flower embellishments pressed into the wax surface.",
    tags: ["Hammered copper", "Floral decor"],
  },
  {
    id: 17,
    name: "Metal Lotus Candles",
    code: "—",
    size: "6×1 & 10×3 in",
    burn: "—",
    cat: "metal",
    desc: "Gold-hammered lotus-shaped metal trays with scented wax and scattered dried petals. Available in a small 6-inch tray and a large 10-inch bowl.",
    tags: ["Lotus shape", "Dried petals"],
  },
  {
    id: 18,
    name: "Metal Jar Candle",
    code: "NH 8867",
    size: "11×11×08 cm",
    burn: "40 hrs",
    cat: "metal",
    desc: "Brushed gold metal tumbler — clean, modern, effortlessly premium. A corporate gifting favourite.",
    tags: ["Brushed gold", "Corporate"],
  },
  {
    id: 19,
    name: "Candle Hammered Metal Pot",
    code: "NH 8893",
    size: "6×6×8 cm",
    burn: "15 hrs",
    cat: "metal",
    desc: "Compact hammered gold pot with a decorative ball-knob lid. Lightweight and elegant — ideal for festive gifting and boutique hotel amenities.",
    tags: ["Hammered finish", "Lid included"],
  },
  {
    id: 20,
    name: "Precious Metal Jar Candle",
    code: "—",
    size: "09×09×10 cm",
    burn: "—",
    cat: "metal",
    desc: "Mirror-polished jars in rose gold, yellow gold, and silver with the Aarna lotus label. Available individually or as a trio — the definitive premium Diwali gift.",
    tags: ["3 metallic finishes", "Aarna label"],
  },
  {
    id: 21,
    name: "Wood Urli · 3 Wick",
    code: "NH 8568",
    size: "25×15×07 cm",
    burn: "20 hrs",
    cat: "wood",
    desc: "Natural mango wood urli trough with three wicks set in creamy soy-blend wax. The grain of each piece is unique. Rustic warmth and artisanal luxury in perfect balance.",
    tags: ["3 wicks", "Mango wood"],
  },
  {
    id: 22,
    name: "Metalized T-Light Candle",
    code: "NH 8568",
    size: "Standard",
    burn: "4 hrs",
    cat: "metal",
    desc: "Rose gold and copper metalised tealight cups in elegant bulk packs. Perfect as décor accents, wedding table settings, or add-on gifts.",
    tags: ["Bulk packs", "Rose gold & copper"],
  },
  {
    id: 23,
    name: "Scented Pillar Candles",
    code: "—",
    size: "3×3 to 3×8 in",
    burn: "—",
    cat: "pillar",
    desc: "Classic ivory scented pillar candles in four heights — 3, 4, 6, and 8 inches tall. Timeless and versatile.",
    tags: ["4 sizes", "Ivory finish"],
  },
  {
    id: 24,
    name: "Large Scented Pillar Candle",
    code: "—",
    size: "4×4 to 6×12 in",
    burn: "—",
    cat: "pillar",
    desc: "Grand multi-wick scented pillar candles in six dimensions from 4×4 to 6×12 inches. Built for scale — hotel lobbies, mandap décor, event centrepieces.",
    tags: ["6 sizes", "Multi-wick"],
  },
];
const CATS = [
  { id: "all", label: "All" },
  { id: "glass", label: "Glass" },
  { id: "metal", label: "Metal" },
  { id: "marble", label: "Marble" },
  { id: "wood", label: "Wood" },
  { id: "pillar", label: "Pillar" },
  { id: "decorative", label: "Deco" },
];
const FEATURED_IDS = [5, 14, 12, 21];

function Label({ c }) {
  return (
    <p
      style={{
        fontSize: 10,
        letterSpacing: 4,
        color: c || "#b87030",
        textTransform: "uppercase",
        fontWeight: 500,
        margin: "0 0 12px",
      }}
    >
      {c}
    </p>
  );
}
function Lbl({ children, col }) {
  return (
    <p
      style={{
        fontSize: 10,
        letterSpacing: 4,
        color: col || C.gold,
        textTransform: "uppercase",
        fontWeight: 500,
        margin: "0 0 12px",
      }}
    >
      {children}
    </p>
  );
}

function Btn({ children, onClick, dark, outline, small, full }) {
  const base = {
    cursor: "pointer",
    border: "none",
    borderRadius: 2,
    fontWeight: 400,
    letterSpacing: 1.5,
    fontSize: small ? 10 : 11,
    textTransform: "uppercase",
    padding: small ? "8px 16px" : "12px 24px",
    transition: "all 0.2s",
    fontFamily: "inherit",
    width: full ? "100%" : "auto",
    display: full ? "block" : "inline-block",
    textAlign: "center",
    boxSizing: "border-box",
  };
  if (dark)
    return (
      <button
        style={{ ...base, background: C.gold, color: "#fff" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  if (outline)
    return (
      <button
        style={{
          ...base,
          background: "transparent",
          color: C.gold,
          border: `0.5px solid ${C.gold}`,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button
      style={{
        ...base,
        background: "transparent",
        color: C.brownM,
        border: `0.5px solid ${C.border}`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function CatBadge({ cat }) {
  const cs = CAT_STYLE[cat] || CAT_STYLE.glass;
  return (
    <span
      style={{
        fontSize: 9,
        padding: "2px 10px",
        borderRadius: 20,
        background: cs.bg,
        color: cs.txt,
        border: `0.5px solid ${cs.border}`,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        fontWeight: 500,
      }}
    >
      {cat}
    </span>
  );
}

function ProductImage({ id, name, cat, height = 200, radius = 0 }) {
  const [err, setErr] = useState(false);
  const src = IMGS[id];
  const cs = CAT_STYLE[cat] || CAT_STYLE.glass;
  if (src && !err)
    return (
      <div
        style={{
          height,
          overflow: "hidden",
          borderRadius: radius,
          background: cs.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <img
          src={src}
          alt={name}
          onError={() => setErr(true)}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>
    );
  return (
    <div
      style={{
        height,
        borderRadius: radius,
        background: cs.grad || cs.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg viewBox="0 0 40 56" width="36" height="50">
        <rect
          x="4"
          y="14"
          width="32"
          height="40"
          rx="4"
          fill={cs.border}
          opacity="0.8"
        />
        <path d="M20 10Q18 4 20 1Q22 4 20 10Z" fill={C.gold} opacity="0.9" />
      </svg>
      <div
        style={{
          fontSize: 11,
          color: cs.txt,
          marginTop: 8,
          fontFamily: "Georgia,serif",
          textAlign: "center",
          padding: "0 16px",
          lineHeight: 1.4,
        }}
      >
        {name}
      </div>
    </div>
  );
}

function ProductCard({ p, onSelect }) {
  const cs = CAT_STYLE[p.cat] || CAT_STYLE.glass;
  return (
    <div
      onClick={() => onSelect(p)}
      style={{
        background: C.card,
        borderRadius: 6,
        border: `0.5px solid ${C.borderL}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "box-shadow 0.25s,transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(180,100,30,0.14)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <ProductImage id={p.id} name={p.name} cat={p.cat} height={190} />
      <div
        style={{
          padding: "14px 14px 16px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 7,
          }}
        >
          <CatBadge cat={p.cat} />
          {p.code !== "—" && (
            <span style={{ fontSize: 9, color: C.textL, letterSpacing: 1 }}>
              {p.code}
            </span>
          )}
        </div>
        <h3
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: C.brown,
            margin: "0 0 6px",
            lineHeight: 1.45,
            fontFamily: "Georgia,serif",
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            fontSize: 11.5,
            color: C.textM,
            lineHeight: 1.7,
            flex: 1,
            marginBottom: 10,
          }}
        >
          {p.desc.slice(0, 85)}…
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 11,
            color: C.textL,
            borderTop: `0.5px solid ${C.borderL}`,
            paddingTop: 10,
            marginBottom: 10,
          }}
        >
          {p.size !== "—" && <span>{p.size}</span>}
          {p.burn !== "—" && <span>{p.burn}</span>}
        </div>
        <div
          style={{
            fontSize: 10,
            color: C.gold,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          View Details →
        </div>
      </div>
    </div>
  );
}

function ProductDetail({ p, onBack, onEnquire }) {
  const w = useWindowWidth();
  const mob = w < 768;
  const cs = CAT_STYLE[p.cat] || CAT_STYLE.glass;
  const related = PRODUCTS.filter(
    (r) => r.cat === p.cat && r.id !== p.id
  ).slice(0, 3);
  const [selFrag, setSelFrag] = useState(null);
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <div
        style={{
          background: C.card,
          borderBottom: `0.5px solid ${C.border}`,
          padding: `12px ${mob ? 16 : 32}px`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 11,
            color: C.textL,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontFamily: "inherit",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: 0,
          }}
        >
          <span style={{ fontSize: 16 }}>←</span>{" "}
          {mob ? "Back" : "Back to Collection"}
        </button>
        {!mob && (
          <>
            <span style={{ color: C.border, fontSize: 12 }}>·</span>
            <span style={{ fontSize: 11, color: C.textL }}>{p.name}</span>
          </>
        )}
      </div>
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: `32px ${mob ? 16 : 24}px`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
            gap: mob ? 24 : 52,
            alignItems: "start",
          }}
        >
          <div>
            <ProductImage
              id={p.id}
              name={p.name}
              cat={p.cat}
              height={mob ? 260 : 420}
              radius={6}
            />
          </div>
          <div>
            <div style={{ marginBottom: 12 }}>
              <CatBadge cat={p.cat} />
            </div>
            <h1
              style={{
                fontSize: mob ? 22 : 30,
                fontWeight: 400,
                color: C.brown,
                fontFamily: "Georgia,serif",
                margin: "0 0 6px",
                lineHeight: 1.3,
              }}
            >
              {p.name}
            </h1>
            {p.code !== "—" && (
              <div
                style={{
                  fontSize: 11,
                  color: C.textL,
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                Item Code: {p.code}
              </div>
            )}
            <p
              style={{
                fontSize: 13.5,
                color: C.textM,
                lineHeight: 1.95,
                marginBottom: 20,
                paddingBottom: 20,
                borderBottom: `0.5px solid ${C.borderL}`,
              }}
            >
              {p.desc}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 20,
              }}
            >
              {[
                ["Size", p.size],
                ["Burn Time", p.burn],
                ["Category", p.cat.charAt(0).toUpperCase() + p.cat.slice(1)],
                ["Packaging", "Premium gift box"],
              ]
                .filter(([, v]) => v && v !== "—")
                .map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      background: C.card,
                      borderRadius: 4,
                      padding: "10px 12px",
                      border: `0.5px solid ${C.borderL}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 9,
                        letterSpacing: 2,
                        color: C.textL,
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {k}
                    </div>
                    <div
                      style={{
                        fontSize: 12.5,
                        color: C.brown,
                        fontFamily: "Georgia,serif",
                      }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 22,
              }}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 10,
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: cs.bg,
                    color: cs.txt,
                    border: `0.5px solid ${cs.border}`,
                  }}
                >
                  {t}
                </span>
              ))}
              <span
                style={{
                  fontSize: 10,
                  padding: "4px 12px",
                  borderRadius: 20,
                  background: C.cream,
                  color: C.brownM,
                  border: `0.5px solid ${C.border}`,
                }}
              >
                All Fragrances Available
              </span>
            </div>
            <div
              style={{
                background: C.dark,
                borderRadius: 6,
                padding: "20px",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: C.goldL,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Interested in this product?
              </div>
              <Btn dark full onClick={() => onEnquire(p)}>
                Enquire About This Candle
              </Btn>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                  marginTop: 8,
                }}
              >
                <a
                  href={`tel:${CONTACT.phone}`}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "transparent",
                      border: `0.5px solid rgba(184,112,48,0.4)`,
                      borderRadius: 2,
                      cursor: "pointer",
                      fontSize: 10,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      color: "#dfa850",
                      fontFamily: "inherit",
                    }}
                  >
                    Call
                  </button>
                </a>
                <a
                  href={`mailto:${CONTACT.email}?subject=Enquiry: ${p.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "transparent",
                      border: `0.5px solid rgba(184,112,48,0.4)`,
                      borderRadius: 2,
                      cursor: "pointer",
                      fontSize: 10,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      color: "#dfa850",
                      fontFamily: "inherit",
                    }}
                  >
                    Email
                  </button>
                </a>
              </div>
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: `0.5px solid rgba(184,112,48,0.15)`,
                  fontSize: 11,
                  color: "#6b4820",
                  lineHeight: 1.7,
                }}
              >
                📞 {CONTACT.phone}
                <br />✉ {CONTACT.email}
              </div>
            </div>
            <div
              style={{
                fontSize: 11,
                color: C.textL,
                lineHeight: 1.7,
                background: C.cream,
                borderRadius: 4,
                padding: "12px 14px",
                border: `0.5px solid ${C.borderL}`,
              }}
            >
              All candles come with a premium gift box · 5–7 day lead time ·
              Bulk orders welcome
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            paddingTop: 40,
            borderTop: `0.5px solid ${C.borderL}`,
          }}
        >
          <Lbl>Signature Fragrances</Lbl>
          <h2
            style={{
              fontSize: mob ? 18 : 22,
              fontWeight: 400,
              color: C.brown,
              fontFamily: "Georgia,serif",
              margin: "8px 0 20px",
            }}
          >
            Choose your scent
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mob
                ? "repeat(2,1fr)"
                : "repeat(auto-fill,minmax(130px,1fr))",
              gap: 8,
            }}
          >
            {FRAGRANCES.map((f, i) => (
              <button
                key={i}
                onClick={() => setSelFrag(selFrag === i ? null : i)}
                style={{
                  padding: "12px 8px",
                  borderRadius: 4,
                  border: `0.5px solid ${
                    selFrag === i ? f.acc || C.gold : C.borderL
                  }`,
                  background:
                    selFrag === i ? (f.dark ? "#281008" : f.color) : C.card,
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: selFrag === i ? (f.dark ? f.txt : f.txt) : C.brown,
                    marginBottom: 3,
                    fontFamily: "Georgia,serif",
                  }}
                >
                  {f.name}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: selFrag === i ? f.acc : C.textL,
                  }}
                >
                  {f.mood}
                </div>
              </button>
            ))}
          </div>
          {selFrag !== null && (
            <div
              style={{
                marginTop: 12,
                padding: "14px 16px",
                borderRadius: 4,
                background: FRAGRANCES[selFrag].dark
                  ? "#281008"
                  : FRAGRANCES[selFrag].color,
                border: `0.5px solid ${FRAGRANCES[selFrag].acc}`,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: FRAGRANCES[selFrag].dark
                    ? FRAGRANCES[selFrag].acc
                    : FRAGRANCES[selFrag].txt,
                  lineHeight: 1.8,
                }}
              >
                {FRAGRANCES[selFrag].line} — Mention{" "}
                <strong>{FRAGRANCES[selFrag].name}</strong> when you enquire.
              </span>
            </div>
          )}
        </div>

        {related.length > 0 && (
          <div
            style={{
              marginTop: 48,
              paddingTop: 40,
              borderTop: `0.5px solid ${C.borderL}`,
            }}
          >
            <Lbl>From the same collection</Lbl>
            <h2
              style={{
                fontSize: mob ? 18 : 22,
                fontWeight: 400,
                color: C.brown,
                fontFamily: "Georgia,serif",
                margin: "8px 0 20px",
              }}
            >
              You might also like
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: mob ? "1fr 1fr" : "repeat(3,1fr)",
                gap: 14,
              }}
            >
              {related.map((r) => (
                <ProductCard
                  key={r.id}
                  p={r}
                  onSelect={() => {
                    window.scrollTo?.(0, 0);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FragranceSection() {
  const w = useWindowWidth();
  const mob = w < 768;
  const [active, setActive] = useState(3);
  const f = FRAGRANCES[active];
  return (
    <div style={{ background: C.dark, padding: `56px ${mob ? 16 : 24}px` }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Lbl col="#dfa850">Signature Fragrances</Lbl>
          <h2
            style={{
              fontSize: mob ? "clamp(22px,6vw,30px)" : "clamp(24px,3.5vw,36px)",
              fontWeight: 400,
              color: "#f5ede0",
              fontFamily: "Georgia,serif",
              margin: "8px 0 12px",
              lineHeight: 1.3,
            }}
          >
            Choose your mood.{" "}
            <em style={{ color: C.goldL }}>Choose your scent.</em>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 28,
            border: `0.5px solid rgba(184,112,48,0.25)`,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {FRAGRANCES.map((fr, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: mob ? "8px 10px" : "10px 16px",
                background: active === i ? C.gold : "transparent",
                color: active === i ? "#fff" : "#9a7858",
                border: "none",
                borderRight: `0.5px solid rgba(184,112,48,0.2)`,
                cursor: "pointer",
                fontSize: mob ? 9 : 10,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                fontFamily: "inherit",
                transition: "all 0.2s",
                fontWeight: active === i ? 500 : 400,
              }}
            >
              {fr.name.split(" ")[0]}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
            borderRadius: 6,
            overflow: "hidden",
            border: `0.5px solid rgba(184,112,48,0.2)`,
          }}
        >
          <div
            style={{
              background: f.dark ? "#180c04" : f.color,
              padding: mob ? "28px 24px" : "44px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: mob ? 180 : 240,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: f.dark ? C.goldL : f.acc,
                  marginBottom: 10,
                  fontWeight: 500,
                }}
              >
                {f.name}
              </div>
              <div
                style={{
                  fontSize: mob
                    ? "clamp(28px,7vw,40px)"
                    : "clamp(32px,4vw,48px)",
                  fontWeight: 400,
                  color: f.txt,
                  fontFamily: "Georgia,serif",
                  lineHeight: 1.1,
                  marginBottom: 12,
                }}
              >
                {f.mood}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: f.dark ? f.acc : f.txt,
                  lineHeight: 1.9,
                  opacity: 0.9,
                }}
              >
                {f.line}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 16,
                flexWrap: "wrap",
              }}
            >
              {f.words.map((w) => (
                <span
                  key={w}
                  style={{
                    fontSize: 9,
                    padding: "3px 10px",
                    border: `0.5px solid ${f.acc}`,
                    color: f.dark ? f.txt : f.acc,
                    borderRadius: 20,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
          {!mob && (
            <div
              style={{
                background: "#3a1c0a",
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 3,
                    color: "#9a7858",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  Pairs beautifully with
                </div>
                {[
                  "Metal Urli · 5 Wick",
                  "Precious Metal Jar Candle",
                  "Marble Lotus Candle",
                ].map((name, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      paddingBottom: 14,
                      borderBottom: `0.5px solid rgba(184,112,48,0.12)`,
                      marginBottom: i < 2 ? 14 : 0,
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: C.gold,
                        opacity: 0.7,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        color: "#d4b890",
                        fontFamily: "Georgia,serif",
                      }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 24,
                  fontSize: 12,
                  color: "#6b4820",
                  lineHeight: 1.8,
                  borderTop: `0.5px solid rgba(184,112,48,0.1)`,
                  paddingTop: 16,
                }}
              >
                Mention your preferred fragrance when you enquire.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function HomePage({ onSelectProduct, setPage }) {
  const w = useWindowWidth();
  const mob = w < 768;
  const featured = PRODUCTS.filter((p) => FEATURED_IDS.includes(p.id));
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg,#3a1c0a 0%,#2c1408 45%,#1e0c04 100%)`,
          padding: mob ? "64px 20px 52px" : "96px 24px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.04,
            pointerEvents: "none",
          }}
          viewBox="0 0 400 400"
          width={mob ? 200 : 400}
          height={mob ? 200 : 400}
        >
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="#c87030"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#c87030"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="80"
            fill="none"
            stroke="#c87030"
            strokeWidth="0.5"
          />
          {Array.from({ length: 16 }, (_, i) => {
            const a = (i * 22.5 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={200 + 80 * Math.cos(a)}
                y1={200 + 80 * Math.sin(a)}
                x2={200 + 160 * Math.cos(a)}
                y2={200 + 160 * Math.sin(a)}
                stroke="#c87030"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <h1
            style={{
              fontSize: mob ? "clamp(30px,9vw,48px)" : "clamp(34px,5.5vw,62px)",
              fontWeight: 400,
              color: "#f8f0e4",
              fontFamily: "Georgia,serif",
              lineHeight: 1.15,
              margin: "0 0 20px",
              letterSpacing: -0.5,
            }}
          >
            Light that speaks
            <br />
            of <em style={{ color: C.goldL }}>quiet luxury.</em>
          </h1>
          <p
            style={{
              fontSize: mob ? 13 : 15,
              color: "#9a7858",
              lineHeight: 1.9,
              maxWidth: 480,
              marginBottom: 28,
            }}
          >
            Aarna Candles brings together artisanal craftsmanship and premium
            fragrance — in glass, metal, marble, and wood.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Btn dark onClick={() => setPage("catalogue")}>
              Explore Collection
            </Btn>
            <Btn outline onClick={() => setPage("enquire")}>
              Enquire for Diwali
            </Btn>
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: mob ? 20 : 32,
              flexWrap: "wrap",
            }}
          >
            {[
              ["24+", "Product Lines"],
              ["7", "Fragrances"],
              ["60 hrs", "Longest Burn"],
              ["100%", "Gift Boxed"],
            ].map(([n, l]) => (
              <div
                key={l}
                style={{ borderLeft: `1.5px solid ${C.gold}`, paddingLeft: 14 }}
              >
                <div
                  style={{
                    fontSize: mob ? 16 : 20,
                    fontWeight: 400,
                    color: C.goldL,
                    fontFamily: "Georgia,serif",
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: mob ? 8 : 9,
                    color: "#6b4820",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginTop: 2,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FragranceSection />

      {/* Brand story */}
      <div
        style={{ background: C.card, padding: mob ? "48px 20px" : "72px 24px" }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "1fr 1px 1fr",
            gap: mob ? 32 : 0,
          }}
        >
          <div style={{ paddingRight: mob ? 0 : 48 }}>
            <Lbl>Our Craft</Lbl>
            <h2
              style={{
                fontSize: mob ? 20 : 24,
                fontWeight: 400,
                color: C.brown,
                fontFamily: "Georgia,serif",
                margin: "8px 0 14px",
                lineHeight: 1.4,
              }}
            >
              Where fragrance meets form
            </h2>
            <p style={{ fontSize: 13, color: C.textM, lineHeight: 1.95 }}>
              Every Aarna piece is a functional work of art. From hand-carved
              stone pots to polished gold metal urlis, we draw on India's rich
              craft heritage and elevate it with premium scented wax.
            </p>
          </div>
          {!mob && <div style={{ background: C.border, margin: "16px 0" }} />}
          <div style={{ paddingLeft: mob ? 0 : 48 }}>
            <Lbl>Diwali Gifting</Lbl>
            <h2
              style={{
                fontSize: mob ? 20 : 24,
                fontWeight: 400,
                color: C.brown,
                fontFamily: "Georgia,serif",
                margin: "8px 0 14px",
                lineHeight: 1.4,
              }}
            >
              Celebrations, beautifully lit
            </h2>
            <p style={{ fontSize: 13, color: C.textM, lineHeight: 1.95 }}>
              We cater to individual and large-scale corporate gifting. Every
              candle arrives beautifully boxed. Bespoke fragrance and branding
              available for bulk orders.
            </p>
          </div>
        </div>
      </div>

      {/* Featured */}
      <div
        style={{
          background: C.bgWarm,
          padding: mob ? "48px 16px" : "72px 24px",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 28,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <Lbl>Curated Selection</Lbl>
              <h2
                style={{
                  fontSize: mob ? 22 : 28,
                  fontWeight: 400,
                  color: C.brown,
                  fontFamily: "Georgia,serif",
                  margin: "8px 0 0",
                }}
              >
                Featured Pieces
              </h2>
            </div>
            <Btn outline small onClick={() => setPage("catalogue")}>
              Full Catalogue →
            </Btn>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mob
                ? "1fr 1fr"
                : "repeat(auto-fill,minmax(220px,1fr))",
              gap: mob ? 12 : 20,
            }}
          >
            {featured.map((p) => (
              <ProductCard key={p.id} p={p} onSelect={onSelectProduct} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          background: C.brown,
          padding: mob ? "48px 20px" : "60px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <Lbl col="#dfa850">Bulk & Corporate Orders</Lbl>
          <h2
            style={{
              fontSize: mob ? 20 : 26,
              fontWeight: 400,
              color: "#f5ede0",
              fontFamily: "Georgia,serif",
              margin: "10px 0 12px",
              lineHeight: 1.4,
            }}
          >
            Planning a Diwali gifting drive?
          </h2>
          <p
            style={{
              fontSize: 13,
              color: C.goldL,
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            We supply premium candles for corporate gifts, hotel amenities,
            wedding favours, and events. Custom branding available.
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href={`tel:${CONTACT.phone}`} style={{ textDecoration: "none" }}>
              <Btn dark>Call {CONTACT.phone}</Btn>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{ textDecoration: "none" }}
            >
              <Btn outline>Email Us</Btn>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CataloguePage({ onSelectProduct }) {
  const w = useWindowWidth();
  const mob = w < 768;
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter);
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <div
        style={{
          background: C.dark,
          padding: mob ? "36px 16px" : "52px 24px",
          textAlign: "center",
        }}
      >
        <Lbl col="#dfa850">Complete Range</Lbl>
        <h1
          style={{
            fontSize: mob ? 26 : 34,
            fontWeight: 400,
            color: "#f5ede0",
            fontFamily: "Georgia,serif",
            margin: "8px 0 10px",
          }}
        >
          The Aarna Collection
        </h1>
        <p style={{ fontSize: 11, color: "#9a7858" }}>
          Tap any product to view details · All candles gift boxed
        </p>
      </div>
      <div
        style={{
          background: C.card,
          borderBottom: `0.5px solid ${C.border}`,
          padding: "12px 16px",
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          justifyContent: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {CATS.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            style={{
              padding: "5px 12px",
              borderRadius: 20,
              cursor: "pointer",
              fontSize: 9.5,
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: "uppercase",
              fontFamily: "inherit",
              background: filter === c.id ? C.gold : "transparent",
              color: filter === c.id ? "#fff" : C.textM,
              border:
                filter === c.id
                  ? `1px solid ${C.gold}`
                  : `0.5px solid ${C.border}`,
              transition: "all 0.15s",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: mob ? "20px 12px" : "32px 24px",
        }}
      >
        <p style={{ fontSize: 11, color: C.textL, marginBottom: 18 }}>
          {filtered.length} products
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob
              ? "1fr 1fr"
              : "repeat(auto-fill,minmax(240px,1fr))",
            gap: mob ? 12 : 20,
          }}
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SupportPage() {
  const w = useWindowWidth();
  const mob = w < 768;
  const [open, setOpen] = useState(null);
  const faqs = [
    [
      "Are all candles gift-boxed?",
      "Yes — every Aarna candle comes in a premium gift box at no extra charge.",
    ],
    [
      "Do you offer bulk corporate orders?",
      `Yes. We cater to Diwali, weddings, hotels, and events. Email ${CONTACT.email} or call ${CONTACT.phone}.`,
    ],
    [
      "Can I get custom scents or branding?",
      "Yes, OEM and private label options are available. Minimum quantities apply.",
    ],
    [
      "What wax do you use?",
      "Premium paraffin and soy-blend wax depending on the product line.",
    ],
    [
      "How do I place an order?",
      "Via the Enquire page, by phone, or email. We respond within 24 hours.",
    ],
    ["Do you ship pan-India?", "Yes. Contact us for international orders."],
  ];
  const care = [
    [
      "First Burn",
      "Allow wax pool to reach container edge on first burn (2–3 hrs) to prevent tunnelling.",
    ],
    ["Trim the Wick", "Trim to 5–6 mm before every burn."],
    [
      "Burn Flat",
      "Always burn on a flat, heat-resistant surface away from draughts.",
    ],
    ["Know When to Stop", "Stop when 1–1.5 cm of wax remains."],
    [
      "Extinguish Safely",
      "Use a snuffer — blowing out pushes soot into the wax.",
    ],
    [
      "Store with Care",
      "Keep away from sunlight. Replace lid after each burn.",
    ],
  ];
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <div
        style={{
          background: C.dark,
          padding: mob ? "36px 16px" : "52px 24px",
          textAlign: "center",
        }}
      >
        <Lbl col="#dfa850">Help & Information</Lbl>
        <h1
          style={{
            fontSize: mob ? 26 : 34,
            fontWeight: 400,
            color: "#f5ede0",
            fontFamily: "Georgia,serif",
            margin: "8px 0 8px",
          }}
        >
          Customer Support
        </h1>
      </div>
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: mob ? "28px 16px" : "52px 24px",
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <Lbl>Candle Care</Lbl>
          <h2
            style={{
              fontSize: mob ? 18 : 22,
              fontWeight: 400,
              color: C.brown,
              fontFamily: "Georgia,serif",
              margin: "6px 0 18px",
            }}
          >
            Getting the most from your candle
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
              gap: 10,
            }}
          >
            {care.map(([t, b]) => (
              <div
                key={t}
                style={{
                  background: C.card,
                  borderRadius: 4,
                  padding: "14px 16px",
                  border: `0.5px solid ${C.borderL}`,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: 2,
                    color: C.gold,
                    textTransform: "uppercase",
                    marginBottom: 7,
                    fontWeight: 500,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{ fontSize: 12.5, color: C.textM, lineHeight: 1.8 }}
                >
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Lbl>FAQ</Lbl>
          <h2
            style={{
              fontSize: mob ? 18 : 22,
              fontWeight: 400,
              color: C.brown,
              fontFamily: "Georgia,serif",
              margin: "6px 0 18px",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {faqs.map(([q, a], i) => (
              <div
                key={i}
                style={{
                  background: C.card,
                  borderRadius: 4,
                  border: `0.5px solid ${open === i ? C.gold : C.borderL}`,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "14px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "inherit",
                  }}
                >
                  <span
                    style={{
                      fontSize: mob ? 13 : 13.5,
                      fontWeight: 400,
                      color: C.brown,
                      fontFamily: "Georgia,serif",
                      paddingRight: 12,
                    }}
                  >
                    {q}
                  </span>
                  <span
                    style={{
                      fontSize: 20,
                      color: C.gold,
                      transform: open === i ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div
                    style={{
                      padding: "0 16px 14px",
                      paddingTop: 10,
                      fontSize: 12.5,
                      color: C.textM,
                      lineHeight: 1.85,
                      borderTop: `0.5px solid ${C.borderL}`,
                    }}
                  >
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EnquirePage({ enquireProduct }) {
  const w = useWindowWidth();
  const mob = w < 768;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: enquireProduct?.name || "",
    message: "",
    type: "individual",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const up = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const inp = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 3,
    border: `0.5px solid ${C.border}`,
    fontSize: 13,
    color: C.text,
    background: C.bgWarm,
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "inherit",
  };

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in Name, Email and Message.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xlgowbja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "Not provided",
          "Order Type": form.type,
          "Product of Interest": form.product || "Not specified",
          Message: form.message,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch (e) {
      setError("Could not send. Please email us directly.");
    }
    setSending(false);
  };
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <div
        style={{
          background: C.dark,
          padding: mob ? "36px 16px" : "52px 24px",
          textAlign: "center",
        }}
      >
        <Lbl col="#dfa850">Get in Touch</Lbl>
        <h1
          style={{
            fontSize: mob ? 26 : 34,
            fontWeight: 400,
            color: "#f5ede0",
            fontFamily: "Georgia,serif",
            margin: "8px 0 8px",
          }}
        >
          Enquire Now
        </h1>
        <p style={{ fontSize: 12, color: "#9a7858" }}>
          Individual orders · Bulk gifting · Corporate enquiries
        </p>
      </div>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: mob ? "24px 16px" : "52px 24px",
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "1fr 1.5fr",
          gap: mob ? 24 : 44,
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: C.brown,
              marginBottom: 16,
            }}
          >
            Contact Details
          </h2>
          {[
            {
              label: "Mobile",
              val: CONTACT.phone,
              href: `tel:${CONTACT.phone}`,
              cta: "Call to Order",
            },
            {
              label: "Email",
              val: CONTACT.email,
              href: `mailto:${CONTACT.email}`,
              cta: "Send Email",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: C.card,
                borderRadius: 4,
                padding: "13px 14px",
                border: `0.5px solid ${C.borderL}`,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: 2,
                  color: C.textL,
                  textTransform: "uppercase",
                  marginBottom: 5,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: C.text,
                  lineHeight: 1.6,
                  wordBreak: "break-all",
                }}
              >
                {item.val}
              </div>
              {item.cta && item.href && (
                <div style={{ marginTop: 8 }}>
                  <a href={item.href} style={{ textDecoration: "none" }}>
                    <Btn outline small>
                      {item.cta}
                    </Btn>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            background: C.card,
            borderRadius: 4,
            border: `0.5px solid ${C.borderL}`,
            padding: mob ? "20px 16px" : "28px 26px",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: C.cream,
                  border: `0.5px solid ${C.gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M5 12l5 5L19 7"
                    stroke={C.gold}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: C.brown,
                  fontFamily: "Georgia,serif",
                  marginBottom: 10,
                }}
              >
                Enquiry Received
              </h3>
              <p style={{ fontSize: 13, color: C.textM, lineHeight: 1.8 }}>
                Thank you for reaching out. Our team will respond within 24
                hours.
              </p>
              <div style={{ marginTop: 16 }}>
                <Btn onClick={() => setSent(false)}>Send Another</Btn>
              </div>
            </div>
          ) : (
            <div>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.brown,
                  margin: "0 0 18px",
                }}
              >
                Send an Enquiry
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: 9,
                      color: C.textL,
                      letterSpacing: 1.5,
                      display: "block",
                      marginBottom: 4,
                      textTransform: "uppercase",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    style={inp}
                    value={form.name}
                    onChange={(e) => up("name", e.target.value)}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: 9,
                      color: C.textL,
                      letterSpacing: 1.5,
                      display: "block",
                      marginBottom: 4,
                      textTransform: "uppercase",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    style={inp}
                    type="email"
                    value={form.email}
                    onChange={(e) => up("email", e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: 9,
                      color: C.textL,
                      letterSpacing: 1.5,
                      display: "block",
                      marginBottom: 4,
                      textTransform: "uppercase",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    style={inp}
                    value={form.phone}
                    onChange={(e) => up("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: 9,
                      color: C.textL,
                      letterSpacing: 1.5,
                      display: "block",
                      marginBottom: 4,
                      textTransform: "uppercase",
                    }}
                  >
                    Order Type
                  </label>
                  <select
                    style={inp}
                    value={form.type}
                    onChange={(e) => up("type", e.target.value)}
                  >
                    <option value="individual">Individual Order</option>
                    <option value="bulk">Bulk / Corporate</option>
                    <option value="wedding">Wedding / Event</option>
                    <option value="retail">Retail Partnership</option>
                    <option value="other">General Enquiry</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <label
                  style={{
                    fontSize: 9,
                    color: C.textL,
                    letterSpacing: 1.5,
                    display: "block",
                    marginBottom: 4,
                    textTransform: "uppercase",
                  }}
                >
                  Product of Interest
                </label>
                <select
                  style={inp}
                  value={form.product}
                  onChange={(e) => up("product", e.target.value)}
                >
                  <option value="">— Select product (optional) —</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                      {p.code !== "—" ? ` · ${p.code}` : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label
                  style={{
                    fontSize: 9,
                    color: C.textL,
                    letterSpacing: 1.5,
                    display: "block",
                    marginBottom: 4,
                    textTransform: "uppercase",
                  }}
                >
                  Message *
                </label>
                <textarea
                  style={{ ...inp, height: 90, resize: "vertical" }}
                  value={form.message}
                  onChange={(e) => up("message", e.target.value)}
                  placeholder="Quantity, occasion, preferred fragrance, delivery timeline..."
                />
              </div>
              <Btn dark onClick={submit}>
                {sending ? "Sending…" : "Submit Enquiry"}
              </Btn>
              {error && (
                <p
                  style={{
                    fontSize: 11,
                    color: "#c03030",
                    marginTop: 10,
                    lineHeight: 1.6,
                  }}
                >
                  {error}
                </p>
              )}
              <p
                style={{
                  fontSize: 11,
                  color: C.textL,
                  marginTop: 10,
                  lineHeight: 1.7,
                }}
              >
                Or email:{" "}
                <a href={`mailto:${CONTACT.email}`} style={{ color: C.gold }}>
                  {CONTACT.email}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const w = useWindowWidth();
  const mob = w < 768;
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquireProduct, setEnquireProduct] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "catalogue", label: "Collection" },
    { id: "support", label: "Support" },
    { id: "enquire", label: "Enquire" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (p) => {
    setPage(p);
    setSelectedProduct(null);
    setMenuOpen(false);
    window.scrollTo?.(0, 0);
  };
  const openProduct = (p) => {
    setSelectedProduct(p);
    setMenuOpen(false);
    window.scrollTo?.(0, 0);
  };
  const openEnquire = (p) => {
    setEnquireProduct(p);
    setSelectedProduct(null);
    setPage("enquire");
    window.scrollTo?.(0, 0);
  };

  return (
    <div
      style={{
        fontFamily: "system-ui,-apple-system,sans-serif",
        background: C.bg,
        minHeight: "100vh",
      }}
    >
      {/* Announcement bar — scrolls away */}
      <div
        style={{
          background: C.dark,
          padding: "8px 16px",
          textAlign: "center",
          borderBottom: `0.5px solid rgba(184,112,48,0.3)`,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: mob ? 9 : 11,
            color: C.goldL,
            letterSpacing: mob ? 1 : 2,
            textTransform: "uppercase",
          }}
        >
          {mob
            ? "✦ Diwali Gifting Specials · Gift Boxed · Pan-India Delivery ✦"
            : "✦  Diwali Gifting Specials — All Candles Come with Premium Gift Boxes  ·  Bulk & Corporate Orders Welcome  ·  Pan-India Delivery  ✦"}
        </p>
      </div>

      {/* ── DESKTOP: large header, scrolls away ── */}
      {!mob && (
        <header
          style={{
            background: "rgba(250,240,224,0.97)",
            borderBottom: `0.5px solid ${C.borderL}`,
            padding: "20px 48px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => goTo("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              marginBottom: 12,
            }}
          >
            <img
              src="https://res.cloudinary.com/deebenumm/image/upload/v1775127812/Screenshot_2026-04-02_at_4.32_Background_Removed.58_PM_a7u930.png"
              alt="Aarna logo"
              style={{
                height: 48,
                objectFit: "contain",
                mixBlendMode: "multiply",
                opacity: 0.9,
              }}
            />
            <span
              style={{
                fontSize: 32,
                fontWeight: 400,
                color: C.brown,
                fontFamily: "Georgia,serif",
                letterSpacing: 10,
                lineHeight: 1,
              }}
            >
              AARNA
            </span>
            <span
              style={{
                fontSize: 9,
                color: C.gold,
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              Scented Candles
            </span>
          </button>
          <div
            style={{
              width: 260,
              height: "0.5px",
              background: `linear-gradient(90deg,transparent,${C.border},transparent)`,
              marginBottom: 12,
            }}
          />
          <div style={{ display: "flex", gap: 52, alignItems: "center" }}>
            {navLinks.slice(0, 2).map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  color: !selectedProduct && page === n.id ? C.gold : C.brownM,
                  borderBottom:
                    !selectedProduct && page === n.id
                      ? `1.5px solid ${C.gold}`
                      : "1.5px solid transparent",
                  padding: "2px 0",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {n.label}
              </button>
            ))}
            {/* Mini lotus logo divider */}
            <button
              onClick={() => goTo("home")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 8px",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <img
                src="https://res.cloudinary.com/deebenumm/image/upload/v1775127812/Screenshot_2026-04-02_at_4.32_Background_Removed.58_PM_a7u930.png"
                alt="Aarna"
                style={{
                  height: 20,
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                  display: "block",
                }}
              />
            </button>
            {navLinks.slice(2).map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  color: !selectedProduct && page === n.id ? C.gold : C.brownM,
                  borderBottom:
                    !selectedProduct && page === n.id
                      ? `1.5px solid ${C.gold}`
                      : "1.5px solid transparent",
                  padding: "2px 0",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {n.label}
              </button>
            ))}
          </div>
        </header>
      )}

      {/* ── DESKTOP: slim fixed bar, fades in on scroll ── */}
      {!mob && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: "rgba(250,240,224,0.97)",
            backdropFilter: "blur(14px)",
            borderBottom: `0.5px solid ${C.border}`,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 48px",
            opacity: scrolled ? 1 : 0,
            transform: scrolled ? "translateY(0)" : "translateY(-100%)",
            transition:
              "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            pointerEvents: scrolled ? "auto" : "none",
            boxShadow: "0 2px 20px rgba(58,30,12,0.08)",
          }}
        >
          <button
            onClick={() => goTo("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/deebenumm/image/upload/v1775127812/Screenshot_2026-04-02_at_4.32_Background_Removed.58_PM_a7u930.png"
              alt="Aarna"
              style={{
                height: 24,
                objectFit: "contain",
                mixBlendMode: "multiply",
                opacity: 0.9,
              }}
            />
            <span
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: C.brown,
                fontFamily: "Georgia,serif",
                letterSpacing: 5,
              }}
            >
              AARNA
            </span>
          </button>
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {navLinks.map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 9.5,
                  fontWeight: 400,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  color: !selectedProduct && page === n.id ? C.gold : C.brownM,
                  borderBottom:
                    !selectedProduct && page === n.id
                      ? `1px solid ${C.gold}`
                      : "1px solid transparent",
                  padding: "2px 0",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── MOBILE: sticky compact nav ── */}
      {mob && (
        <nav
          style={{
            background: "rgba(250,240,224,0.97)",
            backdropFilter: "blur(14px)",
            borderBottom: `0.5px solid ${C.border}`,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: 0,
            zIndex: 100,
            boxShadow: scrolled ? "0 2px 16px rgba(58,30,12,0.07)" : "none",
            transition: "box-shadow 0.4s ease",
          }}
        >
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              position: "absolute",
              left: 16,
            }}
          >
            <div
              style={{
                width: 22,
                height: 1.5,
                background: menuOpen ? C.gold : C.brown,
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(45deg) translate(4px,4px)"
                  : "none",
              }}
            />
            <div
              style={{
                width: 22,
                height: 1.5,
                background: C.brown,
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <div
              style={{
                width: 22,
                height: 1.5,
                background: menuOpen ? C.gold : C.brown,
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translate(4px,-4px)"
                  : "none",
              }}
            />
          </button>
          <button
            onClick={() => goTo("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <img
              src="https://res.cloudinary.com/deebenumm/image/upload/v1775127812/Screenshot_2026-04-02_at_4.32_Background_Removed.58_PM_a7u930.png"
              alt="Aarna"
              style={{
                height: 20,
                objectFit: "contain",
                mixBlendMode: "multiply",
                opacity: 0.9,
              }}
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: C.brown,
                fontFamily: "Georgia,serif",
                letterSpacing: 5,
                lineHeight: 1,
              }}
            >
              AARNA
            </div>
            <div
              style={{
                fontSize: 6.5,
                color: C.gold,
                letterSpacing: 3.5,
                textTransform: "uppercase",
              }}
            >
              Scented Candles
            </div>
          </button>
        </nav>
      )}

      {/* Mobile menu dropdown */}
      {mob && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 100,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(250,240,224,0.98)",
            backdropFilter: "blur(14px)",
            borderBottom: `0.5px solid ${C.border}`,
            padding: "8px 0 16px",
            boxShadow: "0 8px 24px rgba(58,30,12,0.1)",
          }}
        >
          {navLinks.map((n, i) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "14px 16px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontFamily: "inherit",
                color: page === n.id ? C.gold : C.brownM,
                borderBottom:
                  i < navLinks.length - 1 ? `0.5px solid ${C.borderL}` : "none",
              }}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}

      {/* Pages */}
      {selectedProduct ? (
        <ProductDetail
          p={selectedProduct}
          onBack={() => {
            setSelectedProduct(null);
            window.scrollTo?.(0, 0);
          }}
          onEnquire={openEnquire}
        />
      ) : page === "home" ? (
        <HomePage onSelectProduct={openProduct} setPage={goTo} />
      ) : page === "catalogue" ? (
        <CataloguePage onSelectProduct={openProduct} />
      ) : page === "support" ? (
        <SupportPage />
      ) : (
        <EnquirePage enquireProduct={enquireProduct} />
      )}

      {/* Footer */}
      <footer
        style={{
          background: C.dark,
          padding: mob ? "32px 16px 20px" : "40px 32px 26px",
          color: "#9a7858",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "2fr 1fr 1fr",
            gap: mob ? 24 : 36,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Georgia,serif",
                color: "#f5ede0",
                fontSize: 16,
                letterSpacing: 3,
                marginBottom: 10,
              }}
            >
              AARNA
            </div>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.9,
                margin: "0 0 10px",
                maxWidth: 280,
              }}
            >
              Premium scented candles for gifting, celebrations, and everyday
              luxury. All candles come with gift boxes.
            </p>
            <p style={{ fontSize: 10, opacity: 0.45, lineHeight: 1.7 }}>
              {CONTACT.address}
            </p>
          </div>
          {!mob && (
            <div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 14,
                  color: C.gold,
                }}
              >
                Navigate
              </div>
              {navLinks.map((n) => (
                <div key={n.id} style={{ marginBottom: 10 }}>
                  <button
                    onClick={() => goTo(n.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#9a7858",
                      cursor: "pointer",
                      fontSize: 12,
                      padding: 0,
                      fontFamily: "inherit",
                    }}
                  >
                    {n.label}
                  </button>
                </div>
              ))}
            </div>
          )}
          <div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                marginBottom: 14,
                color: C.gold,
              }}
            >
              Contact
            </div>
            <a
              href={`tel:${CONTACT.phone}`}
              style={{
                color: "#9a7858",
                textDecoration: "none",
                fontSize: 12,
                display: "block",
                marginBottom: 8,
                lineHeight: 1.7,
              }}
            >
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{
                color: "#9a7858",
                textDecoration: "none",
                fontSize: 11,
                wordBreak: "break-all",
                lineHeight: 1.7,
              }}
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
        <div
          style={{
            maxWidth: 920,
            margin: "20px auto 0",
            paddingTop: 16,
            borderTop: `0.5px solid rgba(184,112,48,0.15)`,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 10, opacity: 0.35 }}>
            © 2024 Aarna Scented Candles · Nectar Hospitality
          </span>
          {!mob && (
            <span style={{ fontSize: 10, opacity: 0.35 }}>
              All candles come with gift boxes · Enquiry-based pricing
            </span>
          )}
        </div>
      </footer>
    </div>
  );
}
