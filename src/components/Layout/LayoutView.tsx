import { NavBarView } from "../NavBar/NavBarView";
import { NotificationWidget } from "../Notification/NotificationWidget";

export default function LayoutView({ children }: any) {

  return (
    <div>
      <NavBarView key={'#navVieww'}/>
      <main>{children}</main>
      <NotificationWidget/>
    </div>
  )
}