import type { Metadata } from 'next';
import './globals.css';
import { type_second } from '@/functions/font';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede Social para cachorros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
