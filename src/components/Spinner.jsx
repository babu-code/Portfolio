import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
const Spinner = () => {
    const override = {
        display: 'block',
        margin: '100px auto'
    }
  return (
    <ClipLoader size={150} color='white' cssOverride={override} />
  )
}

export default Spinner