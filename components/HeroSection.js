import { storyblokEditable } from "@storyblok/react";

const HeroSection = ({blok}) => {
    return (
        <div {...storyblokEditable(blok)}>
            {blok.layout == 'layout_one' && (
                <section className="text-gray-600 body-font w-full h-[70vh]" style={{
                  backgroundImage: `url('${blok.image}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left'
                }}>
                <div className="container mx-auto w-5/6 flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-8xl text-5xl mt-24 mb-4 font-medium text-gray-800">
                    {blok.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{blok.subtitle}</p>
                  </div>
                </div>
              </section>
            )}
            {blok.layout == 'layout_two' && (
                <section className="text-gray-600 body-font h-[70vh]" style={{
                  backgroundImage: `url('${blok.image}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right'
                }}>
                <div className="container mx-auto w-5/6 flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">{blok.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{blok.subtitle}</p>
                  </div>
                </div>
              </section>
            )}
            {blok.layout == 'layout_three' && (
                <section className="text-gray-600 body-font">
                <div className="container mx-auto w-5/6 flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="w-2/3 rounded-md">
                  <img src={blok.image}  className="w-full"/>
                </div>
                  <div className="lg:flex-grow md:w-1/3 lg:pl-24 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">{blok.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{blok.subtitle}</p>
                  </div>
                </div>
              </section>
            )}
            {blok.layout == 'layout_four' && (
                <section className="text-gray-600 body-font">
                <div className="container mx-auto w-5/6 flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">{blok.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{blok.subtitle}</p>
                  </div>
                  <div className="w-2/3 rounded-md">
                    <img src={blok.image}  className="w-full"/>
                  </div>
                </div>
              </section>
            )}
        </div>
    )
}

export default HeroSection
