import {Media} from "@/types";

export function ContentfulToUrl (rawImage: Media): string {
    return `https:${rawImage.fields.file.url}`
}
