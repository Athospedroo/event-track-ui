import { useEffect, useState } from "react"
import { listUsersController } from "../../../lib/users/listUsersController"
import { UserType } from "../../../lib/users/userType"
import { voiceTypeToString } from "@/common/voiceTypeToString"
import { DEFAULT_ITEMS_PER_PAGE } from "@/constants/pagination"
import { Pager } from "@/components/Pager/pager"

export default function Users() {
  const [users, setUsers] = useState<UserType[]>([])
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers(page: number = 0): Promise<void> {

    const limit = 10

    const res = await listUsersController.listUsers(page, limit)

    const { errors, users, count } = res

    if (errors) {
      console.log(errors)
    }
    if (users && count) {
      setUsers(users)
      setCount(count)
    }
  }

  async function handleListUsers(currentPage: number) {
    await fetchUsers(currentPage)
  }

  function validatePage(page: number): boolean {
    if (
      count > 0 &&
      page + 1 > Math.ceil(count / DEFAULT_ITEMS_PER_PAGE)
    )
      return false
    return true
  }
  return (
    <div className="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
      <section>
        <div className="row align-items-center">
          <div className="col">
            <h4 className="m-0">Componentes</h4>
            <div className="d-flex mt-3">
              <button className="btn btn-outline-secondary rounded-pill"
              // onClick={handleOnClickChangePageCreateTicketTag}
              >
                <i className="ai-circle-plus me-2" />
                <span>Novo</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-4 mt-md-1">
          <div className="col">
            <div className="table-responsive overflow-purple-y">
              <table className="table">
                <thead>
                  <tr>
                    <th className="border-0 py-2 rounded-pill rounded-end-0 text-body-secondary ps-4" style={{ width: '20%', background: '#D0D9D4' }}>Nome</th>
                    <th className="border-0 text-body-secondary  text-start" style={{ background: '#D0D9D4' }}>Nipe</th>
                    <th className="border-0 text-body-secondary  text-start" style={{ width: '20%', background: '#D0D9D4' }}>Congregação</th>
                    <th className="border-0 text-body-secondary  text-start" style={{ background: '#D0D9D4' }}>N°</th>
                    <th className="border-0 py-2 rounded-pill rounded-start-0 text-body-secondary text-start" style={{ background: '#D0D9D4' }}>C.T M</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user: UserType) => (
                      <tr key={user.ID}>
                        <td className="p-3 ps-4 align-middle">{user.name}</td>
                        <td className="p-3 text-start align-middle">{voiceTypeToString(user.voiceType)}</td>
                        <td className="p-3 text-start align-middle">
                          {/* <BadgeColor color={tag.color} /> */}
                          {user.churchName ? user.churchName : 'comgragação não cadastrada!'}
                        </td>
                        <td className="p-3 align-middle">
                          {/* <CheckmarkAndCross indicator={tag.isActive} /> */}
                          {user.userNumberVoice}
                        </td>
                        <td className="p-3 text-start align-middle">
                          {user.memberCard}
                          {/* <div className="d-flex align-items-center justify-content-center gap-2 ps-1">
                          
                            
                              <TooltipDefault content="Editar">
                                <button id={`btn-update-${tag.ID}`} className="btn-link tatodesk-action-button p-0"
                                  onClick={(e) => handleOnClickChangePageUpdateTicketTag(e, tag.ID)}
                                >
                                  <i className="ai-edit-alt" />
                                </button>
                              </TooltipDefault>
                            
                          
                          <TooltipDefault content="Excluir">
                            <button className="btn-link tatodesk-action-button p-0"
                              onClick={(e) => props.handleOnClickOpenDeleteModal(e, tag)}
                            >
                              <i className="ai-trash" />
                            </button>
                          </TooltipDefault>
                        </div> */}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          <Pager
            itemsCount={count}
            handleChangePage={handleListUsers}
            validatePage={validatePage}
          />
        </div>
      </section>
    </div>
  )
}