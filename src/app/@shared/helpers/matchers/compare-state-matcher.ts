export abstract class CompareStateMatcher {
  static compareWith(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    if (!obj1 || !obj2) return false;

    if (obj1?.id && obj2?.id) {
      return obj1.id === obj2.id;
    } else {
      return obj1 == obj2;
    }
  }
}
