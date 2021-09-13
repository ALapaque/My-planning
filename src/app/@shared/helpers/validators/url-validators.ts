/**
 * contains the regex pattern for the url validator
 */
export abstract class UrlValidators {
  static getUrlRegex(): string {
    return '^(http|https):\/\/?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
  }
}
