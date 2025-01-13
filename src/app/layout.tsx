import './globals.css'
import { Header } from '../widgets/header'
import Head from 'next/head'
import Script from 'next/script'

export const metadata = {
  title: 'Cosmomap',
  openGraph: {
    title: 'Ваше звёздное небо!🌌',
    description: 'Закажите карту для памятной даты и сохраните мгновение навсегда',
  },
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <Head>
        <title>Cosmomap</title>
        <meta property="og:title" content="Звездная карта | Подарок" />
        <meta
          property="og:description"
          content="Ваша дата. Ваши звёзды. Ваша история.
                    ✨ Звездная карта за 490₽
                    ✨ Получите мгновенно на email"
        />
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
      </Head>

      <body>
        <Header />
        <div className="mt-16 h-full w-full">{children}</div>
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
              style={{ position: 'absolute', left: '-9999px' }}
              alt="Top.Mail.Ru - statistics and analytics for your site"
            />
          </div>
        </noscript>
        {/* Yandex.Metrika counter */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98955497, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98955497"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </body>
    </html>
  )
}
