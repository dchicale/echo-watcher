import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "echo-watcher",
  description:
    "coming soon...",
}

export default async function RootLayout({ children }: React.PropsWithChildren) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
