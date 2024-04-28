function NotificationWidget() {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3 d-flex flex-column align-items-end">
      <div className='toast' role='alert' aria-live='assertive' aria-atomic='true' id='notificationSuccessToast'>
        <div className='toast-header bg-success text-white'>
          <i className="ai-circle-check fs-lg me-2"></i>
          <span className="me-auto">Sucesso</span>
          <button type="button" className="btn-close btn-close-white ms-2" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body text-success"></div>
      </div>

      <div className='toast' role='alert' aria-live='assertive' aria-atomic='true' id='notificationWarnToast'>
        <div className='toast-header bg-warning text-white'>
          <i className="ai-triangle-alert fs-lg me-2"></i>
          <span className="me-auto">Atenção</span>
          <button type="button" className="btn-close btn-close-white ms-2" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body text-warning"></div>
      </div>

      <div className='toast' role='alert' aria-live='assertive' aria-atomic='true' id='notificationErrorToast'>
        <div className='toast-header bg-danger text-white'>
          <i className="ai-circle-slash fs-lg me-2"></i>
          <span className="me-auto">Erro</span>
          <button type="button" className="btn-close btn-close-white ms-2" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body text-danger"></div>
      </div>
    </div>
  )
}

export {
  NotificationWidget
}