"use client"
import Navigation from "./components/navigation/navigation";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Navigation />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
