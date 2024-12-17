import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blacklist.tftrove.com"),
  title: "TFT Blacklist Viewer",
  description: "View the TFT Blacklist",
  openGraph: {
    title: "TFT Blacklist Viewer",
    description: "View the TFT Blacklist",
    url: "https://blacklist.tftrove.com",
    siteName: "TFT Blacklist Viewer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
