import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../../api'
// import { connect } from 'react-redux'

const ActionWrapper = styled.div`
  padding-top: 15px;
`

const DataField = styled.fieldset`
  padding: 15px;
`

const DataSection = ({ actions, title, children }) => (
  <DataField>
    <legend> {title} </legend>
    <br /> {children} <br />
    {actions && actions.map(action => <span>{action}&nbsp;</span>)}
  </DataField>
)

class TestPage extends Component {

  state = { projects: [] }
  
  componentWillMount() {
    api.projects
      .fetchAll()
      .then(projects => this.setState({projects}))
  }
  

  render() {
    return (
      <div>
        <div style={{ padding: 100 }}>
          <DataSection title="Projects">
            {/* {getContent(projects)} */}
            <ActionWrapper>
              <button onClick={this.onPostProjectClick}> POST </button>
              <button onClick={this.onPutProjectClick}> PUT </button>
              <button onClick={this.onPutProjectClick2}> PUT 2 </button>
              <button onClick={this.onDeleteProjectClick}> DELETE </button>
            </ActionWrapper>
          </DataSection>
          {/* <DataSection title="Languages">{getContent(languages)}</DataSection> */}
          {/* <DataSection title="Extern Result"> */}
          {/* {JSON.stringify(externalResult)} */}
          {/* </DataSection> */}
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   projects: state.projects
// })

// const mapDispatchToProps = dispatch => ({

// })

export default TestPage
