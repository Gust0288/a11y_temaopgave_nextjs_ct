import Image from "next/image";
import diversaLogo from "../assets/diversa.svg";

// import { data } from "./dr_dk";
//import data from "../assets/examples/kea_dk.json";

export default function Home() {
  //console.log(data.violations[0].id);

  return (
    <div className="flex flex-col items-center gap-12 md:gap-16 my-auto">
      <Image
        src={diversaLogo}
        alt="Diversa logo"
        className="w-auto h-20 mt-10"
      />
      <h3>Test your website against the WCAG 2.1 guidelines</h3>
      <form action="/report">
        <fieldset className="flex gap-2">
          <label htmlFor="url" className="my-auto">
            Enter your URL:
          </label>
          <input type="url" name="url" required className="border-2" />
          <button
            type="submit"
            className="border-2 rounded-md border-brand-turquoise-50 text-brand-orange-70 hover:bg-brand-turquoise-00 font-bold p-2"
          >
            Check
          </button>
        </fieldset>
      </form>
      {/* <div>
        {data.violations.map((violation) => (
          <h1 key={violation.id}>{violation.id}</h1>
        ))}
      </div> */}
    </div>
  );
}
