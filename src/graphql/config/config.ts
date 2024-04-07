import { Agent } from "https"

const REQUEST_TIMEOUT = 20000
const HTTPS_AGENT = new Agent({ rejectUnauthorized: false })

export {
    REQUEST_TIMEOUT,
    HTTPS_AGENT
}