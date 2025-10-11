import { Button, TableCell, TableRow } from "flowbite-react";

export interface FileType {
  name: string;
  type: string;
  size: number;
  uploadDate: string;
}

interface CustomTableRowProps {
  file: FileType;
}

export default function CustomTableRow({ file }: CustomTableRowProps) {
  const handleDownload = () => {
    console.log("descargando");
  };

  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {file.name}
      </TableCell>
      <TableCell>{file.type}</TableCell>
      <TableCell>{file.size}</TableCell>
      <TableCell>{file.uploadDate}</TableCell>
      <Button onClick={handleDownload}>Descargar {file.name}</Button>
    </TableRow>
  );
}
