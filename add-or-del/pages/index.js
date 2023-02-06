import React, { useState } from 'react'

const Index = () => {
  const [x, setX] = useState(0)

  return (
    <div style={{ backgroundColor: '#333', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button style={{ backgroundColor: 'green', padding: '50px 100px', fontSize: '70px' }} onClick={() => setX(x + 1)}>+</button>
        <input type="number" style={{ margin: '0 50px', fontSize: '80px', color: 'white', width: '200px', height: '100px', textAlign: 'center' }} value={x} onChange={(e) => setX(parseInt(e.target.value))} />
        <button style={{ backgroundColor: 'red', padding: '50px 100px', fontSize: '70px' }} onClick={() => setX(x - 1)}>-</button>
      </div>
    </div>
  )
}

export default Index
