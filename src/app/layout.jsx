import "./globals.css";
import { Inter } from "next/font/google";
import AppProvider from './../contexts/index';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teste técnico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
