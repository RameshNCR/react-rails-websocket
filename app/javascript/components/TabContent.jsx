import React from 'react'
import Template from './templteentries/Template'
import Branding from './Branding/Branding'

function TabContent({title}) {
  return (
    <div>
      {(title == 'template') ? 
      <Template/> :
      (title == 'branding') &&
      <Branding/>
      }
    </div>
  )
}

export default TabContent
