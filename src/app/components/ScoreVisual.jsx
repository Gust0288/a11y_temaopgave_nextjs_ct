import React from "react";

function ScoreVisual(props) {
  const totalChecks = props.issues + props.passes;
  return (
    <div className="m-4 sm:w-5/6 sm:h-40 md:h-40 md:w-30 grid grid-cols-6 grid-rows-2 rounded-full overflow-clip">
      <div className="col-start-2 col-span-5 row-start-1 flex justify-center bg-brand-orange-70">
        <p className=" text-center my-auto text-brand-grey-00">
          Issues: {props.issues}
        </p>
      </div>
      <div className="col-start-2 col-span-5 row-start-2 flex justify-center bg-brand-turquoise-00">
        <p className="text-center my-auto text-brand-grey-80">
          passes: {props.passes}
        </p>
      </div>
      <div className="bg-brand-grey-80  col-start-1 col-span-2 row-start-1 row-span-2 flex justify-center rounded-full">
        <p className="my-auto text-center text-brand-grey-00">
          total checks:
          <br />
          {totalChecks}
        </p>
      </div>
    </div>
  );
}

export default ScoreVisual;
