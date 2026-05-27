import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TEMPLO-FE | Coworking Espiritual',
  description: 'Espaço sagrado de coworking para líderes espirituais e terapeutas holísticos',
  keywords: ['coworking', 'espiritual', 'terapia', 'holístico', 'liderança'],
  openGraph: {
    title: 'TEMPLO-FE | Coworking Espiritual',
    description: 'Espaço sagrado de coworking para líderes espirituais e terapeutas holísticos',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-templo-light font-sans antialiased">
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
