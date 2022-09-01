import React, { ReactNode } from "react";
interface Props {
  component?: ReactNode;
}
function DisplayProduct({ component }: Props) {
  return (
    <>
      <div>DisplayProduct</div>
    </>
  );
}

export default DisplayProduct;
