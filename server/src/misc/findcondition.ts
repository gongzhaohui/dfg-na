export class SearchFindCondition {
  type: string;
  term: any;
}
export class HourRateFindCondition {
  cinvccode: string;
  period: string;
}
export class StockTakingFindCondition {
  category: string;
  period: string;
  creator: string;
}
export class LogFindCondition {
  operation: string;
  period: string;
  // operator: string;
}
export class OrderFindCondition {
  barcode: string;
  type: string;
}