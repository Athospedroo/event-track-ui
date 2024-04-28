// import PresentsPerArea from "@/components/Dashboards/PresentsPerArea"
// import UsersPerArea from "@/components/Dashboards/UsersPerArea"

import ExemploGrafico from "@/components/Dashboards/teste"
import { UserCallAttendancetype } from "@/lib/callAttendance/callAttendanceType"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [presents, setPresents] = useState<number>()
  const [absents, setAbsents] = useState<number>()
  const [exit, setExists] = useState<number>()
  const [usersCallAttendances, setUsersCallAttendances] = useState<any[]>([])
  const [usersCallAttendances2, setUsersCallAttendances2] = useState<any[]>([])
  const usersCallAttendances1: any[] = [{
    ID: "1",
    name: "João",
    email: "joao@example.com",
    voiceType: 1,
    memberCard: "1234",
    badgeNumber: 1001,
    churchName: "Igreja A",
    areaNumber: "A1",
    isActive: 1,
    isDeleted: 0,
    presence: true,
    badgeChecked: 1
  },
  {
    ID: "2",
    name: "Maria",
    email: "maria@example.com",
    voiceType: 2,
    memberCard: "5678",
    badgeNumber: 1002,
    churchName: "Igreja B",
    areaNumber: "B2",
    isActive: 1,
    isDeleted: 0,
    presence: false,
    badgeChecked: null
  },
  {
    ID: "3",
    name: "Pedro",
    email: null,
    voiceType: 1,
    memberCard: "9876",
    badgeNumber: 1003,
    churchName: null,
    areaNumber: null,
    isActive: 0,
    isDeleted: 1,
    presence: true,
    badgeChecked: 1
  },
  {
    ID: "4",
    name: "Ana",
    email: "ana@example.com",
    voiceType: 2,
    memberCard: "4321",
    badgeNumber: 1004,
    churchName: "Igreja C",
    areaNumber: "C3",
    isActive: 1,
    isDeleted: 0,
    presence: true,
    badgeChecked: 1
  },
  {
    ID: "5",
    name: "Carlos",
    email: "carlos@example.com",
    voiceType: 1,
    memberCard: "2468",
    badgeNumber: 1005,
    churchName: "Igreja D",
    areaNumber: "D4",
    isActive: 1,
    isDeleted: 0,
    presence: false,
    badgeChecked: null
  }]

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
    setUsersCallAttendances(usersCallAttendances1)
    setUsersCallAttendances2(usersData)
  }, [])
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
          <div className="container-badge">
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