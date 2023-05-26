import { createContext, useState } from "react";

export const ViewContext = createContext(null);

function Post({ children }) {
  const [viewDetails, setViewDetails] = useState(null);
  return (
    <ViewContext.Provider value={{ viewDetails, setViewDetails }}>
      {children}
    </ViewContext.Provider>
  );
}
export default Post;
