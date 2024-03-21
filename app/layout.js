import { Inter } from "next/font/google";
import "./globals.css";

// Import Components

import Header from "../src/Header/Header.jsx";
import Footer from "../src/Footer/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="container">
          <Header />

          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
