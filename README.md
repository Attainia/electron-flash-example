## Flash with electron demo
This was built to demonstrate how to use flash with electron in 2019. Previous documentation no longer works but with this we were able to update the electron app to use flash on multiple platforms. 

This uses electron-webpack-quick-start to get an electron app going as quick as possible. Please see their documentation: 

 [`electron-webpack-quick-start`](https://github.com/electron-userland/electron-webpack-quick-start)

## Getting Started
Simply clone down this repository, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is recommended.

```bash

# Clone repositories
git clone https://github.com/Attainia/electron-flash-example.git
cd electron-flash-exmaple
rm -rf .git


# install dependencies
yarn
```
You will then need to download and place the flash plugins in the static directory. See files 


### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```
