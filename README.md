## TrackerListsBaler

很多BT下载客户端只能配置一个TrackerList订阅源，通过这个node脚本，启动一个本地服务器，将多个订阅源的结果合并为一个。

配置文件：config.yaml

* `proxyUrl`：可选，代理url，只支持HTTP代理，如果有凭证信息请按照URL规范写法，参见[MDN上的例子](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/username)。
* `serverPort`：必填，本地服务端口。
* `trackerListUrls`：必填，订阅源url数组，结果自动去重。如果某个订阅源无法访问，http错误将打印到控制台，但依然会返回其他订阅源的结果。如果全部失败，则返回504错误。

### npm脚本

* `start`：启动服务
