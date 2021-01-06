import React, { Fragment } from 'react'
import { useAuth } from '../hooks/AuthProvider'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

function Routes() {

  const { authUser } = useAuth()

  return (
    <Fragment>
      {
        authUser.authenticated &&
        <PrivateRoutes />
      }
      {
        !authUser.authenticated &&
        <PublicRoutes />
      }
    </Fragment>
  )
}

export default Routes