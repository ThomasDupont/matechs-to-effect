import { parseCatFactEffect } from "./effect"

const fetchMock = jest.fn()
describe('test effect', () => {
    it('Should return a value from the effect', async () => {
        fetchMock.mockResolvedValueOnce(Promise.resolve({ fact: "test" }))
        const parseCatFact = await parseCatFactEffect(fetchMock)

        console.log(parseCatFact)
    })
})
