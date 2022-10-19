import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Image from "next/image"

const AboutMe: NextPageWithLayout = () => {
  return (
    <>
      <Head title="about" description="about me" />
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-bodoni text-center fade-in-text">
            About me
          </h1>
        </div>

        <div className="pb-20">
          <h2 className="text-center text-3xl px-8 my-4 mx-16 font-spartanMB fade-in-text"></h2>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg w-full mx-auto">
          <div className="fade-in-text text-left ">
            I&apos;m Bry, a freelance solopreneur/artist based in the United
            States, my main passion is creating art, whether it be on the
            internet or on canvas. I like to design things such as UI&apos;s and
            UX&apos;s and tinker with websites. I view website development as an
            art, especially because there are so many tiny details and
            perfections you have to get right and execute in order for the
            consumer to appreciate it.
            <br />
            <br />
            The first website I built was in 2018 and since then you have
            arrived at the current iteration of my personal portfolio. I name my
            websites, which may sound odd since they have a domain name, but I
            think that since a website is a piece of art, it should be treated
            as thus, and an artistic name should be given it.
            <br />
            <br />
            This website was built using amazingly fast technologies like
            MedusaJS, which help give the consumer a better overall experience
            because the site is statically rendered which means that HTML pages
            are served ahead of time and pre-built so that they can load in
            users web browsers at a faster pace.
            <br />
            <br />
            If you need someone to design or make you a piece of website
            developed art, I am your guy. I am different than everyone because
            of the way I view websites, I have an artistic touch and have a
            knack for problem solving.
            <br />
            <br />I also sell t-shirts at my{" "}
            <a href="/store" className="text-fuchsia-500">
              shop
            </a>{" "}
            if you are interested in buying some cool merch I designed. I am in
            love with the creative process of imagining a design and then
            putting it on a canvas.
            <br />
            <br />
            Lastly, on my time off I like to cook, enjoy nature, and read.
          </div>
          <div className="fade-in-text flex justify-center items-center">
            <Image
              src={"/main.webp"}
              alt="portfolio image"
              height="250px"
              width="250px"
              className="rounded-xl hover:border-fuchsia-500 border-transparent border-4 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}

AboutMe.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default AboutMe
