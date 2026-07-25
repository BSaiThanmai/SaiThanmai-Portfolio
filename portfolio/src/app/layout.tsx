import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Badri Saithanmai | AI/ML Engineer & Data Analyst Portfolio',
  description: 'Personal portfolio of Badri Saithanmai - Computer Science (AIML) engineer specializing in predictive modeling, speech AI integration, data analytics, and SQL.',
  keywords: ['Badri Saithanmai', 'AI ML Engineer', 'Data Analyst', 'Python', 'Flask', 'Gemini API', 'Twilio', 'Machine Learning', 'Hyderabad', 'Portfolio'],
  authors: [{ name: 'Badri Saithanmai' }],
  openGraph: {
    title: 'Badri Saithanmai | AI/ML Engineer & Data Analyst',
    description: 'Explore machine learning models, voice AI sales agents, and data analytics dashboards built by Badri Saithanmai.',
    type: 'website',
    url: 'https://bsaithanmai.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
