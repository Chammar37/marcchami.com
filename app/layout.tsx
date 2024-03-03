import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "marcchami.com",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>

    </>
  );
}

// import type { Metadata } from "next";
// import Head from "next/head";
// import { Inter } from "next/font/google";
// import React from "react";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });


// interface RootLayoutProps {
//   children: React.ReactNode;
// }

// const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
//   const title: string = "marcchami.com";
//   const description: string = "Software Engineer";

//   return (
//     <>
//       {/* <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <link rel="icon" href="/OpenPeep_Headshot.ico" />
//       </Head>
      
//       <div className={inter.className}>{children}</div> */}
//       {children}
//     </>
//   );
// };

// export default RootLayout;