import Layout from "@/components/Layout";
import { CheckCircle2, Cog, Gauge, ShieldCheck } from "lucide-react";
/**
 * Design note: Industrial Corporate Modernism with East Asian manufacturing precision.
 * Manufacturing page should mirror the original 生产实力 hierarchy: production equipment first,
 * reliability equipment second, with industrial imagery, teal linework, and concise Japanese copy.
 */
const equipment = [
  ["マルチフォーミング設備", "Multi Forming", "タイプ形状部品の安定成形を支える多工程成形設備。"],
  ["冷間鍛造設備", "Cold Forging", "金属素材の寸法安定性と量産性を両立する鍛造工程。"],
  ["自動リベット組立機", "Auto Rivet M/C", "部品組立のばらつきを抑え、量産品質を安定化。"],
  ["貼付タイププレス設備", "Patch Type Press", "貼付型バランスウェイトの形状加工に対応。"],
  ["熱処理", "Austempering", "要求特性に応じた熱処理工程で耐久性を確保。"],
  ["表面処理", "Geopert", "防錆・耐食性を考慮した表面処理工程。"],
  ["スプレー塗装機", "Spray Painting", "外観品質と機能性を支えるコーティング工程。"],
  ["テープ組立機", "PT Ass'y Machine", "貼付タイプ製品のテープ組立を効率化。"],
];
const testing = [
  "硬度試験機",
  "材料貼付力試験機",
  "塩水噴霧試験機",
  "環境試験機",
  "離脱力測定器",
  "衝撃試験機",
  "投影機",
  "高速回転試験機",
];
export default function Manufacturing() {
  return (
    <Layout>
      <main className="page-shell manufacturing-page">
        <section className="subpage-hero manufacturing-hero">
          <div className="section-kicker">PRODUCTION</div>
          <h1>製造設備</h1>
          <p>
            原材料加工から表面処理、信頼性評価まで、中国本社の一貫した製造・品質管理体制により、
            日本市場に求められる安定供給と品質確認を支援します。
          </p>
        </section>
        <section className="content-container production-intro">
          <div className="production-image" aria-label="製造ラインイメージ" />
          <div className="production-copy">
            <span className="eyebrow">Manufacturing capability</span>
            <h2>バランスウェイト製造に特化した設備構成</h2>
            <p>
              青島成友金属有限公司は、自動車部品・金属表面処理・金属加工設備を含む製造基盤を保有し、
              IATF16949、ISO14001、ISO45001などの管理体系に基づいた品質向上を継続しています。
            </p>
            <div className="strength-row">
              <span><Cog size={20} /> 成形・鍛造</span>
              <span><ShieldCheck size={20} /> 表面処理</span>
              <span><Gauge size={20} /> 信頼性評価</span>
            </div>
          </div>
        </section>
        <section className="content-container equipment-section">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">EQUIPMENT</span>
              <h2>主要生産設備</h2>
            </div>
            <p>原サイトの「主要生产设备」構成を踏襲し、日本語で工程の強みを明確化しています。</p>
          </div>
          <div className="equipment-grid">
            {equipment.map(([jp, en, description]) => (
              <article className="equipment-card" key={jp}>
                <CheckCircle2 size={22} />
                <h3>{jp}</h3>
                <span>{en}</span>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="content-container reliability-section">
          <div className="lab-image" aria-label="品質試験室イメージ" />
          <div className="reliability-copy">
            <span className="section-kicker">RELIABILITY</span>
            <h2>主要信頼性設備</h2>
            <p>
              製品性能を安定して確認するため、硬度、貼付力、塩水噴霧、環境、離脱力、衝撃、高速回転など、
              バランスウェイトに必要な評価設備を備えています。
            </p>
            <div className="testing-list">
              {testing.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
