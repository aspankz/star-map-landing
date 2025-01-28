import Script from 'next/script'

export const YandexMetrika = () => {
  return (
    <>
      {/* Основной скрипт Яндекс.Метрики */}
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < e.scripts.length; j++) {if (e.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(99698106, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `,
        }}
      />

      {/* Noscript для пользователей с отключенным JS */}
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/99698106"
            style={{ position: 'absolute', left: '-9999px' }}
            alt="Yandex Metrika"
          />
        </div>
      </noscript>
    </>
  )
}
