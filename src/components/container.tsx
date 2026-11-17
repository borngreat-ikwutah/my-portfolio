import { cn } from '@/lib/utils'

export default function Container({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('mx-auto w-full max-w-3xl px-5', className)} {...props}>
      {children}
    </div>
  )
}
