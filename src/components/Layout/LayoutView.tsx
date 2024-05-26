import { NavBarView } from "../NavBar/NavBarView";
import { NotificationWidget } from "../Notification/NotificationWidget";

export default function LayoutView({ children }: any) {

  return (
    <>
      <NavBarView key={'#navVieww'}/>
      <main>{children}</main>
      <NotificationWidget/>
    </>
  )
}