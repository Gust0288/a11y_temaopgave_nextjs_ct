import React from "react";
import Link from "next/link";
import data from "../../assets/examples/wiki.json";

function page() {
  return (
    <div>
      <article className="mt-2 flex flex-col items-center ">
        <h1>WCAG 2.1 guidelines - Wiki</h1>
        <ul className="mt-2">
          {data.map((issue) => (
            <li className="p-3.5 border-b" key={issue.id}>
              <Link href={`/wiki/${issue.id}`} prefetch={false}>
                {issue.id}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default page;
