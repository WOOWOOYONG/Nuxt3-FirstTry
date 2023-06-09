export default defineEventHandler(async (event) => {
  const { code } = event.context.params!
  const { currencyKey }: { currencyKey: string } = useRuntimeConfig()

  const uri = `https://v6.exchangerate-api.com/v6/${currencyKey}/latest/${code}`

  const { conversion_rates: conversionRates } = await ($fetch(uri) as Promise<{
    conversion_rates: ConversionRates
  }>)

  return conversionRates
})
