import styled, { css } from 'styled-components'

export const Table = styled.table`
    background: #FFFFFF;
    margin: 0 20px;
    max-width: 740px;
    border-collapse: collapse;

    @media (max-width: 375px) {
        display: flex;
        flex-direction: row;
        width: 302px;
    }
`

export const Row = styled.tr`
    text-align: right;
    max-width: 740px;

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        width: 302px;
    }
`

export const Value = styled.th`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #474747;
    padding: 16px;

    ${p =>
    p.primary &&
    css`
      color: #00687F;
    `};

    ${p =>
    p.bordered &&
    css`
      border-bottom: 1px solid #C4C4C4;
    `};
`
