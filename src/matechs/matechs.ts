import { pipe } from "@matechs/core/Function"
import { effect as T } from "@matechs/core"
import { getCatFact } from './services'

export const parseCatFactMatech = pipe(
    getCatFact(),
    T.map(({ fact }) => fact),
    T.mapError(e => {
        console.error('error', e)
        return "No fact found"
    })
)
