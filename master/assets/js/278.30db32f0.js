(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{830:function(e,a,t){"use strict";t.r(a);var o=t(1),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cosmosvisor-quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmosvisor-quick-start"}},[e._v("#")]),e._v(" Cosmosvisor Quick Start")]),e._v(" "),t("p",[t("code",[e._v("cosmovisor")]),e._v(" is a small process manager around Cosmos SDK binaries that monitors the governance module via stdout to see if there's a chain upgrade proposal coming in. If it see a proposal that gets approved it can be run manually or automatically to download the new code, stop the node, run the migration script, replace the node binary, and start with the new genesis file.")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("Run:")]),e._v(" "),t("p",[t("code",[e._v("go get github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor")])]),e._v(" "),t("h2",{attrs:{id:"command-line-arguments-and-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line-arguments-and-environment-variables"}},[e._v("#")]),e._v(" Command Line Arguments And Environment Variables")]),e._v(" "),t("p",[e._v("All arguments passed to the "),t("code",[e._v("cosmovisor")]),e._v(" program will be passed to the current daemon binary (as a subprocess).\nIt will return "),t("code",[e._v("/dev/stdout")]),e._v(" and "),t("code",[e._v("/dev/stderr")]),e._v(" of the subprocess as its own. Because of that, it cannot accept\nany command line arguments, nor print anything to output (unless it terminates unexpectedly before executing a\nbinary).")]),e._v(" "),t("p",[t("code",[e._v("cosmovisor")]),e._v(" reads its configuration from environment variables:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("DAEMON_HOME")]),e._v(" is the location where upgrade binaries should be kept (e.g. "),t("code",[e._v("$HOME/.gaiad")]),e._v(" or "),t("code",[e._v("$HOME/.xrnd")]),e._v(").")]),e._v(" "),t("li",[t("code",[e._v("DAEMON_NAME")]),e._v(" is the name of the binary itself (eg. "),t("code",[e._v("xrnd")]),e._v(", "),t("code",[e._v("gaiad")]),e._v(", "),t("code",[e._v("simd")]),e._v(", etc).")]),e._v(" "),t("li",[t("code",[e._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),e._v(" ("),t("em",[e._v("optional")]),e._v(") if set to "),t("code",[e._v("true")]),e._v(" will enable auto-downloading of new binaries\n(for security reasons, this is intended for full nodes rather than validators).")]),e._v(" "),t("li",[t("code",[e._v("DAEMON_RESTART_AFTER_UPGRADE")]),e._v(" ("),t("em",[e._v("optional")]),e._v(") if set to "),t("code",[e._v("true")]),e._v(" it will restart the sub-process with the same\ncommand line arguments and flags (but new binary) after a successful upgrade. By default, "),t("code",[e._v("cosmovisor")]),e._v(" dies\nafterwards and allows the supervisor to restart it if needed. Note that this will not auto-restart the child\nif there was an error.")])]),e._v(" "),t("h2",{attrs:{id:"data-folder-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-folder-layout"}},[e._v("#")]),e._v(" Data Folder Layout")]),e._v(" "),t("p",[t("code",[e._v("$DAEMON_HOME/cosmovisor")]),e._v(" is expected to belong completely to "),t("code",[e._v("cosmovisor")]),e._v(" and\nsubprocesses that are controlled by it. The folder content is organised as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilILCoMKgIOKUlOKUgOKUgCBiaW4K4pSCwqDCoCAgICAg4pSU4pSA4pSAICREQUVNT05fTkFNRQrilJTilIDilIAgdXBncmFkZXMKICAgIOKUlOKUgOKUgCAmbHQ7bmFtZSZndDsKICAgICAgICDilJTilIDilIAgYmluCiAgICAgICAgICAgIOKUlOKUgOKUgCAkREFFTU9OX05BTUUK"}}),e._v(" "),t("p",[e._v("Each version of the Cosmos SDK application is stored under either "),t("code",[e._v("genesis")]),e._v(" or "),t("code",[e._v("upgrades/<name>")]),e._v(", which holds "),t("code",[e._v("bin/$DAEMON_NAME")]),e._v("\nalong with any other needed files such as auxiliary client programs or libraries. "),t("code",[e._v("current")]),e._v(" is a symbolic link to the currently\nactive folder (so "),t("code",[e._v("current/bin/$DAEMON_NAME")]),e._v(" is the currently active binary).")]),e._v(" "),t("p",[t("em",[e._v("Note: the "),t("code",[e._v("name")]),e._v(" variable in "),t("code",[e._v("upgrades/<name>")]),e._v(" holds the URI-encoded name of the upgrade as specified in the upgrade module plan.")])]),e._v(" "),t("p",[e._v("Please note that "),t("code",[e._v("$DAEMON_HOME/cosmovisor")]),e._v(" just stores the "),t("em",[e._v("binaries")]),e._v(" and associated "),t("em",[e._v("program code")]),e._v(".\nThe "),t("code",[e._v("cosmovisor")]),e._v(" binary can be stored in any typical location (eg "),t("code",[e._v("/usr/local/bin")]),e._v("). The actual blockchain\nprogram will store it's data under their default data directory (e.g. "),t("code",[e._v("$HOME/.gaiad")]),e._v(") which is independent of\nthe "),t("code",[e._v("$DAEMON_HOME")]),e._v(". You can choose to set "),t("code",[e._v("$DAEMON_HOME")]),e._v(" to the actual binary's home directory and then end up\nwith a configuation like the following, but this is left as a choice to the system admininstrator for best\ndirectory layout:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LmdhaWFkCuKUnOKUgOKUgCBjb25maWcK4pSc4pSA4pSAIGRhdGEK4pSU4pSA4pSAIGNvc21vdmlzb3IK"}}),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("The system administrator admin is responsible for:")]),e._v(" "),t("ul",[t("li",[e._v("installing the "),t("code",[e._v("cosmovisor")]),e._v(" binary and configure the host's init system (e.g. "),t("code",[e._v("systemd")]),e._v(", "),t("code",[e._v("launchd")]),e._v(", etc) along with the environmental variables appropriately;")]),e._v(" "),t("li",[e._v("installing the "),t("code",[e._v("genesis")]),e._v(" folder manually;")]),e._v(" "),t("li",[e._v("installing the "),t("code",[e._v("upgrades/<name>")]),e._v(" folders manually.")])]),e._v(" "),t("p",[t("code",[e._v("cosmovisor")]),e._v(" will set the "),t("code",[e._v("current")]),e._v(" link to point to "),t("code",[e._v("genesis")]),e._v(" at first start (when no "),t("code",[e._v("current")]),e._v(" link exists) and handles\nbinaries switch overs at the correct points in time, so that the system administrator can prepare days in advance and relax at upgrade time.")]),e._v(" "),t("p",[e._v("Note that blockchain applications that wish to support upgrades may package up a genesis "),t("code",[e._v("cosmovisor")]),e._v(" tarball with this information,\njust as they prepare the genesis binary tarball. In fact, they may offer a tarball will all upgrades up to current point for easy download\nfor those who wish to sync a fullnode from start.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("DAEMON")]),e._v(" specific code and operations (e.g. tendermint config, the application db, syncing blocks, etc) are performed as normal.\nApplication binaries' directives such as command-line flags and environment variables work normally.")]),e._v(" "),t("h2",{attrs:{id:"example-simd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-simd"}},[e._v("#")]),e._v(" Example: simd")]),e._v(" "),t("p",[e._v("The following instructions provide a demonstration of "),t("code",[e._v("cosmovisor")]),e._v("'s integration with the "),t("code",[e._v("simd")]),e._v(" application\nshipped along the Cosmos SDK's source code.")]),e._v(" "),t("p",[e._v("First compile "),t("code",[e._v("simd")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2QgY29zbW9zLXNkay8KbWFrZSBidWlsZAo="}}),e._v(" "),t("p",[e._v("Create a new key and setup the "),t("code",[e._v("simd")]),e._v(" node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cm0gLXJmICRIT01FLy5zaW1hcHAKLi9idWlsZC9zaW1kIGtleXMgLS1rZXlyaW5nLWJhY2tlbmQ9dGVzdCBhZGQgdmFsaWRhdG9yCi4vYnVpbGQvc2ltZCBpbml0IHRlc3RpbmcgLS1jaGFpbi1pZCB0ZXN0Ci4vYnVpbGQvc2ltZCBhZGQtZ2VuZXNpcy1hY2NvdW50IC0ta2V5cmluZy1iYWNrZW5kPXRlc3QgJCguL2J1aWxkL3NpbWQga2V5cyAtLWtleXJpbmctYmFja2VuZD10ZXN0IHNob3cgdmFsaWRhdG9yIC1hKSAxMDAwMDAwMDAwc3Rha2UsMTAwMDAwMDAwMHZhbGlkYXRvcnRva2VuCi4vYnVpbGQvc2ltZCBnZW50eCAtLWtleXJpbmctYmFja2VuZCB0ZXN0IC0tY2hhaW4taWQgdGVzdCB2YWxpZGF0b3IgMTAwMDAwc3Rha2UKLi9idWlsZC9zaW1kIGNvbGxlY3QtZ2VudHhzCg=="}}),e._v(" "),t("p",[e._v("Set the required environment variables:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPXNpbWQgICAgICAgICAjIGJpbmFyeSBuYW1lCmV4cG9ydCBEQUVNT05fSE9NRT0kSE9NRS8uc2ltYXBwICAjIGRhZW1vbidzIGhvbWUgZGlyZWN0b3J5Cg=="}}),e._v(" "),t("p",[e._v("Create the "),t("code",[e._v("cosmovisor")]),e._v("’s genesis folders and deploy the binary:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWtkaXIgLXAgJERBRU1PTl9IT01FL2Nvc21vdmlzb3IvZ2VuZXNpcy9iaW4KY3AgLi9idWlsZC9zaW1kICREQUVNT05fSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCg=="}}),e._v(" "),t("p",[e._v("For the sake of this demonstration, we would amend "),t("code",[e._v("voting_params.voting_period")]),e._v(" in "),t("code",[e._v(".simapp/config/genesis.json")]),e._v(" to a reduced time ~5 minutes (300s) and eventually launch "),t("code",[e._v("cosmosvisor")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y29zbW92aXNvciBzdGFydAo="}}),e._v(" "),t("p",[e._v("Submit a software upgrade proposal:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Li9idWlsZC9zaW1kIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgc29mdHdhcmUtdXBncmFkZSB0ZXN0MSAtLXRpdGxlICZxdW90O3VwZ3JhZGUtZGVtbyZxdW90OyAtLWRlc2NyaXB0aW9uICZxdW90O3VwZ3JhZGUmcXVvdDsgIC0tZnJvbSB2YWxpZGF0b3IgLS11cGdyYWRlLWhlaWdodCAxMDAgLS1kZXBvc2l0IDEwMDAwMDAwc3Rha2UgLS1jaGFpbi1pZCB0ZXN0IC0ta2V5cmluZy1iYWNrZW5kIHRlc3QgLXkK"}}),e._v(" "),t("p",[e._v("Query the proposal to ensure it was correctly broadcast and added to a block:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Li9idWlsZC9zaW1kIHF1ZXJ5IGdvdiBwcm9wb3NhbCAxCg=="}}),e._v(" "),t("p",[e._v("Submit a "),t("code",[e._v("Yes")]),e._v(" vote for the upgrade proposal:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Li9idWlsZC9zaW1kIHR4IGdvdiB2b3RlIDEgeWVzIC0tZnJvbSB2YWxpZGF0b3IgLS1rZXlyaW5nLWJhY2tlbmQgdGVzdCAtLWNoYWluLWlkIHRlc3QgLXkK"}}),e._v(" "),t("p",[e._v("For the sake of this demonstration, we will hardcode a modification in "),t("code",[e._v("simapp")]),e._v(" to simulate a code change.\nIn "),t("code",[e._v("simapp/app.go")]),e._v(", find the line containing the upgrade Keeper initialisation, it should look like\n"),t("code",[e._v("app.UpgradeKeeper = upgradekeeper.NewKeeper(skipUpgradeHeights, keys[upgradetypes.StoreKey], appCodec, homePath)")]),e._v(".\nAfter that line, add the following snippet:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoJnF1b3Q7dGVzdDEmcXVvdDssIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBwbGFuIHVwZ3JhZGV0eXBlcy5QbGFuKSB7CiAgIAkvLyBBZGQgc29tZSBjb2lucyB0byBhIHJhbmRvbSBhY2NvdW50CiAgIAlhZGRyLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKCZxdW90O2Nvc21vczE4Y2drcWR1d3VoMjUzdHd6bWhlZGVzdzNsN3YzZm0zN3NwcHQ1OCZxdW90OykKICAgCWlmIGVyciAhPSBuaWwgewogICAJCXBhbmljKGVycikKICAgCX0KICAgCWVyciA9IGFwcC5CYW5rS2VlcGVyLkFkZENvaW5zKGN0eCwgYWRkciwgc2RrLkNvaW5ze3Nkay5Db2lue0Rlbm9tOiAmcXVvdDtzdGFrZSZxdW90OywgQW1vdW50OiBzZGsuTmV3SW50KDM0NTYwMDAwMCl9fSkKICAgCWlmIGVyciAhPSBuaWwgewogICAJCXBhbmljKGVycikKICAgCX0KICAgfSkK"}}),e._v(" "),t("p",[e._v("Now recompile a new binary and place it in "),t("code",[e._v("$DAEMON_HOME/cosmosvisor/upgrades/test1/bin")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBidWlsZApjcCAuL2J1aWxkL3NpbWQgJERBRU1PTl9IT01FL2Nvc21vdmlzb3IvdXBncmFkZXMvdGVzdDEvYmluCg=="}}),e._v(" "),t("p",[e._v("The upgrade will occur automatically at height 100.")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);