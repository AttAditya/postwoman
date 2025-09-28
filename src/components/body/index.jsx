import { useRequestContext } from "@contexts/request";

import "./style.css";

export function Body() {
  const { bodyRef } = useRequestContext();

  return (<>
    <div className="body">
      <textarea
        ref={bodyRef}
        name="body"
        id="body"
        className="body-input"
        placeholder="Request Body"
      />
    </div>
  </>);
}

