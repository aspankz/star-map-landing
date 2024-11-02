import "./globals.css";
import { Header } from "../widgets/header";

export const metadata = {
  title: "Cosmomap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
        <meta property="og:title" content="Ваше звёздное небо!🌌" />
        <meta
          property="og:description"
          content="Закажите карту для памятной даты и сохраните мгновение навсегда"
        />
      </head>
      <body>
        <Header />
        <div className="w-full h-full mt-[72px]">{children}</div>
      </body>
    </html>
  );
}
