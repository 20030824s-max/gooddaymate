import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  MapPin,
  Wifi,
  Car,
  Waves,
  UtensilsCrossed,
  Instagram,
  ArrowRight,
  Building2,
  TrendingUp,
  Lightbulb,
  Award,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Data ───────────────────────────────────────────────────────────────────

const properties = [
  {
    id: "sharrows",
    name: "Sharrows",
    tagline: "海を望む、大人の隠れ家",
    description:
      "エメラルドグリーンの沖縄の海を一望する、洗練されたプライベートヴィラ。広々としたリビングと専用テラスで、特別なひとときを。",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    href: "/sharrows",
    capacity: "最大6名",
    bedrooms: "寝室3室",
    features: ["オーシャンビュー", "プライベートBBQ", "ペット可"],
    price: "¥45,000〜 / 泊",
    badge: "人気No.1",
    rating: "4.9",
  },
  {
    id: "aniversario",
    name: "Aniversario",
    tagline: "二人だけの、永遠の記念日",
    description:
      "記念日や特別なお祝いに。洗練されたインテリアと、プライベートジャグジーが旅の体験を唯一無二のものにします。",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    href: "/aniversario",
    capacity: "最大4名",
    bedrooms: "寝室2室",
    features: ["プライベートジャグジー", "記念日演出", "ウェルカムフルーツ"],
    price: "¥38,000〜 / 泊",
    badge: "記念日におすすめ",
    rating: "5.0",
  },
];

const services = [
  {
    icon: Building2,
    title: "貸別荘の開発・設計",
    description:
      "物件の選定から設計・内装まで、高収益を生む貸別荘の開発をトータルサポート。投資対効果を最大化する設計を提案します。",
  },
  {
    icon: Award,
    title: "施設運営管理",
    description:
      "予約管理・清掃・ゲスト対応まで一括対応。OTA（Booking.com、Airbnb等）の多チャネル管理で稼働率を最大化します。",
  },
  {
    icon: TrendingUp,
    title: "OTA運用・収益最大化",
    description:
      "料金設定の最適化、写真・文章のブラッシュアップ、レビュー対策など、OTA上での競争力を高めるコンサルティングを提供。",
  },
  {
    icon: Lightbulb,
    title: "DXコンサルティング",
    description:
      "宿泊業のDX推進を支援。自社予約システムの導入、業務効率化ツールの選定・実装、デジタルマーケティング戦略の立案まで。",
  },
];

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    alt: "沖縄の海",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=400&q=80",
    alt: "リゾートプール",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
    alt: "ヴィラインテリア",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    alt: "プールサイド",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80",
    alt: "ホテルベッドルーム",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=80",
    alt: "バスルーム",
  },
];

const stats = [
  { value: "98%", label: "ゲスト満足度" },
  { value: "500+", label: "年間宿泊組数" },
  { value: "2", label: "運営施設数" },
  { value: "4.9", label: "平均レビュー評価" },
];

