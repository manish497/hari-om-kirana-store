import Image from "next/image";

export const metadata = {
  title: "Hari Om Kirana Store | Wholesale & Retail Kirana in Gorakhpur",
  description:
    "Hari Om Kirana Store is a trusted wholesale and retail general store in Gorakhpur. Groceries, pulses, oil, spices with UPI payment facility.",
};

export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="bg-green-700 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo + Full Name (HARI OM FIXED) */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Hari Om Kirana Store Logo" width={40} height={40} />
            <h1 className="text-lg md:text-xl font-bold whitespace-nowrap">
              Hari Om Kirana Store
            </h1>
          </div>

          {/* Inline Info – Desktop ONLY (shown once) */}
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium whitespace-nowrap">
            <span>Wholesale & Retail General Store</span>
            <span>|</span>
            <span>Gorakhpur, UP</span>
            <span>|</span>
            <a
              href="tel:+917054062092"
              className="underline"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Inline Info – Mobile ONLY (shown once) */}
        <div className="sm:hidden text-center text-xs bg-green-800 px-3 py-2">
          Wholesale & Retail General Store | Gorakhpur, UP |{" "}
          <a href="tel:+917054062092" className="underline">Call Now</a>
        </div>
      </header>

      {/* ================= HERO / BANNER ================= */}
      <section className="relative overflow-hidden">
        <Image
          src="/banner.jpg"
          alt="Hari Om Kirana Store Banner"
          width={1600}
          height={800}
          priority
          className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              आपका भरोसेमंद किराना पार्टनर
            </h2>
            <p className="text-xs sm:text-sm md:text-base max-w-xl">
              Gorakhpur में स्थित एक विश्वसनीय थोक एवं खुदरा किराना स्टोर
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-5">
            <h2 className="text-2xl md:text-3xl font-bold">हमारे प्रमुख उत्पाद</h2>
            <span className="text-sm text-gray-600 mt-2 md:mt-0">
              थोक एवं खुदरा दोनों उपलब्ध
            </span>
          </div>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside text-base md:text-lg bg-white p-6 rounded-xl shadow">
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
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 bg-green-50 p-6 sm:p-8 rounded-2xl items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">UPI भुगतान स्वीकार है</h2>
            <p className="mb-2">PhonePe • Google Pay • Paytm</p>
            <p className="font-semibold text-lg">7054062092@okbizaxis</p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center shadow">
            <Image src="/upi-qr.jpg" alt="UPI QR" width={180} height={180} className="mx-auto" />
            <p className="text-sm mt-2">Scan & Pay</p>
          </div>
        </div>
      </section>

      {/* ================= LOCATION + WHATSAPP ABOVE MAP ================= */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">दुकान का पता</h2>
            <p className="mb-2">📍 Naveen Mandi Sthal Mahewa, Transport Nagar</p>
            <p className="mb-2">Gorakhpur, Uttar Pradesh – 273016</p>
            <p className="mb-4">📞 7054062092</p>

            {/* WhatsApp Button ABOVE Map */}
            https://wa.me/917054062092
          </div>

          <iframe
            title="Hari Om Kirana Store Map"
            src="https://www.google.com/maps?q=Naveen%20Mandi%20Sthal%20Mahewa%20Gorakhpur&output=embed"
            className="w-full h-64 rounded-xl shadow border-0"
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} Hari Om Kirana Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
