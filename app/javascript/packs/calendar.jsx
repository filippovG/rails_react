// Run this example by adding <%= javascript_pack_tag 'calendar' %> in view file,
// like app/views/pages/calendar.html.erb. 

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import moment from 'moment'
import styles from 'react-datetime/css/react-datetime.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Datetime input={false} className={styles.rdt} locale="pa" />,
    document.body.appendChild(document.createElement('div')),
  )
})
