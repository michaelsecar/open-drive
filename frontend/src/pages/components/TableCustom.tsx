import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect, useState } from "react";
import type { FileType } from "./TableRow";
import CustomTableRow from "./TableRow";

export default function TableCustom() {
  const [files, setFiles] = useState<FileType[]>([]);

  const fetchFiles = async () => {
    const response = await fetch("http://localhost:3000/list");
    const data = await response.json();
    setFiles(data);
  };
  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="overflow-x-auto">
      {files.length == 0 ? (
        <div className="text-gray-300 font-light">
          No se han encontrado archivos en el sistema
          <Button onClick={fetchFiles}>Recargar</Button>
        </div>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell>Color</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {files.map((file) => {
              return <CustomTableRow key={file.name} file={file} />;
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
