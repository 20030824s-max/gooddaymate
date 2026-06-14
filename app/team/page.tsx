import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const members = [
  {
    name: "山本 丈善",
    nameEn: "Takeyoshi Yamamoto",
    role: "代表取締役",
    roleEn: "Representative Director",
    bio: "株式会社Good Day Mateの代表。リゾート施設の企画・開発・運営から、カラオケバーの立ち上げ、グランピング施設のプロデュース、中小企業のDX推進まで、業種を問わず事業の現場を牽引する。",
    image: null,
  },
  {
    name: "石川 空来",
    nameEn: "Soraiku Ishikawa",
    role: "スタッフ",
    roleEn: "Staff",
    bio: null,
    image: null,
  },
];

function MemberCard({ member }: { member: typeof members[0] }) {
  return (
    <div className="bg-white group">
      {/* 写真エリア */}
      <div className="relative h-80 overflow-hidden bg-sand-light flex items-center justify-center">
        {member.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-gray-300">
            <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <span className="font-serif text-3xl text-gray-200">
                {member.name.charAt(0)}
              </span>
            </div>
            <span className="text-xs tracking-widest">Photo Coming Soon</span>
          </div>
        )}
      </div>

      {/* テキストエリア */}
      <div className="p-8 border-t-2 border-gold">
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
          {member.roleEn}
        </p>
        <h2 className="font-serif text-2xl text-ocean-dark mb-1">
          {member.name}
        </h2>
        <p className="text-xs text-gray-400 tracking-wider mb-5">
          {member.nameEn}
        </p>
        <p className="text-[11px] tracking-[0.15em] uppercase text-ocean-dark/60 font-medium mb-4">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        {/* ヒーロー */}
        <section className="pt-40 pb-20 bg-ocean-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                Our Team
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">
                メンバー紹介
              </h1>
              <div className="w-16 h-px bg-gold" />
            </AnimatedSection>
          </div>
        </section>

        {/* メンバー一覧 */}
        <section className="py-24 bg-sand-light">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {members.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 150}>
                  <MemberCard member={member} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
