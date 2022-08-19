import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/header'
import { TasksPage } from './pages/tasks/tasks-page'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<TasksPage />} />
      </Routes>
    </Router>
  )
}

export default App
