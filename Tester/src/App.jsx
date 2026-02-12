diff --git a/Tester/src/App.jsx b/Tester/src/App.jsx
index 51890f28bc6f57f8a8395f0c9d247b915f0f26ab..c556a4a2b0cb4a790ec3ce25cff644862c67c6b7 100644
--- a/Tester/src/App.jsx
+++ b/Tester/src/App.jsx
@@ -1,33 +1,406 @@
-import { useState } from 'react'
-import './App.css'
+const heroHighlights = [
+  { title: 'Fire-crafted cuisine', description: 'Seasonal tasting menus cooked over ember, with curated wine pairings.' },
+  { title: 'Immersive ambience', description: 'Warm brass lighting, bespoke ceramics, and a soundtrack tuned to every course.' },
+  { title: 'Personal service', description: 'Concierge-led reservations, tailored menus, and intimate private dining.' },
+]
 
-function App() {
-  const [count, setCount] = useState(0)
+const signaturePlates = [
+  {
+    name: 'Charred Wagyu & Smoked Shallot',
+    description: 'Miso-glazed wagyu cap, ember-roasted shallot, cacao nib jus, black garlic ash.',
+    price: '$46',
+    tag: 'Signature',
+  },
+  {
+    name: 'Seared Scallops & Citrus Ember',
+    description: 'Hand-dived scallops, burnt orange beurre blanc, fennel pollen, herb oil.',
+    price: '$34',
+    tag: 'Coastal',
+  },
+  {
+    name: 'Wild Mushroom Farro Risotto',
+    description: 'Smoked king oyster, fire-kissed farro, truffle foam, pecan crumble.',
+    price: '$28',
+    tag: 'Plant-forward',
+  },
+  {
+    name: 'Saffron Ember Prawns',
+    description: 'Charred tiger prawns, saffron ember butter, roasted lemon, pickled shallot.',
+    price: '$32',
+    tag: 'New',
+  },
+]
+
+const experiences = [
+  {
+    title: 'Chef\'s Table',
+    detail: 'Six-course tasting beside the open hearth with curated wine pairings.',
+    accent: 'Intimate · 6 seats',
+  },
+  {
+    title: 'Gatherings',
+    detail: 'Private dining suite for celebrations and executive dinners.',
+    accent: 'Up to 14 guests',
+  },
+  {
+    title: 'Lounge Hour',
+    detail: 'Artisanal cocktails, wood-fired bites, and live vinyl selections.',
+    accent: 'Daily 4–6 PM',
+  },
+]
+
+const highlights = [
+  { label: 'Michelin-inspired craft', value: 'Progressive plates designed by Chef Mara Solis.' },
+  { label: 'Responsible sourcing', value: 'Seasonal produce, dry-aged cuts, and coastal fish from partners we know.' },
+  { label: 'Precision hospitality', value: 'Sommelier-led pairings, tableside finishing, discreet service cadence.' },
+]
+
+const testimonials = [
+  {
+    quote: 'A sensory performance—flavor, light, and pacing harmonized effortlessly.',
+    guest: 'Evelyn Rhodes',
+    role: 'Food Editor, The Modern Palate',
+  },
+  {
+    quote: 'The ember-forward cuisine is bold yet balanced. Service is telepathic.',
+    guest: 'Noah Patel',
+    role: 'Executive Producer, Lumen Studios',
+  },
+]
+
+function GradientOrb({ className }) {
+  return <div className={`absolute blur-[120px] opacity-40 ${className}`} aria-hidden />
+}
 
+function SectionTitle({ eyebrow, title, description }) {
   return (
-    <>
-      <div>
-        <a href="https://vite.dev" target="_blank">
-          <img src={viteLogo} className="logo" alt="Vite logo" />
-        </a>
-        <a href="https://react.dev" target="_blank">
-          <img src={reactLogo} className="logo react" alt="React logo" />
-        </a>
-      </div>
-      <h1>Vite + React</h1>
-      <div className="card">
-        <button onClick={() => setCount((count) => count + 1)}>
-          count is {count}
-        </button>
-        <p>
-          Edit <code>src/App.jsx</code> and save to test HMR
-        </p>
-      </div>
-      <p className="read-the-docs">
-        Click on the Vite and React logos to learn more
-      </p>
-    </>
+    <div className="max-w-3xl space-y-2">
+      <p className="uppercase tracking-[0.2em] text-sm text-caramel font-semibold">{eyebrow}</p>
+      <h2 className="font-display text-4xl sm:text-5xl text-smoke leading-tight">{title}</h2>
+      {description && <p className="text-smoke/80 text-lg leading-relaxed">{description}</p>}
+    </div>
+  )
+}
+
+function App() {
+  return (
+    <div className="relative overflow-hidden">
+      <GradientOrb className="w-[420px] h-[420px] bg-burnt/40 top-0 -left-32" />
+      <GradientOrb className="w-[520px] h-[520px] bg-cream/20 bottom-10 right-[-120px]" />
+
+      <header className="sticky top-0 z-30 backdrop-blur-md bg-cocoa/70 border-b border-espresso/70">
+        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
+          <div className="flex items-center gap-3">
+            <div className="h-10 w-10 rounded-full bg-espresso border border-cream/20 flex items-center justify-center text-burnt font-display text-xl">
+              EE
+            </div>
+            <div>
+              <p className="text-sm uppercase tracking-[0.3em] text-cream/70">Elysian Ember</p>
+              <p className="text-smoke text-sm">Modern Wood-Fired Kitchen</p>
+            </div>
+          </div>
+          <div className="hidden items-center gap-8 text-sm font-medium text-smoke md:flex">
+            <a href="#menu" className="hover:text-burnt transition-colors">Menu</a>
+            <a href="#experiences" className="hover:text-burnt transition-colors">Experiences</a>
+            <a href="#reserve" className="hover:text-burnt transition-colors">Reserve</a>
+            <a href="#contact" className="hover:text-burnt transition-colors">Contact</a>
+          </div>
+          <a
+            href="#reserve"
+            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-burnt px-4 py-2 text-sm font-semibold text-cocoa shadow-glow transition hover:translate-y-[-1px] hover:shadow-lg hover:shadow-burnt/40"
+          >
+            Book a Table
+          </a>
+        </nav>
+      </header>
+
+      <main className="mx-auto max-w-6xl px-6 pb-20">
+        <section className="pt-16 pb-12 grid gap-12 lg:grid-cols-[1.2fr,0.9fr] items-center">
+          <div className="space-y-8">
+            <p className="uppercase tracking-[0.25em] text-sm text-caramel font-semibold">Fire, craft, and comfort</p>
+            <h1 className="font-display text-5xl sm:text-6xl leading-tight text-smoke">
+              A modern restaurant where ember-fired cuisine meets tailored hospitality.
+            </h1>
+            <p className="text-lg text-smoke/80 max-w-2xl">
+              Settle into a dark, tactile dining room alive with the glow of open flames. Our kitchen balances bold
+              heat with delicate restraint, sourcing seasonal ingredients and serving them with precision.
+            </p>
+            <div className="flex flex-wrap items-center gap-4">
+              <a
+                href="#reserve"
+                className="inline-flex items-center justify-center rounded-full bg-burnt px-5 py-3 text-cocoa font-semibold shadow-glow transition hover:-translate-y-0.5"
+              >
+                Reserve an Evening
+              </a>
+              <a
+                href="#menu"
+                className="inline-flex items-center justify-center rounded-full border border-cream/20 px-5 py-3 text-smoke font-semibold transition hover:border-burnt hover:text-burnt"
+              >
+                Explore the Menu
+              </a>
+            </div>
+            <div className="grid gap-4 md:grid-cols-3">
+              {heroHighlights.map((item) => (
+                <div key={item.title} className="rounded-2xl border border-cream/10 bg-white/5 p-4 backdrop-blur">
+                  <p className="text-sm font-semibold text-caramel uppercase tracking-[0.12em]">{item.title}</p>
+                  <p className="text-sm text-smoke/80 leading-relaxed mt-2">{item.description}</p>
+                </div>
+              ))}
+            </div>
+          </div>
+          <div className="relative">
+            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-espresso/60 via-cocoa to-espresso blur-3xl opacity-70" aria-hidden />
+            <div className="relative overflow-hidden rounded-[32px] border border-cream/10 bg-espresso/60 p-8 shadow-xl backdrop-blur">
+              <div className="flex items-center justify-between text-smoke">
+                <div>
+                  <p className="text-sm uppercase tracking-[0.25em] text-caramel">Tonight</p>
+                  <p className="text-2xl font-display">Chef\'s Ember Tasting</p>
+                  <p className="text-sm text-smoke/70">Seven courses · Wine pairings available</p>
+                </div>
+                <span className="rounded-full border border-cream/20 px-3 py-1 text-sm text-smoke/80">19:30</span>
+              </div>
+              <div className="mt-8 space-y-4">
+                {highlights.map((item) => (
+                  <div key={item.label} className="flex items-start gap-3">
+                    <span className="mt-1 h-2 w-2 rounded-full bg-burnt" />
+                    <div>
+                      <p className="text-smoke font-semibold">{item.label}</p>
+                      <p className="text-sm text-smoke/70">{item.value}</p>
+                    </div>
+                  </div>
+                ))}
+              </div>
+              <div className="mt-6 rounded-2xl bg-gradient-to-r from-burnt/80 to-caramel/70 px-5 py-4 text-cocoa shadow-glow">
+                <p className="font-semibold">Seasonal Highlight</p>
+                <p className="text-sm">Smoked beet tartare, ember-roasted citrus, toasted pecan praline.</p>
+              </div>
+            </div>
+          </div>
+        </section>
+
+        <section id="menu" className="py-12 space-y-10">
+          <SectionTitle
+            eyebrow="Signature plates"
+            title="Crafted over flame, balanced with finesse"
+            description="Each dish is built around seasonal produce, dry-aged cuts, and bright coastal seafood."
+          />
+          <div className="grid gap-6 md:grid-cols-2">
+            {signaturePlates.map((plate) => (
+              <div
+                key={plate.name}
+                className="group rounded-3xl border border-cream/10 bg-espresso/60 p-6 shadow-lg transition hover:-translate-y-1 hover:border-burnt/70"
+              >
+                <div className="flex items-start justify-between gap-4">
+                  <div>
+                    <h3 className="font-display text-2xl text-smoke">{plate.name}</h3>
+                    <p className="mt-2 text-sm text-smoke/80 leading-relaxed">{plate.description}</p>
+                  </div>
+                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-burnt font-semibold">{plate.tag}</span>
+                </div>
+                <div className="mt-4 flex items-center justify-between text-smoke/80">
+                  <p className="text-lg font-semibold text-smoke">{plate.price}</p>
+                  <span className="text-sm text-smoke/70">Wood-fired · Served warm</span>
+                </div>
+              </div>
+            ))}
+          </div>
+        </section>
+
+        <section id="experiences" className="py-12 space-y-10">
+          <SectionTitle
+            eyebrow="Curated experiences"
+            title="Every visit feels tailored to you"
+            description="Choose the pace: intimate chef interactions, celebratory gatherings, or a relaxed lounge hour."
+          />
+          <div className="grid gap-6 md:grid-cols-3">
+            {experiences.map((experience) => (
+              <div
+                key={experience.title}
+                className="rounded-3xl border border-cream/10 bg-gradient-to-br from-espresso/80 via-cocoa to-espresso p-6 shadow-lg"
+              >
+                <p className="text-sm uppercase tracking-[0.18em] text-caramel font-semibold">{experience.accent}</p>
+                <h3 className="mt-3 font-display text-2xl text-smoke">{experience.title}</h3>
+                <p className="mt-2 text-sm text-smoke/75 leading-relaxed">{experience.detail}</p>
+                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-burnt transition hover:translate-x-1">
+                  Learn more
+                  <span aria-hidden>→</span>
+                </button>
+              </div>
+            ))}
+          </div>
+        </section>
+
+        <section className="py-12 space-y-10">
+          <SectionTitle
+            eyebrow="Voices from the dining room"
+            title="Trusted by discerning guests"
+            description="Thoughtful service and ember-forward cooking that inspires returning reservations."
+          />
+          <div className="grid gap-6 md:grid-cols-2">
+            {testimonials.map((entry) => (
+              <div
+                key={entry.guest}
+                className="rounded-3xl border border-cream/10 bg-espresso/60 p-6 shadow-lg transition hover:-translate-y-1"
+              >
+                <p className="text-lg leading-relaxed text-smoke/90">“{entry.quote}”</p>
+                <div className="mt-4 flex items-center justify-between text-smoke/80">
+                  <div>
+                    <p className="font-semibold text-smoke">{entry.guest}</p>
+                    <p className="text-sm text-smoke/70">{entry.role}</p>
+                  </div>
+                  <span className="rounded-full bg-burnt/10 px-3 py-1 text-burnt text-xs font-semibold">Verified guest</span>
+                </div>
+              </div>
+            ))}
+          </div>
+        </section>
+
+        <section id="reserve" className="py-12 space-y-10">
+          <SectionTitle
+            eyebrow="Reserve"
+            title="Hold your table for the perfect evening"
+            description="We confirm reservations quickly and can tailor the experience to dietary preferences or celebrations."
+          />
+          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
+            <form className="rounded-3xl border border-cream/10 bg-espresso/70 p-6 shadow-lg space-y-5">
+              <div className="grid gap-4 md:grid-cols-2">
+                <label className="space-y-2 text-sm text-smoke/80">
+                  <span className="font-semibold text-smoke">Full name</span>
+                  <input
+                    type="text"
+                    name="name"
+                    placeholder="Evelyn Rhodes"
+                    className="w-full rounded-xl border border-cream/15 bg-cocoa px-4 py-3 text-sm text-smoke focus:border-burnt focus:outline-none"
+                    required
+                  />
+                </label>
+                <label className="space-y-2 text-sm text-smoke/80">
+                  <span className="font-semibold text-smoke">Email</span>
+                  <input
+                    type="email"
+                    name="email"
+                    placeholder="you@example.com"
+                    className="w-full rounded-xl border border-cream/15 bg-cocoa px-4 py-3 text-sm text-smoke focus:border-burnt focus:outline-none"
+                    required
+                  />
+                </label>
+              </div>
+              <div className="grid gap-4 md:grid-cols-3">
+                <label className="space-y-2 text-sm text-smoke/80">
+                  <span className="font-semibold text-smoke">Date</span>
+                  <input
+                    type="date"
+                    name="date"
+                    className="w-full rounded-xl border border-cream/15 bg-cocoa px-4 py-3 text-sm text-smoke focus:border-burnt focus:outline-none"
+                    required
+                  />
+                </label>
+                <label className="space-y-2 text-sm text-smoke/80">
+                  <span className="font-semibold text-smoke">Time</span>
+                  <input
+                    type="time"
+                    name="time"
+                    className="w-full rounded-xl border border-cream/15 bg-cocoa px-4 py-3 text-sm text-smoke focus:border-burnt focus:outline-none"
+                    required
+                  />
+                </label>
+                <label className="space-y-2 text-sm text-smoke/80">
+                  <span className="font-semibold text-smoke">Guests</span>
+                  <select
+                    name="guests"
+                    className="w-full appearance-none rounded-xl border border-cream/15 bg-cocoa px-4 py-3 text-sm text-smoke focus:border-burnt focus:outline-none"
+                    defaultValue="2"
+                  >
+                    {[1, 2, 3, 4, 5, 6, 7, 8].map((guest) => (
+                      <option key={guest} value={guest}>
+                        {guest} {guest === 1 ? 'guest' : 'guests'}
+                      </option>
+                    ))}
+                  </select>
+                </label>
+              </div>
+              <label className="space-y-2 text-sm text-smoke/80">
+                <span className="font-semibold text-smoke">Celebrations or preferences</span>
+                <textarea
+                  name="notes"
+                  rows="3"
+                  placeholder="Let us know about allergies or occasions."
+                  className="w-full rounded-xl border border-cream/15 bg-cocoa px-4 py-3 text-sm text-smoke focus:border-burnt focus:outline-none"
+                />
+              </label>
+              <div className="flex flex-wrap items-center gap-3">
+                <button
+                  type="submit"
+                  className="inline-flex items-center justify-center rounded-full bg-burnt px-6 py-3 text-cocoa font-semibold shadow-glow transition hover:-translate-y-0.5"
+                >
+                  Request reservation
+                </button>
+                <p className="text-sm text-smoke/70">We confirm within 10 minutes during service hours.</p>
+              </div>
+            </form>
+            <div className="space-y-6 rounded-3xl border border-cream/10 bg-espresso/60 p-6 shadow-lg">
+              <div className="flex items-center justify-between">
+                <div>
+                  <p className="text-sm uppercase tracking-[0.18em] text-caramel font-semibold">Service hours</p>
+                  <p className="font-display text-2xl text-smoke">Dinner, Tue–Sun</p>
+                </div>
+                <span className="rounded-full bg-burnt/10 px-3 py-1 text-xs font-semibold text-burnt">Open flame</span>
+              </div>
+              <ul className="space-y-3 text-sm text-smoke/80">
+                <li className="flex items-center justify-between">
+                  <span>First seating</span>
+                  <span className="text-smoke">5:30 PM</span>
+                </li>
+                <li className="flex items-center justify-between">
+                  <span>Chef\'s tasting</span>
+                  <span className="text-smoke">7:30 PM</span>
+                </li>
+                <li className="flex items-center justify-between">
+                  <span>Final seating</span>
+                  <span className="text-smoke">10:00 PM</span>
+                </li>
+              </ul>
+              <div className="rounded-2xl bg-gradient-to-r from-burnt/20 via-caramel/10 to-white/5 p-5">
+                <p className="font-semibold text-smoke">Concierge assistance</p>
+                <p className="text-sm text-smoke/75 leading-relaxed">
+                  For large parties or special requests, email concierge@elysianember.com or call (415) 555-0142.
+                </p>
+              </div>
+            </div>
+          </div>
+        </section>
+
+        <section id="contact" className="py-12 space-y-10">
+          <SectionTitle
+            eyebrow="Find us"
+            title="Nestled in the heart of the arts district"
+            description="Valet is available. We are a five-minute walk from the Central gallery stop."
+          />
+          <div className="grid gap-6 md:grid-cols-3">
+            <div className="rounded-3xl border border-cream/10 bg-espresso/60 p-6 shadow-lg">
+              <p className="text-sm uppercase tracking-[0.18em] text-caramel font-semibold">Location</p>
+              <p className="mt-2 font-display text-2xl text-smoke">128 Ember Lane</p>
+              <p className="text-sm text-smoke/80">San Francisco, Arts District</p>
+            </div>
+            <div className="rounded-3xl border border-cream/10 bg-espresso/60 p-6 shadow-lg">
+              <p className="text-sm uppercase tracking-[0.18em] text-caramel font-semibold">Contact</p>
+              <p className="mt-2 text-sm text-smoke/85">concierge@elysianember.com</p>
+              <p className="text-sm text-smoke/85">(415) 555-0142</p>
+            </div>
+            <div className="rounded-3xl border border-cream/10 bg-espresso/60 p-6 shadow-lg">
+              <p className="text-sm uppercase tracking-[0.18em] text-caramel font-semibold">Hours</p>
+              <p className="mt-2 text-sm text-smoke/85">Dinner: Tue–Sun · 5:00 PM – 11:00 PM</p>
+              <p className="text-sm text-smoke/85">Lounge: Daily · 4:00 PM – Midnight</p>
+            </div>
+          </div>
+        </section>
+      </main>
+
+      <footer className="border-t border-espresso/70 bg-cocoa/80 py-8 text-center text-sm text-smoke/70">
+        <p>© {new Date().getFullYear()} Elysian Ember. Crafted with fire, served with grace.</p>
+      </footer>
+    </div>
   )
 }
 
 export default App
