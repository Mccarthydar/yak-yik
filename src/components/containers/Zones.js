import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'


class Zones extends Component {
    constructor(){
        super()
        this.state = {
            zone: {
                    name: '',
                    zipCodes: '',
                    numComments: ''
                },
            list: []
        }
    }

    componentDidMount(){
        console.log('componentDidMount: ')
        
        superagent
        .get('/api/zone')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if(err){
                alert('ERROR: '+err)
                return
            }
            console.log(JSON.stringify(response.body))
            let results = response.body.results
            this.setState({
                list: results
            })

        })
    }

    submitZone(){
        console.log('submitZone: '+JSON.stringify(this.state.zone))
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.zone)
        this.setState({
            list: updatedList
        })
    }
//  Can also do this way, must have the id attribute fields set correctly. use the function name instead of the updateName and updateZipcode function
    updateZone(event){
        console.log('updateZone: '+event.target.id+' == '+event.target.value)
        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone[event.target.id] = event.target.value
        this.setState({
            zone: updatedZone
        })
    }

    updateName(event){
        //this.state.comment['username'] = event.target.value //Wrong!
        //Do this way. copy the state and update the copy then commit the state then
        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone['name'] = event.target.value
        this.setState({
            zone: updatedZone
        })
    }

    updateZipcode(event){
        //this.state.comment['username'] = event.target.value //Wrong!
        //Do this way. copy the state and update the copy then commit the state then
        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone['zipCodes'] = event.target.value
        this.setState({
            zone: updatedZone
        })
    }

	render(){
        const listItems = this.state.list.map((zone, i)=>{
            return (
                <li key={i}><Zone currentZone={zone} /></li>
            )
        })
		return (
			<div>
                <ol>
                    {listItems}
                </ol>

                    <input id="name" onChange={this.updateName.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
                    <input id="zipCodes" onChange={this.updateZipcode.bind(this)} className="form-control" type="text" placeholder="Zip Code" /><br />
                    <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit Comment</button>
			</div>
		)
	}
}

export default Zones