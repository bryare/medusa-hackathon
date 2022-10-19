import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Image from "next/image"
import { portfolio } from "./portfolio.js"
const Resume: NextPageWithLayout = () => {
  return (
    <>
      <Head title="resume" description="my resume" />
      <div className="flex flex-col justify-center items-center ">
        <section className="text-center">
          <h1 className="text-6xl md:text-8xl font-bodoni text-center fade-in-text">
            Portfolio
          </h1>
          <h2 className="text-center text-3xl px-8 my-4 mx-16 font-spartanMB">
            Check out my portfolio
          </h2>
        </section>

        <section
          aria-label="Portfolio list"
          className="flex flex-col justify-center items-center text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly max-w-screen-lg w-full mx-auto gap-6 fade-in-text ">
            {portfolio.map((content) => (
              <a href={content.href} target="_blank" rel="noreferrer noopener">
                <Image
                  src={`${content.image}`}
                  alt="portfolio image"
                  width="500px"
                  height="250px"
                  className="rounded-xl hover:border-fuchsia-500 border-transparent border-4 hover:shadow-xl"
                />
                <div>{content.name}</div>
                <div>{content.content}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

Resume.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Resume
