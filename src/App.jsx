import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Api from './componentes/Api'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Api />
    </QueryClientProvider>
  )
}

export default App