// import PresentsPerArea from "@/components/Dashboards/PresentsPerArea"
// import UsersPerArea from "@/components/Dashboards/UsersPerArea"

export default function Dashboard() {
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

      {/* <div className="row">
        <div className="col">
          <span className="fw-bold">Participantes por área</span>
          <UsersPerArea />
        </div>
        <div className="col-auto">
        <span className="fw-bold">Presença por área</span>
          <PresentsPerArea />
        </div>
      </div> */}

    </div>
  )
}