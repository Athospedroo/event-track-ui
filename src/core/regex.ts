const REGEX_EMAIL = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
const REGEX_CPF_CNPJ = /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/
const REGEX_TELEPHONE = /^(\+?\d{2}\s*)?(\(?\d{2}\)?\s*)?(\d{4,5}-?\d{4})$/
const REGEX_DOMAIN = /((?:https|http)?:\/\/)?([^,\s]+\.[^,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/
const REGEX_IMAGE_JPEG_PNG = /([0-9a-zA-Z\._-]+.(png|PNG|jp[e]?g|JP[E]?G))/
const REGEX_VIDEO_3GPP_MP4 = /([0-9a-zA-Z\._-]+.(mp4|MP4|3gp|3GP|3g2|3G2))/
const REGEX_METADATA = /[*|\":<>[\]{}`\\() ';@&$]/

export {
  REGEX_EMAIL,
  REGEX_CPF_CNPJ,
  REGEX_TELEPHONE,
  REGEX_DOMAIN,
  REGEX_IMAGE_JPEG_PNG,
  REGEX_VIDEO_3GPP_MP4,
  REGEX_METADATA
}