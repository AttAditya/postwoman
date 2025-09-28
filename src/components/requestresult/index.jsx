import { useRequestContext } from "@contexts/request";
import { Ghost, LoaderCircle } from "lucide-react";

import "./style.css";

function ResponseView({ viewMode = "text" }) {
  const { response } = useRequestContext();

  if (!response) {
    return <div className="response-content empty">
      <Ghost size={128} strokeWidth={1} />
      <h3>
        Nothing to see here yet...
      </h3>
    </div>;
  }

  const parsedJson = (() => {
    try {
      return JSON.stringify(JSON.parse(response), null, 2);
    } catch {
      return null;
    }
  })();

  if (parsedJson) {
    return <div className="response-content">
      {parsedJson}
    </div>;
  }

  if (viewMode === "text") {
    return <div className="response-content">
      {response}
    </div>;
  }
}

export function RequestResult() {
  const { status, state } = useRequestContext();

  return (<>
    <div className="request-result">
      {
        state === "loading" && (
          <div className="request-data">
            <LoaderCircle className="loader-icon" />
          </div>
        )
      }
      
      <ResponseView />
    </div>
  </>);
}

