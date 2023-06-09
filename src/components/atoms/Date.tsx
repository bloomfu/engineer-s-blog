import { parseISO, format } from 'date-fns'

interface DateProps {
  dateString: string
  className?: string
}

export default function Date({ dateString }: DateProps): any {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
