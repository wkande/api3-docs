(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{485:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("TocHeader"),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#setup"}},[e._v("Setup")]),a("ul",[a("li",[a("a",{attrs:{href:"#build-airnode-starter-project"}},[e._v("Build airnode-starter Project")])]),a("li",[a("a",{attrs:{href:"#prepare-master-wallet"}},[e._v("Prepare Master Wallet")])]),a("li",[a("a",{attrs:{href:"#ropsten-provider-url"}},[e._v("Ropsten Provider URL")])]),a("li",[a("a",{attrs:{href:"#aws-cloud-credentials"}},[e._v("AWS Cloud Credentials")])]),a("li",[a("a",{attrs:{href:"#docker"}},[e._v("Docker")])])])]),a("li",[a("a",{attrs:{href:"#step-1-deploy-an-airnode-on-ropsten"}},[e._v("Step 1: Deploy an Airnode on Ropsten")]),a("ul",[a("li",[a("a",{attrs:{href:"#customize-config-json"}},[e._v("Customize config.json")])]),a("li",[a("a",{attrs:{href:"#deploy"}},[e._v("Deploy")])]),a("li",[a("a",{attrs:{href:"#fund-master-wallet"}},[e._v("Fund Master Wallet")])]),a("li",[a("a",{attrs:{href:"#make-endpoint-publicly-accessible"}},[e._v("Make Endpoint Publicly Accessible")])])])]),a("li",[a("a",{attrs:{href:"#step-2-make-a-request"}},[e._v("Step 2: Make a request")]),a("ul",[a("li",[a("a",{attrs:{href:"#create-requester"}},[e._v("Create Requester")])]),a("li",[a("a",{attrs:{href:"#deploy-client-contract"}},[e._v("Deploy Client Contract")])]),a("li",[a("a",{attrs:{href:"#endorse-client"}},[e._v("Endorse Client")])]),a("li",[a("a",{attrs:{href:"#derive-fund-designated-wallet"}},[e._v("Derive/Fund Designated Wallet")])]),a("li",[a("a",{attrs:{href:"#make-request"}},[e._v("Make Request")])])])]),a("li",[a("a",{attrs:{href:"#remove-the-airnode"}},[e._v("Remove the Airnode")])]),a("li",[a("a",{attrs:{href:"#conclusion"}},[e._v("Conclusion")])])])]),a("p"),e._v(" "),a("p",[e._v("A starter project for deploying and making requests to an Airnode. This project is composed of two steps.")]),e._v(" "),a("ol",[a("li",[e._v("Deploy an Airnode on Ropsten.")]),e._v(" "),a("li",[e._v("Making a request to the deployed Airnode in a contract.")])]),e._v(" "),a("p",[e._v("You can skip the first step and use a pre-deployed Airnode. It is recommended that you read the contents of the scripts as you run them, fought in the scripts directory of the airnode-starter project. Also read this entire tutorial before starting.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Check out the source code in the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("airnode-starter"),a("OutboundLink")],1),e._v(" project.")])]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("You only need cloud credentials if you will not be skipping Step 1. Before beginning some project setup work is needed.")]),e._v(" "),a("ul",[a("li",[e._v("Build the airnode-starter project.")]),e._v(" "),a("li",[e._v("Prepare a wallet, add ETH for the Ropsten network.")]),e._v(" "),a("li",[e._v("Get a Ropsten provider URL.")]),e._v(" "),a("li",[e._v("Install "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"build-airnode-starter-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-airnode-starter-project"}},[e._v("#")]),e._v(" Build airnode-starter Project")]),e._v(" "),a("p",[e._v("Clone and build the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("airnode-starter"),a("OutboundLink")],1),e._v(" project.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Clone project")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/api3dao/airnode-starter.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install dependencies")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" airnode-starter\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Build project")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h3",{attrs:{id:"prepare-master-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-master-wallet"}},[e._v("#")]),e._v(" Prepare Master Wallet")]),e._v(" "),a("p",[e._v("Run the following to generate a "),a("strong",[e._v("Master Wallet")]),e._v(", whose mnemonic phrase will be displayed on the terminal and recorded in a "),a("code",[e._v(".env")]),e._v(" file at the project root.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" airnode-starter\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run generate-wallet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",[a("li",[e._v("Install "),a("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Metamask"),a("OutboundLink")],1),e._v(" to your web browser.")]),e._v(" "),a("li",[e._v("Import the mnemonic phrase (returned by generate-wallet) to Metamask.")]),e._v(" "),a("li",[e._v("Use the "),a("a",{attrs:{href:"https://faucet.metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("faucet"),a("OutboundLink")],1),e._v(" to get some Ropsten ETH.")])]),e._v(" "),a("h3",{attrs:{id:"ropsten-provider-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ropsten-provider-url"}},[e._v("#")]),e._v(" Ropsten Provider URL")]),e._v(" "),a("p",[e._v("A Ropsten provider URL is needed. This will be used both by the deployed Airnode and by you while interacting with contracts.")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),a("OutboundLink")],1),e._v(", create an account and get a Ropsten provider URL which will contain a key.\n")]),e._v(" "),a("li",[e._v("Replace "),a("strong",[e._v("https://ropsten.infura.io/v3/{YOUR_KEY}")]),e._v(" in your "),a("strong",[e._v(".env")]),e._v(" file with the URL from Infura.\n")])]),e._v(" "),a("p",[e._v("Note that you can use any other provider or your own Ropsten node. However, if you will be deploying your own Airnode, the provider endpoint must be publicly accessible (i.e., "),a("code",[e._v("127.0.0.1:8545")]),e._v(" will not work).")]),e._v(" "),a("p",[a("em",[e._v("(You only need cloud credentials if you will not be skipping Step 1.)")])]),e._v(" "),a("h3",{attrs:{id:"aws-cloud-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-cloud-credentials"}},[e._v("#")]),e._v(" AWS Cloud Credentials")]),e._v(" "),a("p",[e._v("Airnode will deploy serverless functions to AWS Lambda. Cloud Credentials are the key pair ("),a("em",[e._v("Access key id and Secret access key")]),e._v(") of an IAM user. Use the "),a("RouterLink",{attrs:{to:"/next/tutorials/aws-credentials.html"}},[e._v("AWS Cloud Credentials")]),e._v(" tutorial to learn how to create AWS Cloud Credentials.")],1),e._v(" "),a("p",[e._v("Create and place the cloud credentials into "),a("strong",[e._v("/config/.env")]),e._v(" and not into the "),a("strong",[e._v(".env")]),e._v(" in the project root.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Use the sample file /config/example.env as a template.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_ACCESS_KEY_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("AKIAWYO7QOP5Y5OUUGM5\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_SECRET_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("S95moqkWXb5hIJyPrryChL8O1pZ6p//g07CR/ul3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("Docker is required to deploy the Airnode. The upside of containerizing the deployer is that you only need to install Docker. Go to the "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker website"),a("OutboundLink")],1),e._v(" to install if needed.")]),e._v(" "),a("h2",{attrs:{id:"step-1-deploy-an-airnode-on-ropsten"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-deploy-an-airnode-on-ropsten"}},[e._v("#")]),e._v(" Step 1: Deploy an Airnode on Ropsten")]),e._v(" "),a("p",[e._v("Normally, you would need to do two things before you deploy an Airnode. The airnode-starter project has already prepared these for you.")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/next/guides/provider/api-integration.html"}},[e._v("Specify the API Integration")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/next/guides/provider/configuring-airnode.html"}},[e._v("Configure the Airnode")])],1)]),e._v(" "),a("p",[e._v("The airnode-starter project specifies a minimal integration to the popular and free "),a("a",{attrs:{href:"https://www.coingecko.com/en/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko API"),a("OutboundLink")],1),e._v(". The configuration files to serve it over the Ropsten testnet are part of the project.")]),e._v(" "),a("p",[e._v("The project implements a single API operation, "),a("code",[e._v("GET")]),e._v(" for "),a("code",[e._v("/coins/{id}")]),e._v("illustrated below. The "),a("code",[e._v("localization")]),e._v(", "),a("code",[e._v("tickers")]),e._v(", "),a("code",[e._v("community_data")]),e._v(", "),a("code",[e._v("developer_data")]),e._v(" and "),a("code",[e._v("sparkline")]),e._v(" parameters are "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/provider-guides/api-integration.md#fixedoperationparameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("fixed"),a("OutboundLink")],1),e._v(" as "),a("code",[e._v('"false"')]),e._v(", while "),a("code",[e._v("market_data")]),e._v(" is fixed as "),a("code",[e._v('"true"')]),e._v(". The "),a("code",[e._v("id")]),e._v(" parameter will be provided by the requester (e.g., "),a("code",[e._v('"ethereum"')]),e._v(") under the name "),a("code",[e._v("coinId")]),e._v(".")]),e._v(" "),a("p",[e._v("Make test calls over the "),a("a",{attrs:{href:"https://www.coingecko.com/en/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko APIs page"),a("OutboundLink")],1),e._v(" to see the response format.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/19530665/103151070-be14ea00-478b-11eb-9608-a967c4282d9f.png",alt:""}})]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/next/tutorials/config-examples/config-example-json.html"}},[a("code",[e._v("config.example.json")])]),e._v(" for how this integration is achieved. We fixed the "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/provider-guides/api-integration.md#reservedparameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("reserved parameters"),a("OutboundLink")],1),e._v(" to read the value from "),a("code",[e._v("market_data.current_price.usd")]),e._v(", cast it as an "),a("code",[e._v("int256")]),e._v(" and multiply it by "),a("code",[e._v("1,000,000")]),e._v(" before returning. No security scheme (i.e., API key) is defined in "),a("code",[e._v("config.json")]),e._v(" or "),a("RouterLink",{attrs:{to:"/next/tutorials/config-examples/security-json.html"}},[a("code",[e._v("security.json")])]),e._v(" because the CoinGecko API is publicly accessible.")],1),e._v(" "),a("h3",{attrs:{id:"customize-config-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-config-json"}},[e._v("#")]),e._v(" Customize "),a("code",[e._v("config.json")])]),e._v(" "),a("p",[e._v("Run the following to insert the contents of "),a("code",[e._v(".env")]),e._v(" to "),a("code",[e._v("config/config.example.json")]),e._v(" and save it as "),a("code",[e._v("config/config.json")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run customize-config\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("/config")]),e._v(" directory now has the required files for deployment.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/next/airnode/config-json.html"}},[e._v("config.json")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/next/specifications/security-json.html"}},[e._v("security.json")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/next/guides/provider/deploying-airnode.html#creating-cloud-credentials"}},[e._v(".env")])],1)]),e._v(" "),a("p",[e._v("Run the following to deploy the node. This will output a receipt file with the extension "),a("strong",[e._v(".receipt.json")]),e._v(" in the /config directory.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Only run the deployer from the /config directory")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" config\n\ndocker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file .env "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("deploy-first-time "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":/airnode/out "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h3",{attrs:{id:"fund-master-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fund-master-wallet"}},[e._v("#")]),e._v(" Fund Master Wallet")]),e._v(" "),a("p",[e._v("Run the following to send your "),a("strong",[e._v("Master Wallet")]),e._v(" 0.1 ETH to "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/provider.html#creating-a-provider-record"}},[e._v("create a provider record")]),e._v(" on-chain. The deployed Airnode will use these funds for the transaction that will create the provider record on Ropsten. Leftover ETH will be returned to your address automatically.")],1),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run fund-master-wallet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"make-endpoint-publicly-accessible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-endpoint-publicly-accessible"}},[e._v("#")]),e._v(" Make Endpoint Publicly Accessible")]),e._v(" "),a("p",[a("strong",[e._v("config.json")]),e._v(" defines an "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/endpoint.html"}},[e._v("endpoint")]),e._v(" named "),a("code",[e._v("coinMarketData")]),e._v(", whose "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/endpoint.html#endpointid"}},[e._v("endpointId")]),e._v(" is "),a("code",[e._v("0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c")]),e._v(".")],1),e._v(" "),a("p",[e._v("Endpoints are not publicly accessible by default. Run the command "),a("strong",[e._v("update-authorizers")]),e._v(" to set your endpoint's "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/authorizer.html"}},[e._v("authorizers")]),e._v(" to "),a("code",[e._v("[0x0000000000000000000000000000000000000000]")]),e._v(", which makes it "),a("RouterLink",{attrs:{to:"/next/guides/provider/setting-authorizers.html#allow-all"}},[e._v("publicly accessible")]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run update-authorizers\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),e._v(" "),a("h2",{attrs:{id:"step-2-make-a-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-make-a-request"}},[e._v("#")]),e._v(" Step 2: Make a request")]),e._v(" "),a("p",[e._v("The scripts in this section will use the Airnode created in "),a("em",[e._v("Step 1")]),e._v(". Otherwise, it will a default (pre-deployed) Airnode. It uses the "),a("strong",[e._v("providerId")]),e._v(" in "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/blob/main/src/parameters.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("parameters.js"),a("OutboundLink")],1),e._v(". Note that the endpointId will be the same either way because it is derived from the "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/endpoint.html#endpointid"}},[e._v("OIS and endpoint name")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"create-requester"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-requester"}},[e._v("#")]),e._v(" Create Requester")]),e._v(" "),a("p",[e._v("Run the following to create an on-chain "),a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/requester.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("requester"),a("OutboundLink")],1),e._v(" record. Use the requester, denoted with an index, in other projects as well. Note that "),a("strong",[e._v("requesterIndex")]),e._v(" is chain-specific, create another requester record for other chains.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run create-requester\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"deploy-client-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-client-contract"}},[e._v("#")]),e._v(" Deploy Client Contract")]),e._v(" "),a("p",[e._v("Run the following to deploy the contract "),a("strong",[e._v("/contracts/ExampleClient.sol")]),e._v(" from the airnode-starter project.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run deploy-client\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"endorse-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endorse-client"}},[e._v("#")]),e._v(" Endorse Client")]),e._v(" "),a("p",[e._v("Run the following command to "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/endorsement.html"}},[e._v("endorse")]),e._v(" your deployed "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/client.html"}},[e._v("client")]),e._v(" contract using the requester created above.")],1),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run endorse-client\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"derive-fund-designated-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derive-fund-designated-wallet"}},[e._v("#")]),e._v(" Derive/Fund Designated Wallet")]),e._v(" "),a("p",[e._v("First run the following to derive a "),a("RouterLink",{attrs:{to:"/next/protocols/request-response/designated-wallet.html"}},[e._v("designated wallet")]),e._v(" for the provider–requester pair:")],1),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run derive-designated-wallet-address\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Next fund the designated wallet with 0.1 ETH. The requests that the client contract will make will be funded by this 0.1 ETH. It may be necessary to run "),a("strong",[e._v("fund-designated-wallet")]),e._v(" again if you make too many requests and use up this 0.1 ETH (unlikely on Ropsten because the gas price is low).")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run fund-designated-wallet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"make-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-request"}},[e._v("#")]),e._v(" Make Request")]),e._v(" "),a("p",[e._v("Run the following command to make a request which will be fulfilled by the Airnode and printed out on the terminal. Note the price is now on-chain, you can use it in your contract to implement any arbitrary logic.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm run make-request\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Try replacing the "),a("strong",[e._v("coinId")]),e._v(" value in "),a("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/blob/main/scripts/make-request.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("make-request.js"),a("OutboundLink")],1),e._v(" from "),a("strong",[e._v("ethereum")]),e._v(" to "),a("strong",[e._v("bitcoin")]),e._v(" and make another request. You can see the API docs to see which coin IDs are supported.")]),e._v(" "),a("h2",{attrs:{id:"remove-the-airnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-the-airnode"}},[e._v("#")]),e._v(" Remove the Airnode")]),e._v(" "),a("p",[e._v("Because the Airnode is "),a("em",[e._v("set-and-forget")]),e._v(", it is easy to forget that it is still functioning. To remove it, go to "),a("code",[e._v("config/")]),e._v(" directory and use the command below where "),a("code",[e._v("$RECEIPT_FILENAME")]),e._v(" is replaced with the name of your receipt file ending with "),a("code",[e._v(".receipt.json")]),e._v(" (you can refer to the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/Docker.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker instructions"),a("OutboundLink")],1),e._v(" for more information).")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Interact with the deployer from the /config directory")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /config\n\ndocker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file .env "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("remove-with-receipt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RECEIPT_FILENAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$RECEIPT_FILENAME")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":/airnode/out "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("You deployed an Airnode, made a request to it and received the response at the contract. If you want to learn more, see the following resources:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/api3dao/api3-whitepaper",target:"_blank",rel:"noopener noreferrer"}},[e._v("API3 whitepaper"),a("OutboundLink")],1),e._v(" will give you a broad overview of the project")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/medium.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium posts"),a("OutboundLink")],1),e._v(" are a more digestible version of the whitepaper")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/master/packages/admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("airnode-admin"),a("OutboundLink")],1),e._v(" lets you interact with the Airnode contract (to create a request, endorse a client, etc.) using a CLI tool")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/api3dao/airnode-client-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airnode client examples"),a("OutboundLink")],1),e._v(" demonstrate different request patterns that the Airnode protocol supports (for example, we used a full request in this starter project).")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);