import Image from "next/image";

export const metadata = {
  title: "Hari Om Kirana Store | Wholesale & Retail Kirana in Gorakhpur",
  description:
    "Hari Om Kirana Store – trusted wholesale and retail general store in Gorakhpur. Rice, pulses, oil, spices, grocery items. UPI payment accepted.",
};

export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="bg-green-700 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* LOGO */}
            <Image src="/logo.png" alt="Hari Om Kirana Store Logo" width={50} height={50} />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Hari Om Kirana Store</h1>
              <p className="text-xs md:text-sm">Wholesale & Retail General Store</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-sm">
            <a href="tel:+917054062092" className="underline font-semibold">
              Call Now
            </a>
            <span>|</span>
            <span>Gorakhpur, UP</span>
          </div>
        </div>
      </header>

      {/* ================= HERO / BANNER ================= */}
      <section className="relative">
        <Image
          src="/banner.jpg"
          alt="Hari Om Kirana Store Banner"
          width={1600}
          height={600}
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h2 className="text-4xl font-bold mb-3">
              आपका भरोसेमंद किराना पार्टनर
            </h2>
            <p className="text-lg max-w-2xl">
              Gorakhpur में स्थित एक विश्वसनीय थोक एवं खुदरा किराना स्टोर।
              उचित दाम • भरोसेमंद सप्लाई • डिजिटल भुगतान सुविधा
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">हमारे प्रमुख उत्पाद</h2>
            <span className="text-sm text-gray-600 mt-2 md:mt-0">
              थोक एवं खुदरा दोनों उपलब्ध
            </span>
          </div>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside text-lg bg-white p-6 rounded-xl shadow">
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
        <div className="grid md:grid-cols-2 gap-8 bg-green-50 p-8 rounded-2xl items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">UPI भुगतान स्वीकार है</h2>
            <p className="mb-2">PhonePe • Google Pay • Paytm</p>
            <p className="font-semibold text-lg">7054062092@okbizaxis</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center shadow">
            <Image src="/upi-qr.jpg" alt="UPI QR" width={200} height={200} className="mx-auto" />
            <p className="text-sm mt-2">Scan & Pay</p>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">दुकान का पता</h2>
            <p className="mb-2">📍 Naveen Mandi Sthal Mahewa, Transport Nagar</p>
            <p className="mb-2">Gorakhpur, Uttar Pradesh – 273016</p>
            <p className="mb-2">📞 7054062092</p>
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

      {/* ================= FLOATING WHATSAPP ================= */}
      https://wa.me/917054062092
    </div>
  );
}
