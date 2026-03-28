"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type Achievement = {
  category: string;
  group: string;
  name: string;
  detail: string;
  location: string;
  href: string | null;
  image: string;
};

const achievements: Achievement[] = [
  {
    group: "リゾート・宿泊",
    category: "宿泊施設 自社運営",
    name: "Villa Shallows",
    detail:
      "沖縄・恩納村のオーシャンビュープライベートヴィラ。丸ごと貸し切り・ベッドルーム3部屋。Booking.com評価9.6。",
    location: "沖縄・恩納村",
    href: "/shallows",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  },
  {
    group: "リゾート・宿泊",
    category: "宿泊施設 自社運営",
    name: "Aniversario",
    detail:
      "沖縄・恩納村のビーチフロントプール＆BBQテラス付き貸別荘。ベッドルーム3部屋。Booking.com評価9.0。",
    location: "沖縄・恩納村",
    href: "/aniversario",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
  },
  {
    group: "リゾート・宿泊",
    category: "グランピング プロデュース",
    name: "HOLE37（ホールサーティーセブン）",
    detail:
      "筑波国際カントリークラブに併設した1日2組限定グランピング施設の増築・コンセプト策定・設計をトータルプロデュース。ゴルフ場貸切×プライベートサウナ×BBQの複合体験施設。",
    location: "茨城・つくば市",
    href: "https://hole37.com/",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
  {
    group: "リゾート・宿泊",
    category: "宿泊施設 運営サポート",
    name: "館山 新規宿泊施設",
    detail: "館山に新規オープンした宿泊施設の立ち上げ・運営サポートを担当。",
    location: "千葉・館山",
    href: null,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
  },
  {
    group: "バー・ナイトライフ",
    category: "カラオケバー 立ち上げ・運営",
    name: "PORCO（新橋）",
    detail:
      "東京・新橋のカラオケバー「PORCO」をゼロから立ち上げ、現在も運営を担当。西新橋1丁目、深夜まで営業するナイトスポット。",
    location: "東京・新橋",
    href: "https://www.instagram.com/porco_shimbashi/",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
  },
  {
    group: "バー・ナイトライフ",
    category: "カラオケバー 運営",
    name: "Ginza karaoke bar S（銀座）",
    detail:
      "東京・銀座7丁目のカラオケバー「Ginza karaoke bar S」の運営に携わる。Googleマップ評価★5.0（37件）。踊れる空間・グリーンウォールが特徴。",
    location: "東京・銀座",
    href: "https://www.instagram.com/s_ginza7/",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=80",
  },
  {
    group: "ゴルフ",
    category: "ゴルフ場 運営・コンサル",
    name: "勝浦国際ゴルフ倶楽部",
    detail: "ゴルフ場の運営管理・経営コンサルティングを担当。",
    location: "千葉県",
    href: null,
    image:
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&q=80",
  },
];

const tabs = ["すべて", "リゾート・宿泊", "バー・ナイトライフ", "ゴルフ"] as const;

export default function AchievementsSection() {
  const [activeTab, setActiveTab] = useState<string>("すべて");

  const filtered =
    activeTab === "すべて"
      ? achievements
      : achievements.filter((a) => a.group === activeTab);

  return (
    <>
      {/* タブ */}
      <AnimatedSection>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-ocean-dark text-white border-ocean-dark"
                  : "border-ocean-dark/30 text-ocean-dark hover:border-ocean-dark hover:bg-ocean-dark/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* カードグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filtered.map((item, i) => {
          const isExternal = item.href?.startsWith("http");

          const inner = (
            <>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-ocean-dark/80 text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 backdrop-blur-sm">
                  {item.category}
                </div>
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

          return (
            <AnimatedSection key={item.name} delay={i * 80}>
              {item.href ? (
                isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white overflow-hidden shadow-sm group h-full flex flex-col"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="bg-white overflow-hidden shadow-sm group h-full flex flex-col"
                  >
                    {inner}
                  </Link>
                )
              ) : (
                <div className="bg-white overflow-hidden shadow-sm group h-full flex flex-col">
                  {inner}
                </div>
              )}
            </AnimatedSection>
          );
        })}
      </div>
    </>
  );
}
