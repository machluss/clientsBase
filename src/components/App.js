import React from 'react';
import '../style/App.css';
import * as Firebase from 'firebase'

import Panel from './Panel'
import Partner from './Partner'

// ----------------------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyCbhXKJojKrQGO5Wdm6PKQCUDylj_a-R_k",
  authDomain: "interview-97047.firebaseapp.com",
  databaseURL: "https://interview-97047.firebaseio.com",
  projectId: "interview-97047",
  storageBucket: "interview-97047.appspot.com",
  messagingSenderId: "683128932981",
  appId: "1:683128932981:web:f83a7d4d6df9cf9581863c"
};

// ----------------------------------------------------------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.dBRef = '';

    this.state = {
      actualChosen: {},
      indexes: [],
      searched: [],

      addPanelActive: false,
      editPanelActive: false
    }
  }

  // --------------------------------------------------------------
  // ---------------------------Get data---------------------------

  getIndexesDB = () => {
    this.dBRef.child('index').on('value', snapshot => {
      const indexes = snapshot.val()
      this.setState({
        indexes
      });
    });
  }

  getPartner = id => {
    this.dBRef.child(`/partners/${id}`).once('value', snapshot => {
      const partner = snapshot.val()
      this.setState({
        actualChosen: partner,
      });
    });
  }

  // ---------------------------Add New Partner--------------------

  handleOpenAddPanel = () => {
    this.setState(() => ({
      actualChosen: {},
      addPanelActive: true
    }))
  }

  handleCloseAddPanel = () => {
    this.setState(() => ({
      addPanelActive: false
    }))
  }

  handleAddNewPartner = (name, industry, city, country, number, postcode, region, street, email, phone) => {
    const newPartner = {
      id: this.state.indexes.length,
      name,
      industry,
      history: [],
      current: [],
      logo: '',
      address: {
        city,
        country,
        number,
        postcode,
        region,
        street
      },
      contact: {
        email,
        phone
      }
    }

    this.setState(() => ({
      addPanelActive: false
    }))
    this.dBAddNewPartner(newPartner)

    alert("Dodano nowego kontrahenta!")
  }

  dBAddNewPartner = newPartner => {
    Firebase.database().ref(`/index/${newPartner.id}`).set({
      id: newPartner.id,
      name: newPartner.name
    });
    Firebase.database().ref(`/partners/${newPartner.id}`).set(newPartner)
  }

  // ---------------------------Show Partner-----------------------

  handleShowPartner = id => {
    this.getPartner(id)
  }

  // ---------------------------Edit Partner------------------------

  handleOpenEditPanel = () => {
    this.setState({
      editPanelActive: true
    })
  }

  handleCloseEditPanel = () => {
    this.setState(() => ({
      editPanelActive: false
    }))
  }

  handleEditPartner = (id, name, industry, city, country, number, postcode, region, street, email, phone) => {
    const newPartner = {
      id,
      name,
      industry,
      history: [],
      current: [],
      logo: '',
      address: {
        city,
        country,
        number,
        postcode,
        region,
        street
      },
      contact: {
        email,
        phone
      }
    }

    this.setState(() => ({
      actualChosen: newPartner,
      editPanelActive: false
    }))
    this.dBAddNewPartner(newPartner)

    alert(`Edytowano kontrahenta: ${newPartner.name}`)
  }

  // ---------------------------Delete Partner----------------------

  handleDelPartner = id => {
    this.dBDelPartner(id)
    this.setState({
      actualChosen: {}
    })

    alert(`Usunięto kontrahenta: ${this.state.actualChosen.name}`)
  }

  dBDelPartner = id => {
    Firebase.database().ref(`/partners/${id}`).remove()
      .then(() => {
        console.log("Partner removed \n")
      })
      .catch(error => {
        console.log("Remove failed: " + error.message)
      });

    Firebase.database().ref(`/index/${id}`).remove()
      .then(() => {
        console.log("Index removed\n")
      })
      .catch(error => {
        console.log("Remove failed: " + error.message)
      });
  }

  // ---------------------------Search Partner----------------------

  handlePartnerSearch = partner => {
    if (partner !== '') {
      console.log(`Szukam ${partner}`)
      const indexes = [...this.state.indexes]
      const searched = indexes.filter(index => {
        const name = index.name.toLowerCase()
        if (name.includes(partner.toLowerCase())) return true
        else return false
      })
      console.log(searched)
      if (searched.length > 0) {
        this.setState({
          searched
        })
      } else {
        alert(`Nie znaleziono firmy: ${partner}`)
        document.querySelector('.partnerSearch>input').value = ''
      }

    } else {
      this.setState({
        searched: []
      })
    }
  }

  // ---------------------------------------------------------------
  // ---------------------------------------------------------------

  componentDidMount = () => {
    Firebase.initializeApp(firebaseConfig)
    this.dBRef = Firebase.database().ref('/')

    this.getIndexesDB()
  }

  render = () => {
    const { indexes, searched, addPanelActive, actualChosen, editPanelActive } = this.state

    return (
      <div className='wrap'>
        <section className="panel">
          <Panel
            indexes={indexes}
            searched={searched}
            addPanelActive={addPanelActive}
            handleOpenAddPanel={this.handleOpenAddPanel}
            handleCloseAddPanel={this.handleCloseAddPanel}
            handleShowPartner={this.handleShowPartner}
            handlePartnerSearch={this.handlePartnerSearch}
            handleAddNewPartner={this.handleAddNewPartner}
          />
        </section>
        <section className='display'>
          <Partner
            chosen={actualChosen}
            editPanelActive={editPanelActive}
            handleOpenEditPartner={this.handleOpenEditPanel}
            handleEditPartner={this.handleEditPartner}
            handleCloseEditPanel={this.handleCloseEditPanel}
            handleDelPartner={this.handleDelPartner}
          />
        </section>
      </div>
    );
  }
}

export default App;