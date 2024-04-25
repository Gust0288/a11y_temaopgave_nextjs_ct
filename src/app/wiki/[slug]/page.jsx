import data from "../../../assets/examples/wiki.json";

function errorPage({ params }) {
  const filtered = data.filter((d) => d.id === params.slug);

  const issue = filtered[0];

  return (
    <div>
      <h1>{issue.name}</h1>
      <h2>User Impact: {issue.impact}</h2>
      <p>Rule Description{issue.description}</p>
      <p>Why it Matters: {issue.whyItMatters}</p>
      <p>Algorithm: {issue.algorithm}</p>
    </div>
  );
}

export default errorPage;
