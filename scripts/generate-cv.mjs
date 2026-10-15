import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const pages = [
  [
    ["name", "OGUNLADE RIDWAN FOLAYIMI"],
    ["role", "Mobile App Engineer | Flutter, Dart & React Native"],
    ["contact", "Lagos, Nigeria | +234 807 444 2379 | +234 812 408 6854 | ridwanfolayimi@gmail.com"],
    ["contact", "Portfolio: ridwan-portfolio-xi.vercel.app | LinkedIn: linkedin.com/in/ridwan-ogunlade-1a9610369 | GitHub: github.com/Folayimi"],
    ["section", "PROFILE"],
    ["body", "Mobile App Engineer experienced in cross-platform development with Flutter, Dart, React Native, and Expo. Builds application workflows, integrates backend services, and collaborates with developers to deliver practical mobile products. Also experienced with React and Next.js for frontend web development."],
    ["section", "TECHNICAL SKILLS"],
    ["body", "Mobile: Flutter, Dart, React Native, Expo, Expo Router"],
    ["body", "Web: React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS"],
    ["body", "State: GetX, Redux Toolkit, React Hooks | APIs: REST, Dio, Axios, JSON, multipart requests"],
    ["body", "Mobile workflows: OTP, authentication, token handling, local persistence, messaging, Socket.IO, WebSockets, file and image uploads, payments, WebView"],
    ["body", "Tools: Git, GitHub, Android Studio, Visual Studio Code, EAS Build"],
    ["section", "PROFESSIONAL EXPERIENCE"],
    ["role", "InsureOnGo | Mobile App Engineer | 2025 - Present"],
    ["bullet", "Develop and maintain a Flutter application for a digital insurance platform; integrate REST services with Dio."],
    ["bullet", "Build phone sign-in with email OTP, insurance discovery, listings, quotations, cart, and Paystack payment workflows."],
    ["bullet", "Support claims image uploads, file selection, profiles, notifications, customer support, WebView, local storage, debugging, and Android releases."],
    ["stack", "Flutter, Dart, GetX, Dio, REST APIs, GetStorage, Paystack"],
    ["role", "SchoolHouse | Mobile App Engineer / Development Coordinator | Contract | Sep - Oct 2026"],
    ["bullet", "Contribute role-based mobile experiences for Super Admins, School Admins, Teachers, and Parents."],
    ["bullet", "Work on school registration and documents, profiles, school information, dashboard statistics, API integration, and conversation retrieval."],
    ["bullet", "Integrate Socket.IO messaging alongside REST message operations; coordinate implementation and feature integration with another developer."],
    ["stack", "React Native, Expo, TypeScript, Expo Router, Axios, REST APIs, Socket.IO"],
    ["role", "Alps | Frontend Developer | Contract | Feb 2024 - Jun 2025"],
    ["bullet", "Develop frontend features for a web help and documentation platform, including articles, videos, playlists, and guides."],
    ["bullet", "Implement configurable themes, domain verification, feedback and activity interfaces, API integrations, and reusable UI components."],
    ["stack", "React, Next.js, TypeScript, REST APIs"],
    ["role", "Connectin Skillz - My Bridge International | Mobile App Engineer | Oct 2022 - Oct 2026"],
    ["bullet", "Build features for a healthcare-focused networking and knowledge-sharing app: connections, product listings, messaging, and events."],
    ["bullet", "Develop article and journal upload and submission workflows; integrate APIs and reusable Flutter components."],
    ["stack", "Flutter, Dart, REST APIs"],
  ],
  [
    ["section", "PROFESSIONAL EXPERIENCE - CONTINUED"],
    ["role", "FreexiT Technologies | Frontend Engineer | Jan 2024 - Jan 2026 | Remote"],
    ["bullet", "Build responsive interfaces and an internal administration dashboard with Next.js, TypeScript, and Tailwind CSS."],
    ["bullet", "Collaborate with distributed teams on API integration, implementation reviews, and release workflows."],
    ["role", "Creos Community - Curious Kidz | Frontend Engineer | Jul 2023 - Jan 2024 | Remote"],
    ["bullet", "Build responsive school management dashboard interfaces and translate designs for multiple screen sizes."],
    ["bullet", "Collaborate with backend engineers on school administration workflows."],
    ["section", "SELECTED PROJECTS"],
    ["role", "Haggle | Marketplace side project"],
    ["body", "A side project exploring product and service discovery with negotiation at the center. Concept areas include seller details, saved items, and reusable marketplace listing patterns."],
    ["role", "King David Elites | Marketplace"],
    ["body", "Developed a responsive marketplace for luxury listings with search, dynamic filtering, custom pagination, and payment and inventory API integrations."],
    ["role", "Gommerce | Open-source collaboration"],
    ["body", "Collaborated on a multi-vendor commerce backend, contributing to API schemas and role-based routing."],
    ["stack", "Flask, PostgreSQL, SQLAlchemy"],
    ["section", "EDUCATION"],
    ["role", "Federal University of Agriculture, Abeokuta (FUNAAB) | Oct 2019 - Jul 2025"],
    ["body", "Bachelor of Engineering (B.Eng.), Mechatronics Engineering | CGPA: 4.11"],
    ["section", "CERTIFICATIONS & COMMUNITY"],
    ["body", "Udacity - Full Stack Developer Nanodegree | May 2022 - Aug 2022"],
    ["body", "Hacklab Hackathon Certificate | 2022"],
    ["body", "Google Developer Student Clubs (GDSC) - Volunteer Tutor, supporting foundational frontend learning."],
  ],
];

