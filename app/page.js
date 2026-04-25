export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="bg-green-700 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          
          <h1 className="text-2xl md:text-3xl font-bold">
            Hari Om Kirana Store
          </h1>

          <p className="text-sm mt-1">
            Wholesale & Retail General Store
          </p>

          {/* ✅ CLEAN HEADER LINE */}
          <div className="mt-2 flex items-center gap-3 text-sm">
            <a
              href="tel:+917054062092"
              className="underline font-medium"
            >
              Call Now
            </a>
            <span>|</span>
            <span className="font-medium">
              Wholesale & Retail General Store
            </span>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            आपका भरोसेमंद किराना पार्टनर
          </h2>
          <p className="text-lg">
            Hari Om Kirana Store Gorakhpur में स्थित एक विश्वसनीय
            थोक एवं खुदरा जनरल स्टोर है। हम रोजमर्रा के
            किराना सामान की सप्लाई उचित दामों पर करते हैं।
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl h-64 flex items-center justify-center">
          <span className="text-gray-400">Shop Image</span>
          {/* later replace with <img src="/shop.jpg" /> */}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">
              हमारे प्रमुख उत्पाद
            </h2>
            <span className="text-sm text-gray-600 mt-2 md:mt-0">
              थोक एवं खुदरा दोनों उपलब्ध
            </span>
          </div>

          {/* ✅ BULLET LIST – NO REPETITION */}
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside text-lg">
            <li>Rice & Wheat</li>
            <li>Pulses</li>
            <li>Edible Oil & Ghee</li>
            <li>Spices</li>
            <li>Sugar & Salt</li>
            <li>Packaged Foods</li>
          </ul>
        </div>
      </section>

      {/* ================= PAYMENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-green-50 p-8 rounded-2xl">
          
          <div>
            <h2 className="text-2xl font-bold mb-3">
              UPI भुगतान स्वीकार है
            </h2>
            <p className="mb-2">
              PhonePe • Google Pay • Paytm
            </p>
            <p className="font-semibold text-lg">
              UPI ID: 7054062092@okbizaxis
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center">
            <span className="text-gray-400">UPI QR</span>
            {/* later replace with <img src="/upi-qr.jpg" /> */}
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">
              दुकान का पता
            </h2>
            <p className="mb-2">
              📍 Naveen Mandi Sthal Mahewa, Transport Nagar
            </p>
            <p className="mb-2">
              Gorakhpur, Uttar Pradesh – 273016
            </p>
            <p className="mb-2">
              📞 7054062092
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Naveen%20Mandi%20Sthal%20Mahewa%20Gorakhpur&output=embed"
              className="w-full h-64 border-0"
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>
          © {new Date().getFullYear()} Hari Om Kirana Store. All rights reserved.
        </p>
      </footer>

      {/* ✅ ONLY WHATSAPP (FLOATING BUTTON) */}
      <a
        href="https://wa.me/917054062092"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl font-semibold"
      >
        WhatsApp
      </a>

    </div>
  );
}
