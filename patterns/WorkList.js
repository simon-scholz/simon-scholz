import React from "react";
import { P, Mono } from '../components/Typography'
import styled from "styled-components"
import theme from "../styles/theme";

const TableRow = styled.div.attrs({
    className: "TableRow"
})`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    p {
        white-space: nowrap;
        margin: 4px 0px;
    }
    .Mono {
        padding-left: 24px;
        white-space: pre;
        color: ${theme.colors.silver};
    }
`

const Dots = styled.div.attrs({
    className: "Dots"
})`
    width: 100%;
    padding: 0px 8px;
    margin-right: 8px;
    font-family: JetBrains Mono;
    font-size: 8px;
    overflow: hidden;
    color: ${theme.colors.smokeDarker};
`

const JobsList = [
    { company: "360dialog", role: "Product Manager & UX/UI Lead", period: "2020—  "},
    { company: "Divizend", role: "Product Designer & Frontend Engineer", period: "2018—20"  },
    { company: "CDF Technologies", role: "Co-Founder", period: "2018—21" },
    { company: "Audi", role: "Powertrain Simulation Engineer", period: "2015—18" }
]

const WorkList = () => {
    return(
        <>
            {JobsList.map(({company, role, period}, idx) => (
                <TableRow key={"job_row_"+idx}>
                    <P>{company}</P>
                    <Dots>{".".repeat(90)}</Dots>
                    <P style={{textAlign: "right"}}>{role}</P>
                    <Mono>{period}</Mono>
                </TableRow>
            ))}
        </>
    )
}

export default WorkList