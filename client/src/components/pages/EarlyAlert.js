import React, { Fragment } from 'react'

const EarlyAlert = () => {
  return (
    <Fragment className="grid-2">
      <h1 className="text-center py-3">Resources & Alerts</h1>
      <ul className="card bg-light">
        <li className="p-3 py-1">
          <a href="https://early-alert.maps.arcgis.com/apps/opsdashboard/index.html#/20bfbf89c8e74c0494c90b1ae0fa7b78" target="blank"><h3 className="text-left text-primary">Early Alert System</h3></a>
        </li>
        <li className="p-3 py-1">
          <a href="https://www.cdc.gov/" target="blank"><h3 className="text-left text-primary">CDC: Coronavirus Disease 2019 (COVID-19)</h3></a>
        </li>
        <li className="p-3 py-1">
          <a href="https://www.who.int/" target="blank"><h3 className="text-left text-primary">WHO: Coronavirus disease (COVID-19) Outbreak</h3></a>
        </li>
        <li className="p-3 py-1">
          <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html" target="blank"><h3 className="text-left text-primary">US State Department: Travel Advisories</h3></a>
        </li>
        <li className="p-3 py-1">
          <a href="https://www2.cdc.gov/nip/adultimmsched/" target="blank"><h3 className="text-left text-primary">What Vaccines Do YOU Need? Take the CDC Quiz</h3></a>
        </li>
        <li className="p-3 py-1">
          <a href="http://apps.who.int/worldimmunizationweek/" target="blank"><h3 className="text-left text-primary">WHO Knows What Works</h3></a>
        </li>
      </ul>
    </Fragment >
  )
}
export default EarlyAlert;