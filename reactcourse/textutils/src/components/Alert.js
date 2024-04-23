import React from 'react'

function Alert(props) {
  const Capitalize = (string) =>
  {
    return(string.charAt(0).toUpperCase() + string.slice(1)+" ");
  }
  return ( 
  <div className='Container my-2 mx-1' style={{height:"50px"}}>
    {
      props.alert &&(
        <div>
             <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong>{Capitalize(props.alert.type)}</strong> {props.alert.message}
             <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
      )
    }
  </div>

  )
  
}

export default Alert