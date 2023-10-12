export const metadata = {
  title: 'AI Playground',
  description: 'Nvidia AI playground prototype',
}

interface Props {
  children: React.ReactNode
}
export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
