import type { Metadata } from 'next';
import { routeByPath, SITE_URL } from '@/lib/routes';

const ROUTE = '/ja/tokushoho/';
const meta = routeByPath.get(ROUTE)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: SITE_URL + ROUTE },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: SITE_URL + ROUTE,
    type: 'website',
    images: ["https://pubrica.com/share/pubrica-card.jpg"],
  },
};

const schema = [{"@context":"https://schema.org","@type":"WebPage","name":"特定商取引法に基づく表示","url":"https://pubrica.com/ja/tokushoho/","description":"日本のお客様に向けた取引条件の表示。事業者情報、販売価格、支払方法、役務の提供時期、キャンセルと返金について。","inLanguage":"ja","isPartOf":{"@type":"WebSite","name":"Pubrica","url":"https://pubrica.com/"},"publisher":{"@type":"Organization","name":"Pubrica","url":"https://pubrica.com/"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://pubrica.com/"},{"@type":"ListItem","position":2,"name":"特定商取引法に基づく表示","item":"https://pubrica.com/ja/tokushoho/"}]}];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
<main className={"view"}> <section className={"phero"}> <div className={"wrap phero__in"}> <div> <p className={"crumb"}><a href={"/"} data-nav={""}>{"Home"}</a><span>{"/"}</span><a href={"/ja/"} data-nav={""}>{"日本語"}</a><span>{"/"}</span>{"特定商取引法"}</p> <h1>{"特定商取引法に基づく表示"}</h1> <div className={"prose"}> <p>{"本ページは、日本のお客様に向けた取引条件の表示です。当社は英国・ウェールズおよびインドに登記された事業者であり、日本国外から役務を提供しております。日本国内に事業所を有しないため特定商取引法の適用対象外となる場合がありますが、お取引の判断に必要な事項は同法の表示項目に準じて記載しています。"}</p> </div> <div className={"hero__actions"}> <a className={"btn btn--primary"} href={"/contact-us/"}>{"お問い合わせ"}</a> <a className={"btn btn--ghost"} href={"/ja/"} data-nav={""}>{"日本語トップへ"}</a> </div> </div> </div> </section> <section className={"section"} data-rv-group={""}> <div className={"wrap"}> <div className={"shead rv"}> <p className={"shead__tag"}>{"取引条件"}</p> <div className={"shead__body"}> <h2>{"事業者および取引に関する表示。"}</h2> <p className={"lede"}>{"記載のない事項、または個別のお取引に関する条件については、お問い合わせいただければ遅滞なくお答えします。"}</p> </div> </div> <div className={"vst rv"}> <figcaption className={"vst__bar"}><span><b>{"特定商取引法に基づく表示"}</b></span><span>{"最終更新 2026年9月21日"}</span></figcaption> <div className={"vst__g"}> <div className={"vst__i"}><p className={"vst__n"}>{"販売業者"}</p><p className={"vst__v"}>{"Guires"}<sup className={"reg"}>{"®"}</sup>{" Limited"}</p><p className={"vst__d"}>{"Pubricaは Guires"}<sup className={"reg"}>{"®"}</sup>{" の事業名称です。英国・ウェールズおよびインドに登記しています（インド法人番号 CIN: U74900TN2011PTC083063）。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"運営統括責任者"}</p><p className={"vst__v"}>{"［記載予定］"}</p><p className={"vst__d"}>{"公開前に氏名を記載します。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"所在地"}</p><p className={"vst__v"}>{"［記載予定］"}</p><p className={"vst__d"}>{"登記上の所在地を公開前に記載します。請求によりご案内も可能です。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"電話番号"}</p><p className={"vst__v"}>{"+91 98843 50006 / +1 972 502 9262"}</p><p className={"vst__d"}>{"受付時間は日本時間の平日を中心とし、時差により返信が翌営業日になる場合があります。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"メールアドレス"}</p><p className={"vst__v"}>{"sales@pubrica.com"}</p><p className={"vst__d"}>{"お問い合わせは原則として2営業日以内にご返信します。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"販売価格"}</p><p className={"vst__v"}>{"各サービスページに表示"}</p><p className={"vst__d"}>{"表示価格は条件を明示した下限価格です。個別のお見積りはご依頼前に書面でご提示します。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"商品代金以外の必要料金"}</p><p className={"vst__v"}>{"銀行手数料・為替手数料"}</p><p className={"vst__d"}>{"請求は米ドル建てです。送金手数料および為替差額はお客様のご負担となります。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"支払方法"}</p><p className={"vst__v"}>{"銀行振込・クレジットカード"}</p><p className={"vst__d"}>{"詳細はお見積り時にご案内します。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"支払時期"}</p><p className={"vst__v"}>{"着手前および納品時"}</p><p className={"vst__d"}>{"金額により分割となる場合があります。条件はお見積りに明記します。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"役務の提供時期"}</p><p className={"vst__v"}>{"各サービスページに表示"}</p><p className={"vst__d"}>{"納期は営業日で表示しています。ご発注時に具体的な日付をお約束します。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"キャンセル"}</p><p className={"vst__v"}>{"着手前は全額返金"}</p><p className={"vst__d"}>{"着手後は、その時点までの作業に対する費用を差し引いた額をご返金します。"}</p></div> <div className={"vst__i"}><p className={"vst__n"}>{"返品・返金"}</p><p className={"vst__v"}>{"役務の性質上、返品は不可"}</p><p className={"vst__d"}>{"成果物が合意した内容を満たさない場合は、追加費用なく修正いたします。採択・受理を保証するものではありません。"}</p></div> </div> <p className={"vst__foot"}><b>{"括弧内が空欄の項目は、公開前に記載いたします。"}</b>{"未記載のまま掲載することは、この表示の趣旨に反するためいたしません。記載事項についてご不明な点がある場合は、ご発注前にお問い合わせください。"}</p> </div> </div> </section> </main>
    </>
  );
}
