import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#1e1e1e] text-white">
        {children}
      </body>
    </html>
  );
}
