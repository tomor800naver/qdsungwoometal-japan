import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
/**
 * Design note: Industrial Corporate Modernism with East Asian manufacturing precision.
 * Product content should echo the original 产品中心 structure while presenting Japanese-readable
 * categories, metallic product cards, teal section rules, and concise B2B value propositions.
 */
const productVisual = "/product-hero-clean.png";
const originalClipVisual = "https://omo-oss-image.thefastimg.com/portal-saas/pg2024012914125080147/cms/image/b91e5c00-a3c3-4e80-822e-85a567bcf5ba.jpg";
const originalAdhesiveVisual = "https://omo-oss-image.thefastimg.com/portal-saas/pg2024012914125080147/cms/image/817f85d6-61cb-41f7-826e-27497893b0da.jpg";
const products = [
  { name: "打込タイプ製品 - Clip Type AL / ST", category: "打込タイプ", image: originalClipVisual, specs: ["材質：鉄・亜鉛系仕様に対応", "適用ホイール：アルミ・スチール", "仕様目安：5g〜60g"] },
  { name: "打込タイプ製品 - Clip Type AL / ST", category: "打込タイプ", image: originalClipVisual, specs: ["車種別形状検討", "量産供給相談", "表面処理対応"] },
  { name: "打込タイプ製品 - Clip Type AL / ST", category: "打込タイプ", image: originalClipVisual, specs: ["OEM向け相談", "安定した把持力", "検査資料確認可"] },
  { name: "打込タイプ製品 - Clip Type AL / ST", category: "打込タイプ", image: originalClipVisual, specs: ["各種ホイール条件", "サンプル相談", "日本語対応"] },
  { name: "一体型製品", category: "貼付タイプ", image: productVisual, specs: ["一体型構造", "作業性を考慮", "量産仕様相談"] },
  { name: "分離型製品 - ストリップ式", category: "貼付タイプ", image: originalAdhesiveVisual, specs: ["ストリップ供給", "貼付作業に対応", "仕様別提案"] },
  { name: "分離型製品 - ロール式", category: "貼付タイプ", image: originalAdhesiveVisual, specs: ["ロール供給", "作業効率重視", "ライン使用相談"] },
  { name: "貼付型ゴム製品 - 開発中", category: "開発品", image: productVisual, specs: ["開発中", "特殊用途相談", "共同検討可能"] },
];
export default function Products() {
  return (
    <Layout>
      <main className="page-shell products-page">
        <section className="subpage-hero products-hero">
          <div className="section-kicker">PRODUCTS</div>
          <h1>製品</h1>
        </section>
        <section className="content-container product-center-layout">
          <aside className="category-panel" aria-label="製品カテゴリ">
            <span>製品センター</span>
            <a href="#clip">打込タイプ製品</a>
            <a href="#adhesive">貼付タイプ製品</a>
            <Link href="/contact">すぐに相談する</Link>
          </aside>
          <div className="product-main">
            <div className="product-lead-card">
              <img src={productVisual} alt="バランスウェイト製品ラインアップ" loading="lazy" />
              <div>
                <span className="eyebrow">Wheel Balance Weight</span>
                <h2>車輪の動バランスを支える重要部品</h2>
                <p>
                  バランスウェイトは高速回転時の重量バランスを補正し、振動低減、タイヤ寿命、足回り部品の保護に寄与します。
                  当社は中国本社の製造体制を背景に、用途に応じた仕様提案を行います。
                </p>
              </div>
            </div>
            <div className="product-grid" aria-label="製品一覧">
              {products.map((product, index) => (
                <article className="product-card" key={`${product.name}-${index}`} id={index === 0 ? "clip" : index === 4 ? "adhesive" : undefined}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-card-body">
                    <span>{product.category}</span>
                    <h2>{product.name}</h2>
                    <ul>
                      {product.specs.map((spec) => <li key={spec}><CheckCircle2 size={15} />{spec}</li>)}
                    </ul>
                    <Link href="/contact" className="card-link">お問い合わせ <ArrowRight size={16} /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
