import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Header from '../components/layout/Header'
import Timecard from '../components/dashboard/Timecard'
import StatusTracker from '../components/dashboard/StatusTracker'
import CurrentProject from '../components/dashboard/CurrentProject'
import Notes from '../components/dashboard/Notes'
import Schedule from '../components/dashboard/Schedule'

export default function Dashboard() {
  return (
    <MainLayout>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="cardtime">
              <Timecard />
            </div>
            <div className="cardtime">
              <StatusTracker />
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardtime">
              <CurrentProject />
            </div>
            <div className="cardtime">
              <Notes />
            </div>
          </div>
          <div className="col-md-4">

            <div className="cardtime">
              <Schedule />
            </div>
          </div>
        </div>
      </div>


    </MainLayout>
  )
}
