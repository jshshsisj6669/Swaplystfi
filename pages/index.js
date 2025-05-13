// pages/index.js

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f7f7f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ fontSize: '2rem', color: '#111' }}>Welcome to <strong>SwaplystFi</strong></h1>
      <p style={{ color: '#444' }}>Powered by Uniswap</p>

      <div style={{
        width: 'min(100%, 420px)',
        height: '660px',
        marginTop: '2rem',
        border: '1px solid #ccc',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}>
        <iframe
          src="https://app.uniswap.org/#/swap?theme=light"
          height="100%"
          width="100%"
          style={{ border: 'none' }}
          title="Uniswap Widget"
        />
      </div>
    </div>
  );
  }
