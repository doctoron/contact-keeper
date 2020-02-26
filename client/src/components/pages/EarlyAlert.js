import React, { Fragment } from 'react'

const EarlyAlert = () => {
  return (
    <Fragment className="container">
      <h1 className="text-center py-2">Health Resources & Early Alerts</h1>
      <ul className="card">
        <li>
          <a href="https://early-alert.maps.arcgis.com/apps/opsdashboard/index.html#/20bfbf89c8e74c0494c90b1ae0fa7b78" target="blank"><h2 className="text-left text-primary">Early Alert System</h2></a>
        </li>
        <li>
          <a href="https://www.cdc.gov/" target="blank"><h2 className="text-left text-primary">CDC: Coronavirus Disease 2019 (COVID-19)</h2></a>
        </li>
        <li>
          <a href="https://www.who.int/" target="blank"><h2 className="text-left text-primary">WHO: Coronavirus disease (COVID-19) Outbreak</h2></a>
        </li>
      </ul>
    </Fragment >
  )
}
export default EarlyAlert;