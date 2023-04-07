import React from 'react'
function Categories({value,changeCategory}){
  
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
    return (
        <div className="categories">
              <ul>
                {categories.map((obj,index)=>(
                  <li key={index} onClick={()=>changeCategory(index)} className={value === index ? 'active':''} >{obj}</li>
                ))}
              </ul>
            </div>
    )
}
export default Categories
