(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{480:function(e,t,r){"use strict";r.r(t);var s=r(9),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("TocHeader"),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#request-parameters"}},[e._v("Request parameters")])]),r("li",[r("a",{attrs:{href:"#how-templates-are-used-in-requests"}},[e._v("How templates are used in requests")])]),r("li",[r("a",{attrs:{href:"#request-types"}},[e._v("Request types")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-regular-request"}},[e._v("1. Regular request")])]),r("li",[r("a",{attrs:{href:"#_2-short-request"}},[e._v("2. Short request")])]),r("li",[r("a",{attrs:{href:"#_3-full-request"}},[e._v("3. Full request")])])])]),r("li",[r("a",{attrs:{href:"#request-outcomes"}},[e._v("Request outcomes")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-fulfill"}},[e._v("1. Fulfill")])]),r("li",[r("a",{attrs:{href:"#_2-fail"}},[e._v("2. Fail")])]),r("li",[r("a",{attrs:{href:"#_3-ignore"}},[e._v("3. Ignore")])])])])])]),r("p"),e._v(" "),r("p",[e._v("When a client makes a request using "),r("code",[e._v("Airnode.sol")]),e._v(", it is returned a "),r("code",[e._v("requestId")]),e._v(". This "),r("code",[e._v("requestId")]),e._v(" is a hash of all request parameters and a nonce. This allows Airnode to verify that the request parameters are not tampered with.")]),e._v(" "),r("h2",{attrs:{id:"request-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[e._v("#")]),e._v(" Request parameters")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("providerId")]),e._v(" and "),r("code",[e._v("endpointId")]),e._v(" specify the endpoint")]),e._v(" "),r("li",[r("code",[e._v("requesterIndex")]),e._v(" and "),r("code",[e._v("designatedWallet")]),e._v(" specify which wallet will be used to fulfill the request")]),e._v(" "),r("li",[r("code",[e._v("fulfillAddress")]),e._v(" and "),r("code",[e._v("fulfillFunctionId")]),e._v(" specify which method will be called to fulfill the request")]),e._v(" "),r("li",[r("code",[e._v("parameters")]),e._v(" specify the API and [reserved](/airnode/ois.md#54-reservedParameters) parameters (see "),r("RouterLink",{attrs:{to:"/next/specifications/airnode-abi.html"}},[e._v("Airnode ABI specifications")]),e._v(" for how these are encoded)")],1)]),e._v(" "),r("h2",{attrs:{id:"how-templates-are-used-in-requests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-templates-are-used-in-requests"}},[e._v("#")]),e._v(" How templates are used in requests")]),e._v(" "),r("p",[e._v("A template includes the following fields:")]),e._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("struct Template {\n    bytes32 providerId;\n    bytes32 endpointId;\n    uint256 requesterIndex;\n    address designatedWallet;\n    address fulfillAddress;\n    bytes4 fulfillFunctionId;\n    bytes parameters;\n    }\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br")])]),r("p",[e._v("The client can refer to the "),r("code",[e._v("templateId")]),e._v(" of a template while making the request, and the provider's Airnode will fetch these and use them in the request. Among these, "),r("code",[e._v("requesterIndex")]),e._v(", "),r("code",[e._v("designatedWallet")]),e._v(", "),r("code",[e._v("fulfillAddress")]),e._v(", "),r("code",[e._v("fulfillFunctionId")]),e._v(" can be overriden by parameters defined at request-time.")]),e._v(" "),r("p",[e._v("When a template is used to make a request, both the parameters encoded in "),r("code",[e._v("parameters")]),e._v(" of the template and "),r("code",[e._v("parameters")]),e._v(" provided at request-time by the client will be used by the provider's Airnode. In case the two include a parameter with the same name, the one provided at request-time will be used.")]),e._v(" "),r("h2",{attrs:{id:"request-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-types"}},[e._v("#")]),e._v(" Request types")]),e._v(" "),r("p",[e._v("There are multiple request types with respect to how they utilize templates:")]),e._v(" "),r("h3",{attrs:{id:"_1-regular-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-regular-request"}},[e._v("#")]),e._v(" 1. Regular request")]),e._v(" "),r("p",[e._v("A regular request refers to a template, yet provides its own "),r("code",[e._v("requesterIndex")]),e._v(", "),r("code",[e._v("designatedWallet")]),e._v(", "),r("code",[e._v("fulfillAddress")]),e._v(", "),r("code",[e._v("fulfillFunctionId")]),e._v(" that will override the ones from the template.")]),e._v(" "),r("h3",{attrs:{id:"_2-short-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-short-request"}},[e._v("#")]),e._v(" 2. Short request")]),e._v(" "),r("p",[e._v("A short request refers to a template for all parameters.")]),e._v(" "),r("h3",{attrs:{id:"_3-full-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-full-request"}},[e._v("#")]),e._v(" 3. Full request")]),e._v(" "),r("p",[e._v("A full request does not refer to a template at all. They are useful if the client will not make a similar request ever again (e.g., in a prediction market context).")]),e._v(" "),r("h2",{attrs:{id:"request-outcomes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-outcomes"}},[e._v("#")]),e._v(" Request outcomes")]),e._v(" "),r("p",[e._v("A request made to an Airnode has three possible outcomes:")]),e._v(" "),r("h3",{attrs:{id:"_1-fulfill"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-fulfill"}},[e._v("#")]),e._v(" 1. Fulfill")]),e._v(" "),r("p",[e._v("If the node encountered no errors at any step, it calls the "),r("code",[e._v("fulfill()")]),e._v(" method that will call back the method "),r("code",[e._v("fulfillFunctionId")]),e._v(" at "),r("code",[e._v("fulfillAddress")]),e._v(" to deliver "),r("code",[e._v("data")]),e._v(" and 0 as the "),r("code",[e._v("statusCode")]),e._v(".")]),e._v(" "),r("p",[e._v("If the node encountered an error, it will do the same, but "),r("code",[e._v("statusCode")]),e._v(" will be non-0, indicating to the client that the request has failed (see "),r("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/master/packages/node#behaviour",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),r("OutboundLink")],1),e._v(" for details). The client can then handle this error as it sees fit (e.g., ignore it, make a request to an alternative provider, etc.)")]),e._v(" "),r("h3",{attrs:{id:"_2-fail"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-fail"}},[e._v("#")]),e._v(" 2. Fail")]),e._v(" "),r("p",[e._v("If "),r("code",[e._v("fulfill()")]),e._v(" reverts, the node calls the "),r("code",[e._v("fail()")]),e._v(" method to report this. The node will not attempt to fulfill a failed request afterwards.")]),e._v(" "),r("h3",{attrs:{id:"_3-ignore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-ignore"}},[e._v("#")]),e._v(" 3. Ignore")]),e._v(" "),r("p",[e._v("If the node cannot even fail a request (e.g., the client is not endorsed by the requester), the request gets ignored.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);