import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

const ACCEPTED_TYPES = {
  "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
}

function FileUpload() {
  const [image, setImage] = useState(null)
  const [error, setError] = useState("")

  const onDrop = useCallback((accepted, rejected) => {
    setError("")
    if (rejected.length) {
      setError(`Only image files are allowed. Skipped: ${rejected.map((f) => f.file.name).join(", ")}`)
    }
    if (accepted.length) {
      if (image) URL.revokeObjectURL(image.preview)
      const file = Object.assign(accepted[0], { preview: URL.createObjectURL(accepted[0]) })
      setImage(file)
    }
  }, [image])

  const removeImage = () => {
    if (image) URL.revokeObjectURL(image.preview)
    setImage(null)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxFiles: 1,
  })

  return (
    <div className="w-full">
      <div className="w-full rounded-[20px] bg-[#f4f7fb] p-10">
        {!image ? (
          <div
            {...getRootProps()}
            className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-[14px] border-2 border-dashed px-6 py-10 transition-all duration-200 ${
              isDragActive
                ? "border-indigo-500 bg-indigo-500/5"
                : "border-[#b0bcd4] hover:border-indigo-400"
            }`}
          >
            <input {...getInputProps()} />
            <div className="relative h-14 w-16" aria-hidden="true">
              <div className="absolute top-0 left-1 h-2.5 w-7 rounded-t-md bg-indigo-500 opacity-85" />
              <div className="absolute bottom-0 left-0 h-[46px] w-16 rounded-tl-sm rounded-tr-[10px] rounded-b-[10px] bg-indigo-600" />
            </div>
            <p className="m-0 text-center text-[15px] leading-relaxed text-gray-500">
              Drag your photo here to start uploading.
            </p>
            <p className="m-0 text-xs text-gray-400">PNG, JPG, GIF, WEBP supported</p>
            <div className="flex w-3/5 items-center gap-2.5">
              <div className="h-px flex-1 bg-[#c5cdd8]" />
              <span className="text-xs tracking-wide text-gray-400">OR</span>
              <div className="h-px flex-1 bg-[#c5cdd8]" />
            </div>
            <button
              className="rounded-xl bg-indigo-600 px-9 py-3 text-[15px] font-medium text-white transition-all duration-150 hover:bg-indigo-700 active:scale-95"
            >
              Browse files
            </button>
          </div>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-[14px] bg-slate-200">
            <img
              src={image.preview}
              alt={image.name}
              className="h-full w-full object-cover"
            />
            <button
              onClick={(e) => { e.stopPropagation(); removeImage() }}
              aria-label={`Remove ${image.name}`}
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/55 text-xs text-white transition-colors duration-150 hover:bg-red-500"
            >
              ✕
            </button>
          </div>
        )}

        {error && (
          <p className="mt-2 text-center text-xs text-red-500">{error}</p>
        )}
      </div>
    </div>
  )
}

export default FileUpload