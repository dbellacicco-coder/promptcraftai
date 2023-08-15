import "@styles/globals.css";
import { ReactNode } from "react";

interface Metadata {
  title: string;
  description: string;
}

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "PromptCraft AI",
  description: "Discover and Share AI Prompts",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
