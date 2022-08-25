import React from "react";
import { MainHeader } from "../../components";
interface Props {
  children: React.ReactNode;
}
function MainLayout({ children }: Props) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}

export default MainLayout;
