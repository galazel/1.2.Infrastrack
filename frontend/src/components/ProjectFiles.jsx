import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

const ACCEPTED_TYPES = {
  "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
}

// Single droppable image slot
function ImageSlot({ image, onAdd, onRemove }) {
  const onDrop = useCallback(
    (accepted) => {
      if (accepted.length) {
        const file = Object.assign(accepted[0], {
          preview: URL.createObjectURL(accepted[0]),
        })
        onAdd(file)
      }
    },
    [onAdd]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxFiles: 1,
    noClick: !!image,
    noDrag: !!image,
  })

  if (image) {
    return (
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
        <img
          src={image.preview}
          alt={image.name}
          className="h-full w-full object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          aria-label={`Remove ${image.name}`}
          className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 hover:bg-red-500"
        >
          ✕
        </button>
      </div>
    )
  }

  return (
    <div
      {...getRootProps()}
      className={`flex aspect-[4/3] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-all duration-200 ${
        isDragActive
          ? "border-indigo-400 bg-indigo-50"
          : "border-slate-300 bg-slate-50 hover:border-indigo-400 hover:bg-indigo-50/50"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-400 transition-colors duration-150 group-hover:bg-indigo-100 group-hover:text-indigo-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <span className="text-sm font-medium text-slate-400">Add image</span>
    </div>
  )
}

// A labeled section (e.g. "Room Layouts") with a dynamic row of slots
function ImageSection({ label, images, onAdd, onRemove }) {
  // Always show filled slots + one empty slot (unless max reached)
  const MAX = 6
  const slots = images.length < MAX ? [...images, null] : images

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm font-semibold text-slate-700">{label}</h4>
      <div className="flex flex-wrap gap-3">
        {slots.map((img, i) =>
          img ? (
            <div key={img.name + i} className="w-[calc(33.333%-0.5rem)] min-w-[140px]">
              <ImageSlot
                image={img}
                onAdd={(file) => onAdd(i, file)}
                onRemove={() => onRemove(i)}
              />
            </div>
          ) : (
            <div key="empty" className="w-[calc(33.333%-0.5rem)] min-w-[140px]">
              <ImageSlot
                image={null}
                onAdd={(file) => onAdd(images.length, file)}
                onRemove={() => {}}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

// Top-level Browse File dropzone (full-width, accepts multiple)
function BrowseZone({ onFiles }) {
  const onDrop = useCallback(
    (accepted) => {
      if (accepted.length) onFiles(accepted)
    },
    [onFiles]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxFiles: 20,
  })

  return (
    <div
      {...getRootProps()}
      className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-8 py-8 transition-all duration-200 ${
        isDragActive
          ? "border-indigo-400 bg-indigo-50"
          : "border-slate-300 bg-slate-50 hover:border-indigo-400"
      }`}
    >
      <input {...getInputProps()} />
      <p className="text-sm text-slate-500">
        Drag files here or click to browse
      </p>
      <button className="rounded-xl border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-150 hover:border-indigo-400 hover:text-indigo-600 active:scale-95">
        Browse File
      </button>
    </div>
  )
}

export default function ProjectFiles({ setPage, handleSubmit, setDetails }) {
  const [sections, setSections] = useState({
    "Room Layouts": [],
    "Floor Plans": [],
    "Blueprints": [],
  })

  const handleBrowse = (files) => {
    // Distribute browsed files into the first section with space
    setSections((prev) => {
      const next = { ...prev }
      let remaining = files.map((f) =>
        Object.assign(f, { preview: URL.createObjectURL(f) })
      )
      for (const key of Object.keys(next)) {
        const space = 6 - next[key].length
        if (space > 0 && remaining.length > 0) {
          next[key] = [...next[key], ...remaining.splice(0, space)]
        }
        if (remaining.length === 0) break
      }
      return next
    })
  }

  const handleAdd = (section, index, file) => {
    setSections((prev) => {
      const imgs = [...prev[section]]
      imgs[index] = Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
      return { ...prev, [section]: imgs }
    })
  }

  const handleRemove = (section, index) => {
    setSections((prev) => {
      const imgs = [...prev[section]]
      URL.revokeObjectURL(imgs[index].preview)
      imgs.splice(index, 1)
      return { ...prev, [section]: imgs }
    })
  }

  return (
    <div className="flex flex-col gap-6">

      <div className="flex flex-col gap-6">
        {Object.entries(sections).map(([label, images]) => (
          <ImageSection
            key={label}
            label={label}
            images={images}
            onAdd={(i, file) => handleAdd(label, i, file)}
            onRemove={(i) => handleRemove(label, i)}
          />
        ))}
      </div>
    </div>
  )
}