export default class ENV {

    // For UI tests
    public static TRELLO_PASSWORD = process.env.trelloPassword
    // For API tests
    public static TRELLO_KEY = process.env.key
    public static TRELLO_TOKEN = process.env.token
    // For applitools
    public static APPLITOOLS_API_KEY = process.env.apiKey
}
    