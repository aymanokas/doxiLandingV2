import { Icons } from '../components/icons'
import SignIn from '../components/signin'
import { siteConfig } from '../config/site'


export default function AuthenticationPage() {
  return (
    <div className='container flex h-[99vh] items-center justify-center p-6'>
      <div className='relative container grid h-[800px] flex-col items-center justify-center rounded-lg border-2 lg:max-w-none lg:px-0'>
        <a
          href='/'
          className='absolute top-4 left-4 flex items-center text-lg font-medium md:top-8 md:left-8'
        >
          <Icons.logo className='size-6' />
          <span className='ml-2 inline-block font-bold'>{siteConfig.name}</span>
        </a>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Connectez-vous à votre compte
              </h1>
              <p className='text-muted-foreground text-sm'>
                Entrez votre email et votre mot de passe ci-dessous pour accéder
                à votre compte
              </p>
            </div>
            <SignIn />
            <p className='text-muted-foreground px-8 text-center text-sm'>
              En cliquant sur continuer, vous acceptez notre{' '}
              <a
                href='/terms'
                className='hover:text-primary underline underline-offset-4'
              >
                Conditions d'utilisation
              </a>{' '}
              et{' '}
              <a
                href='/privacy'
                className='hover:text-primary underline underline-offset-4'
              >
                Politique de confidentialité
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
