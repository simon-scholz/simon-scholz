import Link from 'next/link'
import styled from "styled-components";
import { lightTheme as theme} from '../styles/theme';

import { Heading2, P} from '../components/Typography'
import Card, { CardContent, CardImage } from "../components/Card";

const Title = styled.h4`
  font-weight: ${theme.fontWeights.subheading};
  line-height: ${theme.lineHeights.heading};
  color: var(--text-heading);
  letter-spacing: 0px;
  font-size: ${theme.fontSizes[2]};
  margin: ${theme.space[1]} 0px;
  margin-bottom: ${theme.space[3]};
  line-height: normal;
`

const StyledP = styled(P)`
  margin: 0px;
  font-size: ${theme.fontSizes[0]};
  color: ${theme.colors.silver};
  font-weight: ${theme.fontWeights.body};
  b {
    font-weight: ${theme.fontWeights.subheading};
  }
`

function CaseStudyCard(props) {
    return(
      <Link href={props.path}>
        <Card>
          <CardImage src={"/static/work"+props.heroImg} />
          <CardContent>
            <Title>{props.title}</Title>
            {props.role && <StyledP><b>Role: </b>{props.role}</StyledP>}
            <StyledP><b>Date: </b>{props.date}</StyledP>
          </CardContent>
        </Card>
      </Link>
    )
}

export default CaseStudyCard;
