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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
