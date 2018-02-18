import { CodeLabel } from '../../../common/models/code-label';
export interface IQuoteStatus {
  responsetime: string,
  message: string,
  status: string,
  bpstatuslist: CodeLabel[],
  internalstatuslist: CodeLabel[],
  bpreasoncodeslis: CodeLabel[],
  internalreasoncodeslist: CodeLabel[]
}
