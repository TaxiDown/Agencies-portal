import { NextIntlClientProvider } from "next-intl";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
