import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'
import Api from './componentes/Api'
import Detalhes from './componentes/Detalhes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/personagem/:id" element={<Detalhes />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App