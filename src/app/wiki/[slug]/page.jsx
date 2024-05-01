import data from "../../../assets/examples/wiki.json";
import Link from "next/link";

export const metadata = {
  title: "A11y Wiki",
  description:
    "Read up on what the different accessibilities means for your user",
};

function errorPage({ params }) {
  const filtered = data.filter((d) => d.id === params.slug);

  const issue = filtered[0];

  metadata.title = issue ? issue.id : "A11y Wiki";
  metadata.description = issue
    ? issue.name
    : "Read up on what the different accessibilities means for your user";

  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="">
        <h1 className="pb-2">{issue.name}</h1>
        <h4 className="-mt-2">User Impact: {issue.impact}</h4>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-bold">Rule Description: </span>{" "}
          {issue.description}
        </p>
        <p>
          <span className="font-bold">Why it Matters:</span>{" "}
          {issue.whyItMatters}
        </p>
        <p>
          <span className="font-bold">Algorithm:</span> {issue.algorithm}
        </p>
      </div>
      <Link
        href={issue.helpUrl}
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        For more information, and further reading, click here.
      </Link>
    </div>
  );
}

export default errorPage;
