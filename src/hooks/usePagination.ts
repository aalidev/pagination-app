import { useState } from 'react'
import Pagination from '../Pagination'

function usePagination(
    totalItems: number,
    itemsPerPage: number,
    isInfinity: boolean
) {
    const [pagination] = useState(
        new Pagination(totalItems, itemsPerPage, isInfinity)
    )

    const [currentPage, setCurrentPage] = useState(pagination.getCurrentPage())
    const totalPages = pagination.getTotalPages()

    const nextPage = () => {
        pagination.nextPage()
        setCurrentPage(pagination.getCurrentPage())
    }

    const prevPage = () => {
        pagination.prevPage()
        setCurrentPage(pagination.getCurrentPage())
    }

    const goToPage = (page: number) => {
        pagination.goToPage(page)
        setCurrentPage(pagination.getCurrentPage())
    }

    const startIndex = pagination.getStartIndex()
    const endIndex = pagination.getEndIndex()

    return {
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
        startIndex,
        endIndex,
    }
}

export default usePagination
