export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      {/* Navigation Header */}
      <header className="border-b border-neutral-800">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-semibold text-lg text-neutral-100">
              DevPlatform
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              Docs
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-neutral-400 hover:text-neutral-100 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-100">
            Your AI-Powered
            <br />
            <span className="text-blue-500">Development Platform</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Orchestrate intelligent agents, access top-tier coding models, and
            ship faster — all from one unified platform built for modern
            engineering teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Get Started Free
            </button>
            <button className="px-8 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 font-medium rounded-lg transition-colors">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-10 text-neutral-100">
          Key Benefits
        </h2>
        <ul className="space-y-8">
          <li className="border-l-2 border-blue-500 pl-6">
            <h3 className="text-xl font-medium text-neutral-100 mb-2">
              Unified Model Access
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Switch seamlessly between top-tier coding models from leading AI
              labs — both free and paid — so you can match the right level of
              intelligence and cost to every task without juggling multiple
              platforms.
            </p>
          </li>
          <li className="border-l-2 border-blue-500 pl-6">
            <h3 className="text-xl font-medium text-neutral-100 mb-2">
              IDE-Free Autonomous Agents
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Kick off specialized agents — Planner, Explainer, Coder, PR
              Reviewer, PR Fixer — directly from the platform, eliminating
              context-switching and letting you orchestrate entire development
              workflows from a single interface.
            </p>
          </li>
          <li className="border-l-2 border-blue-500 pl-6">
            <h3 className="text-xl font-medium text-neutral-100 mb-2">
              Collaborative Task Sharing
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Share tasks and agent outputs with teammates or external
              collaborators instantly, enabling asynchronous code reviews,
              pair-debugging, and knowledge transfer without extra tooling
              overhead.
            </p>
          </li>
          <li className="border-l-2 border-blue-500 pl-6">
            <h3 className="text-xl font-medium text-neutral-100 mb-2">
              Granular Usage & Cost Tracking
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Monitor token consumption and costs per task, per agent, and per
              model in real time, giving you full visibility to optimize spend
              and make data-driven decisions about which models to deploy where.
            </p>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-semibold text-lg text-neutral-100">
                DevPlatform
              </span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a
                href="#features"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                Docs
              </a>
              <a
                href="#privacy"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
            © 2026 DevPlatform. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
