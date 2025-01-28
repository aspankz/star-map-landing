import './globals.css'
import { Header } from '../widgets/header'
import { YandexMetrika } from '@/widgets/YandexMetrika'

export const metadata = {
  title: 'Cosmomap',
  openGraph: {
    title: 'Звездная карта | Подарок',
    description: `Ваша дата. Ваши звёзды. Ваша история.
✨ Звездная карта за 490₽
✨ Получите мгновенно на email`,
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
      <body>
        <Header />
        <div className="mt-20 h-full w-full">{children}</div>
        <YandexMetrika />
      </body>
    </html>
  )
}
