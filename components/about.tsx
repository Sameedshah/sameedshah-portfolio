import Image from "next/image"

export const About = () => {
  return (
    <div id="about">
    <div className=" md:px-6 bg-gradient-to-r from-blue-400 to-emerald-400 font-poppins">
      <section className="pb-20 pt-5 ">
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 className="mb-8 text-3xl font-bold">About Me</h2>
                <div className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                  Hello, I&apos;m Muhammad Sameed Shah, a passionate Next.js developer and aspiring AI enthusiast. With a solid foundation in matriculation, I have embarked on a journey to explore and master the cutting-edge fields of AI, Web 3.0, and the Metaverse.
                  <br /> <br />  I believe in the power of technology to transform our world, and I am constantly honing my skills to stay at the forefront of innovation. 
                </div>
                <div className="mb-0 text-neutral-500 dark:text-neutral-300">
                  I am excited to be part of the ever-evolving tech landscape and look forward to collaborating with like-minded individuals and organizations. If you&apos;re interested in exploring the possibilities of AI, Web 3.0, or the Metaverse, or if you have a challenging project in mind, I would love to connect and discuss how we can bring your ideas to life.
                  <br/>
                  <br/>
                  <div className="font-bold">
                  Thank you for visiting my portfolio website. Let&apos;s shape the future together!
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={require('../public/assests/about.jpg')}
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="image"
              />
            </div>
          </div>
        </div>

      </section>

    </div>
    </div>

  )
}