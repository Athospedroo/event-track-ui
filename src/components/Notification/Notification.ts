import { Error } from "../errorType"

const DELAY = 3000

class NotificationAction {
  private static getBootstrap() {
    let bootstrap:any = null

    if (typeof window !== 'undefined') {
      bootstrap = require('bootstrap')
    }

    return bootstrap
  }

  private static setToastBodyText(el: HTMLElement, text: string): void {
    const bodies = el.getElementsByClassName('toast-body')

    if (bodies?.length > 0) {
      for (let index = 0; index < bodies.length; index++) {
        const body = bodies[index]
        
        body.innerHTML = text
      }
    }
  }

  static notifySuccess(msg: string): void {
    const bootstrap = this.getBootstrap()

    if (bootstrap) {
      const el = document.getElementById('notificationSuccessToast')

      if (el) {
        this.setToastBodyText(el, msg)
        const toast = new bootstrap.Toast(el, {
          autoHide: true,
          delay: DELAY
        })
        toast.show()
      }
    }
  }

  static notifyWarning(msg: string): void {
    const bootstrap = this.getBootstrap()

    if (bootstrap) {
      const el = document.getElementById('notificationWarnToast')

      if (el) {
        this.setToastBodyText(el, msg)
        const toast = new bootstrap.Toast(el, {
          autoHide: true,
          delay: DELAY
        })
        toast.show()
      }
    }
  }

  static notifyError(msg: string): void {
    const bootstrap = this.getBootstrap()

    if (bootstrap) {
      const el = document.getElementById('notificationErrorToast')

      if (el) {
        this.setToastBodyText(el, msg)
        const toast = new bootstrap.Toast(el, {
          autoHide: true,
          delay: DELAY
        })
        toast.show()
      }
    }
  }

  static notifyAllErrors(errors: Array<Error>) {
    const messagePreconditionError = errors.filter((e) => e.code === Error.PRECONDITION_ERROR && e.message).map((e) => e.message).join('\n')
    const messageInternalServerError = errors.filter((e) => e.code === Error.INTERNAL_SERVER_ERROR && e.message).map((e) => e.message).join('\n')

    if (messagePreconditionError) {
      this.notifyWarning(messagePreconditionError)
    }

    if (messageInternalServerError) {
      this.notifyError(messageInternalServerError)
    }
  }
}

export {
  NotificationAction
}
