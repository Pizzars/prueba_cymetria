import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Params {
  href: string
  text: string
}

const LinkHeader = ({ href, text }: Params) => {
  const pathname = usePathname()
  return (
    <Link href={`${href}`} shallow>
      <div
        className={`${
          pathname === href ? 'text-primary drop-shadow-sm' : 'text-secondary'
        } text-2xl my-4 md:my-0 md:text-sm md:ml-12 hover:text-primary font-bold`}
      >
        {text}
      </div>
    </Link>
  )
}

export default LinkHeader
