import localFont from "next/font/local";
import "@/commons/styles/globals.css";
import { ModalProvider } from "@/components/ui/modal";
import FooterWrapper from "@/components/ui/Footer/FooterWrapper";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={pretendard.className}>
        <ModalProvider>{children}</ModalProvider>
        <FooterWrapper />
      </body>
    </html>
  );
}
