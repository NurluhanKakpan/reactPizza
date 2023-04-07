import ReactPaginate from "react-paginate"
import '../../scss/app.scss'


const Pagination = ({onChangePage}) =>{
    return(
        <ReactPaginate
        className="pagin"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected+1) }
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    )
}

export default Pagination