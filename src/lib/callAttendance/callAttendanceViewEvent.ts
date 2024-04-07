import { EventEmitterLocal } from "../../core/event"

class CallAttendanceViewEvent {
  static openUserDetailsAndRecordsModalView(eventLocal: EventEmitterLocal, data: any) {
    eventLocal.dispatch('userDetailsAndRecordsModalView:openModal', data)
  }

  static closeUserDetailsAndRecordsModalView(eventLocal: EventEmitterLocal, data: any) {
    eventLocal.dispatch('userDetailsAndRecordsModalView:closeModal', data)
  }
}

export {
  CallAttendanceViewEvent
}

