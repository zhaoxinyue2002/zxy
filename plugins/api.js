export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        AuthenticationToken: process.env.TEST_AUTH_TOKEN,
        // AccessToken: '27b34788606c4fbf852f4c704f5d887ac5727cd62459f69a3eb58e559b3a3b6f'
      },
    })

    api.setBaseURL(process.env.APP_API_ENDPOINT)  
    inject('api', api)
}