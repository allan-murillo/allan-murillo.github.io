import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import { dashboardModules, userRoles, type ApiHealthResponse, type DashboardSummary } from "@shared/index";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

const emptySummary: DashboardSummary = {
  activeUsers: 0,
  pendingApprovals: 0,
  generatedReports: 0,
  systemStatus: "Offline",
};

export default function App() {
  const [health, setHealth] = useState<ApiHealthResponse | null>(null);
  const [summary, setSummary] = useState<DashboardSummary>(emptySummary);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("admin@mmafc.local");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [healthResponse, summaryResponse] = await Promise.all([
          fetch(`${apiBaseUrl}/api/health`),
          fetch(`${apiBaseUrl}/api/summary`),
        ]);

        const healthData = (await healthResponse.json()) as ApiHealthResponse;
        const summaryData = (await summaryResponse.json()) as DashboardSummary;

        setHealth(healthData);
        setSummary(summaryData);
      } catch {
        setHealth(null);
      } finally {
        setLoading(false);
      }
    }

    void loadDashboard();
  }, []);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Enter your email and password to continue.");
      return;
    }

    if (!email.includes("@")) {
      setError("Use a valid email address.");
      return;
    }

    setError("");
    setIsAuthenticated(true);
  }

  if (!isAuthenticated) {
    return (
      <main className="login-page">
        <section className="login-shell">
          <div className="brand-panel">
            <p className="eyebrow">MMAFC Management System</p>
            <h1>Run your martial arts and fitness centre from one secure dashboard.</h1>
            <p className="hero-text">
              Manage memberships, class schedules, coaches, billing snapshots, training records,
              attendance, and reports in one place.
            </p>

            <div className="feature-stack">
              <article className="feature-card">
                <strong>Membership Control</strong>
                <span>Track active students, renewals, waivers, and attendance history.</span>
              </article>
              <article className="feature-card">
                <strong>Class Operations</strong>
                <span>Monitor coach schedules, session capacity, and room availability.</span>
              </article>
              <article className="feature-card">
                <strong>Performance Records</strong>
                <span>Store belt tests, fitness assessments, and member progress logs.</span>
              </article>
            </div>
          </div>

          <section className="login-card">
            <div className="login-card-header">
              <span className="login-badge">Secure Access</span>
              <h2>Sign in</h2>
              <p>Use your MMAFC staff account to access the management dashboard.</p>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              <label className="field">
                <span>Email Address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@mmafc.local"
                />
              </label>

              <label className="field">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                />
              </label>

              {error ? <p className="form-error">{error}</p> : null}

              <button className="login-button" type="submit">
                Sign In
              </button>
            </form>

            <div className="login-footer">
              <span>Demo account is pre-filled for UI testing.</span>
              <span>{loading ? "Checking API..." : `API: ${health?.status ?? "offline"}`}</span>
            </div>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">MMAFC Management System</p>
          <h1>Martial arts and fitness centre operations at a glance.</h1>
          <p className="hero-text">
            Welcome back. Monitor classes, memberships, staff access, training records, and daily
            operations from a single admin workspace.
          </p>
        </div>
        <div className="status-card">
          <span className="status-label">API status</span>
          <strong>{loading ? "Checking..." : health?.status ?? "Unavailable"}</strong>
          <span className="status-meta">
            {health ? `Updated ${new Date(health.timestamp).toLocaleString()}` : "Backend not connected yet"}
          </span>
        </div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <span>Active Members</span>
          <strong>{summary.activeUsers}</strong>
        </article>
        <article className="stat-card">
          <span>Pending Renewals</span>
          <strong>{summary.pendingApprovals}</strong>
        </article>
        <article className="stat-card">
          <span>Reports This Month</span>
          <strong>{summary.generatedReports}</strong>
        </article>
        <article className="stat-card">
          <span>System Status</span>
          <strong>{summary.systemStatus}</strong>
        </article>
      </section>

      <section className="panel-grid">
        <article className="panel">
          <div className="panel-heading">
            <h2>Core Modules</h2>
            <p>Suggested sections for your MMAFC management platform.</p>
          </div>
          <div className="module-list">
            {dashboardModules.map((module) => (
              <div key={module.key} className="module-card">
                <div>
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                </div>
                <span>{module.key}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <h2>Starter Roles</h2>
            <p>Use these roles for front desk, coaches, and administrators.</p>
          </div>
          <ul className="role-list">
            {userRoles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
