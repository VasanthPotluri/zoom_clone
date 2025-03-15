import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner"; // ✅ Correct import
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkUp",
  description: "A Smart way for linking",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[var(--dark-2)] ${inter.className}`}>
        <ClerkProvider
          appearance={{
            layout: {
              unsafe_disableDevelopmentModeWarnings: true,
              socialButtonsVariant: "iconButton",
            },
            variables: {
              colorText: "#fff",
              colorTextSecondary: "#ccc",
              colorPrimary: "#0E78F9",
              colorBackground: "#1c1f2e",
              colorInputBackground: "#252a41",
              colorInputText: "#fff",
              colorInputBorder: "#404865",
              colorInputPlaceholder: "#bbb",
              colorTextOnPrimaryBackground: "#fff",
              colorTextOnSecondaryBackground: "#fff",
            },
          }}
        >
          {/* ✅ Moved ClerkProvider Inside Body */}
          <div className="flex justify-end p-4"></div>
          {children}
        </ClerkProvider>

        {/* ✅ Correct Toaster Placement */}
        <Toaster/>
      </body>
    </html>
  );
}



