import { useEffect, useState } from "react"
import { UserCallAttendancetype } from "../../../../lib/callAttendance/callAttendanceType"
import { EventEmitterLocal } from "../../../../core/event"
import { ModalAction } from "../../../../core/modal"
import { ModalFullScreen } from "@/components/modal/ModalFullScreen"
import { voiceTypeToString } from "@/common/voiceTypeToString"
import Form from 'react-bootstrap/Form';
interface UserDetailsAndRecordsViewModalProps {
  eventLocal: EventEmitterLocal
  handleAddRegisterInCallAttendance: Function
}

export default function UserDetailsAndRecordsViewModal(props: UserDetailsAndRecordsViewModalProps) {
  const [userCallAttendance, setUserCallAttendance] = useState<UserCallAttendancetype>()
  const [isActive, setIsActive] = useState(true)
  const [ID, setID] = useState<string>()

  const MODAL_ID = 'userDetailsAndRecordsModalView'

  useEffect(() => {
    init()
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
  }

  function handleOnClickRegisterExit() {

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
    <ModalFullScreen
      id={MODAL_ID}
      title="Visualização detalhada"
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
            onClick={handleOnClickRegisterExit}
          >
            Registrar Sáida
          </button>
        </>
      }
    >
      <>
        <div>
          <div style={container}>
            <section className="col-md-12 mr-5 mt-3">
              <h4 className="fs-xs fw-medium text-muted text-uppercase">Informações Pessoais</h4>
            </section>
            <div className="row">
              <div className="col-md-auto" style={{ flex: '1' }}>

                <i className="fa fa-user" style={{ fontSize: '150px' }}></i>

              </div>
              <div className="col-md-10">
                <div style={container}>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>Nome</label>
                    <span>{userCallAttendance?.name}</span>
                  </div>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>Numero</label>
                    <span>{userCallAttendance?.badgeNumber}</span>
                  </div>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>Nipe</label>
                    <span>{voiceTypeToString(userCallAttendance?.voiceType as number)}</span>
                  </div>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>Área</label>
                    <span>{userCallAttendance?.areaNumber}</span>
                  </div>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>Igreja</label>
                    <span>{userCallAttendance?.churchName}</span>
                  </div>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>Cartão de Membro</label>
                    <span>{userCallAttendance?.memberCard}</span>
                  </div>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>email</label>
                    <span>{userCallAttendance?.email}</span>
                  </div>
                  <div style={item}>
                    <label className="fw-bold" style={{ display: 'block' }}>Crachá</label>
                    <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        // label="Check this switch"
                        checked={isActive}
                        onChange={handleBadgeOnChange}
                      />
                    </Form>
                    {/* <input
                      type="checkbox"
                      className="form-check-input cursor-pointer"
                      name=""
                      id=""
                      checked={isActive}
                      onChange={handleBadgeOnChange}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </ModalFullScreen>
  )
}

