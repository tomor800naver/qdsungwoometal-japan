import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

/**
 * Design note: Industrial Corporate Modernism with East Asian manufacturing precision.
 * Contact page should feel practical and trustworthy: clear Japanese labels, corporate contact blocks,
 * restrained teal focus states, and a form suited to B2B inquiries about balance weights.
 */
export default function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("お問い合わせ内容を確認しました。担当者より折り返しご連絡いたします。", {
      description: "このデモサイトでは送信処理は保存されません。",
    });
    event.currentTarget.reset();
  }

  return (
    <Layout>
      <main className="page-shell contact-page">
        <section className="subpage-hero contact-hero">
          <div className="section-kicker">CONTACT</div>
          <h1>お問い合わせ</h1>
          <p>
            製品仕様、見積、サンプル、量産対応、品質資料に関するご相談を日本語で承ります。
            中国本社の製造チームと連携し、迅速な確認をサポートします。
          </p>
        </section>
        <section className="content-container contact-layout">
          <div className="contact-info-card">
            <span className="eyebrow">Japan Sales Support</span>
            <h2>日本市場向け営業支援窓口</h2>
            <p>
              青島成友金属Japanは、中国本社のバランスウェイト製造・品質管理体制と連携し、
              日本のお客様に向けた商談、仕様確認、納期調整を支援します。
            </p>
            <dl className="contact-list">
              <div><dt><MapPin size={18} />日本拠点</dt><dd>日本国内営業支援窓口</dd></div>
              <div><dt><MapPin size={18} />中国本社</dt><dd>山東省青島市平度市太原路567号</dd></div>
              <div><dt><Phone size={18} />代表電話</dt><dd>+86-532-86635836</dd></div>
              <div><dt><Mail size={18} />メール</dt><dd>qdsungwoo@163.com</dd></div>
            </dl>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                会社名
                <input name="company" type="text" placeholder="例：株式会社〇〇" required />
              </label>
              <label>
                お名前
                <input name="name" type="text" placeholder="山田 太郎" required />
              </label>
              <label>
                メールアドレス
                <input name="email" type="email" placeholder="example@company.co.jp" required />
              </label>
              <label>
                電話番号
                <input name="phone" type="tel" placeholder="03-0000-0000" />
              </label>
              <label className="full-field">
                お問い合わせ種別
                <select name="topic" defaultValue="product">
                  <option value="product">製品・仕様について</option>
                  <option value="quote">見積・サンプルについて</option>
                  <option value="production">製造設備・品質体制について</option>
                  <option value="other">その他</option>
                </select>
              </label>
              <label className="full-field">
                お問い合わせ内容
                <textarea name="message" rows={7} placeholder="ご希望の製品タイプ、数量、車種、必要資料などをご記入ください。" required />
              </label>
            </div>
            <button type="submit" className="primary-button">
              <Send size={18} /> 送信内容を確認する
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
}
