import Image from "next/image";
import {
  Check,
  Users,
  Wrench,
  Drill,
  MapPin,
  Store,
  FileText,
  ArrowRight,
  Phone,
} from "lucide-react";

type Scene = {
  imageSrc: string;
  imageAlt: string;
  badgeType: "ok" | "maybe" | "pro";
  badgeLabel: string;
  badgeIcon: "check" | "users" | "wrench";
  title: string;
  description: string;
};

const DIY_SCENES: Scene[] = [
  {
    imageSrc: "/images/sign-types/plate-sign/construction/scene-01-indoor-solo.jpg",
    imageAlt: "サロンの店内で1人で小型看板を両面テープで貼り付けるスタッフ",
    badgeType: "ok",
    badgeLabel: "DIY OK",
    badgeIcon: "check",
    title: "1人で取付、屋内、両面テープ",
    description:
      "サロンの店内サイン・オフィスの社名プレートなど、小型(〜600×450)・屋内なら強力両面テープで簡単に設置できます。",
  },
  {
    imageSrc: "/images/sign-types/plate-sign/construction/scene-02-outdoor-pair.jpg",
    imageAlt: "店舗入口で2人で中型看板を電動ドリルで取付けているスタッフ",
    badgeType: "ok",
    badgeLabel: "DIY OK",
    badgeIcon: "check",
    title: "2人で取付、屋外、低所(〜2m)",
    description:
      "中型(〜1200×600)で手の届く高さなら、1人が支えて1人が電動ドリルでビス止めするだけ。",
  },
  {
    imageSrc: "/images/sign-types/plate-sign/construction/scene-03-large-team.jpg",
    imageAlt: "スタッフ3人で大型看板を抱えて取付けている様子",
    badgeType: "maybe",
    badgeLabel: "人数次第でOK",
    badgeIcon: "users",
    title: "3人以上で取付、サブロク版まで",
    description:
      "大型(〜1820×910)は持つ人と打つ人で役割分担。スタッフ3人いれば取付可能です。",
  },
  {
    imageSrc: "/images/sign-types/plate-sign/construction/scene-04-high-pro.jpg",
    imageAlt: "高所作業車から職人が照明付き看板を取付ける施工現場",
    badgeType: "pro",
    badgeLabel: "施工依頼推奨",
    badgeIcon: "wrench",
    title: "高所・照明組合せ・大型は要相談",
    description:
      "2階以上・看板照明併設・電気工事が必要な現場は、落下リスク回避のためプロにお任せください。",
  },
];

const TRUST_ITEMS = [
  {
    icon: MapPin,
    title: "全国対応",
    label: "北海道〜沖縄",
  },
  {
    icon: Store,
    title: "大手実績多数",
    label: "有名チェーン店の看板も担当",
  },
  {
    icon: FileText,
    title: "比較見積無料",
    label: "製作のみ/製作+施工どちらも",
  },
];

function BadgeIcon({ type }: { type: "check" | "users" | "wrench" }) {
  if (type === "check")
    return <Check className="h-3.5 w-3.5" strokeWidth={3} />;
  if (type === "users")
    return <Users className="h-3.5 w-3.5" strokeWidth={3} />;
  return <Wrench className="h-3.5 w-3.5" strokeWidth={3} />;
}

function SceneBadge({ scene }: { scene: Scene }) {
  const styles = {
    ok: "bg-green-600 text-white",
    maybe: "bg-accent text-accent-foreground",
    pro: "bg-red-600 text-white",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${styles[scene.badgeType]}`}
    >
      <BadgeIcon type={scene.badgeIcon} />
      {scene.badgeLabel}
    </span>
  );
}

export default function ConstructionSection() {
  return (
    <section
      id="construction"
      aria-labelledby="construction-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-accent">
            CONSTRUCTION
          </p>
          <h2
            id="construction-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            自分でつけられそうなら、
            <br className="hidden md:block" />
            製作だけでもOK。
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            弊社では
            <span className="font-bold text-primary">穴あけ加工までやってお届け</span>
            するので、届いたら電動ドリルで壁にビスを打つだけ。サイズや設置場所によっては、ご自身で取付けて
            <span className="font-bold text-primary">製作費だけで済ませる選択肢</span>
            もあります。
            <br className="hidden md:block" />
            高所や大型サイズ、看板照明との組合せなどの難しい現場は、
            <span className="font-bold text-primary">全国どこでも施工対応</span>
            しますのでご安心ください。
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold tracking-widest text-accent">
              SELF CHECK
            </span>
            <h3 className="mt-3 text-xl font-extrabold text-primary md:text-2xl">
              こんな状況なら、自分で取付けOK
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              下のシーンを見比べて、「これならいけそう」と思えれば製作のみのご依頼で十分です。
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
            {DIY_SCENES.map((scene, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={scene.imageSrc}
                    alt={scene.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <SceneBadge scene={scene} />
                  <p className="mt-3 text-base font-bold leading-snug text-primary md:text-lg">
                    {scene.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {scene.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-secondary p-6 md:flex-row md:items-center md:gap-5 md:p-7">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-card shadow-sm">
            <Drill className="h-7 w-7 text-primary" strokeWidth={2.2} />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-extrabold text-primary md:text-lg">
              取付がもっとラクになる「穴あけ加工」
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              看板の四隅などに、ビス留め用の穴をあらかじめ加工してお届け。届いたあとは、穴に合わせて電動ドリルで壁にビスを打つだけ。位置を測る手間もありません。
            </p>
            <span className="mt-2 inline-block rounded-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              穴あけ加工 +800円
            </span>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-primary px-6 py-10 text-primary-foreground md:px-10 md:py-12">
          <p className="text-sm font-bold tracking-widest text-accent">
            FULL SUPPORT
          </p>
          <h3 className="mt-2 text-balance text-xl font-black md:text-2xl">
            難しそうなら、施工までお任せください。
          </h3>
          <p className="mt-3 leading-relaxed text-primary-foreground/85">
            落下リスクや電気工事のリスクは絶対に避けたいもの。
            <br className="hidden md:block" />
            弊社は<span className="font-bold">全国どこでも施工対応</span>
            、誰もが知る大手チェーン店の看板も多数手掛けてきました。
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {TRUST_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl bg-white/10 px-5 py-5 text-center ring-1 ring-white/15"
                >
                  <Icon
                    className="mx-auto h-7 w-7 text-accent"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-lg font-black md:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/70">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
            >
              無料で見積もり相談
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <a
              href="tel:0522657603"
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3.5 text-sm font-bold text-primary-foreground ring-1.5 ring-primary-foreground/50 transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              電話で相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
