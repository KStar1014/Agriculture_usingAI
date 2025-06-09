import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgriAI - Revolutionize Farming with AI Technology',
  description: 'Transform your agricultural practices with cutting-edge AI solutions. Increase yields, reduce costs, and build sustainable farming for the future.',
  keywords: 'AI agriculture, precision farming, smart farming, crop monitoring, agricultural technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}