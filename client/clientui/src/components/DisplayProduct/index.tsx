import React, { ReactNode } from "react";
interface Props {
  component?: ReactNode;
  LinkCallApi?: string;
}
function DisplayProduct({ component, LinkCallApi }: Props) {
  
  return (
    <>
      {component}
    </>
  );
}

export default DisplayProduct;
