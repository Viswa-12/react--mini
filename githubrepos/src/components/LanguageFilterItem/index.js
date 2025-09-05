// Write your code here
import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  render() {
    const {properties, activeTabId, onClick} = this.props
    const {id, language} = properties
    const applyClass = id === activeTabId ? 'activeTab' : 'normalTab'
    return (
      <button className={applyClass} type="button" onClick={() => onClick(id)}>
        {language}
      </button>
    )
  }
}

export default LanguageFilterItem
