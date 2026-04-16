import "./globals.css";
import Navebar from "@/Navbar/Nav";
import ContextProvider from "../Contex/Contex";
import Footer from "@/Footer/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "KeenKeeper | Home Page",
  description:
    "Explore your friend’s profile in KeenKeeper. See contact history, relationship status, personal goals, and stay connected effortlessly.",
  keywords: [
    "KeenKeeper",
    "friend tracker app",
    "relationship management system",
    "contact management app",
    "friend details tracker",
    "social connection manager",
    "personal relationship organizer",
    "friend activity tracker",
    "daily contact reminder app",
    "goal tracking with friends",
    "social CRM app",
    "friend profile dashboard",
    "communication history tracker",
    "network relationship manager",
    "friendship management tool"
  ],
  authors: [{ name: "KeenKeeper Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={" h-full antialiased"}
    >
      <body className="min-h-full flex flex-col">
        <ContextProvider>
          <Navebar />
          {children}
          <Footer/>
          <ToastContainer />
        </ContextProvider>
      </body>
    </html>
  );
}
