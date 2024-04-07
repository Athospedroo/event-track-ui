import { ModalAction } from "../../core/modal"

interface ModalFullExtraLargeProps {
  id: string
  title: string
  children: JSX.Element | null
  footer: JSX.Element
  handleOnClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function ModalFullExtraLarge(props: ModalFullExtraLargeProps) {

  function handleCloseModal() {
    ModalAction.close(props.id)
  }
  
  return (
    <div id={props.id} className="modal fade" tabIndex={-1} data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-scrollable modal-xl" role="document" style={{ minWidth: '90%' }}>
        <div className="modal-content">
          <div className="modal-header mb-0 pb-0 border-0">
            <h4 className="modal-title">{props.title}</h4>
            <button
              type="button"
              className="btn-close"
              aria-label="Fechar"
              onClick={props.handleOnClose || handleCloseModal}
            ></button>
          </div>
          <div className="modal-body border-0 pt-1">
            {props.children}
          </div>
          {props.footer && (
            <div className="modal-footer pt-0 d-flex border-0" style={{justifyContent: 'start'}}>
              {[props.footer].map((element, index) => (
                <div key={index}>
                  {element}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export {
  ModalFullExtraLarge
}
