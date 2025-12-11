export default function DoodleNotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'var(--font-manrope), system-ui, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          color: 'white',
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '40px',
          fontFamily: 'var(--font-space), sans-serif'
        }}>
          <img src="/assets/paywall.gif" alt="lovablee" width="50" height="50" style={{
            borderRadius: '14px',
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))'
          }} />
          <span>lovablee</span>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '48px 32px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}>
          <h1 style={{
            fontSize: '64px',
            margin: '0 0 16px 0'
          }}>🎨</h1>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            margin: '0 0 12px 0',
            color: '#212529',
            fontFamily: 'var(--font-space), sans-serif'
          }}>doodle not found</h2>
          <p style={{
            fontSize: '16px',
            color: '#6c757d',
            margin: '0 0 32px 0',
            lineHeight: 1.6
          }}>This doodle might have expired or the link is incorrect.</p>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/" style={{
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontSize: '15px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              display: 'inline-block'
            }}>
              go to lovablee.com
            </a>
            <a
              href="https://apps.apple.com/us/app/lovablee-doodles-love-notes/id6756137497"
              style={{
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                fontSize: '15px',
                background: '#f8f9fa',
                color: '#212529',
                border: '2px solid #e9ecef',
                display: 'inline-block'
              }}
            >
              download app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
