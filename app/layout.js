import './globals.css'

export const metadata = {
  title: 'Graphite1212 - Gaming Platform',
  description: 'Your ultimate gaming platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-bg text-white font-gaming antialiased">
        {children}
      </body>
    </html>
  )
}
