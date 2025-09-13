import Section from "../components/section";

const Clublied = () => (
  <Section title="Clublied" bgColor="bg-white" textColor="text-blue-950" alignItems="items-start">
    <div>
      <p>VERBONDSLIED <br /></p>
      <p>Melodie: "Stars And Stripes Forever". <br /></p>
      <p>Tekst: Dimitri Stevens, Gunther Van Haut</p>
    </div>
    <div className="flex flex-col bg-yellow-50 shadow-lg !mt-8 !p-4 !gap-2">
      <h2 className="text-lg"><b>Het Oilsjters Konvent is er al!</b></h2>
        Wij doen Oilsjt op zijn grondvesten beven,<br />
        Plezier, ambiance overal,<br />
        ‘t Wordt voor ons nooit te veel.<br />
        Wij zijn steeds bereid tot een pint<br />
        tot wel twee, tot wel drie, tot wel zeven.<br />
        Wij zijn altijd trouw aan ons lint,<br />
        aan het blauw en aan het geel<br />
        Voor heel ons leven.
    </div>
  </Section>
)

export default Clublied;