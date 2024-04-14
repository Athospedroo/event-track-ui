import { useRouter } from 'next/router'
import styles from './LoginPage.module.css'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/context/AuthContext'


export function LoginPageView() {
  const { register, handleSubmit } = useForm()
  const [userLoginName, setUserLoginName] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')

  const router = useRouter()

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
    const users = [
      {
        userID: "0fb2a877-1503-4547-8428-76c1350c113c",
        name: "Atos Pedro",
        email: "athos.pedro17@gmail.com",
        password: "ap@gcjt2024t",
      },
      {
        userID: "964f68c9-fc74-4ac5-8e13-12e878a35965",
        name: "Ester Victória",
        email: "ester.vict@gmail.com",
        password: "**asEst2346@#",
      }
    ]

    const userExists = users.some((u) => u.email === userLoginName && u.password === userPassword)

    if (userExists) {
      await signIn(data)
    }
    
    console.log('apartai vos de mim pois não vos conheço')
  }

  async function handleOnClickRedirect() {

    const users = [
      {
        userID: "0fb2a877-1503-4547-8428-76c1350c113c",
        name: "Atos Pedro",
        email: "athos.pedro17@gmail.com",
        password: "ap@gcjt2024t",
      },
      {
        userID: "964f68c9-fc74-4ac5-8e13-12e878a35965",
        name: "Ester Victória",
        email: "ester.vict@gmail.com",
        password: "**asEst2346@#",
      }
    ]

    const userExists = users.some((u) => u.email === userLoginName && u.password === userPassword)

    if (!userExists) {
      console.log('apartai vos de mim pois não vos conheço')
    }
  }

  return (
    <>
      <section className={`${styles.backgroundRadialGradient} overflow-hidden`}>
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>

                <span style={{ color: 'hsl(218, 81%, 75%)' }}>Event Track</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                Simplificando a gestão de eventos com eficiência e precisão.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div className={`position-absolute rounded-circle shadow-5-strong ${styles.radiuSshape1}`}></div>
              <div className={`position-absolute shadow-5-strong ${styles.radiuSshape2}`}></div>

              <div className={`card ${styles.bgGlass}`}>
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit(handleSignIn)}>
                    {/* <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                    
                    </div> */}
                    <div className="row">
                      <div className="col mb-4">
                        <div className="form-outline">
                          <h1 style={{ color: "#182438" }}>
                            Bem Vindo (a)
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        {...register('email')}
                        name='email'
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={(e) => setUserLoginName(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example3">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        {...register('password')}
                        name='password'
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => setUserPassword(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example4">Senha</label>
                    </div>

                    {/* <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div> */}

                    <button type='submit' className="btn btn-primary mb-4">
                      Login
                    </button>

                    <div className="text-center">
                      <p>Faça login com:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}