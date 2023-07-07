function MyButton() {
  const [ liked, setLiked ] = React.useState(0)

  if (liked) {
    return 'React me esa gustando!'
  }
  
  // JSX
  return <button onClick={() => setLiked(true)}>Púlsame</button>

  // return React.createElement(
  //   'button',
  //   { onClick: () => setLiked(true)},
  //   React.createElement(
  //     'span',
  //     {},
  //     'Púlsame'
  //   )
  // )
}

const rootNode = document.querySelector('#root')
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(MyButton))
