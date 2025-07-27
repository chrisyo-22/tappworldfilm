'use client'

import UserInfo from '@/model/User';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Button
} from "@/components/HeroUIComponents";
import "@/css/UserDetail.css"
// import React, { use } from 'react'



export default function UserDetail({ User }: { User: UserInfo }) {
    // const { id } = use(params);
    
    const user: UserInfo = User;

    return (
        <div className="page-container">
        <Card className="user-card">
          <CardHeader className="card-header">
            <div className="header-content">
              <h1 className="user-name">{user.name}</h1>
              <h2 className="user-id">User ID: {user.id}</h2>
            </div>
          </CardHeader>
  
          <Divider />
  
          <CardBody className="card-body">
            <div className="user-info">
              <div className="section-info">
                <h3 className="section-title">Contact Information</h3>
                <div className="detail-info">
                  <p>
                    <span className="label">Username:</span> {user.username}
                  </p>
                  <p>
                    <span className="label">Email:</span> {user.email}
                  </p>
                  <p>
                    <span className="label">Phone:</span> {user.phone}
                  </p>
                  <div className="website-link">
                    <span className="label">Website: </span>
                    <Link href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="link">
                      {user.website}
                    </Link>
                  </div>
                </div>
              </div>
  
              <Divider />
  
              <div className="section-info">
                <h3 className="section-title">Address</h3>
                <div className="detail-info">
                  <p>
                    {user.address.street}, {user.address.suite}
                  </p>
                  <p>
                    {user.address.city}, {user.address.zipcode}
                  </p>
                  <p className="coordinates">
                    Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
                  </p>
                </div>
              </div>
  
              <Divider />
  
              <div className="section-info">
                <h3 className="section-title">Company</h3>
                <div className="detail-info">
                  <p>
                    <span className="label">Name:</span> {user.company.name}
                  </p>
                  <p>
                    <span className="label">CatchPhrase:</span> {user.company.catchPhrase}
                  </p>
                  <p>
                    <span className="label">Business:</span> {user.company.bs}
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
  
          <Divider />
  
          <CardFooter className="card-footer">
            <Button className="back-button" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
}
