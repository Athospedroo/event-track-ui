import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export function PageHome() {

  const router = useRouter()

  async function handleOnClickRedirect() {
    router.push({
      pathname: '/Event/EventView'
    })
  }
  return (
    <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className={`card text-center ${styles.customCardContainer}`}>
            <div className={`card-body ${styles.customCard}`} onClick={handleOnClickRedirect}>
              <h4 className={`card-title text-center ${styles.customTitle}`}>----------</h4>
              <p className={`card-text ${styles.customText}`}>
              </p>
              <a href="#" className={`btn btn-primary `}>Eventos</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card text-center ${styles.customCardContainer}`}>
            <div className={`card-body ${styles.customCard}`}>
              <h4 className={`card-title text-center ${styles.customTitle}`}>----------</h4>
              <p className={`card-text ${styles.customText}`}>
              </p>
              <a href="#" className={`btn btn-primary`}>Componentes</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card text-center ${styles.customCardContainer}`}>
            <div className={`card-body ${styles.customCard}`}>
              <h4 className={`card-title text-center ${styles.customTitle}`}>----------</h4>
              <p className={`card-text ${styles.customText}`}>
              </p>
              <a href="#" className={`btn btn-primary`}>Analytics</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card text-center ${styles.customCardContainer}`}>
            <div className={`card-body ${styles.customCard}`}>
              <h4 className={`card-title text-center ${styles.customTitle}`}>----------</h4>
              <p className={`card-text ${styles.customText}`}>
              </p>
              <a href="#" className={`btn btn-primary`}>Real Time</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
