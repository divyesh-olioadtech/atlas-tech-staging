import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "Some secrets why customers love Atlas",
  slug: "some-secrets-why-customers-love-atlas",
  date: "2015-08-25",
  summary:
    "It has been a long and nice journey towards what we have achieved today. From being a very small company with limited space, resources and talent we have come a long way today. The journey has been full of learning experiences: some good and some bad. In the end we have come victorious with a big smile on the faces of our customers. There are many road construction machinery manufacturer based in India but very few stand out and shine as Atlas.",
  seoTitle: "Some Secrets Why Customers Love Atlas | Atlas Industries",
  seoDescription:
    "Key reasons why clients trust Atlas for reliable, innovative, and cost-effective construction equipment solutions.",
  image: "/images/blogs/atlas-factory-1.webp",
  content: (
    <>
      <p>
        It has been a long and nice journey towards what we have achieved today.
        From being a very small company with limited space, resources and talent
        we have come a long way today. The journey has been{" "}
        <span className="font-bold">full of learning experiences:</span> some
        good and some bad. In the end we have come victorious with a big smile
        on the faces of our customers. There are many road construction
        machinery manufacturer based in India but very few stand out and shine
        as Atlas.
      </p>

      <h3 className="font-bold">Customer centric approach:</h3>
      <p>
        The approach while making any equipment is very{" "}
        <span className="font-bold">customer centric.</span> Whenever a customer
        approaches us for any requirement, our effort is to give him what he
        wants and not what we sell.
      </p>

      <Image
        src="/images/blogs/atlas-factory-1.webp"
        alt="atlas-factory-1"
        width={500}
        height={500}
      />

      <h3 className="font-bold">Customer centric order process:</h3>
      <p>
        Any confirmed order for any machine is taken depending on the
        requirement of the customer. After confirmation of any order, a work
        order is prepared for the same. This work order will have all the
        details of the equipment to be delivered. This work order is prepared by
        the person who has been interacting with the customer and the one who
        has taken notes on the requirements of the customer.
      </p>

      <h3 className="font-bold">Design changes:</h3>
      <p>
        Once the order for the{" "}
        <Links href={"/road-civil-construction-equipments"}>
          road or civil construction equipment
        </Links>{" "}
        is placed and if there are any changes in the same, the design
        department starts working on the modifications. If required, the
        modifications are then sent to the customer for approval. This way we
        ensure that each piece of equipment which we manufacture is built in the
        computer using suitable software and then the same design goes to the
        production department for starting the production of the machine.
      </p>

      <h3 className="font-bold">Wide product range:</h3>
      <p>
        Since Atlas is one of the oldest, reputed and quality road construction
        machinery exporter, our product range is also wide. We have different
        equipment like stationary and mobile asphalt plants, stationary and
        portable concrete plants, asphalt batch mixers, stationary and mobile
        counterflow asphalt plants, wet mix macadam plants, bitumen sprayers and
        road cleaning brooms. Since the product list is long, sometime it gets
        difficult to maintain the correct inventory and cope up with orders on
        time.
      </p>

      <h3 className="font-bold">Brought out items:</h3>
      <p>
        All the brought out items used in the making of any machine are branded
        because we want to make sure that customer gets the best piece of
        equipment and absolute value for money. When quality components are used
        in making any machine, it automatically reduces the maintenance and
        breakdown time.
      </p>

      <h3 className="font-bold">Customer focus:</h3>
      <p>
        Since we are always focused on the customer, and give them the exact
        solution as per their requirement, in most of the cases, the customer
        comes back to us for another order. Another advantage of this is that we
        get recommendations from their group companies and their friends also.
      </p>

      <h3 className="font-bold">Exports:</h3>
      <p>
        In a very short span we have been able to export to many countries and
        even bagged repeat orders. The credit for the same goes to our staff and
        management who put stupendous efforts for execution of each order and we
        are very sure that this will go a long way and we will discover new ways
        for customer delight.
      </p>
    </>
  ),
};

export default post;
