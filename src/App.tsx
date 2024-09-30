import './App.css'
import usePagination from './hooks/usePagination'
interface IApp {
    items: string[]
}

function App({ items }: IApp) {
    // set Infinitely
    const isInfinitely = false
    const {
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
        startIndex,
        endIndex,
    } = usePagination(items.length, 5, isInfinitely)
    const currentItems = items.slice(startIndex, endIndex + 1)

    const renderPageNumbers = () => {
        const pageNumbers = []
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={i === currentPage ? 'active' : ''}
                    style={{
                        margin: '0 5px',
                        padding: '8px 12px',
                        backgroundColor:
                            i === currentPage ? '#007bff' : '#f1f1f1',
                        color: i === currentPage ? 'white' : 'black',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                >
                    {i}
                </button>
            )
        }
        return pageNumbers
    }

    const goForwardMultiple = () => {
        const newPage = Math.min(currentPage + 2, totalPages)
        goToPage(newPage)
    }

    const goBackMultiple = () => {
        const newPage = Math.max(currentPage - 2, 1)
        goToPage(newPage)
    }

    return (
        <>
            <h1>List of animals</h1>
            <table style={{ margin: '0 auto' }}>
                <tr>
                    <th>Name</th>
                </tr>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                ))}
            </table>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '3rem',
                }}
            >
                <button onClick={goBackMultiple} disabled={currentPage <= 2}>
                    &laquo; -2
                </button>

                <button
                    onClick={prevPage}
                    disabled={!isInfinitely ? currentPage == 1 : false}
                >
                    &laquo;
                </button>

                <div style={{ display: 'flex', overflowX: 'auto' }}>
                    {renderPageNumbers()}
                </div>

                <button
                    onClick={nextPage}
                    disabled={
                        !isInfinitely ? currentPage === totalPages : false
                    }
                >
                    &raquo;
                </button>

                <button
                    onClick={goForwardMultiple}
                    disabled={currentPage > totalPages - 2}
                >
                    +2 &raquo;
                </button>
            </div>
        </>
    )
}

export default App
