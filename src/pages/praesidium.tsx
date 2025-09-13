import Section from "../components/section"

export const praesidiumMembers = [
  {
    name: "Brent ‘Boxer’ Van Huylenbroeck",
    function: 'Vice-Praeses',
    img: 'brent.jpg',
    description: null,
    club: 'Lorem Ipsum',
    doopjaar: '2018',
  },
  {
    name: "Fleur Schiettecat",
    function: 'Ab-actis',
    img: 'fleur.jpeg',
    description: 'Het leven is geven en nemen. Soms neem ik teveel en dan geef ik over.',
    club: 'Mercurius',
    doopjaar: '2019',
  },
  {
    name: "Jahnke Coppens",
    function: 'Cantor cantorum',
    img: 'jahnke.jpeg',
    description: 'dikken',
    club: 'Lorem Ipsum',
    doopjaar: '2021',
  },
  {
    name: "Lander Strobbe",
    function: 'Cultuur',
    img: 'lander.jpeg',
    description: 'Attitude is a little thing that makes a big difference.',
    club: 'Caepa Vestigia',
    doopjaar: '2020',
  },
  {
    name: "Amory Gyssens",
    function: 'Penningmeester',
    img: 'amory.jpeg',
    description: "Ja men kinjer'n",
    club: 'Lorem Ipsum',
    doopjaar: '2022',
  },
  {
    name: 'Mitchell ‘Stitch’ Goossens',
    function: 'Quaestor',
    img: 'mitch.jpg',
    description: null,
    club: 'Lorem Ipsum',
    doopjaar: '2016',
  },
]

const Praesidium = () => (
  <Section title="Praesidium" bgColor="bg-white" textColor="text-blue-950" alignItems="items-start">
    <div className="w-full flex flex-col !mt-8 gap-4">
      {praesidiumMembers.map(pr => (
        <div key={pr.name} className="flex flex-col md:flex-row even:md:flex-row-reverse bg-yellow-50 shadow-lg">
          <img src={`/assets/images/praesidium/${pr.img}`} className="max-h-80 md:max-h-60 md:max-w-60 h-full w-full object-cover" />
          <div className="flex flex-col flex-1 !p-4 !gap-2">
            <h2 className="font-bold text-lg">{pr.name}</h2>
            <span><i>{pr.function}</i></span>
            <p>{pr.description}</p>
            <p>{pr.club} - {pr.doopjaar}</p>
        </div>
      </div>
      ))}
    </div>
  </Section>
)

export default Praesidium