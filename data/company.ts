// 運営会社マスタデータ（/company ページ・フッター等から参照）

export type CompanyInfoRow = { label: string; value: string }

export const COMPANY_NAME = "株式会社トレード"

// 会社概要テーブル（順序通りに表示）
export const COMPANY_INFO: CompanyInfoRow[] = [
  { label: "運営会社", value: "株式会社トレード（看板通販サインシティ 運営会社）" },
  { label: "設立", value: "1990年7月" },
  { label: "資本金", value: "2,000万円" },
  { label: "代表取締役", value: "久保 孝二" },
  { label: "取締役社長", value: "瀧塚 清和" },
  { label: "事業内容", value: "看板・サインの企画・デザイン・製作・販売・施工／オリジナル商品開発／看板材料の販売" },
  { label: "所属グループ", value: "グリーンクロスグループ（東証上場・全国50拠点以上）" },
]

export type CompanyLocation = {
  name: string
  zip: string
  address: string
  tel?: string
  fax?: string
}

export const COMPANY_LOCATIONS: CompanyLocation[] = [
  { name: "名古屋本社", zip: "454-0011", address: "愛知県名古屋市中川区山王4-5-10 学宝社ビル3F", tel: "052-265-7603", fax: "052-350-2662" },
  { name: "東京営業所", zip: "103-0004", address: "東京都中央区東日本橋1-9-13 グリーンクロスビル2F" },
  { name: "千葉営業所", zip: "260-0025", address: "千葉県千葉市中央区問屋町5-1（グリーンクロス千葉支社内）" },
  { name: "大阪営業所", zip: "543-0026", address: "大阪市天王寺区東上町8-36 グリーンクロスビル" },
  { name: "福岡営業所", zip: "810-0034", address: "福岡県福岡市東区多の津2丁目4-3" },
  { name: "札幌営業所", zip: "003-0027", address: "札幌市白石区本通6丁目北4番8号" },
]

export type CompanyHistoryItem = { year: string; text: string }

export const COMPANY_HISTORY: CompanyHistoryItem[] = [
  { year: "1990年", text: "株式会社トレード設立。サイン業界での事業を開始。" },
  { year: "2001年", text: "ネット草創期に自社ECサイト「サインシティ」を開設。看板通販の先駆企業として運営を開始。" },
  { year: "2015年", text: "東証上場企業「グリーンクロス」グループの一員となり、全国50拠点以上の事業基盤を獲得。" },
  { year: "現在", text: "サイン業界のリーディングカンパニーを目指し、デザイン・製作・施工・材料販売までトータルに対応。" },
]

export type ExternalSite = { name: string; url: string; desc?: string }

// 運営サイト
export const RELATED_SITES: ExternalSite[] = [
  { name: "看板通販 サインシティ", url: "https://www.trade-sign.com/", desc: "日本最大級の看板通販サイト" },
  { name: "株式会社トレード", url: "https://trade-sign.jp/", desc: "運営会社コーポレートサイト" },
  { name: "サインシティPRO", url: "https://signcity-pro.com/", desc: "看板材料の専門販売" },
  { name: "看板施工 CUVIC CITY", url: "https://cuvic.com/", desc: "全国対応の看板施工" },
  { name: "キュービックデザイン", url: "https://cuvic-design.com/", desc: "看板デザイン" },
  { name: "キュービック東京", url: "https://cuvic-sign.com/", desc: "東京の看板施工" },
  { name: "キュービック大阪", url: "https://cuvic-osaka.com/", desc: "大阪の看板施工" },
  { name: "キュービック福岡", url: "https://cuvic-fukuoka.com/", desc: "福岡の看板施工" },
  { name: "サインシティ 楽天市場店", url: "https://www.rakuten.co.jp/signcity2024/" },
  { name: "サインシティ Yahoo!店", url: "https://store.shopping.yahoo.co.jp/signcity-yshop/" },
]

// グループ会社
export const GROUP_SITES: ExternalSite[] = [
  { name: "グリーンクロス", url: "https://www.green-cross.co.jp/", desc: "グループ親会社（東証上場）" },
  { name: "グリーンセレクト", url: "https://www.gc-select.com/", desc: "BtoB通販" },
  { name: "熱中症対策ナビ", url: "https://www.heatstroke-navi.com/", desc: "熱中症対策の専門サイト" },
]
