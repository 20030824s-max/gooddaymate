import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  BedDouble,
  Bath,
  Wifi,
  Car,
  Waves,
  Wind,
  ChevronRight,
  Star,
  ArrowLeft,
  Tv,
  Coffee,
  Heart,
  Sparkles,
  Wine,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Aniversario | 二人だけの、永遠の記念日",
  description:
    "沖縄・恩納村。カップル・ハネムーンに最適なプライベートヴィラ「Aniversario」。プライベートジャグジー付き、記念日演出対応。",
};

const amenities = [
  { icon: Wine, label: "ウェルカムスパークリング" },
  { icon: Sparkles, label: "プライベートジャグジー" },
  { icon: Heart, label: "記念日演出（要事前申込）" },
  { icon: Wifi, label: "高速Wi-Fi" },
  { icon: Car, label: "無料駐車場" },
  { icon: Waves, label: "ビーチ徒歩5分" },
  { icon: Wind, label: "全室エアコン" },
  { icon: Tv, label: "シアタールーム設備" },
  { icon: Coffee, label: "エスプレッソマシン" },
  { icon: Bath, label: "大理石バスルーム" },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=85",
    alt: "Aniversario メインビュー",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "ジャグジー・テラス",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "ベッドルーム",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    alt: "バスルーム",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "リビングルーム",
  },
];

