import { RequestOptions } from "@components/requestoptions";
import { RequestResult } from "@components/requestresult";

import "./style.css";

export function RequestView() {
  return (<>
    <div className="request-view">
      <RequestOptions />
      <RequestResult />
    </div>
  </>);
}

