import { RequestView } from "@components/requestview";
import { UrlBar } from "@components/urlbar";

import "./style.css";

export function Main() {
  return (<>
    <div className="main-container">
      <UrlBar />
      <RequestView />
    </div>
  </>);
}