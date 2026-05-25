import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata = {
  title: 'COSANOSTRA',
  description: 'Global CosaNostra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}