# ReactNativeStarterKit

初始化项目，通过React Native CLI，安装TS的模板需要删掉全局的react-native-cli，然后安装`@react-native-community/cli`，[问题参考](https://github.com/react-native-community/react-native-template-typescript/issues/80)

pod install失败，cocodpods版本太旧，运行命令`sudo gem install cocoapods`升级，命令行需要全局代理才能安装成功。

想`yarn ios`运行，发现报错：`nvm is not compatible with the "PREFIX" environment variable: currently set to "/usr/local"`
删掉了brew上安装的node，依然不行，然后通过nvm重新安装最新版本的node，没有这个错误了，但是依然build failed。提示`warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.4.99. (in target 'Flipper-Glog' from project 'Pods')`，打开xcode，解决掉警告的问题。

错误一个接一个：`Command PhaseScriptExecution failed with a nonzero exit code`，把Pod相关全部干掉，重新安装就可以了，[解决地址参考](https://developer.apple.com/forums/thread/123790)

API生成，如果要调试参数的话，在openapitools.json加上参数：

```json
"globalProperty": {
  "debugOperations": true
},
```

### 必须的

- axios
- openapi-generator-cli
- react-native-navigation
- react-native-make
- react-native-splash-screen
- App Center & Code Push(就是跟着教程走一遍了)