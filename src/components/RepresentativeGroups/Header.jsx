import React from 'react'
import { Select } from '../TopNav'

const Header = ({noDropdowns, title}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <h3 style={{marginRight: 'auto'}}>{title}</h3>
      {!noDropdowns ? <><Select options={["Department"]}/>
      <Select options={["Representative Groups"]}/> </>: null}
    </div>
  )
}

export default Header;
