import { Body } from "@components/body";
import { Headers } from "@components/headers";

import "./style.css";

export function RequestOptions() {
  return (<>
    <div className="request-options">
      <Headers />
      <Body />
    </div>
  </>);
}

