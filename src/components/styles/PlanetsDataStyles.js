import styled, { css } from 'styled-components'

export const Table = styled.table`
 background: #FFFFFF;
    margin: 0px 20px;
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #474747;
    text-align: right;
    max-width: 740px;
    border-collapse: collapse;

@media (max-width: 740px){
    display: block;
    max-width: 302px;
    margin: auto;


}
`

export const HeadSection = styled.thead`
@media (max-width: 740px){
    display: block;
}`

export const BodySection = styled.tbody`
@media (max-width: 740px){
    display: block;
    margin-bottom: 10px;
    border-bottom: 1px solid #C4C4C4;
}`

export const HeadRow = styled.tr`

@media (max-width: 740px){
    display: block;
    position: absolute;
	top: -9999px;
	left: -9999px;
}`

export const BodyRow = styled.tr`
@media (max-width: 740px){
    display: block;
}`

export const HeadValue = styled.th`
  color: ${p => p.primary ? "#00687F" : "#474747"};
  padding: 10px;
  border-bottom: 1px solid #C4C4C4;

@media (max-width: 740px){
    display: block;
    border: none;

}`

export const BodyValue = styled.td`
color: ${props => props.primary ? "#00687F" : "#474747"};
padding: 10px;

@media (max-width: 740px){
    display: block;
	position: relative;
	padding-left: 50%; 
	white-space: normal;
	text-align:left;

    &&::before{
        content: attr(data-title);
        position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
		text-align:left;
        color: #474747;
    }
}`
