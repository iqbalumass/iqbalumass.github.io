"use strict";
document.documentElement.classList.add("js");
const profile=window.PROFILE || {};
for(const node of document.querySelectorAll("[data-profile]")){
  const key=node.dataset.profile;
  if(profile[key]) node.textContent=profile[key];
}
const avatar=document.querySelector(".avatar");
if(profile.photo && avatar){const img=document.createElement("img");img.src=profile.photo;img.alt=profile.name;img.width=174;img.height=188;img.addEventListener("load",()=>avatar.replaceChildren(img));}
const links=document.querySelector(".profile-links");
const items=[["scholar","Google Scholar","S"],["orcid","ORCID","iD"],["email","Email","@"],["github","GitHub","G"],["linkedin","LinkedIn","in"],["cv","Curriculum Vitae","CV"]];
if(links){links.replaceChildren();for(const [key,label,symbol] of items){if(!profile[key])continue;const li=document.createElement("li");const a=document.createElement("a");a.href=key==="email"?"mailto:"+profile[key]:profile[key];const icon=document.createElement("span");icon.className="link-symbol";icon.setAttribute("aria-hidden","true");icon.textContent=symbol;a.append(icon,document.createTextNode(label));li.append(a);links.append(li);}}
for(const a of document.querySelectorAll(".cv-link")){if(profile.cv){a.href=profile.cv;a.hidden=false;}}
const toggle=document.querySelector(".menu-toggle"),navigation=document.querySelector(".nav-links");
if(toggle && navigation){toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));navigation.classList.toggle("is-open",open);});document.addEventListener("keydown",e=>{if(e.key==="Escape" && toggle.getAttribute("aria-expanded")==="true"){toggle.setAttribute("aria-expanded","false");navigation.classList.remove("is-open");toggle.focus();}});}
