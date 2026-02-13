export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
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
