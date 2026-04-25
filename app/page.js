export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Hari Om Kirana Store</h1>
            <p className="text-sm">Wholesale & Retail General Store</p>
          </div>
          <div className="mt-3 md:mt-0 flex gap-3">
            <a
              href="tel:+917054062092"
              className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold shadow"
            >Call Now</a>
            https://wa.me/917054062092
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">आपका भरोसेमंद किराना पार्टनर</h2>
          <p className="mb-6 text-lg">
            Hari Om Kirana Store Gorakhpur में स्थित एक विश्वसनीय थोक एवं खुदरा जनरल स्टोर है।
            हम रोजमर्रा के किराना सामान की थोक व फुटकर सप्लाई उचित दामों पर करते हैं।
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <img src="/shop.jpg" alt="Hari Om Kirana Store" className="w-full h-64 object-cover" />
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">हमारे प्रमुख उत्पाद</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Rice & Wheat", "Pulses", "Edible Oil & Ghee", "Spices", "Sugar & Salt", "Packaged Foods"].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
                <h4 className="font-semibold text-xl mb-2">{item}</h4>
                <p className="text-sm text-gray-600">थोक एवं खुदरा दोनों उपलब्ध</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-green-50 p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-bold mb-3">UPI भुगतान स्वीकार है</h2>
            <p className="mb-2">PhonePe • Google Pay • Paytm</p>
            <p className="font-semibold text-lg">UPI ID: 7054062092@okbizaxis</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <img src="/upi-qr.jpg" alt="UPI QR Code" className="mx-auto h-48" />
            <p className="text-sm mt-2">Scan & Pay</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">दुकान का पता</h2>
            <p className="mb-2">📍 Naveen Mandi Sthal Mahewa, Transport Nagar</p>
            <p className="mb-2">Gorakhpur, Uttar Pradesh – 273016</p>
            <p className="mb-2">📞 7054062092</p>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} Hari Om Kirana Store. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917054062092"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl font-semibold"
      >WhatsApp</a>
    </div>
  );
}
