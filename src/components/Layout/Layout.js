import React from 'react'
import Auxilliary from '../../hoc/Auxilliary'

const Layout = (props) => {
  return (
    <Auxilliary>
        <div style={{marginTop: 21}}>SideBar, Toolbar, Backdrop</div>
        <main style={{marginTop: 21}}>
            {props.children}
        </main>
    </Auxilliary>
  )
}

export default Layout;