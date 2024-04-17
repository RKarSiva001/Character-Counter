const WordItem = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <li>
      <p>
        {word} : {word.length}
      </p>
    </li>
  )
}

export default WordItem
