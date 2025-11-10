import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-amber-400" />
              <span className="font-semibold">CallMetrik</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">AI for voice: analyze every conversation, automate every outreach.</p>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Products</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/analysis" className="hover:text-gray-900">AI Analysis</Link></li>
              <li><Link to="/calling" className="hover:text-gray-900">AI Calling</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/pricing" className="hover:text-gray-900">Pricing</Link></li>
              <li><Link to="/developers" className="hover:text-gray-900">Developers</Link></li>
              <li><a href="#" className="hover:text-gray-900">Legal</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Newsletter</div>
            <form className="mt-3 flex gap-2" onSubmit={(e)=> e.preventDefault()}>
              <input type="email" required placeholder="your@company.com" className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="px-4 py-2 rounded-md bg-gray-900 text-white">Subscribe</button>
            </form>
            <div className="mt-4 text-xs text-gray-500">© 2025 CallMetrik. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
