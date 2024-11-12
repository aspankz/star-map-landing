import "./globals.css";
import { Header } from "../widgets/header";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Cosmomap",
  openGraph: {
    title: "Ваше звёздное небо!🌌",
    description:
      "Закажите карту для памятной даты и сохраните мгновение навсегда",
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <title>Cosmomap</title>
        <meta property="og:title" content="Ваше звёздное небо!🌌" />
        <meta
          property="og:description"
          content="Закажите карту для памятной даты и сохраните мгновение навсегда"
        />
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
      </Head>

      <body>
        <Header />
        <div className="w-full h-full mt-[72px]">{children}</div>
        <Script
          id="mailru-counter"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var _tmr = window._tmr || (window._tmr = []);
            _tmr.push({ id: "3576936", type: "pageView", start: (new Date()).getTime() });
            (function (d, w, id) {
              if (d.getElementById(id)) return;
              var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
              ts.src = "https://top-fwz1.mail.ru/js/code.js";
              var f = function () {
                var s = d.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(ts, s);
              };
              if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
              } else {
                f();
              }
            })(document, window, "tmr-code");
          `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://top-fwz1.mail.ru/counter?id=3576936;js=na"
              style={{ position: "absolute", left: "-9999px" }}
              alt="Top.Mail.Ru - statistics and analytics for your site"
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
