import ClimbLoader from "../components/ClimbLoader";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <main className="flex flex-col items-center gap-20 my-auto">
      <ClimbLoader />
      <p>Loading...</p>
    </main>
  );
}
