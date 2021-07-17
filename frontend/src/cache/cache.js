import { makeVar } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'

export const filtersVar = makeVar([])

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                filters: {
                    read() {
                        return filtersVar()
                    }
                }
            }
        }
    }
})