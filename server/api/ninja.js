export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { conversion_rates: conversionRates } = await $fetch(
    'https://v6.exchangerate-api.com/v6/c9db7a4d1c1ca09a1c5d6cd9/latest/TWD'
  )

  return conversionRates
})
