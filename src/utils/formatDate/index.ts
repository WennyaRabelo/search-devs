import { format } from 'date-fns'

export function formatDate(date: Date) {
  return format(date, "dd/MM/yyyy 'ás' hh:mm")
}