import Section from "../components/section"

const contactInfo = [
  { img: 'fleur.jpeg', club: 'Lorem Ipsum', name: 'Fleur Schietecat', memberOf: 'Mercurius Aalst', mail: 'fleurschietecat@gmail.com', phone: '0495 76 71 45' },
  { img: 'amory.jpeg', club: 'Mercurius Aalst', name: 'Amory Gyssens', memberOf: 'Lorem Ipsum', mail: 'amorygyssens@gmail.com', phone: '0477 56 51 85' },
  { img: 'mitch.jpg', club: 'Caepa Vestigia', name: 'Nick Van der Meersche', memberOf: 'Lorem Ipsum', mail: 'mitchell_47@live.com', phone: '0470 36 11 85' },
  { img: 'brent.jpg', club: 'SC A Gogo', name: 'Brent Van Huylenbroeck', memberOf: 'Lorem Ipsum', mail: 'brent.vanhuylenbroeck@hotmail.com' },
]

const Home = () => (
  <>
  <div className="flex w-full overflow-hidden h-full md:h-[30rem]">
    <img className="w-full object-cover object-center" src="/assets/images/website/banner-2.jpg"  />
  </div>
  <Section bgColor="bg-yellow-50" textColor="text-blue-950" title="SK Aalst" alignItems="items-start" big-title title-above>
    <p>SK Aalst is een voortzetting van het Studentenverbond Hoger Onderwiis Aalst - Katholiek Vlaams Hoogstudentenverbond', afgekort 'Shoa-KVHV'. Shoa is in academieiaar 2012-13 afgesplitst van KVHV en door de splitsing werd het verbond hervormd tot een konvent namelijk SK Aalst.</p><br />
    <p>Het verbond gaat terug tot september 1989. In dat iaar werd een werkgroep opgericht ter coordinatie van de studentenclubs in Aalst door Luc Havaux en Peter De Craene genaamd Swoa (Studentenwerkgroep Hoger Onderwiis Aalst). Een jaar later werd overgegaan tot de vorming van een verbond onder de naam Shoa (Studentenverbond Hoger Onderwijs Aalst).</p><br />
    <p>Luc Havaux, pro-senior van Moeder Technica, werd verkozen tot eerste praeses. Onder ziin leiding werden in enkele Aalsterse hogescholen studentenclubs opgericht of heropgestart. Luc Havaux werd jaar op jaar I herverkozen als praeses van het Aalsters verbond, tot Peter Viiverman in 1993 het roer overnam. Onder Peter Viiverman werd het Aalsters verbond in iuli 1995 door KVHV-Nationaal vzw erkend als KVHV-afdeling. Peter Viiverman zwaaide nog 2 jaar de scepter over het Aalsterse verbond onder de benaming Shoa-KVHV Aalst. In tegenstelling tot de overige KVHV afdelingen had Shoa-KVHV geen politieke werking. I</p><br />
    <p>In 1997 stond Gunther Van Haut aan het hoofd van de aangesloten Aalsterse clubs, hii trad rond Nieuwjaar af en voor het resterende werkjaar 1997-98 nam Olivier Van De Gucht over als waarnemend praeses.</p><br />
    <p>Bij de aanvang van het academiejaar 1998-99 werd Filip Beerens verkozen als verbondspraeses en het jaar daarop Wim Debolle. Deze laatste gaf echter reeds in begin december zelf ziin ontslag, waarop Kim Schollaert werd I aangesteld als waarnemend praeses tot de herverkiezingen anderhalve maand later. Op deze herverkiezingen werd Adriaan Lison verkozen tot nieuwe senior van het verbond.</p><br />
    <p>Verbondspraeses Wim Daelman mocht het Aalsterse verbond de 21ste eeuw binnenlozen en werd later opgevolgd door ziin medemercuriaan Frederik Van Hecke. Voor 2002-'03 kwam Tini Verdickt aan de macht als eerste vrouweliike verbondpraeses. In de volgende iaren van het 1ste decennia verliep de opvolging zonder enige incidenten en bleef het verbond verder bouwen aan de studentikoziteit in Aalst. Voor het academieiaar 2010-'11 werd de fakkel overgedragen aan Robin De Smet. Hij is de eerste van studentenclub Nursaia die praeses van het Aalsterse verbond werd.</p><br />
    <p>2012-'13 werd een jaar van verandering voor Shoa-KVHV. Praeses Michaël de Korte samen met Ina Van Den Bremt en Dimitri Stevens hervormde het verbond tot SK Aalst en KVHV splitste zich af en werd een afzonderliike studentenvereniging. Het doel van SK Aalst als verbond bleef hetzelfde, maar er werd wel een nieuw verbondslied gemaakt en nieuwe statuten geschreven.</p><br />
  </Section>
  <Section bgColor="bg-white" textColor="text-blue-950" title="Vertrouwens&shy;persoon voor elke club" alignItems="items-start">
    <p>
      Een vertrouwenspersoon biedt een luisterend oor en advies aan clubleden die te maken hebben met ongewenst gedrag, zoals pesten, intimidatie of discriminatie binnen clubverband. Ze helpen bij het verhelderen van de situatie en bieden ondersteuning bij het vinden van oplossingen. Daarnaast dragen ze bij aan het creeren van een veilige en respectvolle werkomgeving door bewustwording en preventie te bevorderen. Deze vertrouwenspersonen zijn onafhankelijk van de club om belangenvermenging te voorkomen. Hieronder een overzicht van de bevoegde vertrouwenspersonen per club.
    </p>
    <div className="flex flex-wrap gap-10 justify-center md:justify-between !mt-20 max-w-[42.5rem] !mx-auto relative">
      {contactInfo.map(info => (
        <div className="w-fit flex flex-col gap-2 items-center relative z-10 lg:text-white">
          <img src={`/assets/images/praesidium/${info.img}`} className="h-80 w-80 rounded-full object-cover" />
          <div className="flex flex-col justify-center w-fit text-center">
            <div className="font-extrabold text-2xl">{info.club}</div>
            <div>{info.name}</div>
            <div>Lid bij {info.memberOf}</div>
            <div><a href={`mailto:${info.mail}`}><u>Email</u></a></div>
            <div><a href={`tel:${info.phone}`}><u>Telefoon</u></a></div>
          </div>
        </div>
      ))}
      <div className="hidden lg:block absolute bg-blue-950 h-4/5 w-[150%] -left-[25%] -bottom-10 skew-y-6 rounded-md" />
    </div>
  </Section>
  <Section bgColor="bg-blue-50" textColor="text-blue-950" title="Onze verantwoordelijkheid" alignItems="items-start">
    <h2 className="font-bold text-xl">Dopen controleren</h2>
    <p>
      Als Aalsterse club zijn jullie verplicht om de dopen volgens het huidige doopcharter te organisteren.
      Dit is terug te vinden op Vlaanderen.be onder Onderwijs en Vorming.
      Als SK zullen wij tijdens de dopen controleren of dit charter wordt nageleefd.
    </p>
    <h2 className="font-bold text-xl !mt-4">Communicatie</h2>
    <p>
      Wij willen de communicatie tussen de verschillende studentenclubs in Aalst verbeteren door regelmatig gezamenlijke vergaderingen te organiseren.
      Tijdens deze bijeenkomsten kunnen clubs ideeën uitwisselen, samenwerking bevorderen en gezamenlijke activiteiten plannen.
    </p>
    <h2 className="font-bold text-xl !mt-4">Ondersteuning</h2>
    <p>
      Als SK willen wij de clubs actief ondersteunen bij hun vragen en zorgen,
      zoals het vinden van geschikte zalen en het aanvragen van erkenning bij de stad Aalst.
      Daarnaast organiseren wij informatiemomenten over relevante onderwerpen die aansluiten bij de behoeften van de clubs.
      Op deze manier draagt het Seniorenkonvent bij aan het versterken en bevorderen van het clubleven.
    </p>
  </Section>
  <Section bgColor="bg-yellow-50" textColor="text-blue-950" title="Wat willen wij nog doen?" alignItems="items-start">
    <h2 className="font-bold text-xl !mt-4">Verbroedering</h2>
    <p>
      Als Seniorenkonvent streven wij ernaar de verbroedering tussen de
      verschillende studentenclubs in Aalst te bevorderen, dit door gezamenlijke
      activiteiten te plannen. Door evenementen zoals sporttoernooien, culturele
      uitstapjes en sociale bijeenkomsten te organiseren, willen wij de banden tussen
      de clubs versterken. Deze activiteiten kunnen bestaan uit uitstapjes onder de
      senioren of evenementen waar iedereen welkom is. Een eerste voorbeeld
      hiervan is de SK BBQ op 26/07.
    </p>
  </Section>
  </>
)

export default Home