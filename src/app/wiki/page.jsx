import React from "react";
import Link from "next/link";
import data from "../../assets/examples/wiki.json";

function page() {
  return (
    <div>
      <article>
        <ul className="flex-col">
          {data.map((issue) => (
            <li key={issue.id}>
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
