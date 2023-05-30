"use client";
import Header from "@components/Header";
import "./globals.scss";
import { UserContext } from "@lib/context";
import { useUserData } from "@lib/hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContext.Provider value={useUserData()}>
      <html lang="en">
        <body>
          <Header />
          <div className="main">{children}</div>
        </body>
      </html>
    </UserContext.Provider>
  );
}
