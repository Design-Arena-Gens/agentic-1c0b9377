export const metadata = {
  title: 'BagHaven Dubai - Premium Luxury Bags',
  description: 'Premium luxury handbags and accessories in Dubai. Discover our collection of designer bags.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
