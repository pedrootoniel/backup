import React, { useEffect, useRef, Fragment } from 'react'
import { useField } from '@unform/core'
import { TextArea, Error } from './styles'

export default function TextAreaUnform({ name, ...rest }) {

  const inputRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Fragment>
      <TextArea
        error={error}
        ref={inputRef}
        withError={!!error}
        defaultValue={defaultValue}
        {...rest}
      />
      {
        !!error &&
        <Error>{error}</Error>
      }
    </Fragment>
  )
}