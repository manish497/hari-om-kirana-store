import Image from "next/image";

export default function HariOmKiranaStore() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl md:text-2xl font-bold">
            Hari Om Kirana Store
          </h1>
          <p className="text-sm mt-1">
            Wholesale & Retail General Store | Gorakhpur, UP |{" "}
            <a
              href="tel:+917054062092"
              className="underline font-semibold"
            >
              Call Now
            </a>
          </p>
        </div>
      </header>

      {/* ================= BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[16/8]">
          <Image
            src="/banner.jpg"
            alt="Hari Om Kirana Store Banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-6xl mx-auto px-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                आपका भरोसेमंद किराना पार्टनर
              </h2>
              <p className="text-sm sm:text-base max-w-xl">
                Gorakhpur में स्थित एक विश्वसनीय थोक एवं खुदरा किराना स्टोर
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          हमारे प्रमुख उत्पाद
        </h2>
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
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              UPI भुगतान स्वीकार है
            </h2>
            <p className="mt-2">PhonePe • Google Pay • Paytm</p>
            <p className="font-semibold mt-1">
              7054062092@okbizaxis
            </p>
          </div>

          <Image
            src="/upi-qr.jpg"
            alt="UPI QR Code"
            width={180}
            height={180}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* ================= LOCATION + WHATSAPP ================= */}
      <section className="py-12 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">
            दुकान का पता
          </h2>
          <p>📍 Naveen Mandi Sthal Mahewa, Transport Nagar</p>
          <p>Gorakhpur, Uttar Pradesh – 273016</p>
          <p className="mt-2">📞 7054062092</p>

          <a
            href="https://wa.me/917054062092"
            target="_blank"
            className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            WhatsApp पर संपर्क करें
          </a>
        </div>

        <iframe
          title="Hari Om Kirana Store Map"
          src="https://www.google.com/maps?q=Naveen%20Mandi%20Sthal%20Mahewa%20Gorakhpur&output=embed"
          className="w-full h-64 rounded-xl border-0"
        />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        © {new Date().getFullYear()} Hari Om Kirana Store. All rights reserved.
      </footer>

    </div>
  );
}
