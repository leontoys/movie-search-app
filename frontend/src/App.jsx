import './App.css'
import SearchForm from './components/SearchForm'

function App() {

  const onSearch = (query)=>{
    console.log(query)
  }

  return (
      <div className='App'>
        <h1>Movie Search App</h1>
        <SearchForm onSearch={onSearch}></SearchForm>
      </div>
  )
}

export default App
