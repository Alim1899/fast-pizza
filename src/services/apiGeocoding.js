export async function getAddress({ latitude, longitude }) {
    const res = await fetch(
        `https://api-bdc.net/data/ip-geolocation?ip=193.114.112.122&localityLanguage=en&key=bdc_81c60d7675354accab16676e42533c2e`
    )
    if (!res.ok) throw Error('Failed getting address')

    const data = await res.json()
    return data
}
