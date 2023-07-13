import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { DiscoverPage } from './pages/DiscoverPage';
import { JoinPage } from './pages/JoinPage';

export function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/discover" element={<DiscoverPage/>} />
          <Route path="/join" element={<JoinPage/>} />
        </Routes>
      </Router>
  )
}

