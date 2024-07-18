import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ClientProviders from "@/providers/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tron",
  description: "The best blog app",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
        <body className={inter.className}>
              <ClientProviders session={session}>
                <div className="container w-full min-h-screen mx-auto">
                  <div className="wrapper max-w-[1536px] px-[80px]">
                    <Navbar />
                      {children}
                    <Footer />
                  </div>
                </div>
              </ClientProviders>
        </body>
      </html>
  );
}
