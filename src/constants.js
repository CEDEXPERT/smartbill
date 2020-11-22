export const ACCOUNT_NUMBERS = [
    401,
    4111,
    404,
    462,
    461,
    408,
    418,
    403,
    413,
    4091,
    4092,
    419,
]

export const ACCOUNTS_INITIAL_VALUE = () => {
    const obj = {}
    ACCOUNT_NUMBERS.forEach(n => obj[`acc${n}`] = '')
    return obj
}
