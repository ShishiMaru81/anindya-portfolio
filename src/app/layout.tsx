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
  title: "Anindya Paul — Machine Learning & AI Enthusiast",
  description:
    "Portfolio of Anindya Paul — Computer Science student specializing in Machine Learning, AI, and data-driven solutions. Explore projects, experience, and research.",
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
    title: "Anindya Paul — Machine Learning & AI Enthusiast",
    description:
      "Computer Science student specializing in Machine Learning, AI, and data-driven solutions.",
    siteName: "Anindya Paul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anindya Paul — Machine Learning & AI Enthusiast",
    description:
      "Computer Science student specializing in Machine Learning, AI, and data-driven solutions.",
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
