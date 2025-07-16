import Image from "next/image";
import { Users, Award, TrendingUp, Eye } from "lucide-react";
import GradientText from "@/components/ui/gradient-text";

export const metadata = {
  title: "About Us | CSG Advisory",
  description:
    "Learn about CSG Advisory's mission to simplify international business registration with expert guidance and comprehensive support.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                About CSG <GradientText>Advisory</GradientText>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                CSG Advisory offers a comprehensive suite of services designed
                for businesses looking to establish their first office or expand
                operations globally. With extensive experience and a deep
                understanding of local markets, we provide customized corporate
                solutions that cater to businesses of all sizes and industries.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/team.webp"
                width={600}
                height={400}
                alt="CSG Advisory team"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              Our <GradientText>Mission</GradientText>
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At CSG Advisory, our mission is to simplify the process of company
              formation and expansion by providing expert, tailored solutions
              that help businesses navigate legal and operational complexities.
              We are dedicated to delivering exceptional value through
              personalized service, reliable guidance, and a commitment to the
              success of our clients, wherever they operate.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex justify-center py-12 md:py-24 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-3 rounded-full border-2 border-white">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <p className="text-gray-100">Businesses Launched</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-3 rounded-full border-2 border-white">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <p className="text-gray-100">Client Satisfaction</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-3 rounded-full border-2 border-white">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <p className="text-gray-100">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              The core principles that guide everything we do at CSG Advisory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Excellence in Service",
                description:
                  "We are committed to delivering the highest quality service, ensuring that every client receives efficient, reliable, and timely solutions.",
                icon: "⭐",
              },
              {
                title: "Client-Centric Approach",
                description:
                  "We prioritize our clients' needs, providing personalized solutions that align with their unique business goals and challenges.",
                icon: "🎯",
              },
              {
                title: "Integrity and Transparency",
                description:
                  "We believe in conducting business with honesty, clear communication, and ethical practices at every step of the process.",
                icon: "🤝",
              },
              {
                title: "Innovation and Adaptability",
                description:
                  "We stay ahead of industry trends and continuously innovate, adapting our services to meet the ever-changing needs of businesses globally.",
                icon: "💡",
              },
              {
                title: "Global Perspective, Local Expertise",
                description:
                  "With a deep understanding of local markets across the globe, we offer solutions that bridge the gap between global ambition and local execution.",
                icon: "🌍",
              },
              {
                title: "Partnership and Collaboration",
                description:
                  "We see ourselves as long-term partners in our clients' success, fostering strong, collaborative relationships that drive mutual growth.",
                icon: "🤝",
              },
              {
                title: "Commitment to Growth",
                description:
                  "We are dedicated to supporting our clients' growth by offering flexible solutions that evolve with their business needs and ambitions.",
                icon: "📈",
              },
              {
                title: "Sustainability and Responsibility",
                description:
                  "We prioritize sustainable business practices and take responsibility in our operations to create a positive impact on both the environment and the communities we serve.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-rose-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-rose-100"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-4 h-1 bg-gradient rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full flex justify-center py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white font-medium mb-4">
                <Eye className="w-4 h-4 mr-2" />
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Empowering <GradientText>Global Growth</GradientText>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
                &quot;To be the trusted partner for businesses worldwide,
                empowering their growth through seamless incorporation and
                expansion services across the globe, fostering innovation and
                success at every step.&quot;
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-rose-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                We make it simple for you.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Our expert team takes care of the legal, administrative, and
                operational steps, making it easy for you to focus on what truly
                matters—your business success. We handle the details, so you
                don&apos;t have to.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fast Setup</h4>
                  <p className="text-gray-500 text-sm">
                    Quick and efficient process
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Expert Guidance
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Professional support every step
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Full Service</h4>
                  <p className="text-gray-500 text-sm">
                    Complete business solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="w-full flex justify-center py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Leadership Team
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experts behind CSG Advisory&apos;s success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-items-center">
            <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="relative h-32 w-32 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="CEO"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-gray-500">CEO & Founder</p>
                <p className="text-sm text-gray-500 mt-2">
                  15+ years in international business law and corporate
                  formation
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="relative h-32 w-32 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="CTO"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-gray-500">Chief Technology Officer</p>
                <p className="text-sm text-gray-500 mt-2">
                  Expert in digital transformation and process automation
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="relative h-32 w-32 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="COO"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Elena Rodriguez</h3>
                <p className="text-gray-500">Chief Operations Officer</p>
                <p className="text-sm text-gray-500 mt-2">
                  Specialist in global compliance and regulatory affairs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
