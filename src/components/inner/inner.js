import React from 'react'
import InnerStyles from './inner.styled'

const Inner = ({children}) => {
    return (
        <InnerStyles>
            {children}
        </InnerStyles>
    )
}

export default Inner