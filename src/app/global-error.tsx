"use client";

/** Last-resort error boundary for failures in the root layout. Must render its own <html>/<body>. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en-IN">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff7ed", color: "#1c1917" }}>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "96px 24px" }}>
          <p style={{ color: "#c2410c", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
            Anvaddya Orbit
          </p>
          <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: "16px 0" }}>Something went wrong.</h1>
          <p style={{ color: "#57534e", fontSize: 18, lineHeight: 1.6 }}>
            Please try again. If the problem continues, email contact@anvaddya.com.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              background: "#c2410c",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "14px 24px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
