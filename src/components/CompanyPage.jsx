export default function CompanyPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight">About CallMetrik</h1>
        <p className="mt-4 text-gray-700">We build the voice intelligence stack that powers modern enterprises. Our mission is to turn every conversation into action and every team into a superteam.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-gray-50">
            <div className="text-sm text-gray-500">Founded</div>
            <div className="text-2xl font-semibold">2025</div>
          </div>
          <div className="p-6 rounded-xl border bg-gray-50">
            <div className="text-sm text-gray-500">Headcount</div>
            <div className="text-2xl font-semibold">10+</div>
          </div>
          <div className="p-6 rounded-xl border bg-gray-50">
            <div className="text-sm text-gray-500">HQ</div>
            <div className="text-2xl font-semibold">Remote-first</div>
          </div>
        </div>
      </div>
    </main>
  );
}
