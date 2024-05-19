import { voiceTypeToString } from "@/common/voiceTypeToString"
import { ModalRegular } from "@/components/modal/ModalRegular"
import { EventEmitterLocal } from "@/core/event"
import { ModalAction } from "@/core/modal"
import { UserCallAttendancetype } from "@/lib/callAttendance/callAttendanceType"
import { useState, useEffect } from "react"
interface UserCallAttendanceViewModalProps {
  eventLocal: EventEmitterLocal
  handleAddRegisterInCallAttendance: Function
}
export default function UserCallAttendanceViewModal(props: UserCallAttendanceViewModalProps) {
  const [userCallAttendance, setUserCallAttendance] = useState<UserCallAttendancetype>()
  const [isActive, setIsActive] = useState(true)
  const [ID, setID] = useState<string>()

  const MODAL_ID = 'userCallAttendanceViewModal'

  useEffect(() => {
    init()
    console.log()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function init() {
    subscribeOpenModal()
    subscribeCloseModal()
  }

  function subscribeOpenModal() {
    props.eventLocal.subscribe(`${MODAL_ID}:openModal`, (data: any) => {
      openModal(data)
    })
  }

  function subscribeCloseModal() {
    props.eventLocal.subscribe(`${MODAL_ID}:closeModal`, (data: any) => {
      closeModal(data)
    })
  }

  function openModal(data: any) {
    setUserCallAttendance(data)
    setID(data.ID)
    setIsActive(data.badgeChecked ? true : false)
    ModalAction.open(MODAL_ID)
  }

  function closeModal(data: any) {
    ModalAction.close(MODAL_ID)
  }

  function handleOnClickAddUserInCallAttendance(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault()
    const badgeChecked = isActive ? 1 : 2
    const values = { ID, badgeChecked }
    props.handleAddRegisterInCallAttendance(values)
    closeModal(null)
    handleOnClickCloseModal()
  }

  function handleOnClickCloseModal() {
    ModalAction.close(MODAL_ID)
  }

  const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'flex-start'
  }

  const item: React.CSSProperties = {
    width: '32%',
    padding: '0px',
    margin: '0px'
  }

  function handleBadgeOnChange() {
    setIsActive(!isActive)
  }

  return (
    <ModalRegular
      id={MODAL_ID}
      title={`${voiceTypeToString(userCallAttendance?.voiceType as number)}:`}
      footer={
        <>
          <button
            className="btn btn-outline-primary me-1 rounded-pill"
            id="btn-delete-attendanceType"
            onClick={e => handleOnClickAddUserInCallAttendance(e)}
          >
            Registrar presença
          </button>
          <button
            className="btn btn-outline-danger me-1 rounded-pill"
            aria-label="Close"
            onClick={handleOnClickCloseModal}
          >
            Sair
          </button>
        </>
      }
    >
      <>
        <div>
        <p className="text-break">Você realmente deseja confirmar a presença de: <b>{ userCallAttendance?.name } N° {userCallAttendance?.badgeNumber}?</b></p>
        </div>
      </>

    </ModalRegular>
  )
}