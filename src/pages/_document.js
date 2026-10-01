import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { dmSans, plusJakartaSans } from "../../lib/fonts";
import { organizationSchema } from "../../lib/schemas";

export default function Document() {
  return (
    <Html lang="en" className={`${dmSans.className} ${plusJakartaSans.className}`}>
      <Head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPJG79PK');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="b2GjTEHBpkxxJMva0GCRa5FbfxDwp89U92LHEXuzTR0"
        />

        {/* Google Analytics in Head */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DJY5RC7TY7"
        />
        <Script
          id="google-analytics-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DJY5RC7TY7');
            `,
          }}
        />
        {/* Single global Organization node (referenced by @id #org everywhere else).
            Plain <script> so it is server-rendered into the HTML on every page. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPJG79PK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Main />
        <NextScript />

        {/* Zoho SalesIQ Chat Widget */}
        <Script
          id="zoho-salesiq-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}};`,
          }}
        />
        <Script
          id="zsiqscript"
          strategy="lazyOnload"
          src="https://salesiq.zohopublic.in/widget?wc=siq813e09ad0bdcc0285f03c9890c16db0fe4f22db7f0556dcb47b9e4504850fbe3"
        />
      </body>
    </Html>
  );
}
