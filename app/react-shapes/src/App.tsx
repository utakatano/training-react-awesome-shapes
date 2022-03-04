import { Circle, Donut } from 'react-awesome-shapes'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <Circle
            color="linear-gradient(135deg, #a5b4fc, #6366f1)"
            size={['150px', '150px', '180px', '180px']}
            zIndex={2}
          />
        </section>
        <section>
          <Donut
            color="#f43f5e"
            size="180px"
            width={['40px', '40px', '60px', '60px']}
            zIndex={2}
          />
        </section>
      </header>
    </div>
  )
}

export default App
