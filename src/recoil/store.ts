import { atom, selector } from "recoil";

// example code
export const scrolledState = atom<number>({
  key: "scrolledState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

// export const charCountState = selector<number>({
//   key: "charCountState", // unique ID (with respect to other atoms/selectors)
//   get: ({ get }) => {
//     const text = get(textState);

//     return text.length;
//   },
// });
