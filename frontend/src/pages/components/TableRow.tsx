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
    const url = `http://${import.meta.env.VITE_BACKEND_HOST}/download/${
      file.name
    }`;
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {file.name}
      </TableCell>
      <TableCell>{file.type}</TableCell>
      <TableCell>{file.size}</TableCell>
      <TableCell>{file.uploadDate}</TableCell>
      <TableCell>
        <Button onClick={handleDownload}>Descargar</Button>
      </TableCell>
    </TableRow>
  );
}
