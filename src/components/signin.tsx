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

export default function SignIn({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [authError, setAuthError] = React.useState('')
  const navigate = useNavigate()
  const handleFormSubmit = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (!error) {
        navigate('/')
      } else {
        setAuthError(error.message)
        setIsLoading(false)
      }
    } catch (err: any) {
      setIsLoading(false)
    }
  }

  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required.'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('This field is required.')
  })
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      handleFormSubmit(values.email, values.password)
    }
  })

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              onChange={handleChange}
              value={values.email}
              className={`${
                (errors.email && touched.email) || authError
                  ? 'border-rose-500'
                  : ''
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
              onChange={handleChange}
              value={values.password}
              className={`${
                (errors.password && touched.password) || authError
                  ? 'border-rose-500'
                  : ''
              }`}
            />
          </div>
          {errors.password && touched.password ? (
            <p className='text-xs text-rose-500'>{errors.password}</p>
          ) : null}
          {authError ? (
            <p className='text-xs text-rose-500'>{authError}</p>
          ) : null}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 size-4 animate-spin' />
            )}
            {'Se Connecter'}
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background text-muted-foreground px-2'>
            Vous n'avez pas de compte
          </span>
        </div>
      </div>
      <Button
        onClick={() => navigate(siteConfig.links.signup)}
        variant='outline'
        type='button'
        disabled={isLoading}
      >
        {isLoading && <Icons.spinner className='mr-2 size-4 animate-spin' />}
        S'inscrire
      </Button>
    </div>
  )
}
