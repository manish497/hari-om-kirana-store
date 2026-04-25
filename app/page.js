export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Hari Om Kirana Store</h1>
            <p className="text-sm mt-1">Wholesale & Retail General Store</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <a href="tel:+917054062092" className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold">Call Now</a>
            https://wa.me/917054062092
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">आपका भरोसेमंद किराना पार्टनर</h2>
          <p className="mb-6">
            Hari Om Kirana Store Gorakhpur में स्थित एक विश्वसनीय थोक एवं खुदरा किराना स्टोर है।
            हम गुणवत्तापूर्ण सामान, उचित दाम और समय पर सप्लाई का वादा करते हैं।
          </p>
          <div className="flex gap-4">
            <a href="#products" className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold">Products</a>
            <a href="#contact" className="border border-green-600 text-green-700 px-6 py-3 rounded-xl font-semibold">Contact</a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li>✅ भरोसेमंद थोक सप्लायर</li>
            <li>✅ उचित और प्रतिस्पर्धी दाम</li>
            <li>✅ बड़े और छोटे ऑर्डर स्वीकार</li>
            <li>✅ UPI / Cash भुगतान सुविधा</li>
          </ul>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">हमारे उत्पाद</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Rice & Wheat", "Pulses", "Edible Oil & Ghee", "Spices", "Sugar & Salt", "Packaged Foods"].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-lg mb-2">{item}</h4>
                <p className="text-sm text-gray-600">Wholesale & Retail availability</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-green-50 p-8 rounded-2xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">UPI भुगतान स्वीकार है</h2>
            <p className="mb-2">PhonePe • Google Pay • Paytm</p>
            <p className="font-semibold">UPI ID: 7054062092@okbizaxis</p>
          </div>
          <div className="text-sm text-gray-600">QR Code यहां जोड़ा जा सकता है</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">संपर्क करें</h2>
            <p className="mb-2">📞 Mobile / WhatsApp: 7054062092</p>
            <p className="mb-2">🕘 समय: सुबह 9:00 – रात 8:00</p>
            <p>
              📍 Naveen Mandi Sthal Mahewa,<br />
              Transport Nagar, Gorakhpur – 273016
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm">Google Maps integration can be added here</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} Hari Om Kirana Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
