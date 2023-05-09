
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

const PaginationStyled = styled.nav`
`

function Pagination({ setPageNumber, info }) {
    return (
        <PaginationStyled>
            <ReactPaginate
                className='pagination justify-content-center'
                previousLabel='Prev'
                nextLabel='Next'
                previousClassName='btn page-item'
                nextClassName='btn page-item'
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
                pageClassName='btn page-item'
                pageLinkClassName='page-link' 
                activeClassName='active'
                onPageChange={(data) => setPageNumber(data.selected + 1)}
                pageCount={Math.ceil(info?.pages)}
            />
        </PaginationStyled>
    )
}

export default Pagination
