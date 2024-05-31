import { Effect, Context } from "effect"

import { CatFact } from "../api/api"
import { UnknownException } from "effect/Cause"

class CatFactService extends Context.Tag("catFact")<
    CatFactService,
  { getCatFact: Effect.Effect<CatFact, UnknownException, never> }
>() {}

export const catFactService = CatFactService.pipe(
    Effect.andThen(service => service.getCatFact)
)

export const catFactServiceImplement = (getter: () => Promise<CatFact>) => Effect.provideService(catFactService, CatFactService, {
    getCatFact: Effect.tryPromise(getter)
})
