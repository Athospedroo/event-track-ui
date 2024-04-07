class ModalAction {
  static getBootstrap() {
    let bootstrap:any = null

    if (typeof window !== 'undefined') {
      bootstrap = require('bootstrap')
    }

    return bootstrap
  }

  static open(id:string) {
    const bootstrap = this.getBootstrap()
    if (bootstrap) {
      const modal = new bootstrap.Modal(document.getElementById(id) as HTMLElement)
      modal.show()
    }
  }

  static close(id:string) {
    const bootstrap = this.getBootstrap()
    if (bootstrap) {
      const modal = bootstrap.Modal.getInstance(document.getElementById(id) as HTMLElement)
      if (modal) {
        modal.hide()
      }
    }
  }
}

export {
  ModalAction
}