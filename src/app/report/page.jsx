import React from "react";
import data from "../../../public/examples/kea_dk";
import Image from "next/image";
import ReportExpand from "../components/ReportExpand";
import "../globals.css";
import ScoreVisual from "../components/ScoreVisual";
import Link from "next/link";

export const metadata = {
  title: "Website Report - a11y checker",
  description: "Here you see a comprehensive report of a11y on your website",
};

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

export default function Page() {
  //slet og erstat med working API når færdig med styling/setup
  const impactScores = {
    minor: 1,
    moderate: 2,
    severe: 3,
    serious: 10,
  };

  const totalViolations = data.violations.length;
  const totalPasses = data.passes.length;
  const totalInapplicable = data.inapplicable.length;

  const totalChecks = totalPasses + totalViolations;

  let totalImpactScore = 0;

  let seriousImpact = null;
  let severeImpact = null;
  let moderateImpact = null;
  let minorImpact = null;

  // Calculate total impact score using map
  data.violations.map((violation) => {
    const impactScore = impactScores[violation.impact] || 0;
    totalImpactScore += impactScore;
    if (impactScore === 10) {
      seriousImpact++;
    } else if (impactScore === 5) {
      severeImpact++;
    } else if (impactScore === 2) {
      moderateImpact++;
    } else {
      minorImpact++;
    }
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-col-reverse md:grid md:grid-cols-2 mb-12">
        <div className="flex flex-col sm:text-center">
          <div className="mx-2">
            <p>Report for:</p>
            <h1 className="bg-brand-grey-80 text-brand-grey-00 text-center truncate">
              {data.url}
            </h1>
          </div>
          <ScoreVisual
            issues={data.violations.length}
            passes={data.passes.length}
            className="my-auto"
          />
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

      <div className="flex gap-2 mt-10">
        <h3 className="font-semibold text-brand-grey-100">
          Found {totalViolations} issues, with a combined weight of{" "}
          {totalImpactScore}
        </h3>
        <h3>
          <abbr
            title="Each violation has an weight score. The more your violations weigh, the more your sites usability is compromised.
              Minor = 1
              Moderate = 2
              Severe = 3
              Serious = 10"
            className="px-4 font-semibold text-brand-grey-00 bg-brand-grey-80 rounded-full no-underline"
          >
            !
          </abbr>
        </h3>
        {/* <h3 className="px-4 font-semibold text-brand-grey-00 bg-brand-grey-80 rounded-full">
          !
        </h3> */}
      </div>
      <div className="flex flex-row">
        {seriousImpact && <p>serious: {seriousImpact}</p>}
        {severeImpact && <p>severe: {severeImpact}</p>}
        {moderateImpact && <p>moderate: {moderateImpact}</p>}
        {minorImpact && <p>minor: {minorImpact}</p>}
      </div>
      <div>
        {data.violations.map((violation) => (
          <ReportExpand key={violation.id} {...violation} />
        ))}
      </div>
      <div className="flex flex-col mt-20">
        <h3>List of all relevant checks</h3>
        <div className="mt-6">
          <h4>{totalPasses ? totalPasses : "no"} checks passed</h4>
          <div className="border-2 border-brand-grey-80 grid grid-cols-3 gap-1 mt-1">
            {data.passes.map((passes) => (
              <Link key={passes.id} href={`/wiki/${passes.id}`} className="p-2">
                {passes.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h4>
            {totalViolations ? totalViolations : "no"} checks violated a rule
          </h4>
          <div className="border-2 border-brand-grey-80 grid grid-cols-3 gap-1 mt-1">
            {data.violations.map((violations) => (
              <Link
                key={violations.id}
                href={`/wiki/${violations.id}`}
                className="p-2"
              >
                {violations.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-row justify-start gap-2">
            <h4>
              {totalInapplicable ? totalInapplicable : "no"} checks could not be
              applied
            </h4>
            <abbr
              title="This means that either the rule does not apply to this site, or it could not be checked by the API"
              className="px-3 font-semibold text-brand-grey-00 bg-brand-grey-80 rounded-full no-underline"
            >
              !
            </abbr>
          </div>
          <div className="border-2 border-brand-grey-80 grid grid-cols-3 gap-1 mt-1">
            {data.inapplicable.map((inapplicable) => (
              <Link
                key={inapplicable.id}
                href={`/wiki/${inapplicable.id}`}
                className="p-2"
              >
                {inapplicable.id}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
