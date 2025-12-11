import { notFound } from 'next/navigation';

const SUPABASE_URL = 'https://ahtkqcaxeycxvwntjcxp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodGtxY2F4ZXljeHZ3bnRqY3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzIxMjIsImV4cCI6MjA0ODIwODEyMn0.kpU9tYc85KWw9xA83HlqFO7HfENCH3LLtUjZvkXKUXI';

async function getDoodle(code) {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/get_shared_doodle`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ p_short_code: code }),
        cache: 'no-store', // Always fetch fresh data
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching doodle:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { code } = await params;
  const doodle = await getDoodle(code);

  if (!doodle) {
    return {
      title: 'Doodle Not Found - lovablee',
      description: 'This doodle could not be found.',
    };
  }

  const imageUrl = doodle.doodle_image_url || `data:image/png;base64,${doodle.doodle_image_data}`;
  const shareUrl = `https://lovablee.com/d/${code}`;

  return {
    title: 'Check out this doodle on lovablee! 🎨',
    description: 'Someone sent you a hand-drawn doodle from lovablee. Download the app to send your own!',
    openGraph: {
      title: 'Check out this doodle! 🎨',
      description: 'Hand-drawn with love on lovablee',
      url: shareUrl,
      siteName: 'lovablee',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: 'Shared doodle from lovablee',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Check out this doodle! 🎨',
      description: 'Hand-drawn with love on lovablee',
      images: [imageUrl],
    },
  };
}

export default async function SharedDoodlePage({ params }) {
  const { code } = await params;
  const doodle = await getDoodle(code);

  if (!doodle) {
    notFound();
  }

  const imageUrl = doodle.doodle_image_url || `data:image/png;base64,${doodle.doodle_image_data}`;
  const createdDate = new Date(doodle.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="doodle-page">
      <div className="doodle-container">
        <div className="doodle-header">
          <div className="brand">
            <img src="/assets/paywall.gif" alt="lovablee" width="40" height="40" />
            <span>lovablee</span>
          </div>
        </div>

        <div className="doodle-card">
          <div className="doodle-image-wrapper">
            <img
              src={imageUrl}
              alt="Shared doodle"
              className="doodle-image"
            />
          </div>

          <div className="doodle-meta">
            <p className="doodle-date">Drawn on {createdDate}</p>
            <p className="doodle-views">👀 {doodle.view_count.toLocaleString()} views</p>
          </div>

          <div className="doodle-message">
            <h1>someone sent you a doodle! 🎨</h1>
            <p>download lovablee to send doodles to your partner, care for a shared pet, and stay close every day.</p>
          </div>

          <div className="cta-buttons">
            <a
              className="app-store-btn"
              href="https://apps.apple.com/us/app/lovablee-doodles-love-notes/id6756137497"
              aria-label="Download on the App Store"
            >
              <img src="/assets/appstore.svg" alt="Download on the App Store" />
            </a>
            <a className="app-store-btn disabled" href="#" aria-label="Get it on Google Play">
              <img src="/assets/googleplay.svg" alt="Get it on Google Play" />
            </a>
          </div>

          <p className="android-note">Android coming soon</p>
        </div>

        <footer className="doodle-footer">
          <a href="/">← back to lovablee.com</a>
          <div className="footer-links-small">
            <a href="/privacy.html">privacy</a>
            <span>·</span>
            <a href="/terms.html">terms</a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .doodle-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: var(--font-manrope), system-ui, sans-serif;
        }

        .doodle-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .doodle-header {
          margin-bottom: 30px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-size: 24px;
          font-weight: 700;
          font-family: var(--font-space), sans-serif;
        }

        .brand img {
          border-radius: 12px;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        }

        .doodle-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .doodle-image-wrapper {
          width: 100%;
          aspect-ratio: 1;
          background: #f8f9fa;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #e9ecef;
        }

        .doodle-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .doodle-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #e9ecef;
          margin-bottom: 24px;
          font-size: 14px;
          color: #6c757d;
        }

        .doodle-date {
          margin: 0;
        }

        .doodle-views {
          margin: 0;
          font-weight: 600;
        }

        .doodle-message {
          text-align: center;
          margin-bottom: 32px;
        }

        .doodle-message h1 {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #212529;
          font-family: var(--font-space), sans-serif;
        }

        .doodle-message p {
          font-size: 16px;
          line-height: 1.6;
          color: #6c757d;
          margin: 0;
        }

        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .app-store-btn {
          transition: transform 0.2s, opacity 0.2s;
        }

        .app-store-btn:hover:not(.disabled) {
          transform: scale(1.05);
        }

        .app-store-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .app-store-btn img {
          height: 48px;
          width: auto;
        }

        .android-note {
          text-align: center;
          font-size: 13px;
          color: #adb5bd;
          margin: 0;
        }

        .doodle-footer {
          margin-top: 40px;
          text-align: center;
          color: white;
        }

        .doodle-footer a {
          color: white;
          text-decoration: none;
          opacity: 0.9;
          transition: opacity 0.2s;
        }

        .doodle-footer a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .footer-links-small {
          margin-top: 12px;
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 640px) {
          .doodle-card {
            padding: 24px;
          }

          .doodle-message h1 {
            font-size: 24px;
          }

          .doodle-message p {
            font-size: 15px;
          }

          .app-store-btn img {
            height: 44px;
          }
        }
      `}</style>
    </div>
  );
}
