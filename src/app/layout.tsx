import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const font = DM_Sans({
  
  subsets: ["latin"],
});

// const geistMono = Roboto_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Buildomatic",
  description: "Automatic your work with Buildomatic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={font.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Ensure server-rendered default matches client
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

