import React from 'react';
import './index.css'

interface HeadingParamas {
  heading: string
}

const Heading: React.FC<HeadingParamas> = ({heading}) => {
  return (
    <h2 className='heading'>{heading}</h2>
  )
}

export default Heading