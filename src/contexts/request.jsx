import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'preact/hooks';
import { createContext } from 'preact';

function context() {
  const RequestContext = createContext({});

  function useRequestContext() {
    return useContext(RequestContext);
  }

  function RequestProvider({ children }) {
    const baseUrlRef = useRef();
    const endpointRef = useRef();
    const headersRef = useRef();
    const bodyRef = useRef();

    const [response, setResponse] = useState("");
    const [status, setStatus] = useState(200);
    const [state, setState] = useState("idle");

    const handleResponse = useCallback(async (method) => {
      setState("loading");

      const baseUrl = baseUrlRef.current.value;
      const endpoint = endpointRef.current.value;

      if (!baseUrl || !endpoint) {
        alert("Base URL and Endpoint are required");
        return;
      }

      const url = `${baseUrl}${endpoint}`;
      const options = {
        method,
        credentials: 'include',
        headers: {},
        body: bodyRef.current.value || null,
      };

      if (headersRef.current.value) {
        try {
          options.headers = JSON.parse(headersRef.current.value);
        } catch (e) {
          alert("Invalid JSON in headers");
        }
      }

      let text = "";

      try {
        const responseData = await fetch(url, options);
        setStatus(responseData.status);
        text = await responseData.text();
      } catch (e) {
        text = `Error: ${e.message} `;
      }
      
      setResponse(text);
      setState("idle");
    }, []);

    useEffect(() => {
      const getItem = (key, d) => (localStorage.getItem(key) || d);
      baseUrlRef.current.value = getItem("baseUrl", "https://api.example.com");
      endpointRef.current.value = getItem("endpoint", "/endpoint");
      headersRef.current.value = getItem("headers", "");
      bodyRef.current.value = getItem("body", "");
    }, []);

    useEffect(() => {
      localStorage.setItem("baseUrl", baseUrlRef.current.value);
      localStorage.setItem("endpoint", endpointRef.current.value);
      localStorage.setItem("headers", headersRef.current.value);
      localStorage.setItem("body", bodyRef.current.value);
    }, [response]);

    const values = {
      state,
      baseUrlRef,
      endpointRef,
      headersRef,
      bodyRef,
      handleResponse,
      response,
      status,
    };

    return (<>
      <RequestContext.Provider value={values}>
        {children}
      </RequestContext.Provider>
    </>);
  }

  return {
    RequestProvider,
    useRequestContext
  };
}

export const {
  RequestProvider,
  useRequestContext,
} = context();

