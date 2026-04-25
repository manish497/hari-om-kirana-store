export const metadata = {
  title: "Hari Om Kirana Store | Wholesale & Retail Kirana in Gorakhpur",
  description:
    "Hari Om Kirana Store is a trusted wholesale and retail general store in Gorakhpur. Groceries, pulses, oil, spices with UPI payment facility.",
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
``
