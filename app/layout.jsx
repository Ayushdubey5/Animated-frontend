import { Inter } from "next/font/google"
import "./globals.css"
import { SiteProvider } from "@/context/site-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Leadpages: Landing Page Builder & Lead Generation Software",
  description:
    "Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing efforts—all with one simple solution.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  )
}
