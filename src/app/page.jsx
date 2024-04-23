import Image from "next/image";
// import { data } from "./dr_dk";
import data from "../assets/examples/kea_dk.json";

export default function Home() {
  console.log(data.violations[0].id);

  return (
    <main>
      <form action="">
        <fieldset>
          <label htmlFor="url">Enter your URL:</label>
          <input type="text" name="url" />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <div>
        {data.violations.map((violation) => (
          <h1 key={violation.id}>{violation.id}</h1>
        ))}
      </div>
    </main>
  );
}
