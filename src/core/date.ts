import { DateTime, Duration, Settings } from "luxon"
import { checkNumberEmpty } from "./validate";

Settings.defaultZone = 'America/Recife'
Settings.defaultLocale = 'pt'

function getCurrentDate(): DateTime {
  return DateTime.local()
}

function getCurrentDateToFormat(): string {
  return DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss');
}

function getDatePlusMinutes(minutes: number): DateTime {
  return DateTime.local().plus(Duration.fromObject({ minutes }))
}

function getDatePlusHours(hours: number): DateTime {
  return DateTime.local().plus(Duration.fromObject({ hours }))
}

function getDatePlusDays(days: number): DateTime {
  return DateTime.local().plus(Duration.fromObject({ days }))
}

function getDatePlusMonths(months: number): DateTime {
  return DateTime.local().plus(Duration.fromObject({ months }))
}

function getDateMinusMinutes(minutes: number): DateTime {
  return DateTime.local().minus(Duration.fromObject({ minutes }))
}

function getDateMinusHours(hours: number): DateTime {
  return DateTime.local().minus(Duration.fromObject({ hours }))
}

function getDateMinusDays(days: number): DateTime {
  return DateTime.local().minus(Duration.fromObject({ days }))
}

function getDateMinusMonths(months: number): DateTime {
  return DateTime.local().minus(Duration.fromObject({ months }))
}

function parseDateFromISOtoFormatDDMMYYYYHHmm(ISOString: string, isUTC: boolean): string {
  return DateTime.fromISO(ISOString, { zone: isUTC ? 'utc' : undefined }).toFormat('dd/MM/yyyy HH:mm')
}

function parseDateFromISOtoFormatDDMMYYYYHHmmss(ISOString: string, isUTC: boolean): string {
  return DateTime.fromISO(ISOString, { zone: isUTC ? 'utc' : undefined }).toFormat('dd/MM/yyyy HH:mm:ss')
}

function parseDateFromISOtoFormatDDMMYYHHmm(ISOString: string, isUTC: boolean): string {
  return DateTime.fromISO(ISOString, { zone: isUTC ? 'utc' : undefined }).toFormat('dd/MM/yy HH:mm')
}

function parseDatetoFormatDDMMYYHHmm(dateTime: DateTime): string {
  return dateTime.toFormat('dd/MM/yy HH:mm')
}

function parseDatetoFormatYYYY(dateTime: DateTime): string {
  return dateTime.toFormat('yyyy')
}

function parseDatetoFormatDDMMYYYYHHmm(dateTime: DateTime): string {
  return dateTime.toFormat('dd/MM/yyyy HH:mm')
}

function parseDateToSQLFormat(dateTime: DateTime): string {
  return dateTime.toFormat('yyyy-MM-dd HH:mm')
}

function parseDateToSQLFormatDate(dateTime: DateTime): string {
  return dateTime.toFormat('yyyy-MM-dd')
}

function parseDateToYYYYMM(dateTime: DateTime): string {
  return dateTime.toFormat('yyyy-MM')
}

function parseDateToMMYYY(date: string): string {
  return DateTime.fromFormat(date, 'yyyy-MM').toFormat('MM/yyyy')
}

function getDateFromSQLString(SQLString: string): DateTime {
  return DateTime.fromSQL(SQLString)
}

function getDateFromFormatDDMMYYYYHHmm(date: string): DateTime {
  return DateTime.fromFormat(date, 'dd/MM/yyyy HH:mm')
}

function getDateFromFormatDDMMYYHHmm(date: string): DateTime {
  return DateTime.fromFormat(date, 'dd/MM/yy HH:mm')
}

function parseDateFromDDMMYYHHmmToISOString(date: string): string | null {
  return DateTime.fromFormat(date, 'dd/MM/yy HH:mm').toISO({ includeOffset: false })
}

function parseDateToHHmmFormat(dateTime: DateTime): string {
  return dateTime.toFormat('HH:mm')
}

function parseDateToHHmmssFormat(dateTime: DateTime): string {
  return dateTime.toFormat('HH:mm:ss')
}

function parseDatetoFormatDDMMYYHHmmss(date: Date): string {
  return DateTime.fromJSDate(date).toFormat('D TT')
}

function parseDDMMYYHHmmssToDate(date: string): Date {
  return DateTime.fromFormat(date, 'dd/MM/yyyy TT').toJSDate()
}

function parseDDMMYYYYToDate(date: string): Date {
  return DateTime.fromFormat(date, 'dd/MM/yyyy').toJSDate()
}

function parseDateToHumanizedDate(date: Date): string {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL, { locale: 'pt-br' })
}

function parseDateFromSQLDateToFormatDDMMYYYY(date: string) {
  return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('D')
}

function humanizeInterval(initialDate: Date, finalDate: Date) {
  const initial = DateTime.fromJSDate(initialDate)
  const final = DateTime.fromJSDate(finalDate)
  return final.toRelative({ locale: 'pt-br', base: initial })
}

