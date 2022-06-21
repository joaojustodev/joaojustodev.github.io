import React from "react";

import { Container } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "styled-components";

const Network: React.FC = () => {
  const { color } = useTheme();
  return (
    <Container>
      <a
        href="https://github.com/joaobr200"
        target="_blank"
        rel="noreferrer"
        aria-label="Link para o meu Github"
      >
        <FaGithub color={color} aria-label="Ícone Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-vitor-justo-arantes-867628161/"
        target="_blank"
        rel="noreferrer"
        aria-label="Link para o meu Linkdin"
      >
        <FaLinkedin color="#0e76a8" aria-label="Ícone Linkedin" />
      </a>
    </Container>
  );
};

export default Network;
