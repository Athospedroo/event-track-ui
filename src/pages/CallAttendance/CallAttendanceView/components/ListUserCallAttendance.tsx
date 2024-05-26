import { useEffect } from "react"
import { UserCallAttendancetype } from "../../../../lib/callAttendance/callAttendanceType"

interface ListUserCallAttendanceProps {
  usersCallAttendance: UserCallAttendancetype[]
  handleOnClickOpenModal: (e: React.MouseEvent<HTMLButtonElement>, userID: string) => void
  handleOnClickOpenModalUserCallAtendance: (e: React.MouseEvent<HTMLButtonElement>, userID: string) => void
  searchUser: UserCallAttendancetype | null | undefined
  handleAddRegisterInCallAttendance: Function
  cleanInputSearch: Function
}

export default function ListUsersCallAttendance({ usersCallAttendance, handleOnClickOpenModal, searchUser, handleAddRegisterInCallAttendance, cleanInputSearch, handleOnClickOpenModalUserCallAtendance }: ListUserCallAttendanceProps) {
  function handleOnClickAddUserInCallAttendance(e: React.MouseEvent<HTMLButtonElement>, userID: string) {
    e.preventDefault()
    const badgeChecked = 1
    const values = { ID: userID, badgeChecked }
    handleAddRegisterInCallAttendance(values)
    cleanInputSearch(true)
  }

  return (
    <div className="table-responsive overflow-purple-y">
      <table className="table">
        <thead>
          <tr>
            <th className="border-0 py-2 rounded-pill rounded-end-0 text-body-secondary ps-4" style={{ width: '40%', background: '#D0D9D4' }}>Nome</th>
            <th className="border-0 text-body-secondary  text-start" style={{ width: '20%', background: '#D0D9D4' }}>Numero</th>
            <th className="border-0 text-body-secondary  text-start" style={{ width: '35%', background: '#D0D9D4' }}>Status</th>
            <th className="border-0 py-2 rounded-pill rounded-start-0 text-body-secondary text-start" style={{ width: '15%', background: '#D0D9D4' }}>Ação</th>
          </tr>
        </thead>
        <tbody>

          {
            searchUser ? (<>
              <tr key={searchUser.ID}>
                <td className="p-3 ps-4 align-middle">{searchUser.name}</td>

                <td className="align-middle">
                  {/* <CheckmarkAndCross indicator={tag.isActive} /> */}
                  {searchUser.badgeNumber}
                </td>
                <td className="text-start align-middle">
                  {searchUser.presence ? (<span className="badge bg-success rounded-pill">presente</span>) : (<span className="badge bg-danger rounded-pill">ausente</span>)}
                </td>
                <td className="p-0 border-0 align-middle d-flex align-items-center justify-content-between py-4">
                  <button className="btn btn-outline-primary btn-sm rounded-pill"
                    onClick={(evt) => handleOnClickAddUserInCallAttendance(evt, searchUser.ID)}
                  >
                    Adicionar
                  </button>
                  <span onClick={(evt: any) => handleOnClickOpenModal(evt, searchUser.ID)}>
                    <i className="fas fa-eye " style={{ paddingLeft: '4px' }} />
                  </span>
                </td>
              </tr>
            </>) : (

              usersCallAttendance?.map((user: UserCallAttendancetype) => (
                <tr key={user.ID}>
                  {
                    user.userType === 2 ? (
                      <>
                        <td className="p-3 ps-4 align-middle"> <span className="badge  bg-warning text-dark">{user.name}</span></td>

                      </>
                    ) : (<>
                      <td className="p-3 ps-4 align-middle">{user.name}</td>

                    </>)
                  }

                  <td className="align-middle">
                    {/* <CheckmarkAndCross indicator={tag.isActive} /> */}
                    {user.badgeNumber}
                  </td>
                  <td className="text-start align-middle">
                    {user.presence ? (<span className="badge bg-success rounded-pill">presente</span>) : (<span className="badge bg-danger rounded-pill">ausente</span>)}
                  </td>
                  <td className="p-0 border-0 align-middle d-flex align-items-center justify-content-between py-4">
                    {
                      user.presence ?
                        (
                          <div style={{ marginTop: '5px' }}>

                            <span onClick={(evt: any) => handleOnClickOpenModal(evt, user.ID)}>
                              <i className="fas fa-eye " style={{ paddingLeft: '4px' }} />
                            </span>
                          </div>
                        )
                        :
                        (
                          <div className="" style={{ marginTop: '5px' }}>
                            <button className="btn btn-outline-primary btn-sm rounded-pill"
                              onClick={(evt) => handleOnClickAddUserInCallAttendance(evt, user.ID)}
                            >
                              Adicionar
                            </button>
                            <span onClick={(evt: any) => handleOnClickOpenModal(evt, user.ID)}>
                              <i className="fas fa-eye " style={{ paddingLeft: '4px' }} />
                            </span>
                          </div>

                        )
                    }
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  )
}
