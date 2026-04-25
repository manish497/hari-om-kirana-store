export const metadata = {
  title: "Hari Om Kirana Store",
  description: "Wholesale & Retail Kirana Store in Gorakhpur"
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
