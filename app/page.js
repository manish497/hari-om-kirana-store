import Image from "next/image";

export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-[#f4f6fa] text-gray-800 pb-16">

      {/* ================= HEADER ================= */}
      <header className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl md:text-2xl font-bold">Hari Om Kirana Store</h1>
          <p className="text-sm mt-1">
            Wholesale & Retail General Store | Gorakhpur, UP |{' '}
            <a href="tel:+917054062092" className="underline">Call Now</a>
          </p>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-xl mt-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">
          आपका भरोसेमंद किराना पार्टनर
        </h2>
        <p className="max-w-3xl text-gray-700 mx-auto md:mx-0 text-center md:text-left">
          Gorakhpur में स्थित Hari Om Kirana Store एक विश्वसनीय थोक एवं खुदरा किराना स्टोर है,
          जहाँ उचित दाम, भरोसेमंद सप्लाई और डिजिटल भुगतान की सुविधा उपलब्ध है।
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-xl mt-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">हमारे प्रमुख उत्पाद</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside bg-gray-50 p-6 rounded-xl">
          <li>Rice & Wheat</li>
          <li>Pulses</li>
          <li>Edible Oil & Ghee</li>
          <li>Spices</li>
          <li>Sugar & Salt</li>
          <li>Packaged Foods</li>
        </ul>
      </section>

      {/* ================= PAYMENT ================= */}
      <section className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-xl mt-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">UPI भुगतान स्वीकार है</h2>
            <p className="mt-2">PhonePe • Google Pay • Paytm</p>
            <p className="font-semibold mt-1">7054062092@okbizaxis</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Image src="/upi-qr.jpg" alt="UPI QR" width={180} height={180} className="mx-auto" />
            <p className="text-sm mt-2">Scan & Pay</p>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-xl mt-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">दुकान का पता</h2>

        <p className="mb-1 text-center md:text-left">📍 Naveen Mandi Sthal Mahewa, Transport Nagar</p>
        <p className="mb-3 text-center md:text-left">Gorakhpur, Uttar Pradesh – 273016</p>

        {/* WhatsApp | Phone centered on mobile */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-lg mb-6">
          https://wa.me/917054062092
          <span>|</span>
          <a href="tel:+917054062092" className="font-semibold">📞 7054062092</a>
        </div>

        {/* Divider before map */}
        <hr className="my-6 border-gray-200" />

        <iframe
          title="Hari Om Kirana Store Map"
          src="https://www.google.com/maps?q=Naveen%20Mandi%20Sthal%20Mahewa%20Gorakhpur&output=embed"
          className="w-full h-64 rounded-xl border-0"
          loading="lazy"
        />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-8">
        © {new Date().getFullYear()} Hari Om Kirana Store. All rights reserved.
      </footer>

      {/* ================= STICKY CALL / WHATSAPP BAR (MOBILE) ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md md:hidden flex z-50">
        <a
          href="tel:+917054062092"
          className="w-1/2 text-center py-3 font-semibold text-green-700"
        >
          📞 Call
        </a>
        <a
          href="https://wa.me/917054062092"
          target="_blank"
          className="w-1/2 text-center py-3 font-semibold bg-green-600 text-white"
        >
          💬 WhatsApp
        </a>
      </div>

    </div>
  );
}
