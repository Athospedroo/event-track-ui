class Error {
  static readonly INTERNAL_SERVER_ERROR = 2
  static readonly PRECONDITION_ERROR = 1

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