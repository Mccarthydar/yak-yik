import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
	render(){
        const zoneStyle = styles.zone
        const zipCode = this.props.currentZone.zipCodes[0]  //Need to fix this as it's ignoring the rest of the codes
		return (
            <div style={zoneStyle.container}>
                <h2 style={zoneStyle.header}>
                    <a  style={zoneStyle.link} href="#">{this.props.currentZone.name}</a>
                </h2>
                <span className="detail">{zipCode}</span><br /> 
                <span className="detail">{this.props.currentZone.numComments} comments</span>
            </div>   
		)
	}
}

export default Zone