import { Effect as T, pipe } from 'effect';
import { CatFact } from '../api/api';
import { catFactServiceImplement } from './services';

export const parseCatFactEffect = (getCatFact: () => Promise<CatFact>) => pipe(
    catFactServiceImplement(getCatFact),
    T.map(({ fact }) => fact),
    T.catchAll(e => T.logError(e).pipe(T.as("No fact found"))),
    T.runPromise
)
