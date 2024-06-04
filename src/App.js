import Collection from './components/Collection';
import Pagination from './components/Pagination';
import './index.css';
import data from "./data/data.json"
import { useState } from 'react';

function App() {
  const [collection,setCollections] = useState(data)
  const [searchValue,setSearchValue] = useState("")
  const [categoryId,setCategoryId] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  let numPages = Math.ceil(collection.collections.filter(
    (item) => {
      return (
        (categoryId === 0 || categoryId === item.category) &&
        (searchValue ? item.name.toLowerCase().includes(searchValue.toLowerCase()) : true)
      )
    }
  ).length/itemsPerPage)
return (
  <div className='App'>
    <h1>Моя коллекция фотографий</h1>
    <div className='top'>
      <ul className='tags'>
        {collection.categories.map((item, index) => (
          <li onClick={() => {
            setCategoryId(index)
            if(item.name !== "Все"){
              return setCurrentPage(1)
            }
          }} className={index === categoryId ? "active" : ""} key={index}>{item.name}</li>
        ))}
      </ul>
      <input placeholder='Поиск по названию' className='search-input' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}></input>
    </div>
    <div className='content'>
      {collection.collections.filter((item) => {
        return (
          (categoryId === 0 || categoryId === item.category) && 
          (searchValue ? item.name.toLowerCase().includes(searchValue.toLowerCase()) : true)
        )
      })
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map((item) => (
        <Collection name={item.name} images={item.photos}/>
      ))}
    </div>
    {numPages && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numPages={numPages}/>}
  </div>
)
}

export default App;
