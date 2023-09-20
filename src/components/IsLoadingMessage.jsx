import React from 'react'

export const IsLoadingMessage = ( isLoading ) => {
  return (
    isLoading && <h2>Cargando...</h2>
  )
}
