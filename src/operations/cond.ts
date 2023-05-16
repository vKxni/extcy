type Condition<T> = {
  predicate: (value: T) => boolean;
  result: any;
};

export function cond<T>(value: T, ...conditions: Array<Condition<T>>): any {
  for (let i = 0; i < conditions.length; i++) {
    const condition = conditions[i];
    if (condition.predicate(value)) return condition.result;
  }
}
