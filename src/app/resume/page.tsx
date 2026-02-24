import React from 'react';

export default function ResumePage() {
    return (
        <main className="h-[calc(100vh-80px)] w-full overflow-y-auto pt-8 px-4 md:px-8 flex justify-center">
            {/* Container that acts like the 8.5x11 letter page */}
            <div className="w-full max-w-[900px] text-zinc-900 text-sm leading-relaxed p-0 pb-32 sm:p-4 sm:pb-32 space-y-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-2 tracking-tight">Ben Ronen</h1>
                    <p className="text-sm text-zinc-600">
                        New York, NY |{' '}
                        <a href="mailto:benronen100@gmail.com" className="text-blue-600 hover:underline">benronen100@gmail.com</a> |{' '}
                        <a href="https://linkedin.com/in/bensronen/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/bensronen/</a>
                    </p>
                </div>

                {/* Professional Experience Section */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-300 pb-2 mb-4">
                        Professional Experience
                    </h2>

                    {/* Vise */}
                    <div className="mb-8">
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="font-bold text-base">Vise <span className="hidden sm:inline font-normal text-zinc-600 text-sm">— Unicorn developing agentic asset management platform for financial advisors</span></div>
                            <div className="font-bold text-right ml-4 shrink-0">New York, NY</div>
                        </div>

                        <div className="flex justify-between items-baseline mb-4">
                            <div className="italic font-medium text-zinc-800 text-sm">Operations Engineering Intern</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">June — August 2025</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Saved 10 weeks/year of manual work by automating core QBR workflow in Google Apps Script and building a Snowflake-to-slide deck data pipeline</li>
                            <li>Created AI-enabled tool to report daily individual and firm progress from Airtable, boosting accountability and communication firmwide</li>
                            <li>Combined Snowflake, custodian (Schwab, Fidelity, Altruist), and platform data to reconcile AUM discrepancies and enable snapshot billing metrics</li>
                            <li>Built inbound lead pipeline unifying web + form submissions (~15 leads/week) into a central database; auto-routed leads to optimal SDR</li>
                        </ul>

                        <div className="flex justify-between items-baseline mt-8 mb-4">
                            <div className="italic font-medium text-zinc-800 text-sm">Go-To-Market Intern</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">July — October 2024</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Produced 50+ strategic briefing docs analyzing firm models and market positioning to inform partner strategy, including NewEdge Wealth ($70B AUM) — now a Vise partner</li>
                            <li>Mapped and identified key firms, conference attendees, and journalists to support partnerships and press strategy</li>
                        </ul>
                    </div>

                    {/* Deepchecks */}
                    <div className="mb-10">
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="font-bold text-base">Deepchecks <span className="hidden sm:inline font-normal text-zinc-600 text-sm">— Emerging leader in ML / LLM continuous validation and testing</span></div>
                            <div className="font-bold text-right ml-4 shrink-0 text-zinc-900">Tel Aviv, Israel & Remote</div>
                        </div>
                        <div className="flex justify-between items-baseline mb-4">
                            <div className="italic font-medium text-zinc-800 text-sm">Sales & Business Development Representative / Digital Community Manager Internship</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">June — August 2023</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Built global builder community to 3000 members, engaging AI leaders with Deepchecks solutions and surfacing emerging use cases, generating 20+ founder conversations for CEO</li>
                            <li>Led development of LLM response evaluation tool, grading 250+ prompts to stress-test model outputs and presenting findings to peers</li>
                        </ul>
                    </div>

                    {/* Coffeebar Menlo Park */}
                    <div className="mb-10">
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="font-bold text-base">Coffeebar Menlo Park <span className="hidden sm:inline font-normal text-zinc-600 text-sm">— High-volume café focused on premium coffee experiences</span></div>
                            <div className="font-bold text-right ml-4 shrink-0 text-zinc-900">Menlo Park, CA</div>
                        </div>
                        <div className="flex justify-between items-baseline mb-4">
                            <div className="italic font-medium text-zinc-800 text-sm">Back of House Lead</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">August — December 2022</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Promoted in 2 months to oversee all food preparation, train hires, and manage deliveries, served 700+ customers/day</li>
                        </ul>
                    </div>

                    {/* Hire Space */}
                    <div className="mb-10">
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="font-bold text-base">Hire Space <span className="hidden sm:inline font-normal text-zinc-600 text-sm">— UK&apos;s largest platform connecting event organizers with venues</span></div>
                            <div className="font-bold text-right ml-4 shrink-0 text-zinc-900">London, England</div>
                        </div>
                        <div className="flex justify-between items-baseline mb-4">
                            <div className="italic font-medium text-zinc-800 text-sm">Sales Development Intern</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">June — August 2022</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Reactivated 50+ venues lost during COVID-19 through cold-calling, restoring partnerships with hotels, restaurants, and clubs</li>
                        </ul>
                    </div>

                </section>

                {/* Education Section */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-300 pb-2 mb-4">
                        Education
                    </h2>

                    <div className="mb-10">
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="font-bold text-base">New York University, College of Arts and Sciences</div>
                            <div className="font-bold text-right ml-4 shrink-0 text-zinc-900">New York, NY</div>
                        </div>
                        <div className="flex justify-between items-baseline mb-4">
                            <div className="italic font-medium text-zinc-800 text-sm">B.A. in Computer Science, B.A. in Philosophy</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">2023 — 2026</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Cumulative GPA: 3.73/4.0; Dean&apos;s List (all semesters)</li>
                            <li>Extracurriculars: TAMID Group (President - Fall &apos;24), AEPi Fraternity (Member), Chess Club (Member), Intramural Volleyball</li>
                            <li>Study Abroad: NYU Paris, Spring 2025: French Language and Culture, Artificial Intelligence, Linear Algebra</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="font-bold text-base">Boston University, College of Arts and Sciences</div>
                            <div className="font-bold text-right ml-4 shrink-0 text-zinc-900">Boston, MA</div>
                        </div>
                        <div className="flex justify-between items-baseline mb-4">
                            <div className="italic font-medium text-left pl-0 text-zinc-800 text-sm">Undeclared (Relevant courses: Statistics, Physics, Existentialism, International Relations, Economics)</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">2021 — 2022</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Dean&apos;s List (Spring semester), TAMID Group (Project Manager), Intramural Volleyball</li>
                        </ul>
                    </div>
                </section>

                {/* Leadership Experience Section */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-300 pb-2 mb-4">
                        Leadership Experience
                    </h2>

                    <div className="mb-10">
                        <div className="flex justify-between items-baseline mb-2">
                            <div className="font-bold text-base">TAMID Group at NYU <span className="hidden sm:inline font-normal text-zinc-600 text-sm">— 80-person club consulting for Israeli startups and pitching stocks</span></div>
                            <div className="font-bold text-right ml-4 shrink-0 text-zinc-900">New York, NY</div>
                        </div>
                        <div className="flex justify-between items-baseline mb-4">
                            <div className="italic font-medium text-zinc-800 text-sm">President</div>
                            <div className="italic text-right ml-4 shrink-0 text-zinc-500 text-sm">May — December 2024</div>
                        </div>
                        <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                            <li>Led organizational strategy and execution, aligning board operations with national TAMID leadership</li>
                            <li>Revamped recruitment pipeline, reviewing 100+ applications and interviewing 40+ to select 26 high-performing members</li>
                            <li>Instituted committee structure and mentorship programs to increase engagement and operational accountability</li>
                            <li>Restructured executive board governance, streamlining roles to increase transparency and operational efficiency.</li>
                        </ul>
                    </div>
                </section>

                {/* Skills & Interests Section */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-300 pb-2 mb-4">
                        Skills & Interests
                    </h2>

                    <ul className="list-disc list-outside ml-6 space-y-2 text-base leading-relaxed text-zinc-800">
                        <li>Proficient in Python, Java, C, Assembly, SQL, Snowflake, Google Apps Script, Hubspot, LinkedIn Sales Navigator</li>
                        <li>Languages: English and Hebrew (fluent), Spanish (well-versed) and French (beginner)</li>
                        <li>Passionate about Formula 1 and the physics of cars, as well as traveling, ranking restaurants on Beli, architecture, and design</li>
                        <li>Fascinated by artificial intelligence consciousness and morality</li>
                    </ul>
                </section>

                {/* Extra padding so the user can scroll past the bottom */}
                <div className="h-40 w-full shrink-0"></div>

            </div>
        </main>
    );
}
