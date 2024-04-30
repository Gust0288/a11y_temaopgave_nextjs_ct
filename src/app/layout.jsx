import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
// import { Poppins } from "next/font/google";
// import { Libre_Baskerville } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   subsets: ["latin"],
//   variable:'--font-poppins',
//   weight: [`200`, `400`],
//   style: ['Regular', 'SemiBold']
// });
// const libre = LibreBaskerville({subsets: ["latin"], variable:'--font-libre'})

export const metadata = {
  title: "Charlie Tango a11y checker",
  description:
    "Check your websites accesibility against some common usability guidelines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="min-h-svh">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
