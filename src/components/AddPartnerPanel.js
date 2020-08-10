import React from 'react'
import '../style/AddPartnerPanel.css'

class AddPartnerPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            industry: '',
            city: '',
            country: '',
            number: '',
            postcode: '',
            region: '',
            street: '',
            email: '',
            phone: '',
            err: false
        }
    }

    handleAddFormChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render = () => {
        const { name, industry, city, country, number, postcode, region, street, email, phone, err } = this.state

        const addForm = <form onSubmit={e => {
            e.preventDefault()

            if (name === '' || industry === '' || city === '' || country === '' || number === '' || postcode === '' || region === '' || street === '' || email === '' || phone === '') {
                this.setState({
                    err: true
                })
                return
            }

            this.props.handleAddNewPartner(name, industry, city, country, number, postcode, region, street, email, phone)
        }}>
            <div className="company">
                <div>
                    <label htmlFor='name'>Nazwa firmy:</label><input
                        id='name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={this.handleAddFormChange}
                    />
                </div>
                <div>
                    <label htmlFor='industry'>Branża:</label><input
                        id='industry'
                        name='industry'
                        type='text'
                        value={industry}
                        onChange={this.handleAddFormChange}
                    />
                </div>
            </div>
            <div className="address">
                <p>Adres:</p>
                <div>
                    <label htmlFor='street'>Ulica:</label><input
                        id='street'
                        name='street'
                        type='text'
                        value={street}
                        onChange={this.handleAddFormChange}
                    />
                    <label htmlFor='number'>Nr.:</label><input
                        id='number'
                        name='number'
                        type='text'
                        value={number}
                        onChange={this.handleAddFormChange}
                    />
                </div>
                <div>
                    <label htmlFor='postcode'>Kod pocztowy:</label><input
                        id='strpostcodeepostcodeet'
                        name='postcode'
                        type='text'
                        value={postcode}
                        onChange={this.handleAddFormChange}
                    />
                    <label htmlFor='city'>Miejscowość:</label><input
                        id='city'
                        name='city'
                        type='text'
                        value={city}
                        onChange={this.handleAddFormChange}
                    />
                </div>
                <div>
                    <label htmlFor='region'>Województwo:</label><input
                        id='region'
                        name='region'
                        type='text'
                        value={region}
                        onChange={this.handleAddFormChange}
                    />
                </div>
                <div>
                    <label htmlFor='country'>Kraj:</label><input
                        id='country'
                        name='country'
                        type='text'
                        value={country}
                        onChange={this.handleAddFormChange}
                    />
                </div>
            </div>
            <div className="contact">
                <p>Kontakt:</p>
                <div>
                    <label htmlFor='phone'>Tel:</label><input
                        id='phone'
                        name='phone'
                        type='text'
                        value={phone}
                        onChange={this.handleAddFormChange}
                    />
                </div>
                <div>
                    <label htmlFor='email'>E-mail:</label><input
                        id='email'
                        name='email'
                        type='text'
                        value={email}
                        onChange={this.handleAddFormChange}
                    />
                </div>
            </div>
            {err ? <p className='error'>Wszytskie pola muszą zosatć wypełnione</p> : null}
            <button className='add'>Dodaj kontrahenta</button>
        </form>

        return (
            <div className='addPanel'>
                <div className='closePanel'>
                    <button
                        onClick={this.props.handleCloseAddPanel}
                    ><i className="far fa-times-circle"></i></button>
                </div>
                <p className='addPanelTitle'>Dodaj nowego kontrahenta</p>
                {addForm}
            </div>
        )
    }
}
export default AddPartnerPanel