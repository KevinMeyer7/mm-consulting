"use client";

export function Footer() {
  return (
    <footer className="border-t border-brand-border/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-brand-text mb-4">
              Meyer & Mathur Consulting
            </h3>
            <p className="text-brand-textDim leading-relaxed">
              Transforming mid-market companies through enterprise-grade AI
              training and implementation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-brand-text mb-4">Resources</h4>
            <div className="space-y-2">
              <a
                href="/privacy"
                className="block text-brand-textDim hover:text-brand-text transition-colors"
              >
                Privacy Policy
              </a>
              <button
                className="block text-brand-textDim hover:text-brand-text transition-colors text-left"
                onClick={() => {
                  /* Cookie settings modal */
                }}
              >
                Cookie Settings
              </button>
              <a
                href="/dpa.pdf"
                target="_blank"
                className="block text-brand-textDim hover:text-brand-text transition-colors"
              >
                Download DPA (PDF)
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-brand-text mb-4">Contact</h4>
            <div className="space-y-2 text-brand-textDim">
              <p>arhant@mm-consulting.ai</p>
              <p>+44 7726 909100</p>
              <p>London, UK</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-border/10 text-center text-brand-textDim">
          <p>&copy; 2025 Meyer & Mathur Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
