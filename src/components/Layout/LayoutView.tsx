import { NavBarView } from "../NavBar/NavBarView";

export default function LayoutView({ children }: any) {

  return (
    <div>
      <NavBarView key={'#navVieww'}/>
      <main>{children}</main>
    </div>
  )
}