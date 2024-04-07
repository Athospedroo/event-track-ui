class Error {
  static readonly PRECONDITION_ERROR = 1
  static readonly INTERNAL_SERVER_ERROR = 2

  code: number | undefined
  message: string | undefined

  constructor(code: number | undefined, message: string | undefined) {
    this.code = code
    this.message = message
  }
}

export {
  Error
}