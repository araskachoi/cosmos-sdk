(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{838:function(e,t,o){"use strict";o.r(t);var a=o(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"high-level-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#high-level-overview"}},[e._v("#")]),e._v(" High-level Overview")]),e._v(" "),o("h2",{attrs:{id:"what-is-the-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-sdk"}},[e._v("#")]),e._v(" What is the SDK?")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos-SDK"),o("OutboundLink")],1),e._v(" is an open-source framework for building multi-asset public Proof-of-Stake (PoS) "),o("df",{attrs:{value:"blockchain"}},[e._v("blockchains")]),e._v(", like the Cosmos Hub, as well as permissioned Proof-Of-Authority (PoA) blockchains. Blockchains built with the Cosmos SDK are generally referred to as "),o("strong",[e._v("application-specific blockchains")]),e._v(".")],1),e._v(" "),o("p",[e._v("The goal of the Cosmos SDK is to allow developers to easily create custom blockchains from scratch that can natively interoperate with other blockchains. We envision the SDK as the npm-like framework to build secure blockchain applications on top of "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint"),o("OutboundLink")],1),e._v(". SDK-based blockchains are built out of composable "),o("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("modules")]),e._v(", most of which are open source and readily available for any developers to use. Anyone can create a module for the Cosmos-SDK, and integrating already-built modules is as simple as importing them into your blockchain application. What's more, the Cosmos SDK is a capabilities-based system, which allows developers to better reason about the security of interactions between modules. For a deeper look at capabilities, jump to "),o("RouterLink",{attrs:{to:"/core/ocap.html"}},[e._v("this section")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"what-are-application-specific-blockchains"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-application-specific-blockchains"}},[e._v("#")]),e._v(" What are Application-Specific Blockchains?")]),e._v(" "),o("p",[e._v("One development paradigm in the blockchain world today is that of virtual-machine blockchains like Ethereum, where development generally revolves around building a decentralised applications on top of an existing blockchain as a set of smart contracts. While smart contracts can be very good for some use cases like single-use applications (e.g. ICOs), they often fall short for building complex decentralised platforms. More generally, smart contracts can be limiting in terms of flexibility, sovereignty and performance.")]),e._v(" "),o("p",[e._v("Application-specific blockchains offer a radically different development paradigm than virtual-machine blockchains. An application-specific blockchain is a blockchain customized to operate a single application: developers have all the freedom to make the design decisions required for the application to run optimally. They can also provide better sovereignty, security and performance.")]),e._v(" "),o("p",[e._v("Learn more about "),o("RouterLink",{attrs:{to:"/intro/why-app-specific.html"}},[e._v("application-specific blockchains")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"why-the-cosmos-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-the-cosmos-sdk"}},[e._v("#")]),e._v(" Why the Cosmos SDK?")]),e._v(" "),o("p",[e._v("The Cosmos SDK is the most advanced framework for building custom application-specific blockchains today. Here are a few reasons why you might want to consider building your decentralised application with the Cosmos SDK:")]),e._v(" "),o("ul",[o("li",[e._v("The default consensus engine available within the SDK is "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Core"),o("OutboundLink")],1),e._v(". Tendermint is the most (and only) mature BFT consensus engine in existence. It is widely used across the industry and is considered the gold standard consensus engine for building Proof-of-Stake systems.")]),e._v(" "),o("li",[e._v("The SDK is open source and designed to make it easy to build blockchains out of composable "),o("RouterLink",{attrs:{to:"/x/"}},[e._v("modules")]),e._v(". As the ecosystem of open source SDK modules grows, it will become increasingly easier to build complex decentralised platforms with it.")],1),e._v(" "),o("li",[e._v("The SDK is inspired by capabilities-based security, and informed by years of wrestling with blockchain state-machines. This makes the Cosmos SDK a very secure environment to build blockchains.")]),e._v(" "),o("li",[e._v("Most importantly, the Cosmos SDK has already been used to build many application-specific blockchains that are already in production. Among others, we can cite "),o("a",{attrs:{href:"https://hub.cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Hub"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://irisnet.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("IRIS Hub"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://docs.binance.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Binance Chain"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://terra.money/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://lino.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lino"),o("OutboundLink")],1),e._v(". "),o("a",{attrs:{href:"https://cosmos.network/ecosystem",target:"_blank",rel:"noopener noreferrer"}},[e._v("Many more"),o("OutboundLink")],1),e._v(" are building on the Cosmos SDK.")])]),e._v(" "),o("h2",{attrs:{id:"getting-started-with-the-cosmos-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-the-cosmos-sdk"}},[e._v("#")]),e._v(" Getting started with the Cosmos SDK")]),e._v(" "),o("ul",[o("li",[e._v("Learn more about the "),o("RouterLink",{attrs:{to:"/intro/sdk-app-architecture.html"}},[e._v("architecture of an SDK application")])],1),e._v(" "),o("li",[e._v("Learn how to build an application-specific blockchain from scratch with the "),o("a",{attrs:{href:"https://cosmos.network/docs/tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK Tutorial"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about "),o("RouterLink",{attrs:{to:"/intro/why-app-specific.html"}},[e._v("application-specific blockchains")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);