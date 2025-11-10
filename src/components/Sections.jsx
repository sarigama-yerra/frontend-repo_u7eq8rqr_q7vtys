import { useState } from 'react';
import { Link } from 'react-router-dom';

export function AnalysisSection() {
  const [fileName, setFileName] = useState('sample-call.wav');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const runDemo = () => {
    setProcessing(true);
    setResult(null);
    setTimeout(() => {
      setProcessing(false);
      setResult({
        transcript: 'Agent: Hi Sarah, calling from Acme.\nCustomer: Hey! I was expecting your call.\nAgent: Great, let\'s review your plan... (demo transcript)',
        sentiment: 'Positive',
        actions: [
          'Send follow-up email with updated pricing',
          'Schedule demo for Thursday 2 PM',
          'Create task: verify compliance disclaimer in intro',
        ],
      });
    }, 1400);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Turn Recordings into Revenue.</h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• 100% Coverage QA — automated scoring for every single call</li>
              <li>• Role-Based Dashboards — custom views for leaders and agents</li>
              <li>• Compliance AI — detect missing disclaimers or PII risk</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-black/10 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Try it Live</h3>
            <p className="text-gray-600 text-sm">Upload a small audio file or use our sample.</p>
            <div className="mt-4 flex items-center gap-3">
              <label className="px-4 py-2 rounded-md border cursor-pointer hover:bg-gray-50">
                Choose File
                <input type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || 'sample-call.wav')} />
              </label>
              <span className="text-gray-500 text-sm">{fileName}</span>
              <button onClick={runDemo} className="ml-auto px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Analyze</button>
            </div>
            <div className="mt-6">
              {processing && <div className="animate-pulse text-gray-600">Analyzing audio…</div>}
              {result && (
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Transcription</div>
                    <pre className="mt-1 p-3 bg-gray-50 rounded border text-xs overflow-auto">{result.transcript}</pre>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-3 rounded border bg-emerald-50 text-emerald-700 text-sm">Sentiment: {result.sentiment}</div>
                    <div className="sm:col-span-2 p-3 rounded border bg-indigo-50 text-indigo-700 text-sm">
                      <div className="font-medium mb-1">Key Action Items</div>
                      <ul className="list-disc pl-4 space-y-1">
                        {result.actions.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CallingSection() {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle');
  const [lines, setLines] = useState([]);

  const callNow = () => {
    setStatus('dialing');
    setLines(['Dialing +91…', 'Connecting…']);
    setTimeout(() => {
      setStatus('connected');
      setLines((l) => [...l, 'Connected', 'Agent: Hi! This is CallMetrik AI. How may I help you today?', 'You: Tell me about pricing.', 'Agent: We start at ₹0.80/min for analysis and ₹3/min for calling.']);
    }, 1200);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Your Best Sales Rep is Now an AI.</h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• No-Code Agent Builder — drag-and-drop conversation flows</li>
              <li>• Human-Like Voices — ultra-low latency, natural responses</li>
              <li>• Exotel Integration — enterprise-grade provisioning</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-black/10 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Speak to Our Agent</h3>
            <div className="mt-4 flex items-center gap-3">
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button onClick={callNow} className="px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700">Call Me Now</button>
            </div>
            <div className="mt-6">
              {status === 'idle' && <div className="text-gray-500 text-sm">Enter a number to simulate a demo call.</div>}
              {status !== 'idle' && (
                <div className="p-4 rounded border bg-gray-50 text-sm space-y-1 h-44 overflow-auto">
                  {lines.map((ln, i) => (
                    <div key={i}>{ln}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const discount = 0.85; // 15% off

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pricing</h2>
          <div className="flex items-center gap-2">
            <span className={`${!annual ? 'font-semibold' : 'text-gray-500'} text-sm`}>Monthly</span>
            <button onClick={() => setAnnual((v) => !v)} className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${annual ? 'translate-x-5' : 'translate-x-1'}`} />
            </button>
            <span className={`${annual ? 'font-semibold' : 'text-gray-500'} text-sm`}>Annual (15% off)</span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <PriceCard title="Value" price={`₹${(0.80 * (annual ? discount : 1)).toFixed(2)}/min`} features={[
            'Transcription', 'Sentiment Analysis', 'Diarization', 'Agent Scoring']}/>
          <PriceCard title="Basic" popular price={`₹${(1.10 * (annual ? discount : 1)).toFixed(2)}/min`} features={[
            'Everything in Value', 'Keyword Detection', 'Intent Analysis', 'Key Moments']}/>
          <PriceCard title="Premium Enterprise" price={`₹${(1.25 * (annual ? discount : 1)).toFixed(2)}/min`} features={[
            'Everything in Basic', 'Compliance Checks', 'Custom Q/A on calls', 'Advanced Feedback']}/>
        </div>
        <p className="text-sm text-gray-600 mt-3">Volume discounts available for 50k+, 100k+, and 250k+ minutes/month.</p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold">AI Calling Agents</h3>
            <p className="text-gray-600">Simple, Pay-As-You-Go Calling.</p>
            <div className="mt-4 text-3xl font-bold">Starts at ₹3 per minute</div>
            <ul className="mt-4 text-gray-700 space-y-1">
              <li>• Agent builder access</li>
              <li>• Standard voices</li>
              <li>• Exotel telephony capability</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border bg-gradient-to-br from-indigo-50 to-purple-50">
            <h3 className="text-xl font-semibold">Ready to get started?</h3>
            <p className="text-gray-700">Create an account and start analyzing or dialing in minutes.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Get Started Free</a>
              <Link to="/developers" className="px-4 py-2 rounded-md border">View Docs</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ title, price, features, popular }) {
  return (
    <div className={`p-6 rounded-2xl border ${popular ? 'border-indigo-300 shadow-md' : 'border-black/10'} bg-white`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title} Plan</h3>
        {popular && <span className="text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-700">Popular</span>}
      </div>
      <div className="mt-4 text-2xl font-bold">{price}</div>
      <ul className="mt-4 text-gray-700 space-y-2">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <button className="mt-6 w-full px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Choose</button>
    </div>
  );
}

export function DevelopersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for Builders.</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border bg-gray-50">
            <div className="font-mono text-sm text-gray-800">{`# Analyze a call\n\ncurl -X POST https://api.callmetrik.com/analyze \\\n  -H 'Authorization: Bearer <API_KEY>' \\\n  -F file=@call.wav\n\n# Dial with an AI agent\n\ncurl -X POST https://api.callmetrik.com/dial \\\n  -H 'Authorization: Bearer <API_KEY>' \\\n  -H 'Content-Type: application/json' \\\n  -d '{"to":"+919999999999","agent":"sales-demo"}'`}
            </div>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold">Get your API Key</h3>
            <p className="text-gray-700">Start building with simple REST endpoints and webhooks.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Developer Sign Up</a>
              <a href="#" className="px-4 py-2 rounded-md border">Read Docs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
