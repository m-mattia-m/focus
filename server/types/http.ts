export interface HttpError {
  url: string,
  statusCode: number,
  statusMessage: string,
  message: string,
  stack: string,
}

