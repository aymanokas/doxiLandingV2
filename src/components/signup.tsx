import { siteConfig } from '../config/site'
import { supabase } from '../lib/supabase'
import { cn } from '../lib/utils'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as React from 'react'
import * as Yup from 'yup'
import { Icons } from './icons'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignUp({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [authError, setAuthError] = React.useState('')

  const handleFormSubmit = async (
    email: string,
    password: string,
    phone: string
  ) => {
    setIsLoading(true)
    const result = await supabase.auth.signUp({
      email,
      password,
      phone
    })
    if (result.error) {
      setIsLoading(false)
      return
    }
    setPendingVerification(true)
    setIsLoading(false)
  }

  const onPressVerify = async (code: string) => {
    setIsLoading(true)
    const { error: verifyError } = await supabase.auth.verifyOtp({
      token: code,
      type: 'email',
      email: values.email
    })
    const { error, data } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password
    })
    if (error) {
      setAuthError(verifyError?.message || '')
      setIsLoading(false)
      return
    } else {
      await supabase
        .from('users')
        .update({ full_name: values.name, phone_number: values.phone })
        .eq('id', data.user?.id)
      navigate('/')
    }
    setIsLoading(false)
  }
  const onPressResend = async () => {
    setIsLoading(true)
    await supabase.auth.resend({
      type: 'signup',
      email: values.email
    })
    setIsLoading(false)
  }
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Trop court !')
      .max(50, 'Trop long !')
      .required('Ce champ est obligatoire.'),
    phone: Yup.string()
      .min(8, 'Trop court !')
      .max(12, 'Trop long !')
      .required('Ce champ est obligatoire.'),
    email: Yup.string()
      .email('Email invalide')
      .required('Ce champ est obligatoire.'),
    password: Yup.string()
      .min(2, 'Trop court !')
      .max(50, 'Trop long !')
      .required('Ce champ est obligatoire.')
  })

  const CodeSchema = Yup.object().shape({
    code: Yup.string().required('Ce champ est obligatoire.')
  })

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: '',
        phone: '',
        email: '',
        password: ''
      },
      validationSchema: SignupSchema,
      onSubmit: (values) => {
        handleFormSubmit(values.email, values.password, values.phone)
      }
    })

  const {
    values: codeValues,
    errors: codeErrors,
    touched: codeTouched,
    handleSubmit: handleCodeSubmit,
    handleChange: handleCodeChange
  } = useFormik({
    initialValues: {
      code: ''
    },
    validationSchema: CodeSchema,
    onSubmit: (values) => {
      onPressVerify(values.code)
    }
  })

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      {!pendingVerification ? (
        <form onSubmit={handleSubmit}>
          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <Label className='sr-only' htmlFor='name'>
                Nom
              </Label>
              <Input
                id='name'
                placeholder='Nom et prénom'
                type='text'
                autoCapitalize='none'
                autoComplete='name'
                autoCorrect='off'
                disabled={isLoading}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                className={`${
                  errors.name && touched.name ? 'border-rose-500' : ''
                }`}
              />
            </div>
            {errors.name && touched.name ? (
              <p className='text-xs text-rose-500'>{errors.name}</p>
            ) : null}
            <div className='grid gap-1'>
              <Label className='sr-only' htmlFor='phone'>
                Téléphone
              </Label>
              <Input
                id='phone'
                placeholder='06XXXXXXX'
                type='text'
                autoCapitalize='none'
                autoComplete='phone'
                autoCorrect='off'
                disabled={isLoading}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                className={`${
                  errors.phone && touched.phone ? 'border-rose-500' : ''
                }`}
              />
            </div>
            {errors.phone && touched.phone ? (
              <p className='text-xs text-rose-500'>{errors.phone}</p>
            ) : null}
            <div className='grid gap-1'>
              <Label className='sr-only' htmlFor='email'>
                Email
              </Label>
              <Input
                id='email'
                placeholder='name@example.com'
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect='off'
                disabled={isLoading}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                className={`${
                  errors.email && touched.email ? 'border-rose-500' : ''
                }`}
              />
            </div>
            {errors.email && touched.email ? (
              <p className='text-xs text-rose-500'>{errors.email}</p>
            ) : null}
            <div className='grid gap-1'>
              <Label className='sr-only' htmlFor='password'>
                Mot de passe
              </Label>
              <Input
                id='password'
                placeholder='Mot de passe'
                type='password'
                autoCapitalize='none'
                autoComplete='passworn'
                autoCorrect='off'
                disabled={isLoading}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                className={`${
                  errors.password && touched.password ? 'border-rose-500' : ''
                }`}
              />
            </div>
            {errors.password && touched.password ? (
              <p className='text-xs text-rose-500'>{errors.password}</p>
            ) : null}
            <Button type='submit' disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className='mr-2 size-4 animate-spin' />
              )}
              S'inscrire avec Email
            </Button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleCodeSubmit}>
          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <Label className='sr-only' htmlFor='name'>
                Code
              </Label>
              <Input
                id='code'
                placeholder='Code'
                type='text'
                autoCapitalize='none'
                autoCorrect='off'
                disabled={isLoading}
                onChange={handleCodeChange}
                value={codeValues.code}
                className={`${
                  (codeErrors.code && codeTouched.code) || authError
                    ? 'border-rose-500'
                    : ''
                }`}
              />
            </div>
            {(codeErrors.code && codeTouched.code) || authError ? (
              <p className='text-xs text-rose-500'>
                {codeErrors.code || authError}
              </p>
            ) : null}
            <Button type='submit' disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className='mr-2 size-4 animate-spin' />
              )}
              Vérifier le code
            </Button>
            <button
              onClick={() => onPressResend()}
              className='hover:text-primary underline underline-offset-4'
              disabled={isLoading}
            >
              Renvoyer le code
            </button>
          </div>
        </form>
      )}
      {!pendingVerification ? (
        <>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background text-muted-foreground px-2'>
                Vous avez déjà un compte essayez de
              </span>
            </div>
          </div>
          <Button
            onClick={() => navigate(siteConfig.links.signin)}
            variant='outline'
            type='button'
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className='mr-2 size-4 animate-spin' />
            )}
            Se connecter
          </Button>
        </>
      ) : null}
    </div>
  )
}
