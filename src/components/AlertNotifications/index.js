// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotification = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="icon success" />
      <div className="description-container">
        <h1 className="text success">Success</h1>
        <p className="description">
          You can access all the files in the folder{' '}
        </p>
      </div>
    </Notification>
  )
  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icon error" />

      <div className="description-container">
        <h1 className="text error">Error</h1>

        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )
  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="icon warning" />

      <div className="description-container">
        <h1 className="text warning">Warning</h1>

        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="icon info" />

      <div className="description-container">
        <h1 className="text info">Info</h1>

        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotification
