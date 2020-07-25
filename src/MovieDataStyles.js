import react from 'react';
import styled from 'styled-components'

export const Title = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
    border-radius: 4px;
    margin: 1.25rem auto;
    width: 46rem;
    height: 3rem;
    text-align: left;
    position: relative;
    padding: 0 1rem;
    cursor: pointer;
    margin-bottom: 0px;
`
export const TitleValue = styled.text `
    color: #00687F;
    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.25rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`

export const Icon = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
    display: block;
    float: right;
    padding-right: 1rem;
`

export const Container = styled.div`
    background-color:#E0E6EE;
    border-radius: 8px;
    padding: 2rem;
    position: absolute;
    width: 49rem;
    height: 37rem;
    text-align: center;
`