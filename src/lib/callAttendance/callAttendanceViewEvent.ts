import { EventEmitterLocal } from "../../core/event"

class CallAttendanceViewEvent {
  static openUserDetailsAndRecordsModalView(eventLocal: EventEmitterLocal, data: any) {
    eventLocal.dispatch('userDetailsAndRecordsModalView:openModal', data)
  }

  static closeUserDetailsAndRecordsModalView(eventLocal: EventEmitterLocal, data: any) {
    eventLocal.dispatch('userDetailsAndRecordsModalView:closeModal', data)
  }

  static openUserCallAttendanceViewModal(eventLocal: EventEmitterLocal, data: any) {
    eventLocal.dispatch('userCallAttendanceViewModal:openModal', data)
  }

  static closeUserCallAttendanceViewModal(eventLocal: EventEmitterLocal, data: any) {
    eventLocal.dispatch('userCallAttendanceViewModal:closeModal', data)
  }
}
//UserCallAttendanceViewModal
export {
  CallAttendanceViewEvent
}

