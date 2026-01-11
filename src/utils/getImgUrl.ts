export function getImgUrl(imgUrlFromJson: string): string {
    return new URL('../assets/images/' + imgUrlFromJson, import.meta.url).href;
}
