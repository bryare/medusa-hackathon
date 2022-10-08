import FooterCTA from "@modules/layout/components/footer-cta"
import FooterNav from "@modules/layout/components/footer-nav"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { Icon } from "@iconify/react"
import { icons } from "./icons.js"
import Marquee from "react-fast-marquee"
const Footer = () => {
  const today = new Date()

  return (
    <footer>
      <FooterCTA />
      <FooterNav />
      <MedusaCTA />
      <div
        className="md:fixed left-0 bottom-0 flex justify-between border-solid border-black border-2
text-black dark:text-white p-4 dark:border-white 
"
      >
        <div>
          <p className="text-black dark:text-white">
            &copy; {today.getFullYear()}{" "}
          </p>
          <p className="text-black dark:text-white">bryare</p>
          <p className="text-black dark:text-white">piece № Ø2.1 </p>
          <p className="text-black dark:text-white">
            &quot; Medusa x Bryare &quot;
          </p>
        </div>
      </div>

      <Marquee
        className="bg-white"
        gradient={false}
        speed={60}
        direction={"right"}
      >
        {icons.map((icon) => (
          <a
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${icon.name}`}
            className="px-10"
            key={icon.name}
          >
            <Icon
              icon={`${icon.icon}`}
              className="text-black dark:text-white hover:text-fuchsia-500 dark:hover:text-fuchsia-500"
              width="100px"
              height="100px"
            />
          </a>
        ))}
      </Marquee>
      <div className="text-center flex justify-center items-center py-10">
        <a
          href="https://twitter.com/bryare_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:twitter"
            width={100}
            className="hover:text-fuchsia-500"
          />
        </a>
        <a
          href="https://github.com/bryare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:github"
            width={100}
            className="hover:text-fuchsia-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/bryare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:linkedin"
            width={100}
            className="hover:text-fuchsia-500"
          />
        </a>
        <a
          href="https://www.reddit.com/user/bryare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:reddit"
            width={100}
            className="hover:text-fuchsia-500"
          />
        </a>
        <a
          href="https://www.instagram.com/bryarev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:instagram"
            width={100}
            className="hover:text-fuchsia-500"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
