import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type FormState = {
  fullName: string
  documentType: string
  documentNumber: string
  userId: string
  password: string
  confirmPassword: string
}

const initialForm: FormState = {
  fullName: '',
  documentType: 'CC',
  documentNumber: '',
  userId: '',
  password: '',
  confirmPassword: '',
}

const documentTypes = ['CC', 'CE', 'Pasaporte']
const LETTERS_ONLY = /[^a-zA-ZÀ-ÿñÑ\s]/g
const DIGITS_ONLY = /\D/g

export default function CollaboratorCreateUser() {
  const [form, setForm] = useState<FormState>(initialForm)
  const logo = '/src/assets/img/pizzeria-logo.svg';

  const passwordIsValid = useMemo(() => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
    return regex.test(form.password)
  }, [form.password])

  const passwordsMatch = form.password.length > 0 && form.password === form.confirmPassword

  const canSubmit =
    form.fullName.trim().length > 0 &&
    form.documentNumber.trim().length > 0 &&
    form.userId.trim().length > 0 &&
    passwordIsValid &&
    passwordsMatch

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = evt.target
    let nextValue = value

    if (name === 'fullName') {
      nextValue = value.replace(LETTERS_ONLY, '')
    }

    if (name === 'documentNumber') {
      nextValue = value.replace(DIGITS_ONLY, '')
    }

    setForm(prev => ({ ...prev, [name]: nextValue }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (!canSubmit) return
    // TODO: Integrate with API
    console.log('Create user payload', form)
  }

  return (
    <section className="collaboratorCreate">
      <div className="collaboratorCreate_card">
        <img src={logo} alt="Pizza Panucci's" className="collaboratorCreate_logo" />
        <h2 className='collaboratorLogin_tittle'>Pizza Panucci's </h2>
        <form className="collaboratorCreate_form" onSubmit={handleSubmit}>
          <label>
            Nombre completo
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              placeholder="Ingresa el nombre completo del colaborador"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Tipo de documento
            <select
              name="documentType"
              value={form.documentType}
              onChange={handleChange}
            >
              {documentTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Número de documento
            <input
              type="text"
              name="documentNumber"
              placeholder="Ingresa el número del documento"
              value={form.documentNumber}
              onChange={handleChange}
              inputMode="numeric"
              required
            />
          </label>

          <label>
            ID de usuario
            <input
              type="text"
              name="userId"
              placeholder="Define un ID único para el colaborador"
              value={form.userId}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="Mínimo 8 caracteres, una mayúscula, símbolo y número"
              value={form.password}
              onChange={handleChange}
              required
            />
            {!passwordIsValid && form.password.length > 0 && (
              <small className="collaboratorCreate_error">
                Debe tener 8 caracteres, una mayúscula, un símbolo y un número.
              </small>
            )}
          </label>

          <label>
            Confirmar contraseña
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repite la contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            {!passwordsMatch && form.confirmPassword.length > 0 && (
              <small className="collaboratorCreate_error">Las contraseñas deben coincidir.</small>
            )}
          </label>

          <button type="submit" className="collaboratorCreate_submit" disabled={!canSubmit}>
            Crear cuenta
          </button>
        </form>

        <p className="collaboratorCreate_login">
          ¿Ya tienes una cuenta? <Link to="/collaborator/login">Ingresa ahora</Link>
        </p>
      </div>
    </section>
  )
}
