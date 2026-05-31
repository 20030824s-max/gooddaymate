import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const companyInfo = [
  { label: "会社名", value: "株式会社Good Day Mate" },
  { label: "会社法人等番号", value: "0100-01-207526" },
  { label: "本店所在地", value: "東京都中央区築地二丁目１２番１６号" },
  { label: "会社成立日", value: "令和２年２月１２日（2020年2月12日）" },
  { label: "資本金", value: "５００万円" },
  { label: "発行可能株式総数", value: "１０万株" },
  { label: "発行済株式総数", value: "１万株" },
  { label: "代表取締役", value: "山本 丈善" },
  {
    label: "事業内容",
    value: "宿泊施設の企画・開発・運営 / 施設プロデュース＆経営コンサルティング / 中小企業のDX・AI推進",
  },
  { label: "メールアドレス", value: "info@gooddaymate.jp" },
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        {/* ヒーロー */}
        <section className="pt-40 pb-20 bg-ocean-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                Company
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">
                会社概要
              </h1>
              <div className="w-16 h-px bg-gold" />
            </AnimatedSection>
          </div>
        </section>

        {/* 会社情報テーブル */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <dl className="divide-y divide-gray-100">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 sm:grid-cols-3 py-6 gap-2 sm:gap-8"
                  >
                    <dt className="text-[11px] tracking-[0.2em] uppercase text-gold font-medium shrink-0">
                      {item.label}
                    </dt>
                    <dd className="sm:col-span-2 text-ocean-dark text-sm leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </section>

        {/* お問い合わせCTA */}
        <section className="py-16 bg-sand-light">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <p className="text-gray-600 text-sm mb-6">
                事業のご相談・お仕事のご依頼はお気軽にどうぞ。
              </p>
              <a href="mailto:info@gooddaymate.jp" className="btn-primary">
                メールで問い合わせる
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
