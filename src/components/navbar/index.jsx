import { FolderCode } from "lucide-react";

import "./style.css";

export function Navbar() {
  return (<>
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>
          PostWoman
        </h1>

        <h2>
          Your API Testing Companion
        </h2>
      </div>

      <div className="navbar-links">
        <button
          className="navbar-link"
          onClick={() => window.open(
            "https://github.com/AttAditya/postwoman"
          )}
        >
          <FolderCode />
          <span>
            Source Code
          </span>
        </button>
      </div>
    </nav>
  </>);
}

