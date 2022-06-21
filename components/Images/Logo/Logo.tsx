import { styled } from "@mui/material";
import React from "react";
import useBasePath from "../../../hooks/useBasePath";

const LogoContent = styled("img")(({ src, theme }: any) => ({
  src: `url(${src})`,
  width: 100,
  height: 62,
}));

const Logo = () => {
  const basePath = useBasePath();
  return <LogoContent src={`${basePath}/images/logo/logo.png`} />;
};

export default Logo;
