import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CSG Advisory",
  description:
    "CSG Advisory's terms of service outlining the terms and conditions for using our international business registration services.",
};

export default function TermsPage() {
  return (
    <main className="flex flex-col justify-center min-h-screen">
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Terms of Service
              </h1>
              <p className="text-gray-500 md:text-xl">
                Last updated: March 1, 2024
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-6">
                By accessing and using CSG Advisory&apos;s services, you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 mb-4">
                CSG Advisory provides international business registration
                services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Business entity formation and registration</li>
                <li>Tax compliance and registration services</li>
                <li>Corporate secretarial services</li>
                <li>Banking support and assistance</li>
                <li>Ongoing compliance management</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>
                  Pay all fees and charges associated with your use of our
                  services
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Fees and Payment
              </h2>
              <p className="text-gray-600 mb-4">
                Our service fees are clearly outlined in our service agreements
                and quotations. Payment terms include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Fees are due as specified in your service agreement</li>
                <li>Government fees and third-party costs are additional</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Late payments may incur additional charges</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-gray-600 mb-6">
                The service and its original content, features, and
                functionality are and will remain the exclusive property of CSG
                Advisory and its licensors. The service is protected by
                copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-6">
                In no event shall CSG Advisory, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Disclaimer
              </h2>
              <p className="text-gray-600 mb-6">
                The information on this service is provided on an &quot;as
                is&quot; basis. To the fullest extent permitted by law, this
                Company excludes all representations, warranties, conditions and
                terms whether express or implied.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Governing Law
              </h2>
              <p className="text-gray-600 mb-6">
                These terms shall be interpreted and governed by the laws of the
                The Republic of Singapore, without regard to its conflict of law
                provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-gray-600 mb-6">
                We reserve the right, at our sole discretion, to modify or
                replace these terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-rose-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>CSG Advisory</strong>
                  <br />
                  51 Goldhill Plaza, #07-07
                  <br />
                  Singapore, 308900
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
