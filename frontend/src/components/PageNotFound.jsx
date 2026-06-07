import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '7rem', fontWeight: 700, letterSpacing: '-0.04em', margin: 0, color: '#111' }}>
        <span style={{ color: '#FACC15' }}>4</span>0<span style={{ color: '#FACC15' }}>4</span>
      </h1>

      <p style={{ fontSize: '1.4rem', fontStyle: 'italic', color: '#555', margin: '1rem 0 0.5rem' }}>
        Lost in the void.
      </p>

      <hr style={{ width: 40, border: 'none', borderTop: '1px solid #ddd', margin: '1rem auto 1.5rem' }} />

      <p style={{ fontSize: '15px', color: '#888', maxWidth: 360, lineHeight: 1.7, margin: '0 0 2rem' }}>
        The page you were looking for doesn't exist — it may have moved, been deleted, or never existed at all.
      </p>
    </div>
  )
}

export default PageNotFound