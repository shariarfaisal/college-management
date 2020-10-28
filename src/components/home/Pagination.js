import React from 'react'

function Pagination({ limit, page, loading, nextBtn, dataLength, pageHandler }) {
  return(
    !(dataLength < limit && page === 1) ? <div className="d-flex justify-content-center m-4">
      <button
        onClick={() => pageHandler('prev')}
        disabled={page <= 1 || loading}
        type="button"
        className="btn btn-warning outline-0 px-4 rounded-20 mx-3 d-flex align-items-center">
          <i className="bx bx-left-arrow-circle ml-1"></i>
          Prev
      </button>
      <button
        disabled={loading || dataLength < limit || !nextBtn}
        onClick={() => pageHandler('next')}
        type="button"
        className="btn btn-info outline-0 px-4 rounded-20 mx-3  d-flex align-items-center">
          Next
          <i className="bx bx-right-arrow-circle ml-1"></i>
      </button>
    </div>: null
  )
}
export default Pagination