export default function AniversarioPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero Gallery ─────────────────────────────────────── */}
        <section className="pt-20">
          <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[75vh] max-h-[600px]">
            <div className="col-span-4 md:col-span-2 row-span-2 relative overflow-hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {images.slice(1, 5).map((img, i) => (
              <div key={i} className="hidden md:block relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Property Info ────────────────────────────────────── */}
        <section className="py-16 bg-sand-light">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/#properties"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-ocean-DEFAULT hover:text-ocean-light mb-8 transition-colors"
            >
              <ArrowLeft size={13} />
              施設一覧に戻る
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Details */}
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-gold-DEFAULT mb-2">
                    Private Villa · Okinawa Onna-son
                  </p>
                  <h1 className="font-serif text-5xl md:text-6xl text-ocean-dark mb-3">
                    Aniversario
                  </h1>
                  <p className="text-xl text-gray-600 font-light mb-6">
                    二人だけの、永遠の記念日
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin size={15} className="text-ocean-DEFAULT" />
                      沖縄県国頭郡恩納村
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Users size={15} className="text-ocean-DEFAULT" />
                      最大4名
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <BedDouble size={15} className="text-ocean-DEFAULT" />
                      寝室2室
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Bath size={15} className="text-ocean-DEFAULT" />
                      バスルーム2室
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill="#c9a84c"
                          className="text-gold-DEFAULT"
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">
                        5.0 (24件)
                      </span>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Special badge */}
                <AnimatedSection delay={50}>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      "ハネムーンに最適",
                      "記念日演出対応",
                      "プライベートジャグジー",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 text-[11px] border border-coral-DEFAULT/40 text-coral-dark px-3 py-1.5"
                      >
                        <Heart size={10} fill="currentColor" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Description */}
                <AnimatedSection delay={100}>
                  <div className="mb-10">
                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                      「Aniversario（アニベルサリオ）」—スペイン語で「記念日」を意味する名を持つこのヴィラは、
                      大切な人との特別な時間のために設計されました。
                      結婚記念日、誕生日、プロポーズ、ハネムーン。あらゆる節目を彩る、
                      最上の空間です。
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                      プライベートジャグジーでは、満天の星空を眺めながら二人だけの夜を。
                      大理石のバスルームは、まるでラグジュアリーホテルのような体験を提供します。
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base">
                      ウェルカムスパークリングワインで乾杯し、記念日ケーキや花飾りのご手配（要事前申込）も承ります。
                      最高の記念日を、Good Day Mateが全力でサポートします。
                    </p>
                  </div>
                </AnimatedSection>

                {/* Amenities */}
                <AnimatedSection delay={150}>
                  <div className="mb-10">
                    <h2 className="font-serif text-2xl text-ocean-dark mb-6">
                      設備・アメニティ
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {amenities.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <item.icon
                            size={16}
                            className="text-ocean-DEFAULT shrink-0"
                          />
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Anniversary options */}
                <AnimatedSection delay={180}>
                  <div className="bg-coral-DEFAULT/5 border border-coral-DEFAULT/20 p-6 mb-10">
                    <h3 className="font-serif text-xl text-ocean-dark mb-4 flex items-center gap-2">
                      <Heart size={18} className="text-coral-DEFAULT" />
                      記念日オプション（追加料金）
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "フラワーアレンジメント",
                        "記念日ケーキ",
                        "スパークリングワインボトル",
                        "バルーンデコレーション",
                        "夕食ケータリング手配",
                        "フォトブック作成支援",
                      ].map((opt) => (
                        <div
                          key={opt}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <Sparkles
                            size={12}
                            className="text-coral-DEFAULT"
                          />
                          {opt}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      ※ オプションは予約時またはチェックイン7日前までにご連絡ください
                    </p>
                  </div>
                </AnimatedSection>

                {/* House Rules */}
                <AnimatedSection delay={200}>
                  <div className="border-t border-gray-200 pt-8 mb-10">
                    <h2 className="font-serif text-2xl text-ocean-dark mb-6">
                      ハウスルール
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "チェックイン：15:00〜",
                        "チェックアウト：〜11:00",
                        "喫煙：屋外のみ可",
                        "パーティー・大音量：不可",
                        "ペット：不可",
                        "追加ゲスト：要申告",
                      ].map((rule) => (
                        <div
                          key={rule}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1 h-1 bg-gold-DEFAULT rounded-full" />
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Access */}
                <AnimatedSection delay={250}>
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="font-serif text-2xl text-ocean-dark mb-6">
                      アクセス
                    </h2>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={15}
                          className="text-ocean-DEFAULT mt-0.5 shrink-0"
                        />
                        <span>
                          沖縄県国頭郡恩納村（詳細住所はご予約後にお知らせします）
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Car
                          size={15}
                          className="text-ocean-DEFAULT mt-0.5 shrink-0"
                        />
                        <span>
                          那覇空港より車で約60分 / 沖縄自動車道 石川ICより約10分
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                      地図はご予約後に詳細をお送りします
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Booking Widget */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <AnimatedSection delay={100}>
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-3xl text-ocean-dark">
                          ¥38,000
                        </span>
                        <span className="text-gray-500 text-sm">〜 / 泊</span>
                      </div>
                      <p className="text-[11px] text-gold-DEFAULT tracking-wide mt-1">
                        直接予約で最低価格保証
                      </p>
                    </div>
                    <BookingWidget
                      propertyId="aniversario"
                      propertyName="Aniversario"
                    />
                  </AnimatedSection>

                  <AnimatedSection delay={150}>
                    <div className="mt-6 p-5 bg-ocean-dark text-white text-sm">
                      <p className="font-medium text-gold-DEFAULT text-[11px] tracking-[0.15em] uppercase mb-3">
                        直接予約のメリット
                      </p>
                      <ul className="space-y-2">
                        {[
                          "OTAより最大15%お得",
                          "記念日オプションが頼みやすい",
                          "キャンセルポリシーが柔軟",
                          "早期割引・連泊割引あり",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-white/80 text-xs"
                          >
                            <div className="w-1 h-1 bg-gold-DEFAULT rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Reviews ──────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <h2 className="font-serif text-3xl text-ocean-dark mb-10 text-center">
                ゲストレビュー
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "鈴木 K.",
                  date: "2025年1月",
                  text: "記念日で利用しました。ウェルカムフルーツや細かい気遣いに感動。プライベートジャグジーで2人だけの特別な時間が過ごせました。一生の思い出になりました。",
                  rating: 5,
                },
                {
                  name: "Haruka & Kenji",
                  date: "2024年12月",
                  text: "ハネムーンで利用。大理石のバスルームやジャグジー、すべてが最高でした。スタッフの方が花飾りも準備してくれて感激。また絶対に来ます！",
                  rating: 5,
                },
              ].map((review, i) => (
                <AnimatedSection key={review.name} delay={i * 100}>
                  <div className="bg-sand-light p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star
                          key={j}
                          size={13}
                          fill="#c9a84c"
                          className="text-gold-DEFAULT"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-ocean-dark text-sm">
                        {review.name}
                      </p>
                      <p className="text-gray-400 text-xs">{review.date}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Property CTA ───────────────────────────────── */}
        <section className="py-16 bg-sand-light">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold-DEFAULT mb-3">
                Other Property
              </p>
              <h2 className="font-serif text-3xl text-ocean-dark mb-4">
                グループ・ファミリー旅行なら「Sharrows」
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                最大6名対応、BBQグリル付きの「Sharrows」もチェック。
              </p>
              <Link href="/sharrows" className="btn-primary">
                Sharrowsを見る
                <ChevronRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
