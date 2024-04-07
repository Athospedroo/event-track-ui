interface AlertInfoProps {
  message?: string
}

function AlertInfo(props: AlertInfoProps) {
  return (
    <div className='alert d-flex alert-info justify-content-center mb-0' role='alert'>
      <i className='ai-circle-info fs-xl pe-1 me-2' />
      <div>{props.message}</div>
    </div>
  )
}

export {
  AlertInfo
}