export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const legalContact = {
  company: "NEURIK",
  email: "hello@neurik.ai",
  website: "https://neurik.ai",
};

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "June 11, 2026",
  intro:
    "NEURIK (\"we,\" \"us,\" or \"our\") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, contact us, or use our services.",
  sections: [
    {
      title: "Information We Collect",
      paragraphs: [
        "We may collect information you provide directly to us, such as your name, email address, company name, job title, and any message you send when you contact us, request information, or apply for a role.",
        "We may automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages viewed, referring URLs, and approximate location derived from your IP address.",
      ],
      list: [
        "Contact and inquiry information",
        "Career application information",
        "Website usage and analytics data",
        "Cookies and similar tracking technologies",
      ],
    },
    {
      title: "How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      list: [
        "Operate, maintain, and improve our website and services",
        "Respond to inquiries and provide customer support",
        "Evaluate employment applications",
        "Send administrative messages and service-related communications",
        "Analyze usage trends and protect the security of our systems",
        "Comply with legal obligations and enforce our terms",
      ],
    },
    {
      title: "How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share information with service providers who perform services on our behalf, such as hosting, analytics, email delivery, and customer relationship tools, subject to appropriate confidentiality obligations.",
        "We may also disclose information if required by law, to protect our rights or the safety of others, or in connection with a merger, acquisition, or sale of assets.",
      ],
    },
    {
      title: "Cookies and Analytics",
      paragraphs: [
        "Our website may use cookies and similar technologies to remember preferences, understand how visitors use the site, and improve performance. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.",
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and organizational measures designed to protect personal information. However, no method of transmission over the internet or electronic storage is completely secure.",
      ],
    },
    {
      title: "Your Rights and Choices",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information, or to object to certain processing. To exercise these rights, contact us at the email address below.",
      ],
    },
    {
      title: "Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites or services, including our product platform at forge.neurik.ai. We are not responsible for the privacy practices of those third parties and encourage you to review their policies.",
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: [
        "Our website and services are not directed to individuals under 18, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page indicates when the policy was last revised. Continued use of our website after changes become effective constitutes acceptance of the revised policy.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or our privacy practices, contact us at hello@neurik.ai.",
      ],
    },
  ] satisfies LegalSection[],
};

export const termsOfService = {
  title: "Terms of Service",
  lastUpdated: "June 11, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your access to and use of the NEURIK website and related online services. By accessing or using our website, you agree to these Terms.",
  sections: [
    {
      title: "Use of the Website",
      paragraphs: [
        "You may use our website for lawful business and informational purposes only. You agree not to misuse the website, interfere with its operation, attempt unauthorized access to our systems, or use the website in any way that violates applicable law or these Terms.",
      ],
    },
    {
      title: "No Professional Advice",
      paragraphs: [
        "Content on this website is provided for general informational purposes only. It does not constitute engineering, legal, safety, or other professional advice. Deployment of autonomous or physical AI systems involves operational, safety, and regulatory considerations that must be evaluated in your specific environment.",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "The website and its content, including text, graphics, logos, product names, software, and design elements, are owned by NEURIK or its licensors and are protected by intellectual property laws. Except as expressly permitted, you may not copy, modify, distribute, sell, or create derivative works from our content without our prior written consent.",
      ],
    },
    {
      title: "Product and Service Access",
      paragraphs: [
        "Access to NEURIK products and platforms, including Forge and related services, may be subject to separate agreements, order forms, or product-specific terms. If there is a conflict between these Terms and a signed commercial agreement, the commercial agreement will control with respect to the applicable services.",
      ],
    },
    {
      title: "Disclaimer of Warranties",
      paragraphs: [
        "The website and its content are provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, to the fullest extent permitted by law.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, NEURIK will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunities arising out of or related to your use of the website, even if we have been advised of the possibility of such damages.",
        "Our total liability for any claim arising out of or relating to the website will not exceed one hundred U.S. dollars (US $100), except where such limitation is prohibited by law.",
      ],
    },
    {
      title: "Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless NEURIK and its officers, directors, employees, and agents from any claims, damages, losses, and expenses arising out of your misuse of the website or violation of these Terms.",
      ],
    },
    {
      title: "Third-Party Services and Links",
      paragraphs: [
        "Our website may reference or link to third-party products, services, or websites. NEURIK does not control and is not responsible for third-party content, policies, or practices.",
      ],
    },
    {
      title: "Termination",
      paragraphs: [
        "We may suspend or terminate access to the website at any time, with or without notice, if we believe you have violated these Terms or if necessary to protect the website, our users, or our business.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles, except where mandatory local law applies.",
      ],
    },
    {
      title: "Changes to These Terms",
      paragraphs: [
        "We may modify these Terms from time to time. The \"Last updated\" date above reflects the latest revision. Your continued use of the website after changes become effective constitutes acceptance of the updated Terms.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "Questions about these Terms may be directed to hello@neurik.ai.",
      ],
    },
  ] satisfies LegalSection[],
};
