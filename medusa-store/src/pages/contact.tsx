import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Image from "next/image"

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head title="about" description="about me" />
      <section className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-6xl md:text-8xl font-bodoni m-8 text-center fade-in-text">
            Contact Me
          </h1>

          <div className="feedback-form ">
            <form name="feedback" method="POST" action="/success">
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form-name" value="feedback" />

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="name">Name</label>
                <input
                  className="w-full border-2 rounded-lg border-black dark:text-white dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="John Doe"
                  id="name"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full border-2 rounded-lg border-black dark:text-white dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="Johndoe@gmail.com"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="subject">Subject</label>
                <input
                  className="w-full border-2 rounded-lg border-black dark:text-white dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="I want to talk about..."
                  id="text"
                  type="text"
                  name="subject"
                  required
                />
              </div>

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="feedback">What is your Message?</label>
                <textarea
                  className="w-full border-2 rounded-lg border-black dark:text-white dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="Leave a comment..."
                  id="feedback"
                  wrap="soft"
                  name="feedback"
                  required
                  rows={5}
                ></textarea>
              </div>

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <button
                  className="w-full border-solid rounded-lg border-black dark:border-white border-2 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

Contact.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Contact
