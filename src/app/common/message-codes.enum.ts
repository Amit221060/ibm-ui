export enum MessageCodes {
  /*  HTTP RESPONSE CODES*/
  HTTP_RESPONSE_CODE_OK = 200,
  HTTP_RESPONSE_CODE_NOT_FOUND = 400,
  HTTP_RESPONSE_CODE_UNAUTHORIZED = 401,

  /* EPRICER MESSAGE CODES */
  EP_TECHNICAL_ERROR = 'ET_000',
  EP_USER_NOT_FOUND = 'EF_0001',
  EP_USER_UNAUTHORIZED = 'EF_0002',
  EP_USER_NOT_FOUND_IN_DB = 'ET_0456'
}
