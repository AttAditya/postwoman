import { useRequestContext } from "@contexts/request";

import "./style.css";

export function UrlBar() {
  const {
    baseUrlRef,
    endpointRef,
    handleResponse,
  } = useRequestContext();

  return (<>
    <div className="url-bar">
      <div className="url-input">
        <input
          ref={baseUrlRef}
          className="url-bar-input"
          id="base-url-input"
          type="text"
          defaultValue="http://localhost:3000"
        />

        <input
          ref={endpointRef}
          className="url-bar-input"
          id="endpoint-input"
          type="text"
          defaultValue="/api/v1/resource"
        />
      </div>

      <div className="methods">
        {["GET", "POST", "PUT", "DELETE"].map((method) => (
          <button
            key={method}
            className="method-button"
            onClick={() => handleResponse(method)}
          >{method}</button>
        ))}
      </div>
    </div>
  </>);
}

