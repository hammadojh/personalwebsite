import React from 'react';

type Objective = {
  name: string;
  definition: string;
};

const proposalDate = 'February 16, 2026';

const objectives: Objective[] = [
  {
    name: 'Activation',
    definition: 'New users reaching their first meaningful value action.'
  },
  {
    name: 'Conversion',
    definition: 'Users moving from intent to completed key action.'
  },
  {
    name: 'Retention',
    definition: 'Users returning and sustaining usage after first value moment.'
  }
];

const summaryBullets = [
  'Working style: weekly learn-build-measure loop.',
  'Primary outcomes: Activation, Conversion, Retention.',
  'Typical involvement: part-time and flexible by phase.'
];

const riskItems = [
  'Teams ship tasks, but impact is unclear.',
  'Priorities drift because decision cycles are slow.',
  'Research and design are disconnected from metrics.'
];

const fixesItems = [
  'Single weekly loop tied to business outcomes.',
  'Clear design decisions with measurable intent.',
  'Faster decisions between founder, product, and design.'
];

const scopeItems = [
  'Product strategy and prioritization support',
  'UX research planning, interviews, and synthesis',
  'Rapid prototypes and decision-ready concepts',
  'High-fidelity UI and interaction design',
  'Design handoff support and design QA with engineering',
  'Analytics planning for outcome measurement',
  'Optional support in hiring/coaching design talent'
];

const deliverableItems = [
  'Regular metric readout and recommendation memo',
  'Prioritized experiment backlog',
  'Shippable design files and specs',
  'Decision logs (what changed and why)',
  'Monthly summary of wins, misses, and next bets'
];

const meetingItems = [
  'Review metric movement and shipped work',
  'Capture learnings from users and product data',
  'Choose next highest-impact decision',
  'Lock next-week scope and owners'
];

const executionItems = [
  'Research and synthesis',
  'Prototyping and validation',
  'UI delivery and implementation support',
  'Measurement and iteration prep'
];

const SectionHeader = ({ number, title }: { number: number; title: string }) => (
  <h2 className="mb-3 flex items-start gap-3 text-2xl font-bold">
    <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black pb-0.5 text-sm font-semibold leading-none text-white">
      {number}
    </span>
    <span>{title}</span>
  </h2>
);

const ProposalThiqal: React.FC = () => {
  const handleExportPdf = () => {
    const previousTitle = document.title;
    document.title = 'Proposal-Thiqal-Design-Partnership';
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 400);
  };

  return (
    <div id="proposal-thiqal-root" className="mx-auto max-w-5xl px-1 py-2 text-gray-900">
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }

          #proposal-thiqal-root,
          #proposal-thiqal-root * {
            visibility: visible !important;
          }

          #proposal-thiqal-root {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
          }

          #proposal-print-actions {
            display: none !important;
          }

          .proposal-section {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          @page {
            size: A4;
            margin: 12mm;
          }
        }
      `}</style>

      <div id="proposal-print-actions" className="fixed bottom-4 right-4 z-40">
        <button
          onClick={handleExportPdf}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
        >
          Export PDF
        </button>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <section className="proposal-section rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Thiqal Design Partnership Proposal</h1>
          <p className="text-base text-gray-700 sm:text-lg">Outcome-based product design consultation.</p>
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-4">
            <div>
              <p className="font-semibold text-gray-900">Prepared by</p>
              <p>Omar J. Hammad</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Prepared for</p>
              <p>Thiqal</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Date</p>
              <p>{proposalDate}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Contacts</p>
              <p>x.com/hammadojh · linkedin.com/in/ohammad</p>
            </div>
          </div>
        </section>

        <section className="proposal-section rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <SectionHeader number={1} title="Proposal Summary" />
          <p className="mb-4 text-sm text-gray-700">
            This proposal is for a weekly design operating partnership focused on measurable product outcomes, not design output volume.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            {summaryBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="proposal-section rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <SectionHeader number={2} title="Problem and Need" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 font-semibold">Current risk</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                {riskItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-semibold">What this fixes</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                {fixesItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="proposal-section rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <SectionHeader number={3} title="Objectives and Measurement" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {objectives.map((item) => (
              <article key={item.name}>
                <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
                <p className="mb-3 text-sm text-gray-700">{item.definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proposal-section rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <SectionHeader number={4} title="Scope and Deliverables" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 font-semibold">Scope</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                {scopeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-semibold">Recurring deliverables</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                {deliverableItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="proposal-section rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <SectionHeader number={5} title="Operating Model and Weekly Cadence" />
          <p className="mb-4 text-sm text-gray-700">Model: Measure → Understand → Prototype → Ship.</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 font-semibold">Check-in meeting (30-60 min, weekly or bi-weekly)</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                {meetingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-semibold">Execution between meetings</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                {executionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="proposal-section rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <SectionHeader number={6} title="Commercial Terms" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="mb-1 text-xs font-medium tracking-wide text-gray-500">Option A</p>
              <p className="mb-2 text-xl font-bold">25,000 SAR / month</p>
              <p className="text-sm text-gray-700">Retainer model with flexible cadence and scope based on current priorities.</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium tracking-wide text-gray-500">Option B</p>
              <p className="mb-2 text-xl font-bold">Equity / Partnership</p>
              <p className="text-sm text-gray-700">Structure and terms to be defined separately based on role depth and time commitment.</p>
            </div>
          </div>
        </section>

        <section className="proposal-section rounded-2xl border border-black bg-black p-6 text-white sm:p-8">
          <h2 className="mb-3 text-2xl font-bold">Next Steps</h2>
          <p className="text-sm text-gray-200">Thank you for reviewing this proposal.</p>
          <p className="mt-2 text-sm text-gray-200">
            I look forward to working together. If this is aligned, please confirm your preferred engagement option and I will share kickoff availability.
          </p>
          <div className="mt-4 space-y-1 text-sm text-gray-200">
            <p>
              Email:{' '}
              <a
                href="mailto:omar@ohammad.com"
                className="font-medium text-white underline decoration-gray-300 underline-offset-2 hover:text-gray-100"
              >
                omar@ohammad.com
              </a>
            </p>
            <p>Phone: available on request.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProposalThiqal;
