export const metadata = {
  title: "Privacy Policy | CSG Advisory",
  description:
    "CSG Advisory's privacy policy outlining how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-gray-500 md:text-xl">
                Last updated: March 1, 2024
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when
                you create an account, request our services, or contact us for
                support. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>
                  Personal identification information (name, email address,
                  phone number)
                </li>
                <li>
                  Business information (company name, business address,
                  industry)
                </li>
                <li>
                  Financial information necessary for business registration
                  services
                </li>
                <li>Communication preferences and correspondence with us</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>
                  Provide, maintain, and improve our business registration
                  services
                </li>
                <li>Process transactions and send related information</li>
                <li>
                  Send technical notices, updates, security alerts, and support
                  messages
                </li>
                <li>
                  Respond to your comments, questions, and customer service
                  requests
                </li>
                <li>
                  Communicate with you about products, services, and events
                </li>
                <li>
                  Comply with legal obligations and regulatory requirements
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>
                  With government authorities as required for business
                  registration processes
                </li>
                <li>
                  With service providers who assist us in providing our services
                </li>
                <li>
                  To comply with legal obligations or respond to legal requests
                </li>
                <li>
                  To protect the rights, property, or safety of CSG Advisory,
                  our users, or others
                </li>
                <li>
                  In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet or electronic storage
                is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-600 mb-6">
                We retain your personal information for as long as necessary to
                provide our services, comply with legal obligations, resolve
                disputes, and enforce our agreements. Business registration
                documents may be retained for extended periods as required by
                law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. International Transfers
              </h2>
              <p className="text-gray-600 mb-6">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information in accordance with
                applicable data protection laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-600 mb-6">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:
              </p>
              <div className="bg-rose-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>CSG Advisory</strong>
                  <br />
                  51 Goldhill Plaza, #07-07
                  <br />
                  Singapore 308900
                  <br />
                  Email: info@csgadvisory.com
                  <br />
                  Phone: +6598873054
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
