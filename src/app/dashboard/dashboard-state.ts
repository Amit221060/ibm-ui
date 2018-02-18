export interface DashboardState {
  apiRequestQuotePanel?: any,
  loadingQuotePanel: boolean,
  loadingQuotePanelMsg: string,
  errorMsgQuotePanel: string,
  myQuotesSummary?: MyQuotesSummary[]
}

export interface MyQuotesSummary {
  statusItem: string,
  count: string
}
