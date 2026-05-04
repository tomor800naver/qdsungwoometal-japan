import Layout from "@/components/Layout";
import { Award, Factory, ShieldCheck, Wrench } from "lucide-react";
/**
 * Design note: Industrial Corporate Modernism with East Asian manufacturing precision.
 * Home page should stay close to the original site: automotive hero,
 * year/area/experience metrics, company introduction, and four manufacturing advantages.
 */
const heroImage = "/hero-full-products.png";
const generatedHero = "/about-new.png";
const metrics = [
  { value: "2002", label: "中国本社設立" },
  { value: "13,000㎡+", label: "本社工場敷地面積" },
  { value: "34年", label: "業界経験の蓄積" },
];
const advantages = [
  { icon: Award, en: "Experienced", title: "豊富な経験", text: "長年の生産経験と自動車部品<br />分野の専門知識を活かし、<br />実務に即した製品提案を<br />行います。" },
  { icon: ShieldCheck, en: "Quality assurance", title: "品質保証", text: "IATF16949、ISO14001、ISO45001を<br />含む管理体系により、<br />安定した品質を追求します。" },
  { icon: Factory, en: "Strong technology", title: "製造技術", text: "成形、鍛造、表面処理、<br />組立、検査まで、<br />バランスウェイトに<br />必要な工程を総合的に<br />支えます。" },
  { icon: Wrench, en: "Sales support", title: "日本語営業サポート", text: "日本市場向けの見積、<br />仕様確認、サンプル相談、<br />量産調整を日本語で<br />サポートします。" },];
export default function Home() {
  return (
    <Layout>
      <main className="home-page">
        <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-inner-split">
            <div className="hero-copy-left">
              <span className="eyebrow">Qdsungwoometal Japan</span>
              <h1><span>グローバル製造力で<br />バランスウェイト市場を<br />サポートする。</span></h1>
            </div>
            <div className="hero-copy-right">
              <p>
                <span>
                青島成友金属Japanは、<br />
                青島成友金属有限公司の<br />
                バランスウェイト製造基盤を活かし、<br />
                日本のお客様に向け<br />
                製品提案、仕様確認、営業対応を<br />
                行う日本支援拠点です。
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="metrics-strip" aria-label="会社概要数値">
          {metrics.map((metric) => (
            <div key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>
        <section className="content-container about-section">
          <div className="about-visual">
            <img src={generatedHero} alt="自動車物流とバランスウェ이트의 이미지" loading="lazy" />
          </div>
          <div className="about-copy">
            <span className="section-kicker">ABOUT US</span>
            <h2>青島成友金属有限公司<br />日本営業支援拠点</h2>
            <p>
              青島成友金属Japanは、<br />
              青島成友金属有限公司のバランスウェイト製造基盤を活かし、<br />
              日本のお客様に向けた製品提案、仕様確認、営業対応を行います。
            </p>
          </div>
        </section>
        <section className="advantage-section">
          <div className="content-container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">OUR ADVANTAGE</span>
              <h2>品質で証明し、信頼で発展し、管理で価値を高める.</h2>
            </div>
            <div className="advantage-grid">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="advantage-card" key={item.title}>
                    <Icon size={28} />
                    <span>{item.en}</span>
                    <h3>{item.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
