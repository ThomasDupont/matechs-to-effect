import { effect as T, option as O, service as S } from "@matechs/core"
import { CatFact } from "../api/api"

const catFactService = S.define({
    catFact: {
        getCatFact : S.fn<() => T.AsyncE<Error, CatFact>>()
    }
})

export const WithCatFactService = (getter: () => Promise<CatFact>) => S.implement(catFactService)({
    catFact: {
        getCatFact: () => T.fromPromiseMap(e => new Error(JSON.stringify(e)))(getter)
    }
})

export const {
    catFact: {
        getCatFact
    }
} = S.access(catFactService)
