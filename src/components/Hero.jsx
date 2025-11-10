import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              The Complete Voice Intelligence Stack.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700">
              Analyze every conversation. Automate every outreach. Scalable AI for Enterprises, CRMs, and Telephony Providers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#analysis" className="px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Explore Analysis</a>
              <a href="#calling" className="px-5 py-3 rounded-md bg-white/80 backdrop-blur border border-black/10 text-gray-900 hover:bg-white">Explore Calling</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white" />
    </section>
  );
}
