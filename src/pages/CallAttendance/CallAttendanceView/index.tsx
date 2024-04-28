import { voiceTypeToString } from "@/common/voiceTypeToString"
import { useEffect, useState } from "react"
import { UserCallAttendancetype, listUserCallAttendanceRequestType, registerUserCallAttendanceRequestType, removerUserCallAttendaceRequestType } from "../../../lib/callAttendance/callAttendanceType"
import { callAttendanceController } from "../../../lib/callAttendance/callAttendanceController"
import { CallAttendanceViewEvent } from "../../../lib/callAttendance/callAttendanceViewEvent"
import { EventEmitterLocal } from "../../../core/event"
// import { NotificationAction } from "@/components/Notification/Notification"
import { ErrorComponent } from "@/components/ErrorComponent"
import { SuccessComponent } from "@/components/SuccessComponent"
import { useRouter } from "next/router"
import { eventViewController } from "@/lib/event/EventViewController"
import ListUsersCallAttendance from "./components/ListUserCallAttendance"
import UserDetailsAndRecordsViewModal from "./components/UserDetailsAndRecordsViewModal"
import UserCallAttendanceViewModal from "./components/UserCallAttendanceViewModal"
import { NotificationAction } from "@/components/Notification/Notification"

export default function CallAttendanceView() {
  const [eventLocal] = useState(new EventEmitterLocal())

  const router = useRouter()
  const [usersCallAttendance, setUsersCallAttendance] = useState<UserCallAttendancetype[]>([])

  const [isError, setIsError] = useState<any[]>([])
  const [messageSuccess, setMessageSuccess] = useState<string>('')
  const [eventID, setEventID] = useState<number>()
  const [voiceType, setVoicetype] = useState<number>()
  const [time, setTime] = useState<boolean>(false)
  const [searchUser, setSearchUser] = useState<UserCallAttendancetype | null | undefined>(null)
  const [searchUserNumber, setSearchUserNumber] = useState<string | null | undefined>(null)

  useEffect(() => {
    if (router.query.eventID && router.query.voiceType) {
      setEventID(Number(router.query.eventID))
      setVoicetype(Number(router.query.voiceType))
      fetchUsersCallAttendance(Number(router.query.voiceType), Number(router.query.eventID))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchUsersCallAttendance(voiceType: number, eventID: number) {
    const req: listUserCallAttendanceRequestType = {
      voiceType,
      eventID
    }

    const { errors, usersCallAttendance } = await callAttendanceController.listUserCallAttendanceController(req)

    if (errors && errors.length > 0) {
      console.log('deu merda', errors)
    }

    if (usersCallAttendance) {
      setUsersCallAttendance(usersCallAttendance)
    }
  }


  async function handleOnClickOpenModal(e: React.MouseEvent<HTMLButtonElement>, userID: string) {
    e.preventDefault()
    const response = await callAttendanceController.getUser(userID)

    CallAttendanceViewEvent.openUserDetailsAndRecordsModalView(eventLocal, response?.user)
  }

  async function handleOnClickOpenModalUserCallAtendance(e: React.MouseEvent<HTMLButtonElement>, userID: string) {
    e.preventDefault()
    const response = await callAttendanceController.getUser(userID)
    console.log('aloalaoaoalao', response.user)
    CallAttendanceViewEvent.openUserCallAttendanceViewModal(eventLocal, response?.user)
  }

  async function handleAddRegisterInCallAttendance(values: any) {
    const { ID, badgeChecked } = values
    const registerPresenceRequest: registerUserCallAttendanceRequestType = {
      userID: ID,
      userAdmID: '0fb2a877-1503-4547-8428-76c1350c113c',
      badgeChecked,
      eventID,
      presence: 1
    }

    const registerPresence = await callAttendanceController.registerUserCallAttendance(registerPresenceRequest)
    const { errors } = registerPresence

    if (errors && errors.length > 0) {
      CallAttendanceViewEvent.closeUserDetailsAndRecordsModalView(eventLocal, null)
      setIsError(errors)
    } else {
      CallAttendanceViewEvent.closeUserDetailsAndRecordsModalView(eventLocal, null)
      // setMessageSuccess('Presença adicionada com sucesso!')
      NotificationAction.notifySuccess(`Presença adicionada com sucesso!`)
      await fetchUsersCallAttendance(voiceType as number, eventID as number)
    }
  }


  function clearError() {
    setIsError([])
  }

  function clearMessage() {
    setMessageSuccess('')
  }

  function handleOnClickBack() {
    router.push({
      pathname: '/Event/EventView'
    })
  }

  function handleSearchUser(e: any) {
    const filterUser = Number(e.target.value)
    const findUser = usersCallAttendance.find((e) => filterUser === e.badgeNumber)
    setSearchUser(findUser)
    setSearchUserNumber(e.target.value)
  }

  function cleanInputSearchUser(value: any) {
    if (value) {
      setSearchUser(null)
      setSearchUserNumber('')
    }
  }

  async function handleConcludeEvent() {
    try {
      const { errors } = await eventViewController.concludeEventController(eventID as number)

      if (errors) {
        setIsError(errors)
      }
      setMessageSuccess("evento concluído com sucesso!!")
      handleOnClickBack()
    } catch (error) {
      console.log(error)
    }
  }

  function obterDataEmPortugues() {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const mesesDoAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  
    const dataAtual = new Date();
    const diaSemana = diasDaSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = mesesDoAno[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();
  
    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  
    return dataFormatada;
  }

  return (
    <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
      <section>
        <div className="row align-items-center">
          <div className="col">
            <h4 className="h4">{voiceTypeToString(voiceType as number)}</h4>
            <div className="d-flex mt-3">
              <span className="date">{obterDataEmPortugues()}</span>

            </div>
          </div>
          {/* <div className="col-auto justify-content-end me-3 pe-0">

            <span>Total</span>
            <span className="ms-1 badge rounded-pill bg-secondary">{`288 -> mocado`}</span>

          </div> */}
          <div className="col-auto justify-content-end me-3 pe-0">
            <button
              className="btn p-1 mb-2 pt-2"
              onClick={handleOnClickBack}
            >
              <i className="fas fa-long-arrow-alt-left" />
              <span>Voltar</span>
            </button>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex mt-3">
                <div className="input-group mb-3 py-1">
                  <input type="text"
                    className="form-control rounded-pill py-2"
                    placeholder="Digite o número do crachá :)"
                    aria-label="Digite o número do crachá :)"
                    aria-describedby="button-addon2"
                    value={searchUserNumber ? searchUserNumber : ''}
                    onChange={handleSearchUser}
                  />
                  {/* <i className="fas fa-search"></i> */}
                  {/* <div className="input-group-append ps-2">
                    <button className="btn btn-outline-secondary rounded-pill bts-sm" type="button" id="button-addon2">buscar</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 mt-md-1">
          <div className="col mb-2">
            <ListUsersCallAttendance
              handleAddRegisterInCallAttendance={handleAddRegisterInCallAttendance}
              handleOnClickOpenModal={handleOnClickOpenModal}
              handleOnClickOpenModalUserCallAtendance={handleOnClickOpenModalUserCallAtendance}
              usersCallAttendance={usersCallAttendance}
              searchUser={searchUser}
              cleanInputSearch={cleanInputSearchUser}
            />
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col d-flex align-self-center justify-content-center">
            <button className="btn btn-outline-primary  rounded-pill" onClick={handleConcludeEvent}>
              Concluir Evento
            </button>
          </div>
        </div>
      </section>
      <UserDetailsAndRecordsViewModal
        eventLocal={eventLocal}
        handleAddRegisterInCallAttendance={handleAddRegisterInCallAttendance}
      />
      <UserCallAttendanceViewModal
        eventLocal={eventLocal}
        handleAddRegisterInCallAttendance={handleAddRegisterInCallAttendance}
      />
    </div>
  )
}