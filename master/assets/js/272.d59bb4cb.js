(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{842:function(t,r,e){"use strict";e.r(r);var o=e(1),s=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"введение-в-cosmos-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#введение-в-cosmos-sdk"}},[t._v("#")]),t._v(" Введение в Cosmos SDK")]),t._v(" "),e("h2",{attrs:{id:"что-такое-cosmos-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#что-такое-cosmos-sdk"}},[t._v("#")]),t._v(" Что такое Cosmos SDK?")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos SDK"),e("OutboundLink")],1),t._v(" — это фреймворк для создания публичных Proof-of-Stake (PoS) и закрытых Proof-Of-Authority (PoA) multi-asset блокчейнов. Блокчейны, разработанные с помощью Cosmos SDK, называют application-specific, то есть созданные для конкретного приложения. Исходный код Cosmos SDK находится в свободном доступе и распространяется под лицензией Apache License 2.0.")]),t._v(" "),e("p",[t._v("Цель Cosmos SDK: дать разработчикам инструменты для создания с нуля собственных блокчейнов, которые смогут нативно взаимодействовать с другими блокчейнами. Мы видим SDK как напоминающий NPM фреймворк для разработки безопасных блокчейн-приложений поверх "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint"),e("OutboundLink")],1),t._v(". Построенные с помощью SDK блокчейны состоят из совместимых друг с другом модулей, и большинство из них находятся в свободном доступе. Создать модуль для Cosmos SDK может любой разработчик, а для интеграции уже существующих модулей достаточно импортировать их в свое приложение. Cosmos SDK построен на системе «разрешений», которая позволяет разработчикам лучше контролировать взаимодействие между модулями. В общем, смарт-контракты ограничивают в отношении гибкости, суверенитета и производительности.")]),t._v(" "),e("h2",{attrs:{id:"почему-блокчеин-для-конкретного-приложения"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#почему-блокчеин-для-конкретного-приложения"}},[t._v("#")]),t._v(" Почему блокчейн для конкретного приложения?")]),t._v(" "),e("p",[t._v("Общепринятая парадигма в мире блокчейна предполагает существование виртуальной машины блокчейна, например Ethereum, и разработки децентрализованных приложений как набора смарт-контрактов поверх существующего блокчейна. Смарт-контракты могут быть удобны для создания «одноразовых» приложений, например для ICO, но плохо подходят для разработки сложных децентрализованных платформ.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ru/intro/why-app-specific.html"}},[t._v("Блокчейны для конкретных приложений")]),t._v(" работают в совершенно отличной от виртуальных машин парадигме. Такие блокчейны создаются под потребности конкретного приложения и разработчики имеют полную свободу в принятии технических решений для создания блокчейна, который позволит их приложению работать оптимально. Это позволяет избежать ограничений смарт-контрактов.")],1),t._v(" "),e("h2",{attrs:{id:"почему-именно-cosmos-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#почему-именно-cosmos-sdk"}},[t._v("#")]),t._v(" Почему именно Cosmos SDK?")]),t._v(" "),e("p",[t._v("Cosmos SDK является наиболее полным фреймворком для создания блокчейнов для приложений. Есть ряд причин, которые помогут сделать выбор в пользу Cosmos SDK:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("В качестве движка консенсуса SDK по умолчанию использует "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint Core"),e("OutboundLink")],1),t._v(" — проработанный BFT-движок, который пользуется широкой популярностью и фактически является «золотым стандартом» при построении Proof-of-Stake систем")])]),t._v(" "),e("li",[e("p",[t._v("Исходный код SDK находится в свободном доступе, а модульная система позволяет разрабатывать блокчейн в виде отдельных совместимых друг с другом модулей. По мере роста экосистемы модулей, находящихся в свободном доступе, разработка сложных децентрализованных приложений будет становится еще проще.")])]),t._v(" "),e("li",[e("p",[t._v("SDK построен на системе «разрешений» и большом опыте работы с вируальными машинами блокчейнов. Это делает Cosmos SDK очень безопасным фреймворком для создания блокчейнов.")])]),t._v(" "),e("li",[e("p",[t._v("Самое важное: Cosmos SDK уже используется для создания работающих в продакшене блокчейнов. В качестве примеров можно привести "),e("a",{attrs:{href:"https://hub.cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos Hub"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://irisnet.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("IRIS Hub"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://docs.binance.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Binance Chain"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://terra.money/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://lino.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lino"),e("OutboundLink")],1),t._v(" и многие другие проекты, которые находятся в стадии разработки, используют Cosmos SDK. Примеры использования можно посмотреть на "),e("a",{attrs:{href:"https://cosmos.network/ecosystem",target:"_blank",rel:"noopener noreferrer"}},[t._v("странице экосистемы"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"начало-работы-с-cosmos-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#начало-работы-с-cosmos-sdk"}},[t._v("#")]),t._v(" Начало работы с Cosmos SDK")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Прочитайте об "),e("RouterLink",{attrs:{to:"/ru/intro/sdk-app-architecture.html"}},[t._v("архитектуре приложения")]),t._v(", разрабатываемого с помощью SDK.")],1)]),t._v(" "),e("li",[e("p",[t._v("Узнайте, как с нуля создать блокчейн для вашего приложения в "),e("a",{attrs:{href:"https://cosmos.network/docs/tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("пошаговом примере"),e("OutboundLink")],1),t._v(".")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);