import Script from 'next/script'

export const VarioqubExperiments = () => {
  return (
    <>
      <Script
        id="varioqub-experiments"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(e, x, pe, r, i, me, nt) {
              e[i] = e[i] || function() { (e[i].a = e[i].a || []).push(arguments) };
              me = x.createElement(pe), me.async = 1, me.src = r, 
              nt = x.getElementsByTagName(pe)[0], 
              me.addEventListener('error', function() {
                function cb(t) {
                  t = t[t.length - 1];
                  if ('function' == typeof t) t({ flags: {} });
                }
                if (Array.isArray(e[i].a)) e[i].a.forEach(cb);
                e[i] = function() { cb(arguments) };
              }), 
              nt.parentNode.insertBefore(me, nt);
            })(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
            ymab('metrika.99698106', 'init'/*, {clientFeatures}, {callback}*/);
          `,
        }}
      />
    </>
  )
}
