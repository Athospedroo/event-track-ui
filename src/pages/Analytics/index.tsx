// import PresentsPerArea from "@/components/Analytics/PresentsPerArea"
// import UsersPerArea from "@/components/Analytics/UsersPerArea"

import ExemploGrafico from "@/components/Dashboards/teste"
import { UserCallAttendancetype } from "@/lib/callAttendance/callAttendanceType"
import { useEffect, useState } from "react"
import analyticsController from "../../lib/analytics/analyticsController"
import { NotificationAction } from "@/components/Notification/Notification"

export default function Analytics() {
  const [presents, setPresents] = useState<number>()
  const [absents, setAbsents] = useState<number>()
  const [exit, setExists] = useState<number>()
  const [usersCallAttendances, setUsersCallAttendances] = useState<any[]>([])
  const [usersCallAttendances2, setUsersCallAttendances2] = useState<any[]>([])
  const [countSopranosPresent, setCountSopranosPresent] = useState<number | null>(0)
  const [countSopranosAbsent, setCountSopranosAbsent] = useState<number | null>(0)
  const [countContraltosPresent, setCountContraltosPresent] = useState<number | null>(0)
  const [countContraltosAbsent, setCountContraltosAbsent] = useState<number | null>(0)
  // const [ ]



  const usersData: any[] = [
    {
      ID: "6",
      name: "Luiza",
      badgeNumber: 1006,
      churchName: "Igreja F",
      memberCard: "1357",
      voiceType: "soprano",
      isActive: 1,
      isDeleted: 0,
      presence: true,
      badgeChecked: 1
    },
    {
      ID: "7",
      name: "Fernando",
      badgeNumber: 1007,
      churchName: "Igreja G",
      memberCard: "2468",
      voiceType: "tenor",
      isActive: 1,
      isDeleted: 0,
      presence: false,
      badgeChecked: null
    },
    {
      ID: "8",
      name: "Roberta",
      badgeNumber: 1008,
      churchName: "Igreja H",
      memberCard: "3579",
      voiceType: "contralto",
      isActive: 1,
      isDeleted: 0,
      presence: true,
      badgeChecked: 1
    },
    {
      ID: "9",
      name: "Ricardo",
      badgeNumber: 1009,
      churchName: "Igreja I",
      memberCard: "4680",
      voiceType: "baixo",
      isActive: 0,
      isDeleted: 1,
      presence: false,
      badgeChecked: null
    },
    {
      ID: "10",
      name: "Gabriela",
      badgeNumber: 1010,
      churchName: "Igreja J",
      memberCard: "5791",
      voiceType: "soprano",
      isActive: 1,
      isDeleted: 0,
      presence: true,
      badgeChecked: 1
    }
  ];

  useEffect(() => {
    setUsersCallAttendances2(usersData)
    init()
  }, [])

  async function init() {
    await initSopranos()
    await initContraltos()
    await listUsersByvoiceType()
  }

  async function initSopranos() {
    const { analytics, errors } = await analyticsController.eventTrackAnalytics(2)

    if (errors) {
      console.log(errors)
      // NotificationAction.notifyAllErrors(errors)
    }

    if (analytics) {
      const { usersPresent, usersAbsent } = analytics


      // if ( usersAbsent)
      setCountSopranosAbsent(usersAbsent)
      setCountSopranosPresent(usersPresent)

    }
  }

  async function initContraltos() {
    const { analytics, errors } = await analyticsController.eventTrackAnalytics(4)

    if (errors) {
      console.log(errors)

      // NotificationAction.notifyAllErrors(errors)
    }

    if (analytics) {
      const { usersPresent, usersAbsent } = analytics
      setCountContraltosAbsent(usersAbsent)
      setCountContraltosPresent(usersPresent)
    }
  }

  async function listUsersByvoiceType(voiceType: number = 2) {
    const { analytics, errors } = await analyticsController.eventTrackAnalytics(voiceType)
    if (errors) {
      console.log(errors)

      // NotificationAction.notifyAllErrors(errors)
    }

    if (analytics) {
      const { recentsUsers } = analytics

      setUsersCallAttendances(recentsUsers)
    }
  }
  function handleBadgeClick(s: string) {

  }

  const currentPage = 1
  return (
    <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
      <div className="row">
        <div className="col">
          <ul className="nav nav-tabs border-0" role="tablist">
            <li className="nav-item">
              <a className={`nav-link ${currentPage === 1 ? 'active' : ''} border-0 fs-5`} data-bs-toggle="tab" role="tab" style={{ cursor: 'pointer' }}>
                {/* <i className="ai-layout-side me-2"></i> */}
                Visão geral
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="d-flex justify-content-flex-end">
            <span className="badge bg-success fs-sm px-4">Presentes</span>
            <span className="badge bg-warning fs-sm px-4">Ausentes</span>
            <span className="badge bg-info fs-sm px-4">Saida</span>
          </div>
        </div>
      </div>

      <div className="row" style={{ paddingBottom: '60px' }}>
        <div className="col col-sm">
          <div className='py-3 px-4 text-break rounded-3 border position-relative' style={{ minWidth: '10.625rem', height: '100%' }}>
            <p className='m-0 fw-bold text-black-50 col'>SOPRANOS</p>
            <div className="d-flex justify-content-between">
              <div className='text-black fs-card-metric-card-time'>
                <span className="col m-0 fw-bold">Presentes: {countSopranosPresent}</span><br />
                <span className="col m-0 fw-bold">Ausentes: {countSopranosAbsent}</span>
              </div>
              <div>
                {/* <TooltipDefault content={<RealTimeAttendanceDescriptionTooltipComponent description='Tempo total de espera por atendimento, dividido pela quantidade de ligações concluídas.' />} >
                <i className="ai-circle-help text-muted" />
              </TooltipDefault> */}
              </div>
            </div>
          </div>

        </div>
        <div className="col col-sm">
          <div className='py-3 px-4 text-break rounded-3 border position-relative' style={{ minWidth: '10.625rem', height: '100%' }}>
            <p className='m-0 fw-bold text-black-50 col'>TENORES</p>
            <div className="d-flex justify-content-between">
              <div className='text-black fs-card-metric-card-time'>
                {
                  <span className="col m-0">--:--</span>
                }
              </div>
              <div>
                {/* <TooltipDefault content={<RealTimeAttendanceDescriptionTooltipComponent description='Tempo total de espera por atendimento, dividido pela quantidade de ligações concluídas.' />} >
                <i className="ai-circle-help text-muted" />
              </TooltipDefault> */}
              </div>
            </div>
          </div>

        </div>
        <div className="col col-sm">
          <div className='py-3 px-4 text-break rounded-3 border position-relative' style={{ minWidth: '10.625rem', height: '100%' }}>
            <p className='m-0 fw-bold text-black-50 col'>CONTRALTOS</p>
            <div className="d-flex justify-content-between">
              <div className='text-black fs-card-metric-card-time'>
                <span className="col m-0 fw-bold">Presentes: {countContraltosPresent}</span><br />
                <span className="col m-0 fw-bold">Ausentes: {countContraltosAbsent}</span>
              </div>
              <div>
                {/* <TooltipDefault content={<RealTimeAttendanceDescriptionTooltipComponent description='Tempo total de espera por atendimento, dividido pela quantidade de ligações concluídas.' />} >
                <i className="ai-circle-help text-muted" />
              </TooltipDefault> */}
              </div>
            </div>
          </div>

        </div>
        <div className="col col-sm">
          <div className='py-3 px-4 text-break rounded-3 border position-relative' style={{ minWidth: '10.625rem', height: '100%' }}>
            <p className='m-0 fw-bold text-black-50 col'>BAIXOS</p>
            <div className="d-flex justify-content-between">
              <div className='text-black fs-card-metric-card-time'>
                {
                  <span className="col m-0">--:--</span>
                }
              </div>
              <div>
                {/* <TooltipDefault content={<RealTimeAttendanceDescriptionTooltipComponent description='Tempo total de espera por atendimento, dividido pela quantidade de ligações concluídas.' />} >
                <i className="ai-circle-help text-muted" />
              </TooltipDefault> */}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="accordion accordion-flush" id="accordion1">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne1"
                  aria-expanded="false"
                  aria-controls="collapseOne1"
                >
                  Últimos 5 participantes que chegaram
                </button>
              </h2>
              <div
                id="collapseOne1"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne1"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  <div className="d-flex py-4">
                    <button onClick={() => listUsersByvoiceType(2)} style={{ background: '#9370DB', color: '#000' }} className="badge border-0 rounded-pill badge-small mx-1">Sopranos</button>
                    <button onClick={() => handleBadgeClick('tenor')} style={{ background: '#99ccff', color: '#000' }} className="badge border-0 rounded-pill badge-small mx-1">Tenor</button>
                    <button onClick={() => listUsersByvoiceType(4)} style={{ background: '#ffb3b3', color: '#000' }} className="badge border-0 rounded-pill badge-small mx-1">Contralto</button>
                    <button onClick={() => handleBadgeClick('baixos')} style={{ background: '#ffff99', color: '#000' }} className="badge border-0 rounded-pill badge-small mx-1">Baixos</button>
                  </div>
                  <div className="table-responsive table-hover overflow-purple-y">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="border-0 py-2 rounded-pill rounded-end-0 text-body-secondary ps-4" style={{ width: '30%', background: '#D0D9D4' }}>Nome</th>
                          <th className="border-0 text-body-secondary text-start" style={{ width: '20%', background: '#D0D9D4' }}>Número</th>
                          <th className="border-0 text-body-secondary text-start" style={{ width: '20%', background: '#D0D9D4' }}>Igreja</th>
                          <th className="border-0 py-2 rounded-pill rounded-start-0 text-body-secondary text-start" style={{ width: '30%', background: '#D0D9D4' }}>CT Membro</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usersCallAttendances?.map((user: UserCallAttendancetype) => (
                          <tr key={user.ID}>
                            <td className="p-3 ps-4 align-middle">{user.name}</td>
                            <td className="align-middle">{user.badgeNumber}</td>
                            <td className="text-start align-middle">{user.churchName}</td>
                            <td className="text-start align-middle">{user.memberCard}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="accordion accordion-flush" id="accordion2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo2"
                  aria-expanded="false"
                  aria-controls="collapseTwo2"
                >
                  Participantes com mais de 3 faltas
                </button>
              </h2>
              <div
                id="collapseTwo2"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo2"
                data-bs-parent="#accordion2"
              >
                <div className="accordion-body">
                  <div className="d-flex py-4">
                    <button onClick={() => handleBadgeClick('sopranos')} style={{ background: '#9370DB', color: '#663300' }} className="badge border-0 rounded-pill badge-small mx-1">Sopranos</button>
                    <button onClick={() => handleBadgeClick('tenor')} style={{ background: '#99ccff', color: '#003366' }} className="badge border-0 rounded-pill badge-small mx-1">Tenor</button>
                    <button onClick={() => handleBadgeClick('contralto')} style={{ background: '#ffb3b3', color: '#660000' }} className="badge border-0 rounded-pill badge-small mx-1">Contralto</button>
                    <button onClick={() => handleBadgeClick('baixos')} style={{ background: '#ffff99', color: '#666600' }} className="badge border-0 rounded-pill badge-small mx-1">Baixos</button>
                  </div>
                  <div className="table-responsive table-hover overflow-purple-y">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="border-0 py-2 rounded-pill rounded-end-0 text-body-secondary ps-4" style={{ width: '30%', background: '#D0D9D4' }}>Nome</th>
                          <th className="border-0 text-body-secondary text-start" style={{ width: '20%', background: '#D0D9D4' }}>Número</th>
                          <th className="border-0 text-body-secondary text-start" style={{ width: '20%', background: '#D0D9D4' }}>Igreja</th>
                          <th className="border-0 py-2 rounded-pill rounded-start-0 text-body-secondary text-start" style={{ width: '30%', background: '#D0D9D4' }}>CT Membro</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usersData?.map((user: UserCallAttendancetype) => (
                          <tr key={user.ID}>
                            <td className="p-3 ps-4 align-middle">{user.name}</td>
                            <td className="align-middle">{user.badgeNumber}</td>
                            <td className="text-start align-middle">{user.churchName}</td>
                            <td className="text-start align-middle">{user.memberCard}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <span className="fw-bold">Participantes por área</span>
          <ExemploGrafico />
          {/* <UsersPerArea /> */}
        </div>
        <div className="col">
          <span className="fw-bold">Presença por área</span>

          <span className="fw-bold">Participantes por área</span>
          <ExemploGrafico />
          {/* <UsersPerArea /> */}

          {/* <PresentsPerArea /> */}
        </div>
      </div>

    </div>
  )
}