"use client";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export default function ClimbLoader() {
  return (
    <div>
      <ClimbingBoxLoader color="#ff7733" speedMultiplier={2} loading={true} />
    </div>
  );
}
