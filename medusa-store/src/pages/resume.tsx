import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Image from "next/image"

const Resume: NextPageWithLayout = () => {
  return (
    <>
      <Head title="resume" description="my resume" />
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-bodoni text-center fade-in-text">
            Résumé
          </h1>
        </div>

        <div className="">
          <h2 className="text-center text-3xl px-8 my-4 mx-16 font-spartanMB fade-in-text"></h2>
        </div>
      </section>

      <section className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly mx-10 px-6 gap-6">
          <div className="md:mx-20 fade-in-text">
            <div className="py-10 font-bodoni text-5xl">Courses</div>

            <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
              2018 - 2020
            </div>
            <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3 pb-5 underline">
              The City College of New York
            </div>
            <div className="font-spartanMB border-l-4 border-black dark:border-white px-3">
              Algorithms
            </div>
            <div className="font-spartanMB border-l-4 border-black dark:border-white px-3">
              Databases
            </div>
            <div className="font-spartanMB border-l-4 border-black dark:border-white px-3">
              Data Structures
            </div>
            <div className="font-spartanMB border-l-4 border-black dark:border-white px-3">
              Linear Algebra
            </div>
            <div className="font-spartanMB border-l-4 border-black dark:border-white px-3">
              Operating Systems
            </div>
            <div className="font-spartanMB border-l-4 border-black dark:border-white px-3">
              Software Engineering
            </div>
          </div>

          <div className="md:mx-14 fade-in-text">
            <div className="py-10 font-bodoni text-5xl">Experiences</div>

            <div>
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                2020 - PRESENT
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3 pb-5 underline">
                Bryare
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Web Developer
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                UI / UX Designer
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Marketer
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Art Director
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Product Designer
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Community Manager
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                2019
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3 pb-5 underline">
                The City College of New York
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Researcher
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Intern
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                2018
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3 pb-5 underline">
                CUNY Tutor Corps
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Tutor
              </div>
            </div>
          </div>

          <div className="md:mx-20 fade-in-text">
            <div className="py-10 font-bodoni text-5xl">Skills</div>

            <div>
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                Marketing
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                SEO
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Social Media
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Web Marketing
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                Languages
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                HTML
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                CSS / SCSS
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Javascript
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Python
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Java
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                Frameworks
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Astro
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                React
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Preact
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Next
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Express
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                CSS Frameworks
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Bootstrap
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Material UI
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Tailwind
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                Deployment
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Netlify
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Vercel
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Heroku
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Github
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                UI / UX Design
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Figma
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Sketch
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                XD
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                Version Control
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Git
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Github
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Gitlab
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                IDEs
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                VS Code
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Gitpod
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Code Sandbox
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                repl.it
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Codepen
              </div>
            </div>

            <div className="pt-10">
              <div className="font-archivo text-3xl border-l-4 border-black dark:border-white px-3 pb-5">
                Operating System
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                MacOS
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Linux
              </div>
              <div className="font-spartanMB text-xl border-l-4 border-black dark:border-white px-3">
                Windows
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Resume.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Resume
