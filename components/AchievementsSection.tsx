import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type Achievement = {
  category: string;
  name: string;
  detail: string;
  location: string;
  href: string | null;
  image: string;
  imagePosition?: string;
  badge?: string;
};

type Group = {
  label: string;
  en: string;
  items: Achievement[];
};

const groups: Group[] = [
  {
    label: "プロデュース・運営委託",
    en: "Produce & Operations",
    items: [
      {
        category: "カラオケバー 立ち上げ・運営",
        name: "PORCO（新橋）",
        detail:
          "東京・新橋のカラオケバー「PORCO」をゼロから立ち上げ、現在も運営を担当。西新橋1丁目、深夜まで営業するナイトスポット。",
        location: "東京・新橋",
        href: "https://www.instagram.com/porco_shimbashi/",
        image: "/images/porco-1.jpg",
        imagePosition: "object-top",
      },
      {
        category: "カラオケバー 運営委託",
        name: "Ginza karaoke bar S（銀座）",
        detail:
          "東京・銀座7丁目のカラオケバー「Ginza karaoke bar S」の運営受託。Googleマップ評価★5.0（37件）。踊れる空間・グリーンウォールが特徴。",
        location: "東京・銀座",
        href: "https://www.instagram.com/s_ginza7/",
        image: "/images/ginzas-1.jpg",
      },
      {
        category: "宿泊施設 立ち上げサポート",
        name: "館山 新規宿泊施設",
        detail:
          "千葉・館山に新規オープン予定の宿泊施設。コンセプト策定から立ち上げ・運営サポートまでを担当予定。",
        location: "千葉・館山",
        href: null,
        image:
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
        badge: "Coming Soon",
      },
    ],
  },
  {
    label: "直運営事業",
    en: "Direct Operations",
    items: [
      {
        category: "宿泊施設 自社直運営",
        name: "Villa Shallows",
        detail:
          "沖縄・恩納村のオーシャンビュープライベートヴィラ。丸ごと貸し切り・ベッドルーム3部屋。Booking.com評価9.6。",
        location: "沖縄・恩納村",
        href: "/shallows",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
      },
      {
        category: "宿泊施設 自社直運営",
        name: "Aniversario",
        detail:
          "沖縄・恩納村のビーチフロントプール＆BBQテラス付き貸別荘。ベッドルーム3部屋。Booking.com評価9.0。",
        location: "沖縄・恩納村",
        href: "/aniversario",
        image:
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
      },
      {
        category: "グランピング 自社プロデュース・運営",
        name: "HOLE37（ホールサーティーセブン）",
        detail:
          "筑波国際カントリークラブに自社プロデュースで開業した1日2組限定グランピング施設。ゴルフ場貸切×プライベートサウナ×BBQの複合体験。",
        location: "茨城・つくば市",
        href: "https://hole37.com/",
        image: "/images/hole37-1.jpg",
      },
      {
        category: "宿泊施設 開発中",
        name: "恩納村 新規リゾート施設",
        detail:
          "Villa Shallows・Aniversarioの隣接地に、新施設を開発中。コンセプト策定から設計・運営まで一貫して自社でプロデュース。",
        location: "沖縄・恩納村",
        href: null,
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
        badge: "Coming Soon",
      },
    ],
  },
  {
    label: "DX・AI推進",
    en: "DX & AI",
    items: [
      {
        category: "DX推進 コンサルティング",
        name: "筑波国際カントリークラブ",
        detail:
          "茨城・つくば市のゴルフ場。予約管理・業務フローのデジタル化をはじめ、AI活用による現場DXを推進中。HOLE37グランピング施設の展開も同施設内で手がける。",
        location: "茨城・つくば市",
        href: null,
        image:
          "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&q=80",
      },
    ],
  },
];

function AchievementCard({ item }: { item: Achievement }) {
  const isExternal = item.href?.startsWith("http");

  const inner = (
    <>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={`object-cover ${item.imagePosition ?? "object-center"} group-hover:scale-105 transition-transform duration-500`}
        />
        <div className="absolute top-3 left-3 bg-ocean-dark/80 text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 backdrop-blur-sm">
          {item.category}
        </div>
        {item.badge && (
          <div className="absolute top-3 right-3 bg-gold text-ocean-dark text-[9px] tracking-[0.15em] uppercase font-semibold px-2.5 py-1">
            {item.badge}
          </div>
        )}
        {item.href && (
          <div className="absolute inset-0 bg-ocean-dark/0 group-hover:bg-ocean-dark/20 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs tracking-widest uppercase border border-white/60 px-4 py-2">
              {isExternal ? "詳細を見る →" : "施設ページへ →"}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-ocean-dark mb-2 group-hover:text-ocean-light transition-colors duration-200">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {item.detail}
        </p>
        <div className="flex items-center gap-1 text-[11px] text-gray-400">
          <MapPin size={11} />
          {item.location}
        </div>
      </div>
    </>
  );

  const cls = "bg-white overflow-hidden shadow-sm group h-full flex flex-col";

  if (!item.href) return <div className={cls}>{inner}</div>;
  if (isExternal)
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  return (
    <Link href={item.href} className={cls}>
      {inner}
    </Link>
  );
}

export default function AchievementsSection() {
  return (
    <div className="space-y-16">
      {groups.map((group, gi) => (
        <AnimatedSection key={group.label} delay={gi * 100}>
          {/* カテゴリーヘッダー */}
          <div className="flex items-center gap-6 mb-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-0.5">
                {group.en}
              </p>
              <h3 className="font-serif text-2xl text-ocean-dark">
                {group.label}
              </h3>
            </div>
            <div className="flex-1 h-px bg-gold/20" />
            <span className="text-[11px] text-gray-400 shrink-0">
              {group.items.length}件
            </span>
          </div>

          {/* カードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.items.map((item, ii) => (
              <AnimatedSection key={item.name} delay={ii * 80}>
                <AchievementCard item={item} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
