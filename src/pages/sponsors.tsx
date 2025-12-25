import Section from "../components/section"

const sponsors = [
  {
    img: 'looyerij.jpg',
    name: 'De Looyerij',
    type: 'Restaurant',
    address: 'Kapellekensbaan 10, 9320 Aalst',
  },
  {
    img: 'ponnet.jpg',
    name: 'Ponnet',
    type: 'Bakkerij',
    address: 'Molenstraat 26, 9300 Aalst',
  },
  {
    img: 'ravazjol.jpg',
    name: 'Ravazjol',
    type: 'Café',
    address: 'Rozemarijnstraat 9, 9300 Aalst',
  },
  {
    img: 'malfroidt.png',
    name: 'Malfroidt',
    type: 'drankencentrale',
    address: 'Oude Kaai 34, 9400 Ninove',
  },
  {
    img: 'verleysen.jpg',
    name: 'Verleysen',
    type: 'Bakkerij',
    address: 'Vrijheidsstraat 16, 9300 Aalst',
  },
]

const Sponsors = () => (
  <Section title="Sponsors" bg-color="bg-white" text-color="text-blue-950" align-items="items-start">
    <div className="flex flex-wrap justify-center items-center gap-8">
      {sponsors.map((s) => (
        <div key={s.name} className="text-center">
          <div className="w-60 h-60 rounded-full overflow-hidden max-w-full flex flex-col gap-2">
            <img src={`/assets/images/sponsors/${s.img}`} className="w-full h-full object-contain" />
          </div>
        <h2 className="text-xl font-bold">{s.name}</h2>
        <div className="italic">{s.type}</div>
        <div>{s.address}</div>
      </div>
      ))}
    </div>
  </Section>
)

export default Sponsors