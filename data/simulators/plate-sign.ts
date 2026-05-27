export const PRICE_LIST = [
  { w: 600, h: 450, price: 6800 },
  { w: 910, h: 600, price: 7900 },
  { w: 1200, h: 450, price: 9000 },
  { w: 1200, h: 600, price: 10500 },
  { w: 910, h: 910, price: 10700 },
  { w: 1820, h: 450, price: 11900 },
  { w: 1820, h: 910, price: 12800 },
  { w: 1200, h: 910, price: 13300 },
  { w: 1820, h: 600, price: 13600 },
  { w: 2000, h: 1000, price: 18200 },
  { w: 2440, h: 1220, price: 25400 },
  { w: 4000, h: 1000, price: 33000 },
  { w: 4880, h: 1220, price: 45200 },
] as const

export type HintKey = "size" | "design" | "finish" | "light"

export type HintContent = {
  title: string
  description: string
  imagePath: string
}

export const HINT_CONTENTS: Record<HintKey, HintContent> = {
  size: {
    title: "サイズについて",
    description:
      "看板の仕上がり実寸を横幅(W)・高さ(H)・枚数でご入力ください。施工までご希望の場合は、現地調査（無料）にて正確なサイズ計測のご相談も可能です。",
    imagePath: "/images/sign-types/plate-sign/hint/size.jpg",
  },
  design: {
    title: "デザインデータについて",
    description:
      "AI・PDF・JPG等の完全データをお持ちの場合は「データあり」をご選択ください。データ確認後、ご使用可能かもチェックいたします。デザイン作成からのご対応も大歓迎です。年間数千件のデザイン実績があるチームへお任せください。",
    imagePath: "/images/sign-types/plate-sign/hint/design.jpg",
  },
  finish: {
    title: "仕上げ加工について",
    description:
      "穴あけ加工、角R加工、シート巻き込みなど、設置方法や見た目に応じて仕上げを選べます。基本は加工なしでもご注文可能です。",
    imagePath: "/images/sign-types/plate-sign/hint/finish.jpg",
  },
  light: {
    title: "照明について",
    description:
      "看板照明はアーム式の照明、もしくはアドビューと呼ばれる出幅の少ない（薄い）看板照明が代表的です。アドビューはコインパーキングの料金表などにもよく使われています。サイズや設置場所に合った最適なご提案もいたしますので、お気軽にご相談ください。",
    imagePath: "/images/sign-types/plate-sign/hint/light.jpg",
  },
}
