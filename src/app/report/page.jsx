'use client'
import React from "react";
//import Image from "next/image";
import data from "../../assets/examples/kea_dk.json";
import Image from "next/image";
import ReportExpand from "../components/ReportExpand";

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
  return (
    <main>
      <h1>Report for {data.url}</h1>
      <h4>Report filed at: {data.timestamp}</h4>
      <p>{data.passes.length} checks cleared succesfully</p>
      <p>Found {data.violations.length} issues</p>
      {data.violations.map((violation) => (
        <ReportExpand key={violation.id} {...violation}/>
      ))}
      {/* <div>
        <h1>Issues</h1>
        {data.violations.map((violation) => (
          <h2 key={violation.id}>{violation.id}</h2>
        ))}
      </div> */}


      {/* <Image 
        // src="./public/exampleImages/kea.webp"
        //src={data.screenshot.url} //til rapport hentet med API
        alt="screenshot of searched site"
        width={data.screenshot.width}
        height={data.screenshot.height}
        className="border-2 border-slate-800"
      /> */}


    </main>
  );
}
