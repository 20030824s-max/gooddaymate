import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Instagram,
  ArrowRight,
  Building2,
  TrendingUp,
  Mail,
  Laptop,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AchievementsSection from "@/components/AchievementsSection";

// ─── Data ───────────────────────────────────────────────────────────────────

const properties = [
  {
    id: "shallows",
    name: "Villa Shallows",
    tagline: "海を望む、大人の隠れ家",
    location: "沖縄・恩納村",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    href: "/shallows",
    instagram: "@villashallows_okinawa",
    instagramUrl: "https://www.instagram.com/villashallows_okinawa",
  },
  {
    id: "aniversario",
    name: "Aniversario",
    tagline: "ビーチフロントプール付き、二人だけの特別な時間",
    location: "沖縄・恩納村",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    href: "/aniversario",
    instagram: "@aniversario_okinawa",
    instagramUrl: "https://www.instagram.com/aniversario_okinawa",
  },
];

// 事業内容 3軸
const serviceAxes = [
  {
    axis: "Axis 01",
    title: "施設の立ち上げ・トータル運営",
    subtitle: "ゼロからの開業〜日々のオペレーションまで",
    description:
      "「やりたいこと」を持ち込んでもらえれば、あとはすべて引き受けます。コンセプト策定・設計・内装・スタッフ採用から、開業後の予約管理・日常運営まで、事業の立ち上げをまるごと担当。",
    items: [
      "宿泊施設・貸別荘の企画・開発・自社運営",
      "カラオケバー・飲食店の立ち上げ・店舗運営",
      "OTA多チャネル管理・収益最大化",
      "スタッフ採用・教育・オペレーション構築",
    ],
    icon: Building2,
  },
  {
    axis: "Axis 02",
    title: "リゾート・娯楽施設のプロデュース・コンサル",
    subtitle: "新業態の開発から既存施設の収益改善まで",
    description:
      "グランピング施設のトータルプロデュースから、ゴルフ場・飲食施設の経営改善まで幅広く対応。「こういう施設を作りたい」「収益が伸び悩んでいる」—オーナーの課題をともに解決します。",
    items: [
      "グランピング・リゾート施設の設計・プロデュース",
      "ゴルフ場・飲食施設の運営改善・経営コンサル",
      "OTA運用・料金戦略・予約システム導入",
      "新業態の開発・業態転換支援",
    ],
    icon: TrendingUp,
  },
  {
    axis: "Axis 03",
    title: "中小企業のDX化推進",
    subtitle: "現場の業務をテクノロジーで、シンプルに変える",
    description:
      "「なんとなく非効率」「紙やFAXがまだ残っている」—そんな現場の課題をデジタルで解決します。大規模システムは不要。現場に合った、使いやすいDXを一緒に設計します。",
    items: [
      "業務フロー・課題の可視化・整理",
      "予約・在庫・顧客管理システムの導入支援",
      "SNS・Web活用によるマーケティング改善",
      "AIツール・自動化の導入コンサルティング",
    ],
    icon: Laptop,
  },
];

