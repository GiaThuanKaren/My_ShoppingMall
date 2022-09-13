import React, { ReactNode } from "react";
interface Props {
  component?: ReactNode;
  LinkCallApi?: string;
}
function DisplayProduct({ component, LinkCallApi }: Props) {
  
  return (
    <>
      <div>DisplayProduct</div>
    </>
  );
}

export default DisplayProduct;
