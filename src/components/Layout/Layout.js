import React from 'react'
import Auxilliary from '../../hoc/Auxilliary'

const Layout = (props) => {
  return (
    <Auxilliary>
        <div>SideBar, Toolbar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxilliary>
  )
}

export default Layout;