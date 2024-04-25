"use client";
import React from "react";
import ImpactIcon from "./ImpactIcon";
import { useState } from "react";
import styles from "./ReportExpand.module.css";
import Link from "next/link";
function ReportExpand(props) {
  const [expanded, setExpanded] = useState(false);

  function handeChange() {
    setExpanded((expand) => !expand);
  }

  return (
    <article className="border-2 border-slate-500 my-3 p-2 sm:max-w-2xl">
      <div className="flex-row" onClick={handeChange}>
        <h2 className="inline mr-2">{props.id}</h2>
        <h3 className="inline mr-2">Impact: {props.impact}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle inline"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </div>
      <div className={expanded ? styles.open : styles.closed}>
        <p>{props.description}</p>
        <p>{props.help}</p>
        <p>
          Read more
          <Link href={props.helpUrl} prefetch={false} />
        </p>
      </div>
    </article>
  );
}

export default ReportExpand;
