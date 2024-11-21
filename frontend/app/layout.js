"use client"
import { Provider } from "react-redux";
import Navigation from "./components/navigation/navigation";
import Sidebar from "./components/navigation/Sidebar";
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
      <script src="https://kit.fontawesome.com/1dc91094e4.js" crossorigin="anonymous"></script>
      <body>
        <Provider store={store}>
          <AuthProvider>
            <div className="flex">
              <Sidebar/>
              {children}
            </div>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}