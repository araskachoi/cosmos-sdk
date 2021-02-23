(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{805:function(e,a,l){"use strict";l.r(a);var i=l(1),n=Object(i.a)({},(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"beginblock"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[e._v("#")]),e._v(" BeginBlock")]),e._v(" "),l("h2",{attrs:{id:"evidence-handling"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#evidence-handling"}},[e._v("#")]),e._v(" Evidence Handling")]),e._v(" "),l("p",[e._v("Tendermint blocks can include\n"),l("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/blockchain/blockchain.md#evidence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Evidence"),l("OutboundLink")],1),e._v(",\nwhich indicates that a validator committed malicious behavior. The relevant information is\nforwarded to the application as ABCI Evidence in "),l("code",[e._v("abci.RequestBeginBlock")]),e._v(" so that\nthe validator an be accordingly punished.")]),e._v(" "),l("h3",{attrs:{id:"equivocation"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#equivocation"}},[e._v("#")]),e._v(" Equivocation")]),e._v(" "),l("p",[e._v("Currently, the evidence module only handles evidence of type "),l("code",[e._v("Equivocation")]),e._v(" which is derived from\nTendermint's "),l("code",[e._v("ABCIEvidenceTypeDuplicateVote")]),e._v(" during "),l("code",[e._v("BeginBlock")]),e._v(".")]),e._v(" "),l("p",[e._v("For some "),l("code",[e._v("Equivocation")]),e._v(" submitted in "),l("code",[e._v("block")]),e._v(" to be valid, it must satisfy:")]),e._v(" "),l("p",[l("code",[e._v("Evidence.Timestamp >= block.Timestamp - MaxEvidenceAge")])]),e._v(" "),l("p",[e._v("Where "),l("code",[e._v("Evidence.Timestamp")]),e._v(" is the timestamp in the block at height "),l("code",[e._v("Evidence.Height")]),e._v(" and\n"),l("code",[e._v("block.Timestamp")]),e._v(" is the current block timestamp.")]),e._v(" "),l("p",[e._v("If valid "),l("code",[e._v("Equivocation")]),e._v(" evidence is included in a block, the validator's stake is\nreduced (slashed) by "),l("code",[e._v("SlashFractionDoubleSign")]),e._v(", which is defined by the "),l("code",[e._v("x/slashing")]),e._v(' module,\nof what their stake was when the infraction occurred (rather than when the evidence was discovered).\nWe want to "follow the stake", i.e. the stake which contributed to the infraction\nshould be slashed, even if it has since been redelegated or started unbonding.')]),e._v(" "),l("p",[e._v("In addition, the validator is permanently jailed and tombstoned making it impossible for that\nvalidator to ever re-enter the validator set.")]),e._v(" "),l("p",[e._v("The "),l("code",[e._v("Equivocation")]),e._v(" evidence is handled as follows:")]),e._v(" "),l("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIEhhbmRsZURvdWJsZVNpZ24oY3R4IENvbnRleHQsIGV2aWRlbmNlIEVxdWl2b2NhdGlvbikgewogIGNvbnNBZGRyIDo9IGV2aWRlbmNlLkdldENvbnNlbnN1c0FkZHJlc3MoKQogIGluZnJhY3Rpb25IZWlnaHQgOj0gZXZpZGVuY2UuR2V0SGVpZ2h0KCkKCiAgLy8gY2FsY3VsYXRlIHRoZSBhZ2Ugb2YgdGhlIGV2aWRlbmNlCiAgYmxvY2tUaW1lIDo9IGN0eC5CbG9ja0hlYWRlcigpLlRpbWUKICBhZ2UgOj0gYmxvY2tUaW1lLlN1YihldmlkZW5jZS5HZXRUaW1lKCkpCgogIC8vIHJlamVjdCBldmlkZW5jZSB3ZSBjYW5ub3QgaGFuZGxlCiAgaWYgXywgZXJyIDo9IGsuc2xhc2hpbmdLZWVwZXIuR2V0UHVia2V5KGN0eCwgY29uc0FkZHIuQnl0ZXMoKSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuCiAgfQoKICAvLyByZWplY3QgZXZpZGVuY2UgaWYgaXQgaXMgdG9vIG9sZAogIGlmIGFnZSAmZ3Q7IGsuTWF4RXZpZGVuY2VBZ2UoY3R4KSB7CiAgICByZXR1cm4KICB9CgogIC8vIHJlamVjdCBldmlkZW5jZSBpZiB0aGUgdmFsaWRhdG9yIGlzIGFscmVhZHkgdW5ib25kZWQKICB2YWxpZGF0b3IgOj0gay5zdGFraW5nS2VlcGVyLlZhbGlkYXRvckJ5Q29uc0FkZHIoY3R4LCBjb25zQWRkcikKICBpZiB2YWxpZGF0b3IgPT0gbmlsIHx8IHZhbGlkYXRvci5Jc1VuYm9uZGVkKCkgewogICAgcmV0dXJuCiAgfQoKICAvLyB2ZXJpZnkgdGhlIHZhbGlkYXRvciBoYXMgc2lnbmluZyBpbmZvIGluIG9yZGVyIHRvIGJlIHNsYXNoZWQgYW5kIHRvbWJzdG9uZWQKICBpZiBvayA6PSBrLnNsYXNoaW5nS2VlcGVyLkhhc1ZhbGlkYXRvclNpZ25pbmdJbmZvKGN0eCwgY29uc0FkZHIpOyAhb2sgewogICAgcGFuaWMoLi4uKQogIH0KCiAgLy8gcmVqZWN0IGV2aWRlbmNlIGlmIHRoZSB2YWxpZGF0b3IgaXMgYWxyZWFkeSB0b21ic3RvbmVkCiAgaWYgay5zbGFzaGluZ0tlZXBlci5Jc1RvbWJzdG9uZWQoY3R4LCBjb25zQWRkcikgewogICAgcmV0dXJuCiAgfQoKICAvLyBXZSBuZWVkIHRvIHJldHJpZXZlIHRoZSBzdGFrZSBkaXN0cmlidXRpb24gd2hpY2ggc2lnbmVkIHRoZSBibG9jaywgc28gd2UKICAvLyBzdWJ0cmFjdCBWYWxpZGF0b3JVcGRhdGVEZWxheSBmcm9tIHRoZSBldmlkZW5jZSBoZWlnaHQuCiAgLy8gTm90ZSwgdGhhdCB0aGlzICpjYW4qIHJlc3VsdCBpbiBhIG5lZ2F0aXZlICZxdW90O2Rpc3RyaWJ1dGlvbkhlaWdodCZxdW90OywgdXAgdG8KICAvLyAtVmFsaWRhdG9yVXBkYXRlRGVsYXksIGkuZS4gYXQgdGhlIGVuZCBvZiB0aGUKICAvLyBwcmUtZ2VuZXNpcyBibG9jayAobm9uZSkgPSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBnZW5lc2lzIGJsb2NrLgogIC8vIFRoYXQncyBmaW5lIHNpbmNlIHRoaXMgaXMganVzdCB1c2VkIHRvIGZpbHRlciB1bmJvbmRpbmcgZGVsZWdhdGlvbnMgJmFtcDsgcmVkZWxlZ2F0aW9ucy4KICBkaXN0cmlidXRpb25IZWlnaHQgOj0gaW5mcmFjdGlvbkhlaWdodCAtIHNkay5WYWxpZGF0b3JVcGRhdGVEZWxheQoKICAvLyBTbGFzaCB2YWxpZGF0b3IuIFRoZSBgcG93ZXJgIGlzIHRoZSBpbnQ2NCBwb3dlciBvZiB0aGUgdmFsaWRhdG9yIGFzIHByb3ZpZGVkCiAgLy8gdG8vYnkgVGVuZGVybWludC4gVGhpcyB2YWx1ZSBpcyB2YWxpZGF0b3IuVG9rZW5zIGFzIHNlbnQgdG8gVGVuZGVybWludCB2aWEKICAvLyBBQkNJLCBhbmQgbm93IHJlY2VpdmVkIGFzIGV2aWRlbmNlLiBUaGUgZnJhY3Rpb24gaXMgcGFzc2VkIGluIHRvIHNlcGFyYXRlbHkKICAvLyB0byBzbGFzaCB1bmJvbmRpbmcgYW5kIHJlYm9uZGluZyBkZWxlZ2F0aW9ucy4KICBrLnNsYXNoaW5nS2VlcGVyLlNsYXNoKGN0eCwgY29uc0FkZHIsIGV2aWRlbmNlLkdldFZhbGlkYXRvclBvd2VyKCksIGRpc3RyaWJ1dGlvbkhlaWdodCkKCiAgLy8gSmFpbCB0aGUgdmFsaWRhdG9yIGlmIG5vdCBhbHJlYWR5IGphaWxlZC4gVGhpcyB3aWxsIGJlZ2luIHVuYm9uZGluZyB0aGUKICAvLyB2YWxpZGF0b3IgaWYgbm90IGFscmVhZHkgdW5ib25kaW5nICh0b21ic3RvbmVkKS4KICBpZiAhdmFsaWRhdG9yLklzSmFpbGVkKCkgewogICAgay5zbGFzaGluZ0tlZXBlci5KYWlsKGN0eCwgY29uc0FkZHIpCiAgfQoKICBrLnNsYXNoaW5nS2VlcGVyLkphaWxVbnRpbChjdHgsIGNvbnNBZGRyLCB0eXBlcy5Eb3VibGVTaWduSmFpbEVuZFRpbWUpCiAgay5zbGFzaGluZ0tlZXBlci5Ub21ic3RvbmUoY3R4LCBjb25zQWRkcikKfQo="}}),e._v(" "),l("p",[e._v("Note, the slashing, jailing, and tombstoning calls are delegated through the "),l("code",[e._v("x/slashing")]),e._v(" module\nwhich emit informative events and finally delegate calls to the "),l("code",[e._v("x/staking")]),e._v(" module. Documentation\non slashing and jailing can be found in the "),l("RouterLink",{attrs:{to:"/.././cosmos-sdk/x/staking/spec/02_state_transitions.html"}},[e._v("x/staking spec")])],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);