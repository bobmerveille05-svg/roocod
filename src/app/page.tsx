export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
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
    </main>
  );
}
