import { AuthState } from '../auth/auth.reducer';
import { SettingsState } from '../../settings/settings.reducer';
import { StockMarketState } from '@app/examples/stock-market/stock-market.reducer';
import { TodosState } from '../../examples/todos/todos.reducer';
import { RefState } from '../reference/refdata.reducer';
import { DashboardState } from '../../dashboard/dashboard-state';
import { SearchQuoteState } from '@app/search-quotes/models/search-quote-state';

export interface AppState {
  auth: AuthState,
  ref: RefState
  settings: SettingsState,
  dashboard: DashboardState,
  searchquote: SearchQuoteState,
  example: {
    stock: StockMarketState,
    todo: TodosState
  }
}
