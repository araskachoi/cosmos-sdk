(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{680:function(e,t,c){"use strict";c.r(t);var a=c(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"adr-015-ibc-packet-receiver"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#adr-015-ibc-packet-receiver"}},[e._v("#")]),e._v(" ADR 015: IBC Packet Receiver")]),e._v(" "),c("h2",{attrs:{id:"changelog"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),c("ul",[c("li",[e._v("2019 Oct 22: Initial Draft")])]),e._v(" "),c("h2",{attrs:{id:"context"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),c("p",[c("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-026-routing-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 26 - Routing Module"),c("OutboundLink")],1),e._v(" defines a function "),c("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-026-routing-module#packet-relay",target:"_blank",rel:"noopener noreferrer"}},[c("code",[e._v("handlePacketRecv")]),c("OutboundLink")],1),e._v(".")]),e._v(" "),c("p",[e._v("In ICS 26, the routing module is defined as a layer above each application module\nwhich verifies and routes messages to the destination modules. It is possible to\nimplement it as a separate module, however, we already have functionality to route\nmessages upon the destination identifiers in the baseapp. This ADR suggests\nto utilize existing "),c("code",[e._v("baseapp.router")]),e._v(" to route packets to application modules.")]),e._v(" "),c("p",[e._v("Generally, routing module callbacks have two separate steps in them,\nverification and execution. This corresponds to the "),c("code",[e._v("AnteHandler")]),e._v("-"),c("code",[e._v("Handler")]),e._v("\nmodel inside the SDK. We can do the verification inside the "),c("code",[e._v("AnteHandler")]),e._v("\nin order to increase developer ergonomics by reducing boilerplate\nverification code.")]),e._v(" "),c("p",[e._v("For atomic multi-message transaction, we want to keep the IBC related\nstate modification to be preserved even the application side state change\nreverts. One of the example might be IBC token sending message following with\nstake delegation which uses the tokens received by the previous packet message.\nIf the token receiving fails for any reason, we might not want to keep\nexecuting the transaction, but we also don't want to abort the transaction\nor the sequence and commitment will be reverted and the channel will be stuck.\nThis ADR suggests new "),c("code",[e._v("CodeType")]),e._v(", "),c("code",[e._v("CodeTxBreak")]),e._v(", to fix this problem.")]),e._v(" "),c("h2",{attrs:{id:"decision"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),c("p",[c("code",[e._v("PortKeeper")]),e._v(" will have the capability key that is able to access only the\nchannels bound to the port. Entities that hold a "),c("code",[e._v("PortKeeper")]),e._v(" will be\nable to call the methods on it which are corresponding with the methods with\nthe same names on the "),c("code",[e._v("ChannelKeeper")]),e._v(", but only with the\nallowed port. "),c("code",[e._v("ChannelKeeper.Port(string, ChannelChecker)")]),e._v(" will be defined to\neasily construct a capability-safe "),c("code",[e._v("PortKeeper")]),e._v(". This will be addressed in\nanother ADR and we will use insecure "),c("code",[e._v("ChannelKeeper")]),e._v(" for now.")]),e._v(" "),c("p",[c("code",[e._v("baseapp.runMsgs")]),e._v(" will break the loop over the messages if one of the handlers\nreturns "),c("code",[e._v("!Result.IsOK()")]),e._v(". However, the outer logic will write the cached\nstore if "),c("code",[e._v("Result.IsOK() || Result.Code.IsBreak()")]),e._v(". "),c("code",[e._v("Result.Code.IsBreak()")]),e._v(" if\n"),c("code",[e._v("Result.Code == CodeTxBreak")]),e._v(".")]),e._v(" "),c("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBydW5UeCh0eCBUeCkgKHJlc3VsdCBSZXN1bHQpIHsKICBtc2dzIDo9IHR4LkdldE1zZ3MoKQogIAogIC8vIEFudGVIYW5kbGVyCiAgaWYgYXBwLmFudGVIYW5kbGVyICE9IG5pbCB7CiAgICBhbnRlQ3R4LCBtc0NhY2hlIDo9IGFwcC5jYWNoZVR4Q29udGV4dChjdHgpCiAgICBuZXdDdHgsIGVyciA6PSBhcHAuYW50ZUhhbmRsZXIoYW50ZUN0eCwgdHgpCiAgICBpZiAhbmV3Q3R4LklzWmVybygpIHsKICAgICAgY3R4ID0gbmV3Q3R4LldpdGhNdWx0aVN0b3JlKG1zKQogICAgfQoKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAvLyBlcnJvciBoYW5kbGluZyBsb2dpYwogICAgICByZXR1cm4gcmVzCiAgICB9CgogICAgbXNDYWNoZS5Xcml0ZSgpCiAgfQogIAogIC8vIE1haW4gSGFuZGxlcgogIHJ1bk1zZ0N0eCwgbXNDYWNoZSA6PSBhcHAuY2FjaGVUeENvbnRleHQoY3R4KQogIHJlc3VsdCA9IGFwcC5ydW5Nc2dzKHJ1bk1zZ0N0eCwgbXNncykKICAvLyBCRUdJTiBtb2RpZmljYXRpb24gbWFkZSBpbiB0aGlzIEFEUgogIGlmIHJlc3VsdC5Jc09LKCkgfHwgcmVzdWx0LklzQnJlYWsoKSB7CiAgLy8gRU5ECiAgICBtc0NhY2hlLldyaXRlKCkKICB9CgogIHJldHVybiByZXN1bHQKfQo="}}),e._v(" "),c("p",[e._v("The Cosmos SDK will define an "),c("code",[e._v("AnteDecorator")]),e._v(" for IBC packet receiving. The\n"),c("code",[e._v("AnteDecorator")]),e._v(" will iterate over the messages included in the transaction, type\n"),c("code",[e._v("switch")]),e._v(" to check whether the message contains an incoming IBC packet, and if so\nverify the Merkle proof.")]),e._v(" "),c("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm9vZlZlcmlmaWNhdGlvbkRlY29yYXRvciBzdHJ1Y3QgewogIGNsaWVudEtlZXBlciBDbGllbnRLZWVwZXIKICBjaGFubmVsS2VlcGVyIENoYW5uZWxLZWVwZXIKfQoKZnVuYyAocHZyIFByb29mVmVyaWZpY2F0aW9uRGVjb3JhdG9yKSBBbnRlSGFuZGxlKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCwgbmV4dCBBbnRlSGFuZGxlcikgKENvbnRleHQsIGVycm9yKSB7CiAgZm9yIF8sIG1zZyA6PSByYW5nZSB0eC5HZXRNc2dzKCkgewogICAgdmFyIGVyciBlcnJvcgogICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKICAgIGNhc2UgY2xpZW50Lk1zZ1VwZGF0ZUNsaWVudDoKICAgICAgZXJyID0gcHZyLmNsaWVudEtlZXBlci5VcGRhdGVDbGllbnQobXNnLkNsaWVudElELCBtc2cuSGVhZGVyKQogICAgY2FzZSBjaGFubmVsLk1zZ1BhY2tldDoKICAgICAgZXJyID0gcHZyLmNoYW5uZWxLZWVwZXIuUmVjdlBhY2tldChtc2cuUGFja2V0LCBtc2cuUHJvb2ZzLCBtc2cuUHJvb2ZIZWlnaHQpCiAgICBjYXNlIGNoYW5lbC5Nc2dBY2tub3dsZWRnZW1lbnQ6CiAgICAgIGVyciA9IHB2ci5jaGFubmVsS2VlcGVyLkFja25vd2xlZGdlbWVudFBhY2tldChtc2cuQWNrbm93bGVkZ2VtZW50LCBtc2cuUHJvb2YsIG1zZy5Qcm9vZkhlaWdodCkKICAgIGNhc2UgY2hhbm5lbC5Nc2dUaW1lb3V0UGFja2V0OgogICAgICBlcnIgPSBwdnIuY2hhbm5lbEtlZXBlci5UaW1lb3V0UGFja2V0KG1zZy5QYWNrZXQsIG1zZy5Qcm9vZiwgbXNnLlByb29mSGVpZ2h0LCBtc2cuTmV4dFNlcXVlbmNlUmVjdikKICAgIGNhc2UgY2hhbm5lbC5Nc2dDaGFubmVsT3BlbkluaXQ7CiAgICAgIGVyciA9IHB2ci5jaGFubmVsS2VlcGVyLkNoZWNrT3Blbihtc2cuUG9ydElELCBtc2cuQ2hhbm5lbElELCBtc2cuQ2hhbm5lbCkKICAgIGRlZmF1bHQ6CiAgICAgIGNvbnRpbnVlCiAgICB9CgogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgIHJldHVybiBjdHgsIGVycgogICAgfQogIH0KICAKICByZXR1cm4gbmV4dChjdHgsIHR4LCBzaW11bGF0ZSkKfQo="}}),e._v(" "),c("p",[e._v("Where "),c("code",[e._v("MsgUpdateClient")]),e._v(", "),c("code",[e._v("MsgPacket")]),e._v(", "),c("code",[e._v("MsgAcknowledgement")]),e._v(", "),c("code",[e._v("MsgTimeoutPacket")]),e._v("\nare "),c("code",[e._v("sdk.Msg")]),e._v(" types correspond to "),c("code",[e._v("handleUpdateClient")]),e._v(", "),c("code",[e._v("handleRecvPacket")]),e._v(",\n"),c("code",[e._v("handleAcknowledgementPacket")]),e._v(", "),c("code",[e._v("handleTimeoutPacket")]),e._v(" of the routing module,\nrespectively.")]),e._v(" "),c("p",[e._v("The side effects of "),c("code",[e._v("RecvPacket")]),e._v(", "),c("code",[e._v("VerifyAcknowledgement")]),e._v(",\n"),c("code",[e._v("VerifyTimeout")]),e._v(" will be extracted out into separated functions,\n"),c("code",[e._v("WriteAcknowledgement")]),e._v(", "),c("code",[e._v("DeleteCommitment")]),e._v(", "),c("code",[e._v("DeleteCommitmentTimeout")]),e._v(", respectively,\nwhich will be called by the application handlers after the execution.")]),e._v(" "),c("p",[c("code",[e._v("WriteAcknowledgement")]),e._v(" writes the acknowledgement to the state that can be\nverified by the counter-party chain and increments the sequence to prevent\ndouble execution. "),c("code",[e._v("DeleteCommitment")]),e._v(" will delete the commitment stored,\n"),c("code",[e._v("DeleteCommitmentTimeout")]),e._v(" will delete the commitment and close channel in case\nof ordered channel.")]),e._v(" "),c("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoa2VlcGVyIENoYW5uZWxLZWVwZXIpIFdyaXRlQWNrbm93bGVkZ2VtZW50KGN0eCBDb250ZXh0LCBwYWNrZXQgUGFja2V0LCBhY2sgW11ieXRlKSB7CiAga2VlcGVyLlNldFBhY2tldEFja25vd2xlZGdlbWVudChjdHgsIHBhY2tldC5HZXREZXN0UG9ydCgpLCBwYWNrZXQuR2V0RGVzdENoYW5uZWwoKSwgcGFja2V0LkdldFNlcXVlbmNlKCksIGFjaykKICBrZWVwZXIuU2V0TmV4dFNlcXVlbmNlUmVjdihjdHgsIHBhY2tldC5HZXREZXN0UG9ydCgpLCBwYWNrZXQuR2V0RGVzdENoYW5uZWwoKSwgcGFja2V0LkdldFNlcXVlbmNlKCkpCn0KCmZ1bmMgKGtlZXBlciBDaGFubmVsS2VlcGVyKSBEZWxldGVDb21taXRtZW50KGN0eCBDb250ZXh0LCBwYWNrZXQgUGFja2V0KSB7CiAga2VlcGVyLmRlbGV0ZVBhY2tldENvbW1pdG1lbnQoY3R4LCBwYWNrZXQuR2V0U291cmNlUG9ydCgpLCBwYWNrZXQuR2V0U291cmNlQ2hhbm5lbCgpLCBwYWNrZXQuR2V0U2VxdWVuY2UoKSkKfQoKZnVuYyAoa2VlcGVyIENoYW5uZWxLZWVwZXIpIERlbGV0ZUNvbW1pdG1lbnRUaW1lb3V0KGN0eCBDb250ZXh0LCBwYWNrZXQgUGFja2V0KSB7CiAgay5kZWxldGVQYWNrZXRDb21taXRtZW50KGN0eCwgcGFja2V0LkdldFNvdXJjZVBvcnQoKSwgcGFja2V0LkdldFNvdXJjZUNoYW5uZWwoKSwgcGFja2V0LkdldFNlcXVlbmNlKCkpCiAgCiAgaWYgY2hhbm5lbC5PcmRlcmluZyA9PSB0eXBlcy5PUkRFUkVEIFsKICAgIGNoYW5uZWwuU3RhdGUgPSB0eXBlcy5DTE9TRUQKICAgIGsuU2V0Q2hhbm5lbChjdHgsIHBhY2tldC5HZXRTb3VyY2VQb3J0KCksIHBhY2tldC5HZXRTb3VyY2VDaGFubmVsKCksIGNoYW5uZWwpCiAgfQp9Cg=="}}),e._v(" "),c("p",[e._v("Each application handler should call respective finalization methods on the "),c("code",[e._v("PortKeeper")]),e._v("\nin order to increase sequence (in case of packet) or remove the commitment\n(in case of acknowledgement and timeout).\nCalling those functions implies that the application logic has successfully executed.\nHowever, the handlers can return "),c("code",[e._v("Result")]),e._v(" with "),c("code",[e._v("CodeTxBreak")]),e._v(" after calling those methods\nwhich will persist the state changes that has been already done but prevent any further\nmessages to be executed in case of semantically invalid packet. This will keep the sequence\nincreased in the previous IBC packets(thus preventing double execution) without\nproceeding to the following messages.\nIn any case the application modules should never return state reverting result,\nwhich will make the channel unable to proceed.")]),e._v(" "),c("p",[c("code",[e._v("ChannelKeeper.CheckOpen")]),e._v(" method will be introduced. This will replace "),c("code",[e._v("onChanOpen*")]),e._v(" defined\nunder the routing module specification. Instead of define each channel handshake callback\nfunctions, application modules can provide "),c("code",[e._v("ChannelChecker")]),e._v(" function with the "),c("code",[e._v("AppModule")]),e._v("\nwhich will be injected to "),c("code",[e._v("ChannelKeeper.Port()")]),e._v(" at the top level application.\n"),c("code",[e._v("CheckOpen")]),e._v(" will find the correct "),c("code",[e._v("ChennelChecker")]),e._v(" using the\n"),c("code",[e._v("PortID")]),e._v(" and call it, which will return an error if it is unacceptable by the application.")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("ProofVerificationDecorator")]),e._v(" will be inserted to the top level application.\nIt is not safe to make each module responsible to call proof verification\nlogic, whereas application can misbehave(in terms of IBC protocol) by\nmistake.")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("ProofVerificationDecorator")]),e._v(" should come right after the default sybil attack\nresistent layer from the current "),c("code",[e._v("auth.NewAnteHandler")]),e._v(":")]),e._v(" "),c("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYWRkIElCQyBQcm9vZlZlcmlmaWNhdGlvbkRlY29yYXRvciB0byB0aGUgQ2hhaW4gb2YKZnVuYyBOZXdBbnRlSGFuZGxlcigKICBhayBrZWVwZXIuQWNjb3VudEtlZXBlciwgc3VwcGx5S2VlcGVyIHR5cGVzLlN1cHBseUtlZXBlciwgaWJjS2VlcGVyIGliYy5LZWVwZXIsCiAgc2lnR2FzQ29uc3VtZXIgU2lnbmF0dXJlVmVyaWZpY2F0aW9uR2FzQ29uc3VtZXIpIHNkay5BbnRlSGFuZGxlciB7CiAgcmV0dXJuIHNkay5DaGFpbkFudGVEZWNvcmF0b3JzKAogICAgTmV3U2V0VXBDb250ZXh0RGVjb3JhdG9yKCksIC8vIG91dGVybW9zdCBBbnRlRGVjb3JhdG9yLiBTZXRVcENvbnRleHQgbXVzdCBiZSBjYWxsZWQgZmlyc3QKICAgIC4uLgogICAgTmV3SW5jcmVtZW50U2VxdWVuY2VEZWNvcmF0b3IoYWspLAogICAgaWJjYW50ZS5Qcm9vZlZlcmlmaWNhdGlvbkRlY29yYXRvcihpYmNLZWVwZXIuQ2xpZW50S2VlcGVyLCBpYmNLZWVwZXIuQ2hhbm5lbEtlZXBlciksIC8vIGlubmVybW9zdCBBbnRlRGVjb3JhdG9yCiAgKQp9Cg=="}}),e._v(" "),c("p",[e._v("The implementation of this ADR will also change the "),c("code",[e._v("Data")]),e._v(" field of the "),c("code",[e._v("Packet")]),e._v(" type from "),c("code",[e._v("[]byte")]),e._v(" (i.e. arbitrary data) to "),c("code",[e._v("PacketDataI")]),e._v(". We want to make application modules be able to register custom packet data type which is automatically unmarshaled at "),c("code",[e._v("TxDecoder")]),e._v(" time and can be simply type switched inside the application handler. Also, by having "),c("code",[e._v("GetCommitment()")]),e._v(" method instead of manually generate the commitment inside the IBC keeper, the applications can define their own commitment method, including bare bytes, hashing, etc.")]),e._v(" "),c("p",[e._v("This also removes the "),c("code",[e._v("Timeout")]),e._v(" field from the "),c("code",[e._v("Packet")]),e._v(" struct. This is because the "),c("code",[e._v("PacketDataI")]),e._v(" interface now contains this information. You can see details about this in "),c("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-004-channel-and-packet-semantics#definitions",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS04"),c("OutboundLink")],1),e._v(".")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("PacketDataI")]),e._v(" is the application specific interface that provides information for the execution of the application packet. In the case of ICS20 this would be "),c("code",[e._v("denom")]),e._v(", "),c("code",[e._v("amount")]),e._v(" and "),c("code",[e._v("address")])]),e._v(" "),c("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUGFja2V0RGF0YUkgZGVmaW5lcyB0aGUgc3RhbmRhcmQgaW50ZXJmYWNlIGZvciBJQkMgcGFja2V0IGRhdGEKdHlwZSBQYWNrZXREYXRhSSBpbnRlcmZhY2UgewoJR2V0Q29tbWl0bWVudCgpIFtdYnl0ZSAvLyBDb21taXRtZW50IGZvcm0gdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgc3RhdGUuCglHZXRUaW1lb3V0SGVpZ2h0KCkgdWludDY0CgoJVmFsaWRhdGVCYXNpYygpIGVycm9yCglUeXBlKCkgc3RyaW5nCn0K"}}),e._v(" "),c("p",[e._v("Example application-side usage:")]),e._v(" "),c("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGUgc3RydWN0IHt9CgovLyBDaGVja0NoYW5uZWwgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgQ2hhbm5lbEtlZXBlciBhcyBDaGFubmVsS2VlcGVyLlBvcnQobW9kdWxlLkNoZWNrQ2hhbm5lbCkKZnVuYyAobW9kdWxlIEFwcE1vZHVsZSkgQ2hlY2tDaGFubmVsKHBvcnRJRCwgY2hhbm5lbElEIHN0cmluZywgY2hhbm5lbCBDaGFubmVsKSBlcnJvciB7CiAgaWYgY2hhbm5lbC5PcmRlcmluZyAhPSBVTk9SREVSRUQgewogICAgcmV0dXJuIEVyclVuY29tcGF0aWJsZU9yZGVyaW5nKCkKICB9CiAgaWYgY2hhbm5lbC5Db3VudGVycGFydHlQb3J0ICE9ICZxdW90O2JhbmsmcXVvdDsgewogICAgcmV0dXJuIEVyclVuY29tcGF0aWJsZVBvcnQoKQogIH0KICBpZiBjaGFubmVsLlZlcnNpb24gIT0gJnF1b3Q7JnF1b3Q7IHsKICAgIHJldHVybiBFcnJVbmNvbXBhdGlibGVWZXJzaW9uKCkKICB9CiAgcmV0dXJuIG5pbAp9CgpmdW5jIE5ld0hhbmRsZXIoayBLZWVwZXIpIEhhbmRsZXIgewogIHJldHVybiBmdW5jKGN0eCBDb250ZXh0LCBtc2cgTXNnKSBSZXN1bHQgewogICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKICAgIGNhc2UgTXNnVHJhbnNmZXI6CiAgICAgIHJldHVybiBoYW5kbGVNc2dUcmFuc2ZlcihjdHgsIGssIG1zZykKICAgIGNhc2UgaWJjLk1zZ1BhY2tldDoKICAgICAgc3dpdGNoIGRhdGEgOj0gbXNnLlBhY2tldC5EYXRhLih0eXBlKSB7CiAgICAgIGNhc2UgUGFja2V0RGF0YVRyYW5zZmVyOiAvLyBpLmUgZnVsZmlsbHMgdGhlIFBhY2tldERhdGFJIGludGVyZmFjZQogICAgICAgIHJldHVybiBoYW5kbGVQYWNrZXREYXRhVHJhbnNmZXIoY3R4LCBrLCBtc2cuUGFja2V0LCBkYXRhKQogICAgICB9CiAgICBjYXNlIGliYy5Nc2dUaW1lb3V0UGFja2V0OiAKICAgICAgc3dpdGNoIHBhY2tldCA6PSBtc2cuUGFja2V0LkRhdGEuKHR5cGUpIHsKICAgICAgY2FzZSBQYWNrZXREYXRhVHJhbnNmZXI6IC8vIGkuZSBmdWxmaWxscyB0aGUgUGFja2V0RGF0YUkgaW50ZXJmYWNlCiAgICAgICAgcmV0dXJuIGhhbmRsZVRpbWVvdXRQYWNrZXREYXRhVHJhbnNmZXIoY3R4LCBrLCBtc2cuUGFja2V0KQogICAgICB9CiAgICAvLyBpbnRlcmZhY2UgeyBQb3J0SUQoKSBzdHJpbmc7IENoYW5uZWxJRCgpIHN0cmluZzsgQ2hhbm5lbCgpIGliYy5DaGFubmVsIH0KICAgIC8vIE1zZ0NoYW5Jbml0LCBNc2dDaGFuVHJ5IGltcGxlbWVudHMgaWJjLk1zZ0NoYW5uZWxPcGVuCiAgICBjYXNlIGliYy5Nc2dDaGFubmVsT3BlbjogCiAgICAgIHJldHVybiBoYW5kbGVNc2dDaGFubmVsT3BlbihjdHgsIGssIG1zZykKICAgIH0KICB9Cn0KCmZ1bmMgaGFuZGxlTXNnVHJhbnNmZXIoY3R4IENvbnRleHQsIGsgS2VlcGVyLCBtc2cgTXNnVHJhbnNmZXIpIFJlc3VsdCB7CiAgZXJyIDo9IGsuU2VuZFRyYW5zZmVyKGN0eCxtc2cuUG9ydElELCBtc2cuQ2hhbm5lbElELCBtc2cuQW1vdW50LCBtc2cuU2VuZGVyLCBtc2cuUmVjZWl2ZXIpCiAgaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gc2RrLlJlc3VsdEZyb21FcnJvcihlcnIpCiAgfQoKICByZXR1cm4gc2RrLlJlc3VsdHt9Cn0KCmZ1bmMgaGFuZGxlUGFja2V0RGF0YVRyYW5zZmVyKGN0eCBDb250ZXh0LCBrIEtlZXBlciwgcGFja2V0IFBhY2tldCwgZGF0YSBQYWNrZXREYXRhVHJhbnNmZXIpIFJlc3VsdCB7CiAgZXJyIDo9IGsuUmVjZWl2ZVRyYW5zZmVyKGN0eCwgcGFja2V0LkdldFNvdXJjZVBvcnQoKSwgcGFja2V0LkdldFNvdXJjZUNoYW5uZWwoKSwgcGFja2V0LkdldERlc3RpbmF0aW9uUG9ydCgpLCBwYWNrZXQuR2V0RGVzdGluYXRpb25DaGFubmVsKCksIGRhdGEpCiAgaWYgZXJyICE9IG5pbCB7CiAgICAvLyBUT0RPOiBTb3VyY2UgY2hhaW4gc2VudCBpbnZhbGlkIHBhY2tldCwgc2h1dGRvd24gY2hhbm5lbAogIH0KICBrLkNoYW5uZWxLZWVwZXIuV3JpdGVBY2tub3dsZWRnZW1lbnQoW11ieXRlezB4MDB9KSAvLyBXcml0ZUFja25vd2xlZGdlbWVudCBpbmNyZWFzZXMgdGhlIHNlcXVlbmNlLCBwcmV2ZW50aW5nIGRvdWJsZSBzcGVuZGluZwogIHJldHVybiBzZGsuUmVzdWx0e30KfQoKZnVuYyBoYW5kbGVDdXN0b21UaW1lb3V0UGFja2V0KGN0eCBDb250ZXh0LCBrIEtlZXBlciwgcGFja2V0IEN1c3RvbVBhY2tldCkgUmVzdWx0IHsKICBlcnIgOj0gay5SZWNvdmVyVHJhbnNmZXIoY3R4LCBwYWNrZXQuR2V0U291cmNlUG9ydCgpLCBwYWNrZXQuR2V0U291cmNlQ2hhbm5lbCgpLCBwYWNrZXQuR2V0RGVzdGluYXRpb25Qb3J0KCksIHBhY2tldC5HZXREZXN0aW5hdGlvbkNoYW5uZWwoKSwgZGF0YSkKICBpZiBlcnIgIT0gbmlsIHsKICAgIC8vIFRoaXMgY2hhaW4gc2VudCBpbnZhbGlkIHBhY2tldCBvciBjYW5ub3QgcmVjb3ZlciB0aGUgZnVuZHMKICAgIHBhbmljKGVycikKICB9CiAgay5DaGFubmVsS2VlcGVyLkRlbGV0ZUNvbW1pdG1lbnRUaW1lb3V0KGN0eCwgcGFja2V0KQogIC8vIHBhY2tldCB0aW1lb3V0IHNob3VsZCBub3QgZmFpbAogIHJldHVybiBzZGsuUmVzdWx0e30KfQoKZnVuYyBoYW5kbGVNc2dDaGFubmVsT3BlbihzZGsuQ29udGV4dCwgayBLZWVwZXIsIG1zZyBNc2dPcGVuQ2hhbm5lbCkgUmVzdWx0IHsKICBrLkFsbG9jYXRlRXNjcm93QWRkcmVzcyhjdHgsIG1zZy5DaGFubmVsSUQoKSkKICByZXR1cm4gc2RrLlJlc3VsdHt9Cn0K"}}),e._v(" "),c("h2",{attrs:{id:"status"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),c("p",[e._v("Proposed")]),e._v(" "),c("h2",{attrs:{id:"consequences"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),c("h3",{attrs:{id:"positive"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),c("ul",[c("li",[e._v("Intuitive interface for developers - IBC handlers do not need to care about IBC authentication")]),e._v(" "),c("li",[e._v("State change commitment logic is embedded into "),c("code",[e._v("baseapp.runTx")]),e._v(" logic")])]),e._v(" "),c("h3",{attrs:{id:"negative"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),c("ul",[c("li",[e._v("Cannot support dynamic ports, routing is tied to the baseapp router")])]),e._v(" "),c("h3",{attrs:{id:"neutral"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),c("ul",[c("li",[e._v("Introduces new "),c("code",[e._v("AnteHandler")]),e._v(" decorator.")]),e._v(" "),c("li",[e._v("Dynamic ports can be supported using hierarchical port identifier, see #5290 for detail")])]),e._v(" "),c("h2",{attrs:{id:"references"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),c("ul",[c("li",[e._v("Relevant comment: "),c("a",{attrs:{href:"https://github.com/cosmos/ics/issues/289#issuecomment-544533583",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos/ics#289"),c("OutboundLink")],1)]),e._v(" "),c("li",[c("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-026-routing-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS26 - Routing Module"),c("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);