import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DualCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Choose Your Power</h2>
        <p className="text-gray-600 text-center mt-3">Two platforms. One stack. Pick what you need today, add the rest tomorrow.</p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 p-8 bg-gradient-to-br from-indigo-50 to-purple-50"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
            <h3 className="text-2xl font-semibold text-gray-900">CallMetrik ANALYZE</h3>
            <p className="mt-2 text-gray-700 max-w-md">Unlock actionable insights from 100% of your calls. For QA teams and CRMs needing intelligence.</p>
            <Link to="/analysis" className="mt-6 inline-flex items-center text-indigo-700 font-medium">Explore Analysis →</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 p-8 bg-gradient-to-br from-amber-50 to-pink-50"
          >
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
            <h3 className="text-2xl font-semibold text-gray-900">CallMetrik AUTOMATE</h3>
            <p className="mt-2 text-gray-700 max-w-md">Deploy hyper-realistic AI agents that call for you. For sales teams and telephony providers.</p>
            <Link to="/calling" className="mt-6 inline-flex items-center text-amber-700 font-medium">Explore Calling →</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
