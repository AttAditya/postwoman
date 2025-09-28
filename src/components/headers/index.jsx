import { useRequestContext } from "@contexts/request";

import "./style.css";

export function Headers() {
  const { headersRef } = useRequestContext();

  return (<>
    <div className="headers">
      <textarea
        ref={headersRef}
        name="headers"
        id="headers"
        className="headers-input"
        placeholder="Request Headers"
      />
    </div>
  </>);
}

