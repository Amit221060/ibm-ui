export interface SearchQuoteState {
    loading: boolean;
    loadingMsg: string;
    defaultCriteria: string;
    lastSelectedCriteria: string;
    savedCriterias: SearchCriteria[];
    results: SearchResult[];
}

export interface SearchCriteria {
    id: string;
    name: string;
    sequence: number;
    editable?: boolean;
    searchOnName?: string;
    searchOnValue?: any;
    default?: boolean;
    fetchCount?: number;
}

export interface SearchResult {
    quoteid: string;
    country: string;
    quoteType: string;
    euCompany: string;
    tier1: string;
    tier2: string;
    quoteManager: string;
    listprice: number;
    quotedprice: number;
    orderStatus: number;
}
