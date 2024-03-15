import './styles.css'

// eslint-disable-next-line react/prop-types
export function Pagination ({totalCount, pageSize, currentPage, onPageChange}) {

  const totalPages = Math.ceil(totalCount / pageSize);
  const initialPage = 1;

  function changePage (page) {
    if (page < 1 || page > totalPages) {
      return;
    }

    onPageChange(page)
  }

  function renderPageButton(pageNumber) {
    return (
      <button onClick={() => changePage(pageNumber)}>{pageNumber}</button>
    )
  }

  function renderEllipsisButton(position) {
    return (
      <button onClick={() => changePage(position)} className="ellipsis">
        ...
      </button>
    );
  }

  return (
   

    <div className='wrapper'>
      <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
        <span className="sr-only">Anterior</span>
      </button>

      {currentPage > 1 && renderPageButton(initialPage)}

      {currentPage > 2 && currentPage < 4 && renderPageButton(initialPage + 1)}

      {currentPage > 3 && renderEllipsisButton(currentPage - 1)}

      {currentPage === totalPages && renderPageButton(totalPages - 2)}

      {currentPage > 3 && renderPageButton(currentPage - 1)}

      <button className="buttonCurrentPage">{currentPage}</button>

      {currentPage + 1 < totalPages && renderPageButton(currentPage + 1)}

      {currentPage + 2 < totalPages && (!(currentPage < totalPages - 2) || currentPage === 1) && renderPageButton(currentPage + 2)}

      {currentPage < totalPages - 2 && renderEllipsisButton(currentPage + 1)}

      {currentPage < totalPages && renderPageButton(totalPages)}

      <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
        <span className="sr-only">Próximo</span>
      </button>
    </div>

  )
}