import dayjs from "dayjs";

export const isPublishedAtValid = (date: string | undefined) : string | undefined => {
    if(!date) return undefined
    const isValid = dayjs(date).isBefore(new Date(), 'day')
    return isValid ? date : undefined
}