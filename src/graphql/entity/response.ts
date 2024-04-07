import { Error } from "./error"

class ResponseGraphQL {
  private payload: any
  private errors: Array<Error> | null

  constructor(payload: any, errors: Array<Error> | null) {
    this.payload = payload
    this.errors = errors
  }

  getPayload(): any {
    return this.payload
  }

  getErrors(): Array<Error> | null {
    return this.errors
  }

  hasError(): boolean {
    return this.errors ? this.errors.length > 0 : false
  }

  hasInternalError(): boolean {
    return this.errors ? this.errors.filter((e) => e.code === Error.INTERNAL_SERVER_ERROR).length > 0 : false
  }

  hasPreconditionError(): boolean {
    return this.errors ? this.errors.filter((e) => e.code === Error.PRECONDITION_ERROR).length > 0 : false
  }

  toStringError(): string | undefined {
    return this.errors?.filter((e) => !!e.message).map((e) => e.message).join('\n')
  }

  toStringInternalError(): string | undefined {
    return this.errors?.filter((e) => e.code === Error.INTERNAL_SERVER_ERROR).filter((e) => !!e.message).map((e) => e.message).join('\n')
  }

  toStringPreconditionError(): string | undefined {
    return this.errors?.filter((e) => e.code === Error.PRECONDITION_ERROR).filter((e) => !!e.message).map((e) => e.message).join('\n')
  }
}

export {
  ResponseGraphQL
}