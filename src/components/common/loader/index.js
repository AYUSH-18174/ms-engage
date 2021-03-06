import React from "react";

const Loader = () => {
  return (
    <div className="width100 absolute-center">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
