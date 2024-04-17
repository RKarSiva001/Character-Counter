import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import WordItem from '../WordItem'

// import './index.css'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    word: '',
    wordsList: [],
  }

  onChangeUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {userInput, word} = this.state

    const newWord = {id: uuidv4(), word: userInput}

    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newWord],
      userInput: '',
      word: '',
    }))
  }

  render() {
    const {userInput, wordsList} = this.state

    return (
      <>
        <div>
          <h1>
            Count the characters like a <br />
            Boss...
          </h1>
          {wordsList.length > 0 ? (
            <ul>
              {wordsList.map(eachWord => (
                <WordItem key={eachWord.id} wordDetails={eachWord} />
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </div>
        <div>
          <h1>Character Counter</h1>
          <form onSubmit={this.onClickAddButton}>
            <input
              type="text"
              onChange={this.onChangeUserInput}
              value={userInput}
              placeholder="Enter the Characters here"
            />
            <button type="button" onClick={this.onClickAddButton}>
              Add
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default CharacterCounter
