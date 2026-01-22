import React from 'react'
import { Search, Bell, Plus } from "lucide-react";

export default function Header() {
  return (
    <>
    <div className="headerdashboard">
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-5">
            <div className="userheaderpage">
              <h4>Welcome</h4>
              <h6>John Doe</h6>
            </div>
          </div>
          <div className="col-md-6 col-7">
            <div className="socallist">
              <div className="socalicon">
                <ul>
                  <li><Search size={20} /></li>
                  <li><Bell size={20} /></li>
                </ul>
              </div>
              <button className='btnheader'><Plus size={20} /> Create a Request</button>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}
