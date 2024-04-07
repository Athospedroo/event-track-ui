class EventEmitterLocal {
  _events: any = {}

  dispatch(event: string, data: any): void {
      if (!this._events[event]) return
      this._events[event].forEach((callback: Function) => callback(data))
  }

  subscribe(event: string, callback: Function): void {
      if (!this._events[event]) {
        this._events[event] = []
      }

      if (this._events[event].length === 0) {
        this._events[event].push(callback)
      }
  }

  unsubscribe(event: string): void {
    this._events[event] = undefined
  }
}

export {
  EventEmitterLocal
}