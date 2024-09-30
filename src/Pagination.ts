class Pagination {
    private currentPage: number
    private itemsPerPage: number
    private totalItems: number
    private isInfinitely: boolean

    constructor(
        totalItems: number,
        itemsPerPage: number = 10,
        isInfinitely: boolean = false
    ) {
        this.totalItems = totalItems
        this.itemsPerPage = itemsPerPage
        this.currentPage = 1
        this.isInfinitely = isInfinitely
    }

    public getCurrentPage(): number {
        return this.currentPage
    }

    public nextPage(): void {
        if (this.currentPage < this.getTotalPages()) {
            this.currentPage++
        } else if (this.isInfinitely) {
            this.currentPage = 1
        }
    }

    public prevPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--
        } else if (this.isInfinitely) {
            this.currentPage = this.getTotalPages()
        }
    }

    public goToPage(page: number): void {
        if (page >= 1 && page <= this.getTotalPages()) {
            this.currentPage = page
        }
    }

    public getTotalPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage)
    }

    public getStartIndex(): number {
        return (this.currentPage - 1) * this.itemsPerPage
    }

    public getEndIndex(): number {
        return Math.min(
            this.getStartIndex() + this.itemsPerPage - 1,
            this.totalItems - 1
        )
    }
}

export default Pagination
