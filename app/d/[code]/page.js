import { notFound } from 'next/navigation';

const SUPABASE_URL = 'https://ahtkqcaxeycxvwntjcxp.supabase.co';
// Keep this in sync with the mobile app anon key; the previous value was rotated.
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodGtxY2F4ZXljeHZ3bnRqY3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MDI3MDQsImV4cCI6MjA4MDA3ODcwNH0.cyIkcEN6wd71cis85jAOCMHrx8RoHbuMuUOvi_b10SI';

async function getDoodle(code) {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/get_shared_doodle`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          // Supabase REST needs the JWT in Authorization as well to satisfy RLS.
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ p_short_code: code }),
        cache: 'no-store',
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'var(--font-manrope), system-ui, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 0'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'white',
            fontSize: '24px',
            fontWeight: 700,
            fontFamily: 'var(--font-space), sans-serif'
          }}>
            <img src="/assets/paywall.gif" alt="lovablee" width="40" height="40" style={{
              borderRadius: '12px',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))'
            }} />
            <span>lovablee</span>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{
            width: '100%',
            aspectRatio: '1',
            background: '#f8f9fa',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #e9ecef'
          }}>
            <img
              src={imageUrl}
              alt="Shared doodle"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
            borderBottom: '1px solid #e9ecef',
            marginBottom: '24px',
            fontSize: '14px',
            color: '#6c757d'
          }}>
            <p style={{ margin: 0 }}>Drawn on {createdDate}</p>
            <p style={{ margin: 0, fontWeight: 600 }}>👀 {doodle.view_count.toLocaleString()} views</p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              color: '#212529',
              fontFamily: 'var(--font-space), sans-serif'
            }}>someone sent you a doodle! 🎨</h1>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#6c757d',
              margin: 0
            }}>download lovablee to send doodles to your partner, care for a shared pet, and stay close every day.</p>
          </div>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '12px'
          }}>
            <a
              href="https://apps.apple.com/us/app/lovablee-doodles-love-notes/id6756137497"
              aria-label="Download on the App Store"
              style={{
                transition: 'transform 0.2s, opacity 0.2s',
                display: 'inline-block'
              }}
            >
              <img src="/assets/appstore.svg" alt="Download on the App Store" style={{ height: '48px', width: 'auto' }} />
            </a>
            <a href="#" aria-label="Get it on Google Play" style={{
              opacity: 0.5,
              cursor: 'not-allowed',
              transition: 'transform 0.2s, opacity 0.2s',
              display: 'inline-block'
            }}>
              <img src="/assets/googleplay.svg" alt="Get it on Google Play" style={{ height: '48px', width: 'auto' }} />
            </a>
          </div>

          <p style={{
            textAlign: 'center',
            fontSize: '13px',
            color: '#adb5bd',
            margin: 0
          }}>Android coming soon</p>
        </div>

        <footer style={{
          marginTop: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <a href="/" style={{
            color: 'white',
            textDecoration: 'none',
            opacity: 0.9
          }}>← back to lovablee.com</a>
          <div style={{
            marginTop: '12px',
            fontSize: '14px',
            opacity: 0.8,
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <a href="/privacy.html" style={{ color: 'white', textDecoration: 'none' }}>privacy</a>
            <span>·</span>
            <a href="/terms.html" style={{ color: 'white', textDecoration: 'none' }}>terms</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
