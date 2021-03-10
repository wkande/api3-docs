(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{523:function(e,t,s){"use strict";s.r(t);var r=s(9),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("TocHeader"),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#how-an-endorsed-client-refers-to-the-endorser"}},[e._v("How an endorsed client refers to the endorser")])])])]),s("p"),e._v(" "),s("p",[e._v("A "),s("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/requester.html"}},[e._v("requester")]),e._v(" announcing that a "),s("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/client.html"}},[e._v("client")]),e._v(" can specify their requests to be fulfilled by the requester's "),s("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/designated-wallet.html"}},[e._v("designated wallets")]),e._v(" is called an endorsement.\nThis is done by the "),s("code",[e._v("requesterAdmin")]),e._v(" calling "),s("code",[e._v("RequesterStore.sol")]),e._v(" with the client contract's address.\nThe check of if a client is endorsed by the requester whose designated wallet it wants to have the request fulfilled with is done at the protocol level (and not by Airnodes).")],1),e._v(" "),s("h2",{attrs:{id:"how-an-endorsed-client-refers-to-the-endorser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-an-endorsed-client-refers-to-the-endorser"}},[e._v("#")]),e._v(" How an endorsed client refers to the endorser")]),e._v(" "),s("p",[e._v("A client contract can have multiple requesters that have endorsed it.\nWhile making a request, the client both provides the "),s("code",[e._v("designatedWallet")]),e._v(" address that it wants to have the request fulfilled by, and also the "),s("code",[e._v("requesterInd")]),e._v(" of the requester that this wallet belongs to.\nThe contract checks if the client is endorsed, and if so, emits the request event.")]),e._v(" "),s("p",[e._v("Airnode derives the designated wallet address using the provided "),s("code",[e._v("requesterIndex")]),e._v(", then checks if this matches "),s("code",[e._v("designatedWallet")]),e._v(".\nAirnode will ignore the request if the two do not match.\nThis is done this way because deriving the designated wallet address from the "),s("code",[e._v("requesterIndex")]),e._v(" on-chain is not feasible.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);