const reviews = [
  {
    name: "田中 M.",
    from: "東京都",
    text: "プライベート感が最高でした。海まで歩いてすぐで、夕日を見ながらBBQができて最高の思い出になりました。リピート確定です。",
    rating: 5,
    property: "Sharrows",
  },
  {
    name: "鈴木 K.",
    from: "大阪府",
    text: "記念日で利用しました。ウェルカムフルーツや細かい気遣いに感動。プライベートジャグジーで2人だけの特別な時間が過ごせました。",
    rating: 5,
    property: "Aniversario",
  },
  {
    name: "Yuki & Family",
    from: "神奈川県",
    text: "家族4人で利用。子供も大喜びで、広さも十分。キッチンが充実していて自炊もしやすく、沖縄の食材を買い込んで楽しみました。",
    rating: 5,
    property: "Sharrows",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ① ヒーローセクション ──────────────────────────────────── */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=1920&q=85"
              alt="沖縄の美しい海"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-light mb-6 animate-fade-in">
              Okinawa · Private Villa Experience
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-tight tracking-wide mb-6 animate-slide-up">
              沖縄の特別な体験を、
              <br />
              あなたに
            </h1>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
              日常を忘れる、プライベートな空間。
              <br />
              Good Day Mateが贈る、最高の沖縄ステイ。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#properties" className="btn-gold">
                施設を見る
                <ChevronRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-white/80 text-sm tracking-wider hover:text-white transition-colors"
              >
                会社について
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* スクロール誘導 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </section>

        {/* ② 簡易予約バー ──────────────────────────────────────── */}
        <section className="bg-sand-light border-b border-sand-dark">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <BookingWidget compact />
          </div>
        </section>

        {/* ③ 実績数値バー ──────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 100}>
                  <div>
                    <p className="font-serif text-4xl font-light text-ocean mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ④ 施設紹介セクション ────────────────────────────────── */}
        <section id="properties" className="py-24 bg-sand-light">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Our Properties
                </p>
                <h2 className="heading-display text-4xl md:text-5xl text-ocean-dark mb-5">
                  厳選した2つの施設
                </h2>
                <div className="divider-gold mx-auto mb-5" />
                <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
                  それぞれ異なる魅力を持つプライベートヴィラ。
                  あなたの旅のスタイルに合った施設をお選びください。
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {properties.map((property, i) => (
                <AnimatedSection key={property.id} delay={i * 150}>
                  <Link
                    href={property.href}
                    className="group block card-hover bg-white overflow-hidden shadow-lg"
                  >
                    {/* 画像 */}
                    <div className="property-img-wrapper relative h-72 overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover property-img"
                      />
                      <div className="absolute top-4 left-4 bg-gold text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                        {property.badge}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2">
                        <p className="text-ocean-dark font-medium text-sm">
                          {property.price}
                        </p>
                      </div>
                    </div>

                    {/* コンテンツ */}
                    <div className="p-8">
                      <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                        {property.tagline}
                      </p>
                      <h3 className="font-serif text-3xl text-ocean-dark mb-3 group-hover:text-ocean-light transition-colors">
                        {property.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {property.description}
                      </p>

                      <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-5">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-ocean" />
                          沖縄・恩納村
                        </span>
                        <span>{property.capacity}</span>
                        <span>{property.bedrooms}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {property.features.map((f) => (
                          <span
                            key={f}
                            className="text-[10px] tracking-wide border border-ocean/20 text-ocean px-3 py-1"
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                        <span className="flex items-center gap-1 text-[11px] text-gold">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} size={12} fill="currentColor" />
                          ))}
                          <span className="ml-1 text-gray-500">
                            {property.rating}
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase text-ocean group-hover:text-ocean-light transition-colors font-medium">
                          詳細・予約
                          <ArrowRight
                            size={13}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ⑤ 会社概要セクション ───────────────────────────────── */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* 写真コラージュ */}
              <AnimatedSection>
                <div className="relative h-[500px]">
                  <div className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                      alt="沖縄の自然"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80"
                      alt="施設内観"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-gold/10 border border-gold/30" />
                </div>
              </AnimatedSection>

              {/* テキスト */}
              <AnimatedSection delay={200}>
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
                    About Us
                  </p>
                  <h2 className="heading-display text-4xl md:text-5xl text-ocean-dark mb-4 leading-tight">
                    沖縄の旅を、
                    <br />
                    もっと特別に
                  </h2>
                  <div className="divider-gold mb-8" />
                  <p className="text-gray-700 leading-relaxed mb-5">
                    Good Day Mateは、沖縄・恩納村を拠点に、プライベートヴィラの開発・運営を行う会社です。
                    「旅をする人が本当に喜ぶ空間とは何か」を追求し、設計から運営まで一貫してこだわり抜いた施設を提供しています。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    民泊・貸別荘の運営で培ったノウハウを活かし、他の事業者向けの開発コンサルティングや
                    DX推進支援も手がけています。
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      "プライベートヴィラ運営",
                      "貸別荘開発コンサル",
                      "OTA多チャネル管理",
                      "DX推進・システム導入",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="btn-primary">
                    お問い合わせ
                    <ChevronRight size={16} />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ⑥ 事業内容セクション ───────────────────────────────── */}
        <section id="services" className="py-24 bg-ocean-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Our Services
                </p>
                <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
                  事業内容
                </h2>
                <div className="divider-gold mx-auto mb-5" />
                <p className="text-white/60 max-w-xl mx-auto">
                  貸別荘の開発から運営まで、宿泊事業に関わるあらゆる課題をワンストップで解決します。
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <AnimatedSection key={service.title} delay={i * 100}>
                  <div className="p-8 border border-white/10 hover:border-gold/40 transition-all duration-500 group h-full">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
                      <service.icon size={22} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ⑦ 設備ハイライト ──────────────────────────────────── */}
        <section className="py-24 bg-sand-light">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Amenities
                </p>
                <h2 className="heading-display text-4xl md:text-5xl text-ocean-dark mb-5">
                  すべてが揃う、充実の設備
                </h2>
                <div className="divider-gold mx-auto" />
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Wifi, label: "高速Wi-Fi", sub: "無料・全室完備" },
                { icon: Car, label: "無料駐車場", sub: "敷地内・屋根付き" },
                { icon: Waves, label: "ビーチ徒歩圏", sub: "徒歩5分以内" },
                { icon: UtensilsCrossed, label: "フルキッチン", sub: "調理器具一式" },
              ].map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 100}>
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 border border-ocean/20 flex items-center justify-center group-hover:bg-ocean group-hover:border-ocean transition-all duration-300">
                      <item.icon
                        size={24}
                        className="text-ocean group-hover:text-white transition-colors"
                      />
                    </div>
                    <p className="font-medium text-ocean-dark text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-500 text-xs">{item.sub}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ⑧ Instagramグリッド ────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Instagram
                </p>
                <h2 className="heading-display text-4xl text-ocean-dark mb-4">
                  @gooddaymate_okinawa
                </h2>
                <p className="text-gray-500 text-sm">
                  日々の施設の様子や沖縄の魅力を発信中
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
              {instagramPosts.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 60}>
                  <a
                    href="https://www.instagram.com/gooddaymate_okinawa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-square overflow-hidden group"
                  >
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-ocean-dark/0 group-hover:bg-ocean-dark/40 transition-colors duration-300 flex items-center justify-center">
                      <Instagram
                        size={24}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.instagram.com/gooddaymate_okinawa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Instagram size={15} />
                フォローする
              </a>
            </div>
          </div>
        </section>

        {/* ⑨ ゲストレビュー ──────────────────────────────────── */}
        <section className="py-24 bg-sand-light">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Guest Reviews
                </p>
                <h2 className="heading-display text-4xl text-ocean-dark mb-5">
                  ゲストの声
                </h2>
                <div className="divider-gold mx-auto" />
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <AnimatedSection key={review.name} delay={i * 100}>
                  <div className="bg-white p-8 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={13}
                          fill="#c9a84c"
                          className="text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <p className="font-medium text-ocean-dark text-sm">
                          {review.name}
                        </p>
                        <p className="text-gray-400 text-xs">{review.from}</p>
                      </div>
                      <span className="text-[10px] text-gold border border-gold/30 px-2 py-1">
                        {review.property}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ⑩ お問い合わせCTA ─────────────────────────────────── */}
        <section
          id="contact"
          className="relative py-28 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
              alt="Contact"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ocean-dark/80" />
          </div>
          <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold-light mb-4">
                Contact Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
                ご予約・お問い合わせ
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-10">
                施設のご予約、コンサルティングのご相談、その他お気軽にお問い合わせください。
                担当者より2営業日以内にご連絡いたします。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:info@gooddaymate.jp" className="btn-gold">
                  メールで問い合わせる
                  <ChevronRight size={16} />
                </a>
                <a
                  href="https://www.instagram.com/gooddaymate_okinawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 text-sm tracking-wider hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  Instagramで見る
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
