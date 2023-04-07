import React from 'react'
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sceleton from '../components/PizzaBlock/Sceleton';
import Sort from '../components/Sort';
import '../scss/app.scss';
import Pagination from '../components/PaginationPage/Pagination';
import { MyContext } from '../App';
import { useSelector,useDispatch } from 'react-redux';
import {setCategoryId,setSortItem} from '../redux/slices/filterSlice'


 

function Home(){
  const dispatch = useDispatch()
  const categoryId = useSelector((state) => state.filterSlice.categoryId)
  const sortItem = useSelector((state) => state.filterSlice.sort)
  


  const changeCategoryId = (id) =>{
    dispatch(setCategoryId(id))
  }

  const changeSortItem = (item) =>{
    dispatch(setSortItem(item))
  } 



    const [items,setItems] = React.useState([])
    const [isLoading,setIsLoading ] = React.useState(true)
    const [currentPage,setCurrentPage] = React.useState(1)
    const {searchValue} = React.useContext(MyContext)
    console.log(searchValue);
    React.useEffect(() =>{
      setIsLoading(true)
      fetch(`https://6424fff97ac292e3cff5a2fe.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}`: `` }&sortBy=${sortItem.sortType}&order=asc` ).then((res)=>res.json()).then((obj) => setItems(obj),
      setIsLoading(false) 
      ) 
    },[categoryId,sortItem,currentPage] )

    const pizzas = items.filter((obj) => (obj.title.toLowerCase().includes(searchValue.toLowerCase()))).map((object,index) => (
        <PizzaBlock key={index} title={object.title} price ={object.price} imgUrl={object.imageUrl} types = {object.types} sizes = {object.sizes}  />
      ))

    const sceleton = [...Array(items.length)].map((_,index) =>(<Sceleton key = {index} />))
    return(
        <div className='container'>
        <div className="content__top">
        <Categories value = {categoryId} changeCategory = {(id) =>changeCategoryId(id)  } />
        <Sort sortValue = {sortItem} changeSortValue = {(id) =>changeSortItem(id)}  />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
         isLoading ? sceleton :  pizzas
        }
      </div>
      <Pagination onChangePage = {(number) =>setCurrentPage(number)}  />
      </div>
    )
}

export default Home
