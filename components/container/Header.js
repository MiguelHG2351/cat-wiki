import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="py-3">
      <Link href="/">
        <Image priority={true} src={ '/icons/CatwikiLogo.svg' } width={ 128 } height={ 43 } alt="Imagen del gato" />
      </Link>
    </header>
  )
}
