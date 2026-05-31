import Image from "next/image";
import {
  ChevronRight,
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

// 事業内容 3軸
const serviceAxes = [
  {
    axis: "Axis 01",
    title: "プロデュース・コンサル",
    subtitle: "構想から開業まで、まるごとプロデュース",
    description:
      "「こういう施設を作りたい」という構想を持ち込んでもらえれば、コンセプト策定・設計・スタッフ採用・開業準備まで引き受けます。開業後の日常運営はオーナー側が担いますが、OTA管理や収益改善など継続的なコンサルも提供します。",
    items: [
      "施設のコンセプト策定・設計・内装監修",
      "OTA登録・料金設計・予約システム構築",
      "スタッフ採用・教育・オペレーション設計",
      "開業後の収益改善・マーケティングコンサル",
    ],
    icon: Building2,
  },
  {
    axis: "Axis 02",
    title: "直運営事業",
    subtitle: "自ら投資・開発・運営する自社施設",
    description:
      "沖縄の貸別荘やグランピング施設など、自社で企画・開発・運営を行う事業です。現場で積み上げたノウハウが、プロデュース・コンサル事業の土台になっています。",
    items: [
      "沖縄・恩納村の貸別荘2棟（Villa Shallows / Aniversario）",
      "グランピング施設の開発・運営（HOLE37）",
      "OTA多チャネル管理・ダイナミックプライシング",
      "施設スタッフ採用・教育・品質管理",
    ],
    icon: TrendingUp,
  },
  {
    axis: "Axis 03",
    title: "DX・AI推進",
    subtitle: "現場の業務をテクノロジーで、シンプルに変える",
    description:
      "自社施設で培ったIT運用の経験をもとに、中小企業のデジタル化・AI活用を支援します。大規模システムは不要。現場に合ったDXを一緒に設計します。",
    items: [
      "業務フロー・課題の可視化・整理",
      "予約・顧客管理システムの導入支援",
      "AIツール・自動化の導入コンサルティング",
      "SNS・Web活用によるマーケティング改善",
    ],
    icon: Laptop,
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
              alt="リゾート施設"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold-light mb-6 animate-fade-in">
              Good Day Mate · Business Execution
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-tight tracking-wide mb-6 animate-slide-up">
              事業を、
              <br />
              まるごと動かす。
            </h1>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
              企画・開発・運営・DX。
              <br />
              業種を問わず、Good Day Mateが事業の現場を担います。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="btn-gold">
                手がける事業を見る
                <ChevronRight size={16} />
              </a>
              <a
                href="#services"
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
                    考えるだけでなく、
                    <br />
                    動く。
                  </h2>
                  <div className="divider-gold mb-8" />
                  <p className="text-gray-700 leading-relaxed mb-5">
                    Good Day Mateは、関東・沖縄を拠点に「事業をまるごと動かす」会社です。
                    宿泊ヴィラの自社運営、カラオケバーの立ち上げ、グランピング施設のプロデュースなど、
                    机上の提案ではなく、自分たちが現場に入り込んで実行してきた実績があります。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    ゴルフ場の経営コンサルから中小企業のDX化まで、業種を問わず対応。
                    「やりたいことがある」「現状を変えたい」というオーナーの思いを、実行に変えます。
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      "施設のプロデュース・運営委託",
                      "自社施設の直運営",
                      "グランピング・宿泊施設の開発",
                      "中小企業のDX・AI推進",
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

        {/* ④ 手がける事業セクション ──────────────────────────────── */}
        <section id="portfolio" className="py-24 bg-sand-light">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                  Our Portfolio
                </p>
                <h2 className="heading-display text-4xl md:text-5xl text-ocean-dark mb-5">
                  手がける事業
                </h2>
                <div className="divider-gold mx-auto" />
              </div>
            </AnimatedSection>

            <AchievementsSection />
          </div>
        </section>

        {/* ⑤ お問い合わせCTA ─────────────────────────────────── */}
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