function getDaysHoursMinutesAndSecondsByString(time: string | null) {
  const isDays = time?.includes('dias')
  const regex = isDays ? /(\d+) dias (\d+):(\d+):(\d+)/ : /(\d+):(\d+):(\d+)/
  const times = time?.match(regex)

  if (times) {
    if (isDays) {
      const [day, hour, minute, second] = [times[1], times[2], times[3], times[4]].map((m) => parseInt(m))
      const duractions = Duration.fromObject({ day: day, hour: hour, minute: minute, second: second }).toHuman({ unitDisplay: "short" }).match(/\d+\s*[a-z]+/gi)

      const dateArray = duractions?.map(duraction => duraction.replace(/\s/g, '')).filter(value => parseInt(value) !== 0)
      const dateFormat = dateArray?.join(' ')

      return {
        dateFormat,
        dateArray
      }

    } else {
      const [hour, minute, second] = [times[1], times[2], times[3], times[4]].map((m) => parseInt(m))
      const duractions = Duration.fromObject({ hour: hour, minute: minute, second: second }).toHuman({ unitDisplay: "short" }).match(/\d+\s*[a-z]+/gi)

      const dateArray = duractions?.map(duraction => duraction.replace(/\s/g, '')).filter(value => parseInt(value) !== 0)
      const dateFormat = dateArray?.join(' ')

      return {
        dateFormat,
        dateArray
      }
    }
  }
  return null
}

function compareHours(firstHour: string, secondHour: string) {
  const hoursIntA = firstHour.split(':').map((e: string) => parseInt(e, 10))
  const hoursIntB = secondHour.split(':').map((e: string) => parseInt(e, 10))

  if (hoursIntA[0] < hoursIntB[0]) return -1
  if (hoursIntA[0] > hoursIntB[0]) return 1
  if (hoursIntA[1] < hoursIntB[1]) return -1
  if (hoursIntA[1] > hoursIntB[1]) return 1
  return 0
}

function decodePeriodByHour(hour: string) {
  if (compareHours(hour, '12:00') < 0) return 1
  if (compareHours(hour, '12:00') >= 0 && compareHours(hour, '18:00') < 0) return 2

  return 3
}

function parseDateFromSQLStringToDDMMYYYY(date: string): string {
  return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('dd/MM/yyyy')
}

function parseDateFromSQLStringToDDMMYYYYHHmm(date: string): string {
  return DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm', { zone: 'America/Sao_Paulo' }).toFormat('dd/MM/yyyy HH:mm')
}

function secondsToHHMMSS(valueParam: number) {
  const negative = valueParam < 0
  const value = negative ? (valueParam * (-1)) : valueParam

  const days = Math.floor(value / (3600 * 24))
  const hours = Math.floor((value % (3600 * 24)) / 3600)
  const minutes = Math.floor((value % 3600) / 60)
  const seconds = Math.floor((value % 3600) % 60)

  return `${negative ? '-' : ''}${days > 0 ? `${days} dias ` : ''}${hours < 10 ? `${hours}`.padStart(2, '0') : hours}:${minutes < 10 ? `${minutes}`.padStart(2, '0') : minutes}:${seconds < 10 ? `${seconds}`.padStart(2, '0') : seconds}`
}

function parseDateFromISOToHumanizeDate(ISOString: string, isUTC: boolean): string {
  const dateTime = DateTime.fromISO(ISOString, { zone: isUTC ? 'utc' : undefined })
  const formattedDate = dateTime.toFormat("dd 'de' MMMM 'de' yyyy 'às' HH:mm")

  return formattedDate
}

function parseSegToDHMS(seconds: number): string {
  if (!checkNumberEmpty(seconds)) {
    if (seconds < 60) {
      return `${seconds}seg`
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60)
      return `${minutes}min`
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      return `${hours}h ${minutes}min`
    } else {
      const days = Math.floor(seconds / 86400)
      const hours = Math.floor((seconds % 86400) / 3600)
      return `${days}d ${hours}h`
    }
  }
  return ''
}

export {
  getCurrentDate,
  getCurrentDateToFormat,
  getDatePlusDays,
  getDatePlusHours,
  getDatePlusMinutes,
  getDatePlusMonths,
  getDateMinusDays,
  getDateMinusHours,
  getDateMinusMinutes,
  getDateMinusMonths,
  parseDateFromISOtoFormatDDMMYYYYHHmm,
  parseDateFromISOtoFormatDDMMYYYYHHmmss,
  parseDateFromISOtoFormatDDMMYYHHmm,
  parseDatetoFormatDDMMYYHHmm,
  parseDatetoFormatDDMMYYYYHHmm,
  parseDateToSQLFormat,
  parseDateToSQLFormatDate,
  getDateFromSQLString,
  getDateFromFormatDDMMYYYYHHmm,
  getDateFromFormatDDMMYYHHmm,
  parseDateFromDDMMYYHHmmToISOString,
  parseDateToHHmmFormat,
  parseDatetoFormatDDMMYYHHmmss,
  parseDDMMYYHHmmssToDate,
  parseDateToHumanizedDate,
  humanizeInterval,
  getDaysHoursMinutesAndSecondsByString,
  parseDateFromSQLDateToFormatDDMMYYYY,
  parseDateFromSQLStringToDDMMYYYY,
  parseDateFromSQLStringToDDMMYYYYHHmm,
  decodePeriodByHour,
  secondsToHHMMSS,
  parseDateToYYYYMM,
  parseDateToMMYYY,
  parseDatetoFormatYYYY,
  parseDateFromISOToHumanizeDate,
  parseDDMMYYYYToDate,
  parseSegToDHMS,
  parseDateToHHmmssFormat
}