// 進行中プロジェクト
const upcomingProject = {
  name: "恩納村 新規リゾート施設",
  detail:
    "Villa Shallows・Aniversarioの隣接地に、ゼロからの企画として新施設を建設中。コンセプト策定から設計・運営まで一貫してプロデュース。",
  location: "沖縄・恩納村",
  image: null, // TODO: パース画像に差し替え
};

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
              alt="リゾート施設"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-light mb-6 animate-fade-in">
              Kanto &amp; Okinawa · Total Resort Management
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-tight tracking-wide mb-6 animate-slide-up">
              リゾートの未来を、
              <br />
              ともにつくる
            </h1>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
              企画・設計からオペレーションまで。
              <br />
              Good Day Mateが、宿泊・リゾート事業をトータルで支えます。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#properties" className="btn-gold">
                運営施設を見る
                <ChevronRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-white/80 text-sm tracking-wider hover:text-white transition-colors"
              >
                事業内容
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </section>

        {/* ② 会社概要セクション ───────────────────────────────── */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="relative h-[500px]">
                  <div className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                      alt="リゾートの自然"
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

              <AnimatedSection delay={200}>
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
                    About Us
                  </p>
                  <h2 className="heading-display text-4xl md:text-5xl text-ocean-dark mb-4 leading-tight">
                    関東・沖縄を拠点に、
                    <br />
                    リゾートをつくる
                  </h2>
                  <div className="divider-gold mb-8" />
                  <p className="text-gray-700 leading-relaxed mb-5">
                    Good Day Mateは、関東圏と沖縄を拠点に、宿泊施設・カラオケバーなどの「立ち上げ・トータル運営」を行う会社です。
                    沖縄恩納村のプライベートヴィラ2棟（Villa Shallows・Aniversario）や、東京・新橋のカラオケバー「PORCO」など、
                    コンセプト策定から日々のオペレーションまで一貫して担います。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    グランピング施設のプロデュース（HOLE37・茨城）、ゴルフ場の経営コンサル、新業態の開発など、
                    リゾート・娯楽領域における幅広い実績があります。
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      "施設の立ち上げ・トータル運営",
                      "リゾート・娯楽施設のプロデュース",
                      "ゴルフ場・飲食施設の経営コンサル",
                      "中小企業のDX化推進",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="btn-primary">
                    お仕事のご依頼
                    <ChevronRight size={16} />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ③ 事業内容（2軸）セクション ──────────────────────────── */}
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
                <p className="text-white/60 max-w-2xl mx-auto">
                  施設の立ち上げ・運営から、リゾートのプロデュース、中小企業のDX化まで。<br className="hidden sm:block" />
                  「任せたい」も「相談したい」も、3つの軸でお応えします。
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAxes.map((axis, i) => (
                <AnimatedSection key={axis.axis} delay={i * 150}>
                  <div className="p-10 border border-white/10 hover:border-gold/40 transition-all duration-500 h-full">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                      {axis.axis}
                    </p>
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6">
                      <axis.icon size={22} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-1">
                      {axis.title}
                    </h3>
                    <p className="text-gold/70 text-xs tracking-wider mb-5">
                      {axis.subtitle}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {axis.description}
                    </p>
                    <ul className="space-y-2">
                      {axis.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                          <div className="w-1 h-1 bg-gold rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ④ 実績セクション ────────────────────────────────────── */}
        <section id="achievements" className="py-24 bg-sand-light">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Achievements
                </p>
                <h2 className="heading-display text-4xl md:text-5xl text-ocean-dark mb-5">
                  実績
                </h2>
                <div className="divider-gold mx-auto" />
              </div>
            </AnimatedSection>

            <AchievementsSection />

            {/* 進行中プロジェクト */}
            <AnimatedSection>
              <div className="bg-ocean-dark text-white p-10 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  {upcomingProject.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={upcomingProject.image}
                        alt={upcomingProject.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    // TODO: パース画像が届いたら上のImageに差し替え
                    <div className="h-48 border border-white/20 flex items-center justify-center text-white/30 text-sm text-center px-4">
                      パース画像
                      <br />
                      準備中
                    </div>
                  )}
                </div>
                <div className="md:w-2/3">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                    Coming Soon · New Project
                  </p>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    {upcomingProject.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {upcomingProject.detail}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-gold/70">
                    <MapPin size={11} />
                    {upcomingProject.location}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ⑤ 運営施設セクション ────────────────────────────────── */}
        <section id="properties" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Our Properties
                </p>
                <h2 className="heading-display text-4xl md:text-5xl text-ocean-dark mb-5">
                  運営施設
                </h2>
                <div className="divider-gold mx-auto mb-5" />
                <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
                  沖縄・恩納村で自社運営するプライベートヴィラ。
                  各施設の詳細・ご予約は施設ページからどうぞ。
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {properties.map((property, i) => (
                <AnimatedSection key={property.id} delay={i * 150}>
                  <div className="group bg-white overflow-hidden shadow-lg">
                    {/* 画像 */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* コンテンツ */}
                    <div className="p-8">
                      <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                        {property.tagline}
                      </p>
                      <h3 className="font-serif text-3xl text-ocean-dark mb-3">
                        {property.name}
                      </h3>

                      <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-6">
                        <MapPin size={12} className="text-ocean" />
                        {property.location}
                      </div>

                      <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                        <Link
                          href={property.href}
                          className="flex-1 btn-primary text-center justify-center"
                        >
                          施設の詳細・予約
                          <ArrowRight size={14} />
                        </Link>
                        <a
                          href={property.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-ocean transition-colors"
                        >
                          <Instagram size={14} />
                          {property.instagram}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ⑥ お問い合わせCTA ─────────────────────────────────── */}
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
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
                お仕事のご依頼・
                <br />
                お問い合わせ
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-10">
                施設の運営代行、コンサルティングのご相談など、
                <br />
                まずはお気軽にお問い合わせください。
                <br />
                担当者より2営業日以内にご連絡いたします。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* TODO: メールアドレスを正式なものに差し替え */}
                <a href="mailto:info@gooddaymate.com" className="btn-gold">
                  <Mail size={15} />
                  メールで問い合わせる
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
