import styled, { css } from 'styled-components'

export const Table = styled.table`
    background: #FFFFFF;
    box-shadow: 0px 2px 1px;
`

export const Row = styled.tr`
    text-align: right;
`
export const Value = styled.th`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #474747;
    padding: 1rem;

    ${p =>
    p.primary &&
    css`
      color: #00687F;
    `};
`
