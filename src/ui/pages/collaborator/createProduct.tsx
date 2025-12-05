import { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

export default function CollaboratorCreateProduct() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [fileName, setFileName] = useState('')

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const nextUrl = URL.createObjectURL(file)
    setPreviewUrl(prev => {
      if (prev) URL.revokeObjectURL(prev)
      return nextUrl
    })
    setFileName(file.name)
  }

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  return (
    <section className="collaboratorCreateProduct">
      <div className="collaboratorCreateProduct_card">
        <button
          type="button"
          className={`collaboratorCreateProduct_upload${previewUrl ? ' collaboratorCreateProduct_upload--preview' : ''}`}
          onClick={handleUploadClick}
        >
          {previewUrl ? (
            <img src={previewUrl} alt={fileName || 'Previsualización del producto'} />
          ) : (
            <>
              <i className="fa-solid fa-upload" aria-hidden="true"></i>
              <span>Cargar la imagen</span>
            </>
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleFileChange}
        />

        {fileName && <p className="collaboratorCreateProduct_filename">{fileName}</p>}

        <form className="collaboratorCreateProduct_form" onSubmit={e => e.preventDefault()}>
          <label>
            Nombre del producto
            <input type="text" placeholder="Ingresa el nombre del producto." />
          </label>

          <label>
            Precio del producto
            <input type="text" placeholder="Ingresa precio del producto." />
          </label>

          <label>
            Descripción del producto
            <textarea placeholder="Ingresa la descripción o los ingredientes del producto." />
          </label>

          <button
            type="button"
            className="collaboratorCreateProduct_submit"
            onClick={() => {
              Swal.fire({
                title: 'Producto creado',
                text: 'El producto se registró correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
              })
            }}
          >
            Crear producto
          </button>
        </form>
      </div>
    </section>
  )
}
