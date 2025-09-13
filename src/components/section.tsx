const Section = ({ children, title, titleAbove, bigTitle, alignItems, noMaxWidth, bgColor, textColor, cn }: { children: React.ReactNode, title: string, titleAbove?: boolean, bigTitle?: boolean, alignItems?: string, noMaxWidth?: boolean, bgColor?: string, textColor?: string, cn?: string }) => (
  <section className={`flex justify-center !py-16 ${titleAbove && '!pt-0 !-mt-12 lg:!-mt-24'} !px-4 ${bgColor} ${textColor}`}>
    <div className={`flex flex-col ${alignItems} ${titleAbove ? '!gap-10 lg:!gap-32' : '!gap-6'} ${!noMaxWidth && 'max-w-5xl'} w-full`}>
      <h2 className={`${bigTitle ? 'text-4xl lg:text-[6rem]' : 'text-4xl'} font-black w-fit ${titleAbove && 'text-white'}`}>{title}</h2>
      <div className={`text-justify w-full relative ${cn}`}>
        {children}
      </div>
    </div>
  </section>
)

export default Section;