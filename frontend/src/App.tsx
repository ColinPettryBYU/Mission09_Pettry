import './App.css'
import Header from './components/Header'
import TeamList from './components/TeamList'

function App() {
  return (
    <>
      {/* Top banner/title section */}
      <Header />

      {/* List of all basketball teams */}
      <TeamList />
    </>
  )
}

export default App
