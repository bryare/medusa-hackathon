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
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="fade-in-text text-left px-10 md:mx-36">
            Hey, I&apos;m Bryan. I make websites for fun. I&apos;m a Web
            Developer / UI & UX Designer. I started building websites in 2018
            and I have now made it my hobby. I view websites differently than
            everyone. I think websites are pieces of art that should be titled.
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
