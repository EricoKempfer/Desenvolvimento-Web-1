import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "MiniRede Social",
  description: "Projeto de aula sem backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-bs-theme="light">
      <body className="bg-body-tertiary">
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
