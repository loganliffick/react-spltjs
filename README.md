# SpltJS for React with Type Safety

<p>The text-splitter that just f*cking works got a fresh coat of paint 💅
  <br />
  <br />
    🎉 Rebuilt from the ground up for React
  <br />
    💪 Type safe
  <br />
    ✨ Works great with Tailwind
  </p>
<br/>

## Install

```
$ npm i react-spltjs
```
<br/>

## Basic Usage

```tsx
import Splt from 'react-spltjs';

const App = () => (
  <>
    <Splt text="Hello World" />;
  </>
);

export default App;
```
<br/>

## Advanced Usage with Tailwind

```tsx
import Splt from 'react-spltjs';

const myArray = [
  ['text-red-500'],
  ['text-orange-500'],
  ['text-amber-500'],
  ['text-yellow-500'],
  ['text-lime-500'],
  [], // no need to fill, whtspc char
  ['text-green-500'],
  ['text-emerald-500'],
  ['text-teal-500'],
  ['text-cyan-500'],
  ['text-sky-500'],
];

const App = () => (
  <>
    <h2>
      <Splt
        text="Hello World"
        array={myArray}
        // takes an array, gives classes to each character

        className="md:inline-block animate-loadIn motion-reduce:animate-none"
        // setting inline-block is important for translates
        // but does break-words at small viewport widths
        // suggest setting a breakpoint

        speed={0.2}
        // adjusts total animation duration, default: 0

        offset={0.09}
        // adjusts character animation duration, default: 0.05

        ease="cubic-bezier(0.5,0.5,.2,1.5)"
        // default: 'ease'
      />;
    </h2>
  </>
);

export default App;
```
<br/>

## Documentation

<p>View full documentation at <a href="https://react.spltjs.com">react.spltjs.com</a></p>
<br/>

## Contributors

<p>SpltJS is an open-source project, submit a PR 🤝</p>
<br/>

## Support

<p><a href="https://www.buymeacoffee.com/loganliffick">Buy SpltJS's creator a coffee</a> and help support new feature development 🤗</p>


<br/>
<br/>
<br/>
<br/>
