import React from 'react'
import {
    HeaderWrapper,
    PageTitle
} 
from './PageHeaderComponents'

const PageHeader = ({title}) => {
    return (
        <HeaderWrapper>
            <PageTitle>{title}</PageTitle>
        </HeaderWrapper>
    )
};

export default PageHeader
