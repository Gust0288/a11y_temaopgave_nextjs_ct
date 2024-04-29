"use client";
import React from "react";
import ImpactIcon from "./ImpactIcon";
import { useState } from "react";
import styles from "./ReportExpand.module.css";
import Link from "next/link";
import "../globals.css";

function ReportExpand(props) {
  const [expanded, setExpanded] = useState(false);

  function handeChange() {
    setExpanded((expand) => !expand);
  }

  return (
    <article className="border-2 border-brand-turquoise-50 rounded-md my-3 sm:max-w-2xl">
      <button onClick={handeChange} className="rounded-md flex flex-row w-full gap-2 bg-brand-turquoise-00 p-2">
        <h3 className="inline mr-2 my-auto font-medium">{props.id}</h3>
        <h4 className="inline mr-2 my-auto">Impact: {props.impact}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#333333"
          className="bi bi-arrow-right-circle inline ml-auto my-auto"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </button>
        <div className={expanded ? styles.open : styles.closed}>
          <p>{props.description}</p>
          <p>{props.help}</p>
          <Link href={`/wiki/${props.id}`}>
            Read more here
          </Link>
        </div>
    </article>
  );
}

export default ReportExpand;
