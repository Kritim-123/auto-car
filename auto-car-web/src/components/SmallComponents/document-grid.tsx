import { Card, CardContent, CardTitle } from "@/components/ui/card";

const files = [
  { name: "Project Proposal", url: "/docs/Project Proposal .pdf" },
  { name: "Info on BEV", url: "/docs/BEV.docx" },
];

export default function DocumentGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {files.map((file, index) => (
        <Card key={index} className="p-4 text-center">
          <CardTitle>{file.name}</CardTitle>
          <CardContent>

            <a href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all">
             Open File
            </a>
              
           
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
