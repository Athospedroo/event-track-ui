import { AlertWarning } from "@/components/Alert/AlertWarning"
import { checkStringEmpty } from "@/core/validate"
import { useRouter } from "next/router"
import { useState } from "react"
import { createEventRequestType } from "../../../lib/event/createEventViewType"
import { createEventController } from "../../../lib/event/createEventViewController"

export default function CreateEventView() {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [alert, setAlert] = useState<string>()
  const [voiceTypeSelect, setVoiceTypeSelect] = useState<number>(2)
  const router = useRouter()
  const voices = [
    {
      name: 'TENOR',
      ID: 1
    },
    {
      name: 'SOPRANO',
      ID: 2
    }, {
      name: 'BAIXO',
      ID: 3
    }, {
      name: 'CONTRALTO',
      ID: 4
    },
  ]

  function handleOnClickBack() {
    router.push({
      pathname: '/Event/EventView'
    })
  }

  async function handleOnClickCreateEvent() {
    const req: createEventRequestType ={
      name,
      description,
      voiceType: voiceTypeSelect
    }

    const response = await createEventController.createEvent(req)

    if (response.errors && response.errors.length > 0) {
      console.log('Deu ruim', response.errors)
    } else {  
      setAlert('Evento Criado com sucesso')
      router.push({ pathname: '/Event/EventView'})
    }

  }

  function onChangeVoiceType(e: any) {
    setVoiceTypeSelect(e)
  }

  return (
    <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
      <div className="row">
        <div className="col">
          <h4>Adicionar Evento
          </h4>
        </div>
        <div className="col-auto justify-content-end me-3 pe-0">
          <button
            className="btn p-1 mb-2 pt-2"
            onClick={handleOnClickBack}
          >
            <i className="fas fa-long-arrow-alt-left" />
            <span>Voltar</span>
          </button>
        </div>
      </div>
      {alert && (
        <div className="mt-2 mb-3">
          <AlertWarning message={alert} />
        </div>
      )}
      <div className="row mb-4">
        <div className="col-12 mb-3">
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              onFocus={() => !checkStringEmpty(alert) && setAlert(undefined)}
            />
            <label htmlFor="name">Nome</label>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              id="name"
              placeholder="Descrição"
              value={description}
              onChange={(evt) => setDescription(evt.target.value)}
              onFocus={() => !checkStringEmpty(alert) && setAlert(undefined)}
            />
            <label htmlFor="name">Descrição</label>
          </div>
        </div>
        <div className="col">

          <div>
            {voices.map((voice) => (
              <div key={voice.ID} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`nipes_${voice.ID}`}
                  id={`exampleRadios_${voice.ID}`}
                  value={voice.ID}
                  onChange={(e) => onChangeVoiceType(Number(e.target.value))}
                  checked={voiceTypeSelect === voice.ID}
                />
                <label htmlFor={`exampleRadios_${voice.ID}`} className="form-check-label">
                  {voice.name}
                </label>
              </div>
            ))}
          </div>


        </div>
        <footer>
          <div className="row mt-4">
            <div className="col">
              <button
                id="btn-create-department"
                type="button"
                className="btn btn-outline-primary"
                onClick={handleOnClickCreateEvent}
              >
                Criar
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}