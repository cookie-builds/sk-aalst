import Section from "../components/section"

const clubs = [
  {
    name: 'A Gogo',
    logo: 'a-gogo.png',
    description: [
      "De club vertegenwoordigt vooral de kotstudenten te Aalst. Deze zijn vooral van de richting bachelor Bouw aan Odisee. Daarom is het dat ze ook wel eens de studentenclub van 'de Bouw' genoemd worden. Maar daarentegen staan ze open voor iedereen!"
    ],
    facebook: 'https://www.facebook.com/AgogoAalst/?locale=nl_BE',
    instagram: 'https://www.instagram.com/agogostudentenclub/',
  },
  {
    name: 'Caepa Vestigia',
    logo: 'caepa.png',
    description: [
      "Caepa werd opgericht op 1 december 1991 door acht VLEKHO-enthousiastelingen mn Chris Van Oostende, Adriaan Lison, Koen Matthijs, Jeffrey Van Impe, Veronique De Vulder, Edwin Goubert, Wim Noens en Luc Van Hauwermeiren. In 2011 werd Caepa, na een aantal jaren van inactiviteit, door een aantal fanatieke studenten weer heropgericht."
    ],
    facebook: 'https://www.facebook.com/profile.php?id=100066391431214',
    website: 'https://caepavestigia.be/',
    instagram: 'https://www.instagram.com/caepavestigia/',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'lorem.png',
    description: [
      "Lorem Ipsum werd in September 2014 opgericht door schachten, commilitones en praesidiumleden van drie clubs die toen nog actief waren op het KAHO Sint-Lieven: Ultima (management), Nursaia (verpleegkunde) en Norgy (onderwijs).",
      "Het doel was om van drie kleine clubs over te schakelen naar één verenigde club, in de hoop zo een grotere meerwaarde te kunnen creëren voor de studenten van de Aalsterse hogeschool. Een nieuwe frisse wind in de Aalsterse studentenstad met een nieuwe naam, nieuwe frisse moed, ideeën en vooral passie. Zelfs de hogeschool veranderde van naam en bestaat nu verder als Odisee Campus Dirk Martens.",
      "Als clubcafé werd gekozen voor de Bar Romarin, waar Pacha met veel plezier elke student voorziet van de nodige verfrissing. In september 2018 verhuisde Lorem Ipsum naar de Ravazjol waar Tinneke en Rolf hun nu met veel liefde bedienen.",
      "Naast ontspanning werd er ook weer aandacht besteed aan het bouwen van nauwere banden met de school zelf en ook op studievlak werden er nieuwe initiatieven op poten gezet om de studenten te helpen. Studentenclubs zijn trouwens meer dan samenzijn alleen.",
      "Als kleuren werd gekozen voor de drieband sabel-zilver-sabel (Zwart-wit-zwart), een verwijzing naar de Aalsterse roots van de club, evenals naar de drukkersinkt waarmee Dirk Martens hier ooit geschiedenis schreef. Op het einde van het schooljaar worden onze schachten dan ook ontgroend in de schaduw van zijn standbeeld op de Aalsterse Grote Markt (in de volksmond ook wel geheten: 'de zwette maan').",
      "Op het schild zien we bovenaan een band met in zwart op wit de clubnaam. Daaronder zien we op het linkerveld de driekleur met in het goud de club-zirkel erop aangebracht. Rechtsboven in het goud met een Vlaamse leeuw van sabel met keelse klauwen & tong Daaronder de symbolen van de club: de inktpot, de pen en het potlood in sabel.",
    ],
    facebook: 'https://www.facebook.com/scloremipsum',
    website: 'https://www.scloremipsum.be/',
    instagram: 'https://www.instagram.com/scloremipsum/',
  },
  {
    name: 'Mercurius',
    logo: 'mercurius.png',
    description: [
      'Het in 1948 ontstane Mercurius is de oudste nog bestaande studentenclub van Aalst. In de pas opgerichte Rijkshogere Handelsschool werd door toenmalig directeur Reychler Studentenbond Mercurius boven de doopvont gehouden. Er werd onder andere toneel gespeeld en een bibliotheek beheerd. Er was ook het studentenblad Kwik, het huidige Mercuriosity.',
      "Het is duidelijk dat er sindsdien veel veranderd is. In de zevenenzeventig jarige geschiedenis heeft de club tweemaal een onderbreking gekend van enkele jaren. De laatste heroprichting dateert van 1986 toen Peter Van Accolyen de club opnieuw leven in blies. Lang was het Kastanjehof het clublokaal. In 'den Hof' stonden Yvette en Winny achter den toog. Tegenwoordig kan je in onze clubcafé de Zeppelin terecht bij Hans en Katleen",
      'Mercurius was de Romeinse god van de handelaren (ook wel van de dieven en bedriegers). Zijn Griekse tegenhanger was Hermes, net zoals nu de Gentse tegenhanger van Mercurius heet. Op het schild kan je behalve het monogram ook de staf van Mercurius zien, de caduceus. Deze toont een palmtak met twee verstrengelde slangen.',
    ],
    facebook: 'https://www.facebook.com/groups/26262717221',
    website: 'https://www.mercurius-aalst.be',
    instagram: 'https://www.instagram.com/mercurius.aalst/',
  },
]

const Clubs = () => (
    <Section title="Clubs" bg-color="bg-white" text-color="text-blue-950" align-items="items-start">
      <div className="flex flex-col gap-8 min-h-40">
        <div>
          Aalst is een echte studentenstad, met verschillende studentenclubs die elk hun eigen karakter en sfeer hebben. Hieronder vind je een overzicht van de actieve studentenclubs in Aalst. Elke club heeft zijn eigen unieke tradities, evenementen en activiteiten, waardoor er voor elke student wel een passende club te vinden is.
        </div>
        {clubs.map((club) => (
          <div className="flex flex-col md:flex-row !gap-4 bg-yellow-50 shadow-lg !p-4">
            <img src={`/assets/images/clubs/${club.logo}`} className="max-h-60 h-full md:max-h-none md:h-auto md:w-60 object-contain shrink-0" />
            <div className="flex flex-col align-top gap-2">
              <h2 className="font-extrabold text-xl">{club.name}</h2>
              {club.description.map((desc, index) => (
                <p className="flex-1" key={index}>{desc}</p>
              ))}
              <div className="flex flex-col !gap-2 sm:!gap-0 sm:flex-row ml-auto !rounded-lg overflow-hidden !mt-4 !w-fit">
                {club.facebook && (
                  <a href={club.facebook} target="_blank" className="text-white font-bold !py-2 !px-4 rounded sm:rounded-none text-center !bg-blue-600 !hover:bg-blue-700">
                    Naar Facebook
                  </a>
                )}
                {club.instagram && (
                  <a href={club.instagram} target="_blank" className="text-white font-bold !py-2 !px-4 rounded sm:rounded-none text-center !bg-[#e4405f] !hover:bg-red-600">
                    Naar Instagram
                  </a>
                )}
                {club.website && (
                  <a href={club.website} target="_blank" className="text-white font-bold !py-2 !px-4 rounded sm:rounded-none text-center !bg-yellow-500 !hover:bg-yellow-600">
                    Naar Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
)

export default Clubs