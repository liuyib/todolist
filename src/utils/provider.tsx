import { TodoListStore } from '../stores/todo-list'
import { StoreProvider } from './store-provider'

const todolist = new TodoListStore(
  JSON.parse(localStorage.getItem('xy-todolist:todos') || ''),
)

export const Provider: React.FC = ({ children }) => (
  <StoreProvider value={todolist}>{children}</StoreProvider>
)

export default Provider
