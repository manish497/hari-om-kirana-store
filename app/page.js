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
            <a href="tel:+917054062092" className="underline">
              Call Now
            </a>
          </p>
        </div>
      </header>

      {/* ================= HERO TEXT ================= */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          आपका भरोसेमंद किराना पार्टनर
        </h2>
        <p className="max-w-3xl text-gray-700">
          Gorakhpur में स्थित Hari Om Kirana Store एक विश्वसनीय थोक एवं खुदरा
          किराना स्टोर है, जहाँ उचित दाम, भरोसेमंद सप्लाई और डिजिटल भुगतान की
          सुविधा उपलब्ध है।
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="max-w-6xl mx-auto px-4 py-8">
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
      <section className="bg-green-50 py-8">
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

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <Image
              src="/upi-qr.jpg"
              alt="UPI QR"
              width={180}
              height={180}
              className="mx-auto"
            />
            <p className="text-sm mt-2">Scan & Pay</p>
          </div>
        </div>
      </section>