const widthByStyle = { body: 100, bullet: 96, stack: 100, contact: 105 };

function ascii(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[–—]/g, "-")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^\x20-\x7e]/g, "");
}

function wrap(text, limit) {
  const words = ascii(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > limit && line) {
      lines.push(line);
      line = word;
    } else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function pageStream(items) {
  const ops = ["0.12 0.14 0.13 rg"];
  let y = 790;
  for (const [style, rawText] of items) {
    if (style === "section") {
      y -= 8;
      ops.push(`0.24 0.48 0.27 rg 50 ${y - 4} 495 1.2 re f`);
      y -= 15;
      ops.push(`0.24 0.48 0.27 rg BT /F2 11 Tf 50 ${y} Td (${escapePdf(ascii(rawText))}) Tj ET`);
      y -= 12;
      ops.push("0.12 0.14 0.13 rg");
      continue;
    }
    const isName = style === "name";
    const isRole = style === "role";
    const isContact = style === "contact";
    const font = isName || isRole ? "F2" : "F1";
    const size = isName ? 22 : isRole ? 9.5 : isContact ? 8 : style === "stack" ? 8 : 9;
    const leading = isName ? 27 : isRole ? 13 : isContact ? 11 : style === "stack" ? 11 : 12;
    const text = style === "bullet" ? `- ${rawText}` : rawText;
    const lines = wrap(text, widthByStyle[style] || 100);
    for (const line of lines) {
      ops.push(`BT /${font} ${size} Tf 50 ${y} Td (${escapePdf(line)}) Tj ET`);
      y -= leading;
    }
    if (isRole) y -= 2;
    if (style === "stack") y -= 2;
    if (style === "name") y -= 1;
  }
  return ops.join("\n");
}

const objects = [];
function addObject(value) {
  objects.push(Buffer.from(value, "ascii"));
  return objects.length;
}

addObject("<< /Type /Catalog /Pages 2 0 R >>");
addObject("<< /Type /Pages /Kids [3 0 R 5 0 R] /Count 2 >>");
addObject("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 7 0 R /F2 8 0 R >> >> /Contents 4 0 R >>");
const stream1 = Buffer.from(pageStream(pages[0]), "ascii");
addObject(Buffer.concat([Buffer.from(`<< /Length ${stream1.length} >>\nstream\n`, "ascii"), stream1, Buffer.from("\nendstream", "ascii")]));
addObject("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 7 0 R /F2 8 0 R >> >> /Contents 6 0 R >>");
const stream2 = Buffer.from(pageStream(pages[1]), "ascii");
addObject(Buffer.concat([Buffer.from(`<< /Length ${stream2.length} >>\nstream\n`, "ascii"), stream2, Buffer.from("\nendstream", "ascii")]));
addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
addObject("<< /Title (Ogunlade Ridwan Folayimi - Mobile App Engineer CV) /Author (Ogunlade Ridwan Folayimi) >>");

const chunks = [Buffer.from("%PDF-1.4\n%Portfolio CV\n", "ascii")];
const offsets = [0];
let byteOffset = chunks[0].length;
for (let i = 0; i < objects.length; i += 1) {
  offsets.push(byteOffset);
  const item = Buffer.concat([Buffer.from(`${i + 1} 0 obj\n`, "ascii"), objects[i], Buffer.from("\nendobj\n", "ascii")]);
  chunks.push(item);
  byteOffset += item.length;
}
const xrefOffset = byteOffset;
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const offset of offsets.slice(1)) xref += `${String(offset).padStart(10, "0")} 00000 n \n`;
chunks.push(Buffer.from(`${xref}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 9 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`, "ascii"));

const outputPath = resolve("public", "Ridwan_Ogunlade_Mobile_Engineer_CV.pdf");
const pdf = Buffer.concat(chunks);
const pdfText = pdf.toString("ascii");
const startXrefIndex = pdfText.lastIndexOf("startxref\n");
const parsedXrefOffset = Number(pdfText.slice(startXrefIndex + 10).split("\n")[0]);
const pageCount = (pdfText.match(/\/Type \/Page /g) || []).length;
if (!pdfText.startsWith("%PDF-1.4") || pageCount !== 2 || pdfText.slice(parsedXrefOffset, parsedXrefOffset + 4) !== "xref") {
  throw new Error("Generated CV PDF failed its structure check.");
}
await writeFile(outputPath, pdf);
console.log(`Wrote ${outputPath}`);
