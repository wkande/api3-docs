(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{439:function(s,t,e){"use strict";e.r(t);var n=e(9),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),e("TocHeader"),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#ois"}},[s._v("ois")])]),e("li",[e("a",{attrs:{href:"#triggers"}},[s._v("triggers")])]),e("li",[e("a",{attrs:{href:"#chains"}},[s._v("chains")])]),e("li",[e("a",{attrs:{href:"#nodesettings"}},[s._v("nodeSettings")])]),e("li",[e("a",{attrs:{href:"#environment"}},[s._v("environment")])]),e("li",[e("a",{attrs:{href:"#id"}},[s._v("id")])])])]),e("p"),s._v(" "),e("p",[e("code",[s._v("config.json")]),s._v(" is the configuration file used while deploying the Airnode.\nFor a single deployment, the file contents will be in the format below:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// config object")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("A "),e("code",[s._v("config.json")]),s._v(" file can also define multiple deployments:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// deployment #1 config object")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// deployment #2 config object")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("Some example use cases for multiple deployments:")]),s._v(" "),e("ul",[e("li",[s._v("#1 on AWS "),e("code",[s._v("us-east-1")]),s._v(" and #2 on AWS "),e("code",[s._v("us-west-1")]),s._v(" for good availability")]),s._v(" "),e("li",[s._v("#1 on AWS and #2 on GCP for even better availability")]),s._v(" "),e("li",[s._v("#1 on Ethereum mainnet with a stable node version and a dedicated API key, #2 on testnets with a more experimental configuration")])]),s._v(" "),e("p",[s._v("The config object can be thought of as the static NoSQL database of the Airnode. Its contents can be seen below:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ois"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"triggers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chains"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"nodeSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"environment"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("ul",[e("li",[e("p",[e("code",[s._v("ois")]),s._v(": API specifications and the corresponding on-chain endpoints, kept as "),e("RouterLink",{attrs:{to:"/next/airnode/ois.html"}},[s._v("OIS")]),s._v(" objects")],1)]),s._v(" "),e("li",[e("p",[e("code",[s._v("triggers")]),s._v(": Which on-chain endpoints will be usable by which protocols (request–response or publish–subcribe) and under what endpoint ID")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("chains")]),s._v(": Blockchains the Airnode will serve on and configuration details")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("nodeSettings")]),s._v(": General node settings such as version, deployment configuration and logging options")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("environment")]),s._v(": Mapping of sensitive values to environment variables")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("id")]),s._v(": Unique identifier for this config object")])])]),s._v(" "),e("h2",{attrs:{id:"ois"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ois"}},[s._v("#")]),s._v(" ois")]),s._v(" "),e("p",[e("code",[s._v("ois")]),s._v(" is a list of "),e("RouterLink",{attrs:{to:"/next/airnode/ois.html"}},[s._v("OIS")]),s._v(" objects. Since each OIS specifies the integration of a single API to an oracle, an Airnode can serve multiple APIs.")],1),s._v(" "),e("p",[s._v("Contents of an "),e("code",[s._v("ois")]),s._v(" list can be seen below (see the "),e("RouterLink",{attrs:{to:"/next/airnode/ois.html"}},[s._v("OIS docs")]),s._v(" for a complete example and the explanation of the fields):")],1),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"oisFormat"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myOisTitle"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.2.3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"apiSpecifications"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      ...\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"endpoints"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      ...\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"triggers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#triggers"}},[s._v("#")]),s._v(" triggers")]),s._v(" "),e("p",[e("code",[s._v("triggers")]),s._v(" map external triggers such as a request made through the request–response protocol (or a subscription made through the publish–subscribe protocol, which is not implemented yet) to an endpoint defined in an OIS")]),s._v(" "),e("p",[s._v("Contents of a "),e("code",[s._v("triggers")]),s._v(" object can be seen below:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"endpointId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xe1da7948e4dd95c04b2aaa10f4de115e67d9e109ce618750a3d8111b855a5ee5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"oisTitle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myOisTitle"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"endpointName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myEndpointName"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("According to the example above, the Airnode has an OIS with the title "),e("code",[s._v("myOisTitle")]),s._v(". This OIS has an endpoint with the name "),e("code",[s._v("myEndpointName.")]),s._v(" When the Airnode detects a "),e("RouterLink",{attrs:{to:"/next/protocols/request-response/request.html"}},[s._v("request")]),s._v(" that references its "),e("RouterLink",{attrs:{to:"/next/protocols/request-response/provider.html#providerid"}},[e("code",[s._v("providerId")])]),s._v(" and "),e("code",[s._v("0xe1da7948e4dd95c04b2aaa10f4de115e67d9e109ce618750a3d8111b855a5ee5")]),s._v(" as the "),e("RouterLink",{attrs:{to:"/next/protocols/request-response/endpoint.html#endpointId"}},[e("code",[s._v("endpointId")])]),s._v(", it will call the specified endpoint ("),e("code",[s._v("myOisTitle")]),s._v("-"),e("code",[s._v("myEndpointName")]),s._v(") with the provided parameters to fulfill the request. See the "),e("RouterLink",{attrs:{to:"/next/protocols/request-response/endpoint.html#endpointid"}},[s._v("docs")]),s._v(" for the default convention for setting the "),e("code",[s._v("endpointId.")])],1),s._v(" "),e("h2",{attrs:{id:"chains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[s._v("#")]),s._v(" chains")]),s._v(" "),e("p",[e("code",[s._v("chains")]),s._v(" lists the blockchains the Airnode will serve on, and specifies the configuration.")]),s._v(" "),e("p",[s._v("Contents of a "),e("code",[s._v("chains")]),s._v(" list can be seen below:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"evm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chainProviders"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"self-hosted-mainnet"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"infura-mainnet"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"providerAdminForRecordCreation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x5e00...F410"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"blockHistoryLimit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"minConfirmations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignoreBlockedRequestsAfterBlocks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"evm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chainProviders"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"infura-ropsten"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"contracts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Airnode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xf1d4...0bd1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Convenience"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x12ab...de56"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"providerAdminForRecordCreation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x5e00...F410"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"blockHistoryLimit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"minConfirmations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignoreBlockedRequestsAfterBlocks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("ul",[e("li",[e("p",[e("code",[s._v("id")]),s._v(" (required) - the corresponding chain (or network) ID. If this is an Ethereum-based chain, "),e("code",[s._v("id")]),s._v(" should be the chain ID as described in "),e("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md#list-of-chain-ids",target:"_blank",rel:"noopener noreferrer"}},[s._v("EIP-155"),e("OutboundLink")],1),s._v(".\nRefer to the documentations of the chain you will be using to find its chain ID.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("type")]),s._v(" (required) - the type of the chain. Currently, only "),e("code",[s._v("evm")]),s._v(" is supported.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("chainProviders")]),s._v(" (required) - the names of the blockchain providers that will be used. Note that multiple of them can be used simultaneously. The Airnode will expect to find the URLs of each of these providers in its environment variables. See "),e("a",{attrs:{href:"#environment"}},[e("code",[s._v("environment")])]),s._v(" for more information.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("contracts")]),s._v(" (required) - an object that keeps the addresses of the protocol contracts deployed on the respective chain. It has to include the following contract addresses:")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("Airnode")])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("Convenience")])])])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("providerAdminForRecordCreation")]),s._v(" (optional) - the provider admin address the Airnode will set on first deployment. When the Airnode is deployed on a chain for the first time, it makes a transaction with its master wallet to create a provider record. While doing so, it also authorizes an address to set the authorization policies for the endpoints of the provider (see the "),e("RouterLink",{attrs:{to:"/next/protocols/request-response/general-structure.html"}},[s._v("protocol docs")]),s._v(" for more information). Changing this field after the provider record is created will not have any effect. This field is optional, but not having it means that the node will not be able to create a provider record.")],1)]),s._v(" "),e("li",[e("p",[e("code",[s._v("blockHistoryLimit")]),s._v(" (optional) - the number of blocks in the past that the Airnode should search for requests. Defaults to "),e("code",[s._v("300")]),s._v(" (roughly 1 hour for Ethereum).")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("minConfirmations")]),s._v(" (optional) - the number of confirmations required for a request to be considered valid. Defaults to "),e("code",[s._v("0")]),s._v(".")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("ignoreBlockedRequestsAfterBlocks")]),s._v(" (optional) - the number of blocks that need to pass for the node to start ignoring blocked requests. Defaults to "),e("code",[s._v("20")]),s._v(".")])])]),s._v(" "),e("h2",{attrs:{id:"nodesettings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodesettings"}},[s._v("#")]),s._v(" nodeSettings")]),s._v(" "),e("p",[e("code",[s._v("nodeSettings")]),s._v(" is an object containing general node setting parameters. Contents of a "),e("code",[s._v("nodeSettings")]),s._v(" object can be seen below:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"nodeVersion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cloudProvider"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aws"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"region"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"us-east-1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"stage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testnet"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[e("p",[e("code",[s._v("nodeVersion")]),s._v(" - The node version this config object should be used with.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("cloudProvider")]),s._v(" - The cloud provider that the node will be deployed at. Currently, only "),e("code",[s._v("aws")]),s._v(" is supported.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("region")]),s._v(" - The cloud provider region that the node will be deployed at. See the cloud provider documentations for possible values.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("stage")]),s._v(" - The label used to distinguish between multiple deployments of the same provider on a cloud provider. For example, the provider may make multiple deployments with "),e("code",[s._v("stage")]),s._v("s set as "),e("code",[s._v("dev")]),s._v(", "),e("code",[s._v("ropsten")]),s._v(", "),e("code",[s._v("mainnet")]),s._v(", where each of these deployments would use the same private key and have the same "),e("code",[s._v("providerId")]),s._v(".")])])]),s._v(" "),e("h2",{attrs:{id:"environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[s._v("#")]),s._v(" environment")]),s._v(" "),e("p",[s._v("Airnode keeps sensitive values such as security scheme values (i.e., API keys) and blockchain provider URLs as environment variables. "),e("code",[s._v("environment")]),s._v(" tells the Airnode under which environment variable it can find each of these.")]),s._v(" "),e("p",[s._v("Contents of an "),e("code",[s._v("environment")]),s._v(" object can be seen below:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"securitySchemes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"oisTitle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"envName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chainProviders"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chainType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chainId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"envName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("Each entry in "),e("code",[s._v("securitySchemes")]),s._v(" map to a security scheme defined in an OIS, where "),e("code",[s._v("oisTitle")]),s._v(" is the "),e("code",[s._v("title")]),s._v(" field of the related OIS, and "),e("code",[s._v("name")]),s._v(" is the name of the respective security scheme (these would be "),e("code",[s._v("myOisTitle")]),s._v(" and "),e("code",[s._v("mySecurityScheme")]),s._v(" in the example in the "),e("RouterLink",{attrs:{to:"/next/airnode/ois.html"}},[s._v("OIS docs")]),s._v("). "),e("code",[s._v("envName")]),s._v(" is the environment variable name that the security scheme value (e.g., the API key) will be found under. The recommended naming convention is "),e("code",[s._v("ss_${oisTitle}_${name}")]),s._v(".")],1),s._v(" "),e("p",[s._v("Each entry in "),e("code",[s._v("chainProviders")]),s._v(" map to an entry in "),e("code",[s._v("chainProviders")]),s._v(" under "),e("a",{attrs:{href:"#chains"}},[e("code",[s._v("chains")])]),s._v(". Example values would be "),e("code",[s._v("evm")]),s._v(" for "),e("code",[s._v("chainType")]),s._v(", "),e("code",[s._v("1")]),s._v(" for "),e("code",[s._v("chainId")]),s._v(" and "),e("code",[s._v("self-hosted-mainnet")]),s._v(" for "),e("code",[s._v("name")]),s._v(". Here, the "),e("code",[s._v("envName")]),s._v(" is the name of the environment variable that keeps the respective blockchain provider URL. The recommended naming convention is "),e("code",[s._v("cp_${chainType}_${chainId}_${name}")]),s._v(".")]),s._v(" "),e("h2",{attrs:{id:"id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[s._v("#")]),s._v(" id")]),s._v(" "),e("p",[e("code",[s._v("id")]),s._v(" is a unique identifier for the config object (e.g., a "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"}},[s._v("UUID"),e("OutboundLink")],1),s._v(").")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);