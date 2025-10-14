import {
  Button,
  FileInput,
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
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const fetchFiles = async () => {
    const response = await fetch(
      `http://${import.meta.env.VITE_BACKEND_HOST}/list`
    );
    const data = await response.json();
    setFiles(data);
  };

  const uploadFileToServer = async () => {
    if (!uploadFile) {
      alert("Seleccione un archivo");
      throw new Error("No se ha seleccionado un archivo");
    }
    const formData = new FormData();
    formData.append("file", uploadFile!);
    const response = await fetch(
      `http://${import.meta.env.VITE_BACKEND_HOST}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data == "ok") {
      alert("Archivo subido correctamente");
      fetchFiles();
    } else {
      alert("No se ha podido subir el archivo");
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    setUploadFile(file);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-5 pb-5">
        <FileInput accept="*" onChange={handleUpload} />
        <Button onClick={uploadFileToServer}>Subir</Button>
        <Button onClick={fetchFiles}>Actualizar</Button>
      </div>

      {files.length == 0 ? (
        <div className="text-gray-300 font-light">
          No se han encontrado archivos en el sistema
        </div>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Nombre</TableHeadCell>
              <TableHeadCell>Tipo</TableHeadCell>
              <TableHeadCell>Tamaño</TableHeadCell>
              <TableHeadCell>Última modificación</TableHeadCell>
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
