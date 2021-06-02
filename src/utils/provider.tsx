import { TodoListStore } from '../stores/todo-list'
import { StoreProvider } from './store-provider'

const localCache = JSON.parse(localStorage.getItem('xy-todolist:todos') || '[]')
const todolist = new TodoListStore(localCache)

export const Provider: React.FC = ({ children }) => (
  <StoreProvider value={todolist}>{children}</StoreProvider>
)

export default Provider
