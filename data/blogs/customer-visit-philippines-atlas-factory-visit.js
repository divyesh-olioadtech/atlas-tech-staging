import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "Customer Visit From Philippines",
  slug: "customer-visit-philippines-atlas-factory-visit",
  date: "2024-01-18",
  summary:
    "Seven years back Atlas Industries ventured outside the borders and made its way to the Philippines which became the country with special meaning for us. It was our first step outside India that we made when we had a customer from the Philippines who purchased from us our 60-90 tph stationary asphalt drum mix plant.",
  seoTitle: "Customer Visit From Philippines",
  seoDescription: "Customer Visit From Philippines",
  image: "/images/blogs/customer-philippines-concrete-plant.jpg",
  content: (
    <>
      <p>
        Seven years back Atlas Industries ventured outside the borders and made
        its way to the Philippines which became the country with special meaning
        for us. It was our first step outside India that we made when we had a
        customer from the Philippines who purchased from us our 60-90 tph
        <Links href={"/asphalt-drum-mix-plant"}>
          stationary asphalt drum mix plant.
        </Links>
      </p>

      <h2> Inaugural Equipment Dispatch</h2>
      <p>
        The fact that the required plant arrived at its destination in just one
        month served as an indication of our determination to deliver on time.
        It was significant because it was the first time that the client checked
        some machinery equipment and had to change some specifications for this
        equipment in order to match them with his own requirements and wishes.
      </p>
      <h2>Entry into Road Construction</h2>
      <p>
        It was a success and opened up a platform for more cooperation wherein
        other road contractors in the Philippines sought for the reliability of
        the equipment. During the next five years we provided two fixed and two
        <Links href={"/mobile-asphalt-plant"}>mobile drum mix plants</Links> and
        were highly praised on our product quality and support services.
      </p>
      <Image
        src="/images/blogs/customer-philippines-concrete-plant.jpg"
        alt=""
        width={500}
        height={500}
      />

      <h2>Significant Milestone in 2015</h2>
      <p>
        In the year 2015, it was a landmark when different Philippines customers
        made two orders for{" "}
        <Links href={"/mobile-concrete-batching-plant"}>
          mobile concrete batching plants{" "}
        </Links>{" "}
        from Atlas. The capacity ordered were two 30 m3/m twin-shaft mixer and
        fully mobile units. Although, our routine is to omit axles, tube, as
        well as rim, customer requests have allowed us to fulfil their
        individualistic demands.
      </p>
      <h2>Mobile Concrete Batching Plant Features</h2>
      <p>
        The design and chassis of the equipment was uniform with a single
        chassis equipped with a foldable control cabin. The other part of this
        machine could be easily moved by a towed truck, although the screw
        conveyor and cement hopper were unmovable.
      </p>

      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/4Qk3qv8gUXk"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h2>Customer Visit and Factory Tour</h2>
      <p>
        We demonstrated a partially completed machine as requested by the
        customer during their visit to our facility so as to meet their deadline
        urgency. We subsequently considered other product options, showing our
        pledge to openness and participation in business with customers.
      </p>

      <h2>Cultural Exchange and Leisure Trip</h2>
      <p>
        Apart from our business discussions, we brought the customer to{" "}
        <Links
          href={
            "https://www.triphobo.com/places/udaipur-india/things-to-do/leisure"
          }
        >
          Udaipur for a leisure
        </Links>{" "}
        trip with an eye on Nathdwara and Ambaji, which are the famous temples
        that reflect India's culture.
      </p>

      <h2>Strategic Decision-Making</h2>
      <p>
        At the factory, talks revolved around making improvements in relation to
        the customer's requirements. Instead of relying exclusively on a 40-day
        produced 100-ton cement silo, we considered several alternatives that
        would have saved an entire month in cement storage and eventually
        decided upon a complementary 50-ton cement silo, thereby overcoming a
        20-day delay.
      </p>

      <h2>Customer-Centric Solution</h2>
      <p>
        As a strategic step, we provided the silo without any cost. This enabled
        quick use of the machinery when it arrived on the project site. Our
        technician stayed on longer to assist in the putting up of the cement
        silo. This demonstrated our dedication towards providing excellent
        customer service.
      </p>

      <h2>Positive Outcome</h2>
      <p>
        A satisfied customer subsequently ordered another 82 kVA generator to be
        shipped along with the plant. The recognition that India is their second
        home and their comfortability in India demonstrates our intent to create
        welcoming atmospheres for our customers.
      </p>

      <h2>Conclusion</h2>
      <p>
        With the use of innovative solutions, proactive engagement, and a
        customer viewpoint, my team strengthened our business relationship with
        our Filipino client. We are looking forward to the productive use of
        their new{" "}
        <Links href={"/mobile-concrete-batch-mix-plant"}>
          {" "}
          mobile concrete plant{" "}
        </Links>{" "}
        and are resolute in outperforming production targets and adding to their
        profit margins.
      </p>
    </>
  ),
};

export default post;
