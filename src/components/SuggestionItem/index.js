// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {SuggestionDetails, updatesearchInput} = props
  const {suggestion} = SuggestionDetails

  const onClickSuggestion = () => {
    updatesearchInput(suggestion)
  }

  return (
    <li className="list-items">
      <p className="para1">{suggestion}</p>
      <button type="button" className="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="img3"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
