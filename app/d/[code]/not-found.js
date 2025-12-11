export default function DoodleNotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="brand">
          <img src="/assets/paywall.gif" alt="lovablee" width="50" height="50" />
          <span>lovablee</span>
        </div>

        <div className="not-found-content">
          <h1>🎨</h1>
          <h2>doodle not found</h2>
          <p>This doodle might have expired or the link is incorrect.</p>

          <div className="cta-buttons">
            <a href="/" className="btn-primary">
              go to lovablee.com
            </a>
            <a
              href="https://apps.apple.com/us/app/lovablee-doodles-love-notes/id6756137497"
              className="btn-secondary"
            >
              download app
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .not-found-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: var(--font-manrope), system-ui, sans-serif;
        }

        .not-found-container {
          text-align: center;
          max-width: 500px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 40px;
          font-family: var(--font-space), sans-serif;
        }

        .brand img {
          border-radius: 14px;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
        }

        .not-found-content {
          background: white;
          border-radius: 24px;
          padding: 48px 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .not-found-content h1 {
          font-size: 64px;
          margin: 0 0 16px 0;
        }

        .not-found-content h2 {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #212529;
          font-family: var(--font-space), sans-serif;
        }

        .not-found-content p {
          font-size: 16px;
          color: #6c757d;
          margin: 0 0 32px 0;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          font-size: 15px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-secondary {
          background: #f8f9fa;
          color: #212529;
          border: 2px solid #e9ecef;
        }

        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 640px) {
          .not-found-content {
            padding: 40px 24px;
          }

          .not-found-content h2 {
            font-size: 28px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
