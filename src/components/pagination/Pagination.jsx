import './styles.css'

// eslint-disable-next-line react/prop-types
export function Pagination ({totalCount, pageSize, currentPage, onPageChange}) {

  const totalPages = Math.ceil(totalCount / pageSize)

  function changePage (page) {
    if (page < 1 || page > totalPages) {
      return;
    }

    onPageChange(page)
  }

  return (
    <div>
      <div>
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          <span>Preview</span>
        </button>
        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          <span>Next</span>
        </button>
      </div>
    </div>
  )
}