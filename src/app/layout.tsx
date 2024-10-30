import "./globals.css";
import { Header } from "../widgets/header";

export const metadata = {
  title: "Cosmosmap",
  description: "The Cosmosmap",
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
      </head>
      <body>
        <Header />
        <div className="w-full h-full mt-[72px]">{children}</div>
      </body>
    </html>
  );
}
