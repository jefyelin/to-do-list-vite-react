import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/header'
import { TasksPage } from './pages/tasks/tasks-page'
import { Redirect } from './utils/router/redirect'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/teste' element={<div>Teste</div>} />
        <Route path='/teste2' element={<Redirect to='/teste3' />} />
        <Route path='/teste3' element={<div>Teste3</div>} />
      </Routes>
    </Router>
  )
}

export default App
