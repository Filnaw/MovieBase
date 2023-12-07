import React, { ReactNode, useState } from 'react'

interface Props {
    children: ReactNode;
}

const [clicked, setClicked] = useState()

const Alert = ({children} : Props) => {
  return (
    <div  className='alert alert-primary'>{children}</div>
  )
}

export default Alert