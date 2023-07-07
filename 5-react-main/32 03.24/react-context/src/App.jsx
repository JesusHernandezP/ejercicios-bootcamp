import Toolbar from "./components/Toolbar.jsx"
import ThemeProvider from "./Providers/Theme.jsx"

function App() {
    return (
    <div className="App">
      <ThemeProvider>
        <Toolbar />
      </ThemeProvider>

    </div>

  )
}

export default App
