import { ModalAction } from "../../core/modal"

interface ModalProps {
  id: string
  title: string
  children: JSX.Element | null
  footer: JSX.Element
  footerPosition?: 'start' | 'end'
  handleOnClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function ModalFullScreen(props: ModalProps) {

  function handleCloseModal() {
    ModalAction.close(props.id)
  }

  return (
    <div id={props.id} className="modal fade" tabIndex={-1} data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" role="document" style={{ minWidth: '90%' }}>
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
          <div className="modal-body border-0 pt-0 overflow-auto">
            {props.children}
          </div>
          {props.footer && (
            <div className="modal-footer pt-0 d-flex border-0" style={{justifyContent: props.footerPosition ? props.footerPosition : 'start'}}>
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
    ModalFullScreen
}
