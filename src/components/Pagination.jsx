const Pagination = ({currentPage, setCurrentPage, numPages}) => {
    let m = [...Array(numPages)]
return(
    <ul className="pagination">
        {m.map((_, i) => (
            <li onClick={() => setCurrentPage(i+1)} className={currentPage === i+1 || numPages === 1? "active" : ""}>{i+1}</li>
        ))}
    </ul>
)
}

export default Pagination