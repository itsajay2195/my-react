# Redux

- Install redux/toolkit
- Install react-redux
- Build our store
- slice(create slices)
- dispatch(Action)
- selector

# types of testing

- Unit testing. (1 specific component)
- Integration Testing. (example searching)
- End to End testing - e2e (complete testing-all scenarios)
  --> Livraries required:
- react testing library
- Jest

1. install react tesing lib
2. install jest
3. install babel
4. install babel dependencies

-> parcel already uses babel
-> our new babel.config.js may conflict
-> we have to change parcel's config
-> configure parcelrc to disable default babel traspilation

5. writing jest config using npx jest --init
6. install jsdom library ( required fo jest version > 28)
7. install @babel/preset-react
8. add @bable/preset-react in babel.config.js
9. install @testing-library/jsest-dom (toBeInTheDocument is available here )
