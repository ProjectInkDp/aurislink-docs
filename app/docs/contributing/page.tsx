'use client';

import Link from 'next/link';
import { GitBranch, Heart, Code, BookOpen, Bug, Zap } from 'lucide-react';

export default function ContributingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Contributing to AurisLink
          </h1>
          <p className="text-xl text-slate-300">
            We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes AurisLink better.
          </p>
        </div>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-8 h-8 text-cyan-400" />
            Getting Started
          </h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Node.js 20.0.0 or higher</li>
              <li>• npm 9.0.0 or higher</li>
              <li>• Git</li>
              <li>• A GitHub account</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4">Fork and Clone</h3>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
            <pre className="text-sm overflow-x-auto text-cyan-400">
{`# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/aurislink-docs.git
cd aurislink-docs

# Add upstream remote
git remote add upstream https://github.com/ProjectInkDp/aurislink-docs.git`}
            </pre>
          </div>
        </section>

        {/* Contribution Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-400" />
            Ways to Contribute
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Documentation */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold">Documentation</h3>
              </div>
              <p className="text-slate-300 mb-3">
                Improve guides, add examples, fix typos, or clarify existing documentation.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Fix typos and grammar</li>
                <li>• Add code examples</li>
                <li>• Clarify confusing sections</li>
                <li>• Add new guides</li>
              </ul>
            </div>

            {/* Bug Fixes */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition">
              <div className="flex items-center gap-2 mb-3">
                <Bug className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold">Bug Fixes</h3>
              </div>
              <p className="text-slate-300 mb-3">
                Report bugs, create test cases, or submit fixes for existing issues.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Report bugs on GitHub Issues</li>
                <li>• Create minimal reproducible examples</li>
                <li>• Submit pull requests with fixes</li>
                <li>• Test fixes thoroughly</li>
              </ul>
            </div>

            {/* Features */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold">Features</h3>
              </div>
              <p className="text-slate-300 mb-3">
                Suggest new features or implement enhancements to existing functionality.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Discuss ideas in Issues</li>
                <li>• Implement new features</li>
                <li>• Add new documentation sections</li>
                <li>• Improve performance</li>
              </ul>
            </div>

            {/* Code */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">Code Quality</h3>
              </div>
              <p className="text-slate-300 mb-3">
                Improve code style, add tests, optimize performance, or refactor.
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Add unit tests</li>
                <li>• Improve code style</li>
                <li>• Optimize performance</li>
                <li>• Refactor complex code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <GitBranch className="w-8 h-8 text-blue-400" />
            Contribution Workflow
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Create a Feature Branch</h3>
                  <pre className="bg-slate-900/50 p-3 rounded text-sm text-cyan-400 overflow-x-auto">
{`git checkout -b feature/your-feature-name`}
                  </pre>
                  <p className="text-slate-300 mt-2">Use descriptive branch names like <code className="bg-slate-900 px-2 py-1 rounded">feature/add-search</code> or <code className="bg-slate-900 px-2 py-1 rounded">fix/typo-in-docs</code></p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Make Your Changes</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Follow the existing code style</li>
                    <li>• Write clear, descriptive commit messages</li>
                    <li>• Update documentation if needed</li>
                    <li>• Test your changes locally</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Commit Your Changes</h3>
                  <pre className="bg-slate-900/50 p-3 rounded text-sm text-cyan-400 overflow-x-auto">
{`git add .
git commit -m "feat: add your feature description"`}
                  </pre>
                  <p className="text-slate-300 mt-2">Use conventional commits: <code className="bg-slate-900 px-2 py-1 rounded">feat:</code>, <code className="bg-slate-900 px-2 py-1 rounded">fix:</code>, <code className="bg-slate-900 px-2 py-1 rounded">docs:</code>, <code className="bg-slate-900 px-2 py-1 rounded">style:</code></p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Push to Your Fork</h3>
                  <pre className="bg-slate-900/50 p-3 rounded text-sm text-cyan-400 overflow-x-auto">
{`git push origin feature/your-feature-name`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Open a Pull Request</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Go to the original repository</li>
                    <li>• Click "New Pull Request"</li>
                    <li>• Select your branch</li>
                    <li>• Write a clear description of your changes</li>
                    <li>• Reference any related issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contribution Guidelines</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Code Style</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Follow existing code patterns and conventions</li>
                <li>• Use TypeScript for type safety</li>
                <li>• Write descriptive variable and function names</li>
                <li>• Add comments for complex logic</li>
                <li>• Keep functions small and focused</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Commit Messages</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Use conventional commits format</li>
                <li>• First line should be 50 characters or less</li>
                <li>• Use imperative mood ("add" not "added")</li>
                <li>• Reference issues when applicable</li>
                <li>• Example: <code className="bg-slate-900 px-2 py-1 rounded">feat: add search functionality to docs</code></li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Testing</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Test your changes locally before submitting</li>
                <li>• Run <code className="bg-slate-900 px-2 py-1 rounded">npm run build</code> to ensure no build errors</li>
                <li>• Check for TypeScript errors</li>
                <li>• Test on different screen sizes (responsive)</li>
                <li>• Verify links and navigation work correctly</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Documentation</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Update README.md if adding new features</li>
                <li>• Add comments to complex code</li>
                <li>• Update relevant documentation pages</li>
                <li>• Include examples when possible</li>
                <li>• Keep documentation in sync with code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-8 text-center">
            <p className="text-xl text-slate-300 mb-6">
              Have questions or want to discuss ideas? Join our Discord community!
            </p>
            <a
              href="https://discord.gg/aurislink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Join Discord Server
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">How long does it take to review a PR?</h3>
              <p className="text-slate-300">
                We aim to review pull requests within 48 hours. Complex changes may take longer. Feel free to ping us if you haven't received feedback after a week.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">What if my PR is rejected?</h3>
              <p className="text-slate-300">
                Don't worry! We provide constructive feedback to help you improve. You can make changes and resubmit. Most PRs are accepted after addressing feedback.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Can I work on multiple features?</h3>
              <p className="text-slate-300">
                Yes! Create separate branches for each feature. This makes it easier to review and merge changes independently.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Do I need to sign anything?</h3>
              <p className="text-slate-300">
                No contributor agreement is required. By submitting a PR, you agree that your contribution is licensed under the AGPL-3.0 license.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 mb-4">
            Thank you for contributing to AurisLink! 🎉
          </p>
          <Link
            href="/docs"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
