import "./styles.css";
import { DataList } from "../../dataList";
import { useState } from "react";
import { Pagination } from "../../components/pagination/Pagination";
export function Home() {
  const pageSize = 10;

  const [page, setPage] = useState(1);

  const totalCount = DataList.length;

  const paginatedList = DataList.slice((page - 1) * pageSize, page * pageSize);

  const handlePageChange = newPage => {
    setPage(newPage)
  }

  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr className="titles">
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {paginatedList.map((user, index) => (
            <tr key={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
      totalCount={totalCount}
      currentPage={page}
      pageSize={pageSize}
      onPageChange={handlePageChange}
      />
    </div>
  );
}
