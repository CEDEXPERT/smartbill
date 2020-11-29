export const ACCOUNT_NUMBERS = [
    401,
    4111,
    403,
    404,
    408,
    413,
    4091,
    4092,
    418,
    419,
    461,
    462
]

export const ACCOUNTS_INITIAL_VALUE = () => {
    const obj = {}
    ACCOUNT_NUMBERS.forEach(n => obj[`acc${n}`] = '')
    return obj
}
