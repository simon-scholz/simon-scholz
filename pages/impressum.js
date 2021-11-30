import { useState } from "react";
import styled from 'styled-components'
import { lightTheme as theme} from '../styles/theme';

import { Heading2, P} from '../components/Typography'
import Spacer from "../components/Utils"
import {Button} from "../components/Actions"


const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 110px;
`

const Heading2MainLang = styled(Heading2)`
  display: ${props =>
    props.show ? "block" : "none"};
`

const PMainLang = styled(P)`
  display: ${props =>
    props.show ? "block" : "none"};
`

const Heading2SecondLang = styled(Heading2)`
  color: ${props =>
    props.show ? theme.colors.grey : theme.colors.concrete};
  margin-top: ${props =>
    props.show ? theme.space[5] : theme.space[2]};
`

const PSecondLang = styled(P)`
  color: ${props =>
    props.show ? theme.colors.darkGrey : theme.colors.concrete};
`


export default function About() {
  const [showGermanOnly, setShowGermanOnly] = useState(false);

  return (
    <div>
    <Main>
      <Heading2>The following information (Impressum) is required under German law.</Heading2>
      <Spacer />
      <Button onClick={() => setShowGermanOnly(!showGermanOnly)}>{showGermanOnly ? "Show both languages" : "Show german texts only"}</Button>
      <Spacer large/>

      <Heading2MainLang show={!showGermanOnly}>Liability and information according to &sect; 5 TMG</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Angaben gem&auml;&szlig; &sect; 5 TMG</Heading2SecondLang>
      <P>Simon Scholz<br />
      Kirchweg 2<br />
      81379 M&uuml;nchen</P>

      <Heading2MainLang show={!showGermanOnly}>Contact</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Kontakt</Heading2SecondLang>
      <P>{showGermanOnly ? "Telefon" : "Telefon / Phone"}: +49 163 773 0574<br />
      E-Mail: simonscholz@outlook.com</P>

      <Heading2MainLang show={!showGermanOnly}>VAT ID</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Umsatzsteuer-ID</Heading2SecondLang>
      <PSecondLang show={showGermanOnly}>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
      DE315229458</PSecondLang>

      <Heading2MainLang show={!showGermanOnly}>Responsible for the content according to &sect; 55 Abs. 2 RStV</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV</Heading2SecondLang>
      <P>Simon Scholz</P>

      <Heading2MainLang show={!showGermanOnly}>Online Dispute Resolution website of the EU Commission</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>EU-Streitschlichtung</Heading2SecondLang>
      <PMainLang show={!showGermanOnly}>In order for consumers and traders to resolve a dispute out-of-court, the European Commission developed the Online Dispute Resolution Website: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></PMainLang>
      <PSecondLang show={showGermanOnly}>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</PSecondLang>

      <Heading2MainLang show={!showGermanOnly}>Arbitration board</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</Heading2SecondLang>
      <PSecondLang show={showGermanOnly}>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</PSecondLang>

      <Heading2MainLang show={!showGermanOnly}>Legal disclaimer</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Haftung f&uuml;r Inhalte</Heading2SecondLang>
      <PMainLang show={!showGermanOnly}>The contents of these pages were prepared with utmost care. Nonetheless, we cannot assume liability for the timeless accuracy and completeness of the information.</PMainLang>
      <PSecondLang show={showGermanOnly}>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</PSecondLang>
      <PSecondLang show={showGermanOnly}>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</PSecondLang>

      <Heading2MainLang show={!showGermanOnly}>Liability concerning links</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Haftung f&uuml;r Links</Heading2SecondLang>
      <PMainLang show={!showGermanOnly}>Our website contains links to external websites. As the contents of these third-party websites are beyond our control, we cannot accept liability for them. Responsibility for the contents of the linked pages is always held by the provider or operator of the pages.</PMainLang>
      <PSecondLang show={showGermanOnly}>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</PSecondLang>
      <PSecondLang show={showGermanOnly}>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</PSecondLang>

      <Heading2MainLang show={!showGermanOnly}>Copyright</Heading2MainLang>
      <Heading2SecondLang show={showGermanOnly}>Urheberrecht</Heading2SecondLang>
      <PSecondLang show={showGermanOnly}>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</PSecondLang>
      <PSecondLang show={showGermanOnly}>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</PSecondLang>

      <Heading2MainLang show={!showGermanOnly}>Data protection</Heading2MainLang>
      <PMainLang show={!showGermanOnly}>In general, when visiting this website, no personal data are saved. However, these data can be given on a voluntary basis. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibIy be accessed by third parties.</PMainLang>

    </Main>
    </div>
  )
}
