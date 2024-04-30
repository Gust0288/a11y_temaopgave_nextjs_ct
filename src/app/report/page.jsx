import React from "react";
import data from "../../../public/examples/kea_dk";
import Image from "next/image";
import ReportExpand from "../components/ReportExpand";
import "../globals.css";

// //Fetch API virker med raport
// export const revalidate = 1800;

// export default async function Page({ searchParams }) {
//   const params = new URLSearchParams(searchParams);
//   const response = await fetch(
//     `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
//   );
//   const data = await response.json();

//   console.log("data", data);
//   console.log("data", data.violations);

const totalViolations = data.violations.length;
const totalPasses = data.passes.length;

const totalChecks = totalPasses + totalViolations;

export default function Page() {
  //slet og erstat med working API når færdig med styling/setup
  return (
    <main className="max-w-5xl m-auto grid grid-cols-1 my-5">
      <div className="grid md:grid-cols-2 mb-12">
        <div className="flex flex-col">
          <div>
            <p>Report for:</p>
            <h1>{data.url}</h1>
          </div>
          <h4 className="mt-auto">Report filed at: {data.timestamp}</h4>
        </div>

        <Image
          // src="./public/exampleImages/kea.webp"
          src={`/exampleImages/${data.screenshot.url}`} //til rapport hentet med API
          alt="screenshot of searched site"
          width={data.screenshot.width}
          height={data.screenshot.height}
          className="border-2 border-slate-800  w-full md:w-1/2 xl:w-[600px]"
        />
      </div>
      <h2 className="bg-brand-grey-80 text-brand-grey-00 pl-2">
        {totalChecks} relevant points checked
      </h2>
      {/* skal den vøre fold-out ligesom reportExpand? */}
      <h3 className="pl-2 text-brand-grey-80">
        {data.passes.length} points cleared succesfully
      </h3>
      <div className="flex gap-2 mt-10">
        <h3 className="font-semibold text-brand-grey-100">
          Found {data.violations.length} issues
        </h3>
        <h3 className="px-4 font-semibold text-brand-grey-00 bg-brand-grey-80 rounded-full">
          !
        </h3>
      </div>
      {data.violations.map((violation) => (
        <ReportExpand key={violation.id} {...violation} />
      ))}
    </main>
  );
}
