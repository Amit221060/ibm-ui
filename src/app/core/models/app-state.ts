import { AuthState } from '../auth/auth.reducer';
import { SettingsState } from '../../settings/settings.reducer';
import { StockMarketState } from '@app/examples/stock-market/stock-market.reducer';
import { TodosState } from '../../examples/todos/todos.reducer';
export interface AppState {
  auth: AuthState,
  settings: SettingsState,
  example: {
    stock: StockMarketState,
    todo: TodosState
  }
}
