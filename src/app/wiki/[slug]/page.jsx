import data from "../../../assets/examples/wiki.json";
import Link from "next/link";

function errorPage({ params }) {
  const filtered = data.filter((d) => d.id === params.slug);

  const issue = filtered[0];

  return (
    <div>
      <div className="flex flex-col">
      <h1>{issue.name}</h1>
      <h2 className="-mt-2">User Impact: {issue.impact}</h2>
      </div>
      <div>
      <p>Rule Description{issue.description}</p>
      <p>Why it Matters: {issue.whyItMatters}</p>
      <p>Algorithm: {issue.algorithm}</p>
      </div>
      <Link href={issue.helpUrl} prefetch={false} target="_blank" rel="noopener noreferrer">For more information, and further reading, click here.</Link>
    </div>
  );
}

export default errorPage;
