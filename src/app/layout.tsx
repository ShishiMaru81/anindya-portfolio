import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anindya Paul — Applied ML, AI Integration & Backend Development",
  description:
    "Anindya Paul, Computer Science student at BRAC University. Explore applied ML projects, AI integration, backend development, and agricultural AI research.",
  keywords: [
    "Anindya Paul",
    "Machine Learning",
    "AI",
    "Computer Science",
    "Portfolio",
    "Data Science",
    "Python",
    "BRAC University",
  ],
  authors: [{ name: "Anindya Paul" }],
  creator: "Anindya Paul",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anindya Paul — Applied ML, AI Integration & Backend Development",
    description:
      "Computer Science student building applied ML, computer vision, and backend projects.",
    siteName: "Anindya Paul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anindya Paul — Applied ML, AI Integration & Backend Development",
    description:
      "Computer Science student building applied ML, computer vision, and backend projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
