"use client"
import { Provider } from "react-redux";
import Navigation from "./components/navigation/navigation";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./redux/transaction";

const store = configureStore({
  reducer: {
    transaction: transactionReducer
  }
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AuthProvider>
            <Navigation />
            {children}
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}