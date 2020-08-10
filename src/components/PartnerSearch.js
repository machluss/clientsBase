import React from 'react'
import '../style/PartnerSearch.css'

class PartnerSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: ''
        }
    }

    handleSearchChange = e => {
        this.setState({
            searchValue: e.target.value
        })
    }

    render = () => {
        return (
            <form
                onSubmit={e => {
                    e.preventDefault()
                    this.props.handlePartnerSearch(this.state.searchValue)
                }}
                className='partnerSearch'
            >
                <input
                    type="text"
                    value={this.state.searchValue}
                    onChange={this.handleSearchChange}
                />
                <div className="searchButton">
                    <button><i className="fas fa-search"></i></button>
                </div>
            </form>
        )
    }
}

export default PartnerSearch