export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212', color: 'white' }}>
      <div style={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <h2>Welcome Back!</h2>
        <div style={{ margin: '10px 0' }}>Username: <strong>USER</strong></div>
        <div style={{ margin: '10px 0' }}>Password: <strong>••••••••</strong></div>
        <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Enter Dashboard</button>
      </div>
    </div>
  );
}

// Dashboard Page
export function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212', color: 'white' }}>
      <div style={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <h1>Welcome to your Dashboard</h1>
        <p>Here is your user information:</p>
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#292929', borderRadius: '5px' }}>
          <p><strong>Username:</strong> USER</p>
          <p><strong>Email:</strong> user@example.com</p>
          <p><strong>Role:</strong> Admin</p>
        </div>
      </div>
    </div>
  );
}
