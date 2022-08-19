import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/header'
import { TasksPage } from './pages/tasks/tasks-page'
import { Redirect } from './utils/router/redirect'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Redirect to='/tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
      </Routes>
    </Router>
  )
}

export default App
