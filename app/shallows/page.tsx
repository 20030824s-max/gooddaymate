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
  Flame,
  UtensilsCrossed,
  Wind,
  ChevronRight,
  Star,
  ArrowLeft,
  PawPrint,
  Tv,
  Coffee,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Villa Shallows | 海を望む、大人の隠れ家",
  description:
    "沖縄・恩納村前田。エメラルドの海を一望するプライベートヴィラ「Villa Shallows」。丸ごと貸し切り・ベッドルーム3部屋・無料専用駐車場。Booking.com評価9.6。",
};

const amenities = [
  { icon: Wifi, label: "高速Wi-Fi" },
  { icon: Car, label: "無料専用駐車場" },
  { icon: Waves, label: "ビーチ近接" },
  { icon: Flame, label: "BBQグリル" },
  { icon: UtensilsCrossed, label: "フルキッチン" },
  { icon: Wind, label: "全室エアコン" },
  { icon: PawPrint, label: "ペット可（要相談）" },
  { icon: Tv, label: "スマートTV" },
  { icon: Coffee, label: "コーヒーメーカー" },
  { icon: Bath, label: "バスタブ・ビデ完備" },
];

const images = [
  {
    src: "/images/shallows-2.jpg",
    alt: "Villa Shallows リビング・オーシャンビュー",
  },
  {
    src: "/images/shallows-1.jpg",
    alt: "Villa Shallows ベッドルーム・オーシャンビュー",
  },
  {
    src: "/images/shallows-3.jpg",
    alt: "Villa Shallows バルコニー",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    alt: "バスルーム",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "テラス・外観",
  },
];

export default function ShallowsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero Gallery ─────────────────────────────────────── */}
        <section className="pt-20">
          <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[75vh] max-h-[600px]">
            {/* Main image */}
            <div className="col-span-4 md:col-span-2 row-span-2 relative overflow-hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Sub images (hidden on mobile) */}
            {images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="hidden md:block relative overflow-hidden"
              >
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
            {/* Breadcrumb */}
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
                    Villa Shallows
                  </h1>
                  <p className="text-xl text-gray-600 font-light mb-6">
                    海を望む、大人の隠れ家
                  </p>

                  {/* Meta chips */}
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin size={15} className="text-ocean-DEFAULT" />
                      沖縄県恩納村前田
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Users size={15} className="text-ocean-DEFAULT" />
                      最大6名
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <BedDouble size={15} className="text-ocean-DEFAULT" />
                      寝室3部屋
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Bath size={15} className="text-ocean-DEFAULT" />
                      バスルーム完備
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
                        9.6 / 10（Booking.com）
                      </span>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Description */}
                <AnimatedSection delay={100}>
                  <div className="prose prose-sm max-w-none mb-10">
                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                      エメラルドグリーンに輝く沖縄の海を一望する、丸ごと貸し切りのプライベートヴィラです。
                      大きな窓から広がる海の景色と、専用の駐車場・設備が整い、
                      グループ旅行から家族旅行まで快適にお過ごしいただけます。
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                      3つの寝室はそれぞれ独立しており、フルキッチンとBBQグリルを完備。
                      地元の食材を使ったバーベキューや自炊も存分に楽しめます。
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base">
                      沖縄自動車道・石川ICより車で約10分。
                      恩納村の豊かな自然に囲まれながら、プライベートな時間をお過ごしください。
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
                        "ペット：要事前相談",
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
                        <span>沖縄県恩納村前田3378-9 2F（詳細はご予約後にお知らせします）</span>
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
                    {/* Map placeholder */}
                    <div className="mt-6 h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                      地図はご予約後に詳細をお送りします
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Booking Widget (sticky) */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <AnimatedSection delay={100}>
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-3xl text-ocean-dark">
                          ¥45,000
                        </span>
                        <span className="text-gray-500 text-sm">〜 / 泊</span>
                      </div>
                      <p className="text-[11px] text-gold-DEFAULT tracking-wide mt-1">
                        直接予約で最低価格保証
                      </p>
                    </div>
                    <BookingWidget
                      propertyId="shallows"
                      propertyName="Villa Shallows"
                    />
                  </AnimatedSection>

                  {/* Direct booking advantage */}
                  <AnimatedSection delay={150}>
                    <div className="mt-6 p-5 bg-ocean-dark text-white text-sm">
                      <p className="font-medium text-gold-DEFAULT text-[11px] tracking-[0.15em] uppercase mb-3">
                        直接予約のメリット
                      </p>
                      <ul className="space-y-2">
                        {[
                          "OTAより最大15%お得",
                          "直接ご要望を伺えます",
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
                  name: "田中 M.",
                  date: "2024年12月",
                  text: "プライベート感が最高でした。海まで歩いてすぐで、夕日を見ながらBBQができて最高の思い出になりました。",
                  rating: 5,
                },
                {
                  name: "Yuki & Family",
                  date: "2024年11月",
                  text: "家族4人で利用。子供も大喜びで、広さも十分。キッチンが充実していて自炊もしやすかったです。",
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
                もう一つの施設もご覧ください
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                ビーチフロントプール付き・記念日に人気の「Aniversario」もチェック。
              </p>
              <Link href="/aniversario" className="btn-primary">
                Aniversarioを見る
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
