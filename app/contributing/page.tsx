'use client';

import Link from 'next/link';
import { AlertCircle, GitBranch, CheckCircle, XCircle } from 'lucide-react';

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
            Learn about the contribution policy and how to contribute to AurisLink.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-400 mb-3">Important: Contribution Policy</h2>
              <p className="text-slate-300 mb-4">
                <strong>Only the `dev` branch accepts pull requests.</strong> Any contributions submitted to other branches (such as `v1` or `main`) will be automatically rejected.
              </p>
              <p className="text-slate-300">
                This ensures that all contributions are properly reviewed and tested before being merged into stable releases.
              </p>
            </div>
          </div>
        </div>

        {/* Branch Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <GitBranch className="w-8 h-8 text-cyan-400" />
            Branch Policy
          </h2>

          <div className="space-y-4">
            {/* Dev Branch */}
            <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-green-400">dev</h3>
                  <p className="text-slate-300 mt-1">
                    <strong>✅ ACCEPTS PULL REQUESTS</strong>
                  </p>
                </div>
              </div>
              <p className="text-slate-300 ml-9">
                The development branch where all new features, bug fixes, and improvements are merged. This is the only branch that accepts contributions.
              </p>
              <div className="ml-9 mt-3 bg-slate-900/50 p-3 rounded text-sm text-cyan-400">
                <strong>Submit PRs here:</strong> <code>git push origin feature/your-feature -u</code>
              </div>
            </div>

            {/* V1 Branch */}
            <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-red-400">v1</h3>
                  <p className="text-slate-300 mt-1">
                    <strong>❌ DOES NOT ACCEPT PULL REQUESTS</strong>
                  </p>
                </div>
              </div>
              <p className="text-slate-300 ml-9">
                The stable release branch. Any PRs submitted to this branch will be rejected. Use this branch only for production deployments.
              </p>
            </div>

            {/* Main Branch */}
            <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-red-400">main</h3>
                  <p className="text-slate-300 mt-1">
                    <strong>❌ DOES NOT ACCEPT PULL REQUESTS</strong>
                  </p>
                </div>
              </div>
              <p className="text-slate-300 ml-9">
                Mirror of the latest stable release. Any PRs submitted to this branch will be rejected.
              </p>
            </div>

            {/* Other Branches */}
            <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-red-400">Other Branches</h3>
                  <p className="text-slate-300 mt-1">
                    <strong>❌ DOES NOT ACCEPT PULL REQUESTS</strong>
                  </p>
                </div>
              </div>
              <p className="text-slate-300 ml-9">
                Any other branches are experimental or temporary. PRs to these branches will be rejected.
              </p>
            </div>
          </div>
        </section>

        {/* How to Contribute */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Contribute</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fork the Repository</h3>
                  <p className="text-slate-300 mb-3">
                    Click the "Fork" button on GitHub to create your own copy of the repository.
                  </p>
                  <a
                    href="https://github.com/ProjectInkDp/aurislink/fork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-500/30 transition"
                  >
                    Fork on GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Clone and Create Branch</h3>
                  <pre className="bg-slate-900/50 p-3 rounded text-sm text-cyan-400 overflow-x-auto mb-3">
{`git clone https://github.com/YOUR_USERNAME/aurislink.git
cd aurislink
git checkout dev
git checkout -b feature/your-feature-name`}
                  </pre>
                  <p className="text-slate-300 text-sm">
                    Always branch from <code className="bg-slate-900 px-2 py-1 rounded">dev</code>, not from other branches.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Make Your Changes</h3>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Follow the existing code style</li>
                    <li>• Write clear, descriptive commit messages</li>
                    <li>• Test your changes thoroughly</li>
                    <li>• Update documentation if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Push and Create Pull Request</h3>
                  <pre className="bg-slate-900/50 p-3 rounded text-sm text-cyan-400 overflow-x-auto mb-3">
{`git add .
git commit -m "feat: describe your changes"
git push origin feature/your-feature-name`}
                  </pre>
                  <p className="text-slate-300 text-sm mb-3">
                    Then open a pull request on GitHub targeting the <code className="bg-slate-900 px-2 py-1 rounded">dev</code> branch.
                  </p>
                  <a
                    href="https://github.com/ProjectInkDp/aurislink/pulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-500/30 transition"
                  >
                    View Pull Requests →
                  </a>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Wait for Review</h3>
                  <p className="text-slate-300">
                    Your PR will be reviewed by the maintainers. They may request changes or ask questions. Once approved, your changes will be merged into the <code className="bg-slate-900 px-2 py-1 rounded">dev</code> branch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Will Be Rejected */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <XCircle className="w-8 h-8 text-red-400" />
            What Will Be Rejected
          </h2>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>Pull requests to the <code className="bg-slate-900 px-2 py-1 rounded">v1</code> branch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>Pull requests to the <code className="bg-slate-900 px-2 py-1 rounded">main</code> branch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>Pull requests to any branch other than <code className="bg-slate-900 px-2 py-1 rounded">dev</code></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>PRs that don't follow the code style or guidelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>PRs without clear descriptions or commit messages</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Questions?</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-300 mb-4">
              If you have questions about contributing, feel free to:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>• Open an issue on <a href="https://github.com/ProjectInkDp/aurislink/issues" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">GitHub Issues</a></li>
              <li>• Check the <a href="https://github.com/ProjectInkDp/aurislink" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">main repository</a> for more details</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 mb-4">
            Thank you for your interest in contributing to AurisLink! 🎉
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
