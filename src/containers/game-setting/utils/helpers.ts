import { SelectOption } from 'components/select/utils/types'
import { Pony } from 'types/pony'

export function getSelectOptionsForPony(): SelectOption<Pony>[] {
  return Object.values(Pony).map((pony) => ({
    label: pony,
    value: pony,
  }))
}
