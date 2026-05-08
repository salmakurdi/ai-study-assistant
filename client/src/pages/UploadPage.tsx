import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Eye, Trash2, CloudUpload } from "lucide-react";

const mockFiles = [
  { id: 1, name: "Machine Learning - Week 5.pdf", size: "2.4 MB", date: "Apr 7, 2026", pages: 24 },
  { id: 2, name: "Data Structures - Trees.pdf", size: "1.8 MB", date: "Apr 6, 2026", pages: 18 },
  { id: 3, name: "Linear Algebra - Eigenvalues.pdf", size: "3.1 MB", date: "Apr 4, 2026", pages: 32 },
];

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);

  return (
    <DashboardLayout title="Upload Lecture" subtitle="Upload your lecture PDFs for AI processing">
      <div className="max-w-4xl space-y-6">
        {/* Drop zone */}
        <Card
          className={`border-2 border-dashed p-12 text-center transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-border"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
        >
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CloudUpload className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              Drop your PDF here
            </h3>
            <p className="text-sm text-muted-foreground mb-4">or click to browse files (PDF, up to 50MB)</p>
            <Button>
              <Upload className="mr-2 h-4 w-4" /> Choose File
            </Button>
          </div>
        </Card>

        {/* File list */}
        <Card className="p-6">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Uploaded Files</h3>
          <div className="space-y-3">
            {mockFiles.map((f) => (
              <div key={f.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{f.name}</p>
                    <p className="text-xs text-muted-foreground">{f.size} · {f.pages} pages · {f.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UploadPage;
