import React from "react";

export default function BusinessIdea() {
  return (
    <div className="whyBest px-5 lg:px-16 xl:px-28 text-gray-800 py-16 relative overflow-hidden">
      {/* Subtle gradient blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00c6ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0072b9] rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center relative z-10">        <div className="lg:col-span-2 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0072b9] to-[#00c6ff] px-4 py-2 rounded-full text-sm font-medium text-white shadow-md">
            Subscribe
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-100">
            Get Weekly Updates
          </h2>
          <p className="text-gray-200 text-lg">
            Join 50,000+ subscribers getting the latest insights delivered
            straight to their inbox.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {["A", "N", "S", "B"].map((char, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0072b9] to-[#00c6ff] border-2 border-white flex items-center justify-center text-sm font-bold text-white shadow"
                >
                  {char}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-300">+50K subscribers</span>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg backdrop-blur-sm">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 outline-none focus:border-[#0072b9] focus:ring-2 focus:ring-[#0072b9]/20 transition"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#0072b9] to-[#00c6ff] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-200 transition transform hover:scale-105"
              >
                Subscribe to Newsletter
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-gray-200 text-gray-600 text-sm">
              <div>✓ Weekly updates</div>
              <div>✓ No spam</div>
              <div>✓ Unsubscribe anytime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
