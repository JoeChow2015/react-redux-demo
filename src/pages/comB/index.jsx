import React from 'react'

import { connect } from 'react-redux'

class ComB extends React.Component {
    render () {
        console.log('ComB', this.props)
        return <div>{this.props.count}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return state
}
export default connect(mapStateToProps)(ComB)