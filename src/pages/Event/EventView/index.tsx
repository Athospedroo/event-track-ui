import { useContext, useEffect, useState } from "react"
import { EventType } from "../../../lib/event/EventViewType"
import { eventViewController } from "../../../lib/event/EventViewController"
import { useRouter } from "next/router"
import { AuthContext } from "@/context/AuthContext"
import { GetServerSideProps } from "next"
import { parseCookies } from 'nookies'

export default function EventView() {

  const [events, setEvents] = useState<EventType[]>([])
  const router = useRouter()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    const response = await eventViewController.listEvents()

    const { errors, events } = response

    if (errors && errors.length > 0) {
      console.log(errors)
    } 
    
    if (events) {
      setEvents(events)
    }
  }

  async function handleOnClickInitEvent(e: React.MouseEvent<HTMLButtonElement>, eventID: number, voiceType: number) {
    e.preventDefault()
    if (eventID) {
      const response = await eventViewController.initEvent(eventID)

      if (response.errors && response.errors.length > 0) {
        console.log('Erros', response.errors)
      } else {
        router.push({
          pathname: '/CallAttendance/CallAttendanceView',
          query: {
            eventID,
            voiceType
          }
        })
      }
    }
  }

  function handleOnClickRedirect(e: React.MouseEvent<HTMLButtonElement>, eventID: number, voiceType: number) {
    console.log('eventId', eventID)
    e.preventDefault()
    router.push({
      pathname: '/CallAttendance/CallAttendanceView',
      query: {
        eventID,
        voiceType
      }
    })
  }

  function handleOnClickBack() {
    router.push({
      pathname: '/Dashboard'
    })
  }
  function handleOnClickCreate() {
    router.push({
      pathname: '/Event/CreateEventView'
    })
  }

  return (
    // <LayoutView>
    // </LayoutView>

    <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
      <section>
        <div className="row align-items-center">
          <div className="col">
            <h4 className="h4">Iniciar Evento</h4>
          </div>
          <div className="row">
            <div className="col-6 justify-content-end me-3 pe-0">
              <button className="btn btn-outline-primary rounded-pill " onClick={handleOnClickCreate}>
                Novo
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6 justify-content-end me-3 pe-0">
              <button
                className="btn p-1 mb-2 pt-2"
                onClick={handleOnClickBack}
              >
                <i className="fas fa-long-arrow-alt-left" />
                <span>Voltar</span>
              </button>
            </div>

          </div>
          <div className="row">
            <div className="table-responsive overflow-purple-y">
              <table className="table">
                <thead>
                  <tr>
                    <th className="border-0 py-2 rounded-pill rounded-end-0 text-body-secondary ps-4" style={{ width: '40%', background: '#D0D9D4' }}>Nome</th>
                    <th className="border-0 text-body-secondary  text-start" style={{ width: '20%', background: '#D0D9D4' }}>Descrição</th>
                    <th className="border-0 text-body-secondary  text-start" style={{ width: '35%', background: '#D0D9D4' }}>Status</th>
                    <th className="border-0 py-2 rounded-pill rounded-start-0 text-body-secondary text-start" style={{ width: '15%', background: '#D0D9D4' }}>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    events.map((event: EventType) => (
                      <tr key={event.ID}>
                        <td className="p-3 ps-4 align-middle">{event.name}</td>

                        <td className="align-middle">
                          {event.description}
                        </td>
                        <td className="text-start align-middle">
                          {
                            event.concluded === 1
                              ?
                              (<span className="badge bg-success rounded-pill">concluido</span>)
                              :
                              (<span className="badge bg-danger rounded-pill">não concluido</span>)}
                        </td>
                        <td className="p-0 border-0 text-start align-middle">
                          {
                            event.concluded === 1 ?

                              (<></>) : (<>

                                {
                                  !event.date ? (
                                    <button className="btn btn-outline-primary btn-sm rounded-pill"
                                      onClick={(evt) => handleOnClickInitEvent(evt, event.ID, event.voiceType)}
                                    >
                                      Iniciar
                                    </button>

                                  ) : (
                                    <button className="btn btn-outline-success btn-sm rounded-pill"
                                      onClick={(evt) => handleOnClickRedirect(evt, event.ID, event.voiceType)}
                                    >
                                      Continuar
                                    </button>
                                  )
                                }
                              </>)
                          }

                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}