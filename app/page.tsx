import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-zinc-100 font-sans dark:from-zinc-900 dark:to-black">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <header className="mb-12 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={24}
              priority
            />
            <span className="text-3xl font-bold text-zinc-400">+</span>
            <div className="flex flex-row items-start">
              <Image
              className="dark:invert"
              src="/electron.svg"
              alt="Electron logo"
              width={70}
              height={24}
              priority
            />
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
            Next.js + Electron Starter
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Build cross-platform desktop applications using React, Next.js, and Electron with TypeScript and Tailwind CSS.
          </p>
        </header>

        {/* Quick Start */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">🚀 Quick Start</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">Development Mode</h3>
              <code className="block rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
                npm run dev
              </code>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Starts Next.js dev server + launches Electron window with hot reload
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">Build Production App</h3>
              <code className="block rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
                npm run dist
              </code>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Creates .exe installer and portable app in <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">dist/</code> folder
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="mb-3 text-3xl">⚡</div>
            <h3 className="mb-2 font-bold text-black dark:text-white">Hot Reload</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Changes to your Next.js pages automatically refresh in the Electron window
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="mb-3 text-3xl">📦</div>
            <h3 className="mb-2 font-bold text-black dark:text-white">TypeScript</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Fully typed codebase with TypeScript for both renderer and main process
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="mb-3 text-3xl">🎨</div>
            <h3 className="mb-2 font-bold text-black dark:text-white">Tailwind CSS</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Utility-first CSS framework with dark mode support out of the box
            </p>
          </div>
        </section>

        {/* Project Structure */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">📁 Project Structure</h2>
          <div className="rounded-lg bg-zinc-50 p-4 font-mono text-sm dark:bg-zinc-900">
            <div className="text-zinc-600 dark:text-zinc-400">
              <div>├── <span className="font-bold text-blue-600 dark:text-blue-400">app/</span> - Next.js pages and components</div>
              <div>│   ├── page.tsx - Home page (this file)</div>
              <div>│   ├── layout.tsx - Root layout</div>
              <div>│   └── globals.css - Global styles</div>
              <div>├── <span className="font-bold text-green-600 dark:text-green-400">electron/</span> - Electron source files</div>
              <div>│   ├── main.ts - Main process (window creation)</div>
              <div>│   └── preload.ts - Preload script (IPC bridge)</div>
              <div>├── <span className="font-bold text-purple-600 dark:text-purple-400">public/</span> - Static assets</div>
              <div>└── <span className="text-zinc-400">dist/</span> - Built executables (generated)</div>
            </div>
          </div>
        </section>

        {/* Development Guide */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">🛠️ Development Guide</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-xl">1️⃣</span> Edit the UI
              </h3>
              <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                Modify <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-900">app/page.tsx</code> to change the home page. 
                Changes auto-refresh in Electron!
              </p>
            </div>
            <div>
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-xl">2️⃣</span> Customize Electron Window
              </h3>
              <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                Edit <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-900">electron/main.ts</code> to change:
              </p>
              <ul className="ml-6 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Window size, position, and properties</li>
                <li>Menu bar, tray icons, and shortcuts</li>
                <li>Native OS integrations and dialogs</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-xl">3️⃣</span> Add IPC Communication
              </h3>
              <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                Use <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-900">electron/preload.ts</code> to expose Node.js APIs to your React app safely.
              </p>
            </div>
            <div>
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-xl">4️⃣</span> Build & Distribute
              </h3>
              <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                Run <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-900">npm run dist</code> to create installers for Windows, macOS, and Linux.
              </p>
            </div>
          </div>
        </section>

        {/* Available Scripts */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">⚙️ Available Scripts</h2>
          <div className="space-y-3">
            {[
              { cmd: "npm run dev", desc: "Start development server with hot reload" },
              { cmd: "npm run build", desc: "Build Next.js and compile Electron TypeScript" },
              { cmd: "npm start", desc: "Run the production build locally" },
              { cmd: "npm run dist", desc: "Create distributable packages (.exe, .dmg, etc.)" },
              { cmd: "npm run lint", desc: "Run ESLint to check code quality" },
            ].map((script, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-zinc-100 pb-3 last:border-0 dark:border-zinc-700">
                <code className="shrink-0 rounded bg-zinc-100 px-3 py-1 text-sm font-mono dark:bg-zinc-900">
                  {script.cmd}
                </code>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{script.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clean Build */}
        <section className="mb-12 rounded-2xl bg-amber-50 p-8 dark:bg-amber-950/30">
          <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-200">🧹 Clean Build</h2>
          <p className="mb-4 text-sm text-amber-800 dark:text-amber-300">
            Before rebuilding, clean generated folders:
          </p>
          <code className="block rounded-lg bg-amber-100 p-4 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">
            Remove-Item -Path &quot;dist&quot;,&quot;.next&quot;,&quot;out&quot;,&quot;build-electron&quot; -Recurse -Force
          </code>
          <p className="mt-2 text-xs text-amber-700 dark:text-amber-400">
            💡 Tip: These folders are auto-generated and safe to delete anytime
          </p>
        </section>

        {/* Footer Links */}
        <footer className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-6 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js"
              width={16}
              height={16}
            />
            Next.js Docs
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-6 text-black transition-colors hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:hover:border-zinc-500 sm:w-auto"
            href="https://www.electronjs.org/docs/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚡ Electron Docs
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-6 text-black transition-colors hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:hover:border-zinc-500 sm:w-auto"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎨 Tailwind Docs
          </a>
        </footer>
      </div>
    </div>
  );
}
