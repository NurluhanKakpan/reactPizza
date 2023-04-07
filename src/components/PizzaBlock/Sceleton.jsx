import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="138" r="138" /> 
    <rect x="3" y="299" rx="0" ry="0" width="280" height="27" /> 
    <rect x="2" y="346" rx="0" ry="0" width="280" height="91" /> 
    <rect x="5" y="462" rx="0" ry="0" width="85" height="38" /> 
    <rect x="113" y="460" rx="17" ry="17" width="173" height="38" />
  </ContentLoader>
)
export default Sceleton