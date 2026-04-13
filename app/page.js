export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50 text-gray-800">
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Hari Om Kirana Store</h1>
        <p className="text-sm mt-1">
          थोक एवं खुदरा जनरल स्टोर | Wholesale & Retail General Store
        </p>
      </header>

      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-3">
          आपका भरोसेमंद किराना पार्टनर
        </h2>
        <p className="max-w-3xl">
          Hari Om Kirana Store एक विश्वसनीय थोक जनरल स्टोर है, जो स्थानीय दुकानदारों को
          उचित दामों पर गुणवत्तापूर्ण सामान उपलब्ध कराता है।
        </p>
      </section>

      <section className="p-8 bg-yellow-50">
        <h2 className="text-xl font-semibold mb-4">हम क्या बेचते हैं</h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside">
          <li>चावल, गेहूं और दालें</li>
          <li>खाद्य तेल और घी</li>
          <li>चीनी, नमक और मसाले</li>
          <li>पैक्ड फूड आइटम्स</li>
          <li>दैनिक उपयोग की किराना सामग्री</li>
          <li>दुकानों के लिए थोक सप्लाई</li>
        </ul>
      </section>

      <section className="p-8 bg-white">
        <h2 className="text-xl font-semibold mb-3">दुकान का पता</h2>
        <p>
          Naveen Mandi Sthal Mahewa,<br />
          Transport Nagar,<br />
          Gorakhpur, Uttar Pradesh – 273016
        </p>
      </section>

      <section className="p-8 bg-green-100">
        <h2 className="text-xl font-semibold mb-3">संपर्क करें</h2>
        <p>
          📞 Mobile / WhatsApp:
          <a href="tel:+917054062092" className="ml-2 underline font-semibold">
            7054062092
          </a>
        </p>
        <a
          href="https://wa.me/917054062092"
          target="_blank"
          className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          WhatsApp पर संदेश भेजें
        </a>
      </section>

      <section className="p-8 bg-white">
        <h2 className="text-xl font-semibold mb-3">UPI भुगतान स्वीकार है</h2>
        <p>UPI ID: <strong>7054062092@okbizaxis</strong></p>
      </section>

      <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white text-center p-4 mt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Hari Om Kirana Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
