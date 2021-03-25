import React from 'react'

import { connect } from 'react-redux'

class ComA extends React.Component {
    handleClick = () => {
        this.props.sendAction()
        console.log(this.props)
    }
    render () {
        return <button onClick={this.handleClick}>+</button>
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'add_action'
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ComA)