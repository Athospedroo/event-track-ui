import { REGEX_DOMAIN } from "./regex"

export function checkEmpty(paramether: any) {
  if (typeof paramether === 'string') {
    paramether = paramether.trim() // eslint-disable-line no-param-reassign
  }

  return ((paramether === '') || (paramether === undefined))
}

export function checkEmptyFields(paramethers: any): boolean {
  const paramether = paramethers[0]

  if (paramethers.length <= 1) {
    return ((paramether === '') || (paramether === undefined))
  }

  paramethers.shift()
  return ((paramether === '') || (paramether === undefined)) || checkEmptyFields(paramethers)
}

export function checkBooleanEmpty(paramether: any) {
  return paramether === undefined || paramether === null
}

export function checkStringEmpty(paramether: any) {
  return paramether === undefined || paramether === null || paramether.trim() === ''
}

export function checkNumberEmpty(paramether: any) {
  return paramether === undefined || paramether === null || Number.isNaN(paramether)
}

export function checkEmptyList(paramether: any) {
  return paramether === undefined || paramether === null || paramether.length === 0
}

export function validateEmail(email: any) {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase());
}

export function checkEmptyDate(paramether: any) {
  return paramether === undefined || paramether === null
}

export function validatePhoneWithDDI(phone: any) {
  const regex = /^(\+?\d{2,3}\s*)?\s?(\(\d{2,3}\)|\d{2,3}\s*)\s?(\d{4,5}\s*-?\s*\d{4})$/
  return regex.test(phone)
}

export function validateBirthDate(birthDate: any) {
  const regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/
  return regex.test(birthDate)
}

export function validatePhoneWithoutDDI(phone: any) {
  const regex = /^(\(\d{2,3}\)|\d{2,3}\s*)\s?(\d{4,5}\s*-?\s*\d{4})$/
  return regex.test(phone)
}

export function validateDomain(domain: string) {
  const regex = /((?:https|http)?:\/\/)?(?:\w[\w.-]*)(?::\d+)?(?:\/[\w/#-]*)?(?=\s|,|$)/
  return regex.test(domain)
}
