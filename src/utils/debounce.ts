export function debounce<T extends unknown[], U>(
  callback: (...args: T) => PromiseLike<U> | U,
  wait: number
) {
  let timer: number;
  // correct type for setTimeout - type inference, as the type is not consistent between the browser and node declarations,
  // let timer: ReturnType<typeof setTimeout>; // Node implements settimeout from the browser - this supports either way

  return (...args: T): Promise<U> => {
    clearTimeout(timer); // closure: mainains variable scope
    return new Promise((resolve) => {
      timer = window.setTimeout(() => resolve(callback(...args)), wait);
      console.log(timer);
    });
  };
}

// <T extends unknown[], U>: we don't know what kind of arguments we'll get, so we use array of unknown array (under the hood JS)
// T type, let's be consistent throughout the code

// returns promise that resolves through U type

// resolve is from proimiee
// timer `id` is handle on the event we're creating
// settimeout returns an id that refers to an event in the event loop

// Generics infer the type
// sometimes we use any, and other times we use a generic
