# TypeScript

## Resources

https://www.typescriptlang.org/docs/home.html

## First: What is TypeScript?

  Typescript is a tool that allows the user to define specific types of variables and then it transposes it into plain cleaner JavaScript, but stores the information regarding those specific types as well.  

  This allows/ensures less error regarding data flow and flexibility where regular Javascript may allow certain things.

  Which means that TypeScript doesn't allow you to change data types within the variables.

TypeScript is essentially useful when manipulating large amounts of data, and ensuring the data types are the same as what you would want.

It's also more efficient in catching errors, than to have it fail at runtime.

## Initial Setup

  In order to use TypeScript within React, we will have to initialize the app.

  ```
  npm i -g typescript
  create-react-app your-app-name --scripts-version=react-scripts-ts
  ```

  A couple things to notice: all files that are usually .js files, became .tsx files
  Additionally, there are different added .json files.

## Let's Begin

  If we head over to App.tsx, we'll notice a couple things before we get started.
  
  ```
  import * as React from 'react'; 
  ```
  
  Line 2: * is used instead of react, because this is a more explicit version of saying we want everything from React

  ```
  class App extends React.Component {
  ```
  Line 8: We need to use dot notation, due to the initial import on line 2

## Public v. Private v. Protected
  
  Public is accessible in the global scale.

  Private, when marked, cannot be accessible from outside of the class it is defined.

  Protected is similar to private, but can also be accessed within deriving classes.

  ```
  class Car{
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Mercedes extends Car{
    private noOfWheels: number;

    constructor(name: string, noOfWheels: number) {
        super(name);
        this.noOfWheels= noOfWheels;
    }

    public getIntro() {
        return `Hello, This is my ${this.name} and I have ${this.noOfWheels} wheels.`;
    }
}
```

## Example

  Our example that we created will show annotated notes within the app itself, and our thought process between what we feel is different from what we understood before.  












