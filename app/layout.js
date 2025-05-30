import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "TestRun AI | Boost your rankings with AI",
  description:"Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  subpixel-antialiased`}>
        {children}
      </body>
    </html>
  );
}
