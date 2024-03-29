import { motion } from "framer-motion";
import {
  DevelopmentSection,
  DevelopmentStackItems,
  AboutStack,
} from "./styles";

import HtmlSVG from "../../../assets/html.svg";
import CssSVG from "../../../assets/css.svg";
import JavascriptSVG from "../../../assets/javascript.svg";
import SassSVG from "../../../assets/sass.svg";
import TypescriptSVG from "../../../assets/typescript.svg";
import ReactSVG from "../../../assets/react.svg";
import NodeSVG from "../../../assets/nodejs.svg";
import reactLogoGif from "../../../assets/react-logo.gif";
import stackLogoGif from "../../../assets/stack-logo.gif";

const frameSectionDevlopment = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const frameSectionDevlopmentItem = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const frameAboutDevlopment = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const frameAboutDevlopmentItem = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const stackItems = [
  {
    src: HtmlSVG,
    name: "HTML",
  },
  {
    src: CssSVG,
    name: "CSS",
  },
  {
    src: JavascriptSVG,
    name: "Javascript",
  },
  {
    src: SassSVG,
    name: "SASS",
  },
  {
    src: TypescriptSVG,
    name: "Typescript",
  },
  {
    src: ReactSVG,
    name: "React",
  },
  {
    src: NodeSVG,
    name: "NodeJS",
  },
];

const DevelopmentStack = () => {
  return (
    <DevelopmentSection
      id="development"
      variants={frameSectionDevlopment}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <motion.h2 variants={frameSectionDevlopmentItem} className="underline">
          Stack de Desenvolvimento
        </motion.h2>
      </div>

      <motion.div variants={frameSectionDevlopmentItem}>
        <DevelopmentStackItems>
          {stackItems.map((item) => (
            <li key={item.name}>
              <figure>
                <img src={item.src} alt={item.name} />
                <figcaption>{item.name}</figcaption>
              </figure>
            </li>
          ))}

          {stackItems.map((item) => (
            <li key={item.name}>
              <figure>
                <img src={item.src} alt={item.name} />
                <figcaption>{item.name}</figcaption>
              </figure>
            </li>
          ))}
        </DevelopmentStackItems>
      </motion.div>

      <div className="container">
        <AboutStack
          variants={frameAboutDevlopment}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.article variants={frameAboutDevlopmentItem}>
            <div>
              <img src={stackLogoGif} alt="Stack Logo" />
            </div>
            <div>
              <h3 className="underline-black">Por quê essa stack ?</h3>
              <p>
                Como minha linguagem de desenvolvimento é o javascript, com essa
                stack consigo usa-lá tanto no front-end como no back-end,
                aumentando minha produtividade.
              </p>
            </div>
          </motion.article>
          <motion.article variants={frameAboutDevlopmentItem}>
            <div>
              <img src={reactLogoGif} alt="React Logo" />
            </div>
            <div>
              <h3 className="underline-black">Por quê ReactJS ?</h3>
              <p>
                Simples, pela facilidade e rapidez de poder criar interfaces e
                aplicações web e com o mesmo código criar também aplicações
                mobile nativas para android e IOS.
              </p>
            </div>
          </motion.article>
        </AboutStack>
      </div>
    </DevelopmentSection>
  );
};

export default DevelopmentStack;
