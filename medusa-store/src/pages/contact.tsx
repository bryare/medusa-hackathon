import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { socials, supports, blogging, coding, video } from "./links.js"
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
            <form icon="feedback" method="POST" action="/success">
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input icon="bot-field" />
                </label>
              </p>
              <input type="hidden" icon="form-icon" value="feedback" />

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="icon">Name</label>
                <input
                  className="w-full border-2 rounded-lg border-black  dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="John Doe"
                  id="icon"
                  type="text"
                  icon="icon"
                  required
                />
              </div>

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full border-2 rounded-lg border-black  dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="Johndoe@gmail.com"
                  id="email"
                  type="email"
                  icon="email"
                  required
                />
              </div>

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="subject">Subject</label>
                <input
                  className="w-full border-2 rounded-lg border-black  dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="I want to talk about..."
                  id="text"
                  type="text"
                  icon="subject"
                  required
                />
              </div>

              <div className="px-20 md:px-40 my-10 md:mx-96">
                <label htmlFor="feedback">What is your Message?</label>
                <textarea
                  className="w-full border-2 rounded-lg border-black  dark:bg-black dark:border-white focus:outline-none my-2 py-2 px-4"
                  placeholder="Leave a comment..."
                  id="feedback"
                  wrap="soft"
                  icon="feedback"
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

        <div className="flex items-center justify-center flex-wrap max-w-screen-lg w-full m-auto text-center ">
          <div className="flex flex-col max-w-screen-lg w-full m-auto justify-center items-center py-10">
            <h2 className="font-archivo text-4xl">Socials</h2>
            <div className="flex justify-center items-start flex-wrap">
              {socials.map((social) => (
                <div className="px-10">
                  <a
                    href={`${social.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.title}`}
                    className="text-black"
                  >
                    <Icon
                      icon={`${social.icon}`}
                      className="text-black  hover:text-green-500 dark:hover:text-green-500 py-5 m-auto"
                      width="100px"
                      height="100px"
                    />
                    <button className="border-2 border-black dark:border-white rounded-xl p-5 hover:bg-green-500">
                      {`${social.title}`}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col max-w-screen-lg w-full m-auto justify-center items-center py-10">
            <h2 className="font-archivo text-4xl">Support</h2>
            <div className="flex justify-center items-start flex-wrap">
              {supports.map((social) => (
                <div className="px-10">
                  <a
                    href={`${social.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.title}`}
                  >
                    <Icon
                      icon={`${social.icon}`}
                      className="text-black  hover:text-green-500 dark:hover:text-green-500 py-5 m-auto"
                      width="100px"
                      height="100px"
                    />
                    <button className="border-2 border-black dark:border-white rounded-xl p-5 hover:bg-green-500">
                      {`${social.title}`}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col max-w-screen-lg w-full m-auto justify-center items-center py-10">
            <h2 className="font-archivo text-4xl">Blogging</h2>
            <div className="flex justify-center items-start flex-wrap">
              {blogging.map((social) => (
                <div className="px-10">
                  <a
                    href={`${social.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.title}`}
                  >
                    <Icon
                      icon={`${social.icon}`}
                      className="text-black  hover:text-green-500 dark:hover:text-green-500 py-5 m-auto"
                      width="100px"
                      height="100px"
                    />
                    <button className="border-2 border-black dark:border-white rounded-xl p-5 hover:bg-green-500">
                      {`${social.title}`}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col max-w-screen-lg w-full m-auto justify-center items-center py-10">
            <h2 className="font-archivo text-4xl">Coding</h2>
            <div className="flex justify-center items-start flex-wrap">
              {coding.map((social) => (
                <div className="px-10">
                  <a
                    href={`${social.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.title}`}
                  >
                    <Icon
                      icon={`${social.icon}`}
                      className="text-black  hover:text-green-500 dark:hover:text-green-500 py-5 m-auto"
                      width="100px"
                      height="100px"
                    />
                    <button className="border-2 border-black dark:border-white rounded-xl p-5 hover:bg-green-500">
                      {`${social.title}`}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col max-w-screen-lg w-full m-auto justify-center items-center py-10">
            <h2 className="font-archivo text-4xl">Video</h2>
            <div className="flex justify-center items-start flex-wrap">
              {video.map((social) => (
                <div className="px-10">
                  <a
                    href={`${social.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.title}`}
                  >
                    <Icon
                      icon={`${social.icon}`}
                      className="text-black  hover:text-green-500 dark:hover:text-green-500 py-5 m-auto"
                      width="100px"
                      height="100px"
                    />
                    <button className="border-2 border-black dark:border-white rounded-xl p-5 hover:bg-green-500">
                      {`${social.title}`}
                    </button>
                  </a>
                </div>
              ))}
            </div>
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
