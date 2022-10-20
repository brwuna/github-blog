import moment from "moment"

export function DateFormatterRelative(date: string) {
    return moment(date).fromNow();
}