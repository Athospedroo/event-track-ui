interface AlertWarningProps {
  message?: string
}

function AlertWarning(props: AlertWarningProps) {
  return (
    <div className='alert d-flex alert-warning justify-content-center mb-0' role='alert'>
      <i className='ai-triangle-alert fs-xl pe-1 me-2' />
      <div>{props.message}</div>
    </div>
  )
}

export {
  AlertWarning
}