export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`container max-w-[1024px] m-auto px-5 ${className}`}>{children}</div>
  )
}