"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/json": [".json"],
      "text/csv": [".csv"],
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        // Handle successful upload
        console.log("File uploaded successfully")
        // Redirect to chat page or show success message
      } else {
        // Handle error
        console.error("Upload failed")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Upload Your Resume</CardTitle>
          <CardDescription>Supported formats: PDF, DOCX, JSON, CSV</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="resume">Resume</Label>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer ${
                    isDragActive ? "border-primary" : "border-muted-foreground"
                  }`}
                >
                  <Input id="resume" {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>Drag 'n' drop your resume here, or click to select files</p>
                  )}
                </div>
                {file && <p className="text-sm text-muted-foreground mt-2">Selected file: {file.name}</p>}
              </div>
              <Button type="submit" disabled={!file}>
                Upload and Analyze
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

