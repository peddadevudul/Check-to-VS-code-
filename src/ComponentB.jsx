import React from 'react'
import { userContext } from './App'
const ComponentB = () => {
  return (
    <div>
      <userContext.Consumer>
        {value=><h2>{value}</h2>}
      </userContext.Consumer>
    </div>
  )
}

export default ComponentB
