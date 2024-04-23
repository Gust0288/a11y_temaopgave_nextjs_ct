import React from "react";
//import Image from "next/image";
import data from "../../assets/examples/kea_dk.json";

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
      <p>Found {data.violations.length} issues</p>
      <div>
        <h1>Issues</h1>
        {data.violations.map((violation) => (
          <h2 key={violation.id}>{violation.id}</h2>
        ))}
      </div>
    </main>
  );
}
