import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title:
    "Google your house to see if you can go solar: This week in construction",
  slug: "google-your-house-to-see-if-you-can-go-solar-news",
  date: "2015-08-25",
  summary:
    "Welcome to new weekly edition of what’s hot in construction industry news To help you stay up to date with construction sector, here are some of the news items that caught our attention. What’s New This Week",
  seoTitle: "Google Your House to See If You Can Go Solar | Atlas Industries",
  seoDescription:
    "How to use online tools to assess solar energy potential for your home.",
  image: "/images/blogs/google-your-house-to-see-if-you-should-go-solar-1.webp",
  content: (
    <>
      <p>
        Welcome to new weekly edition of what’s hot in{" "}
        <Links
          href={
            "https://www.atlasindustries.in/blog/category/construction-news/"
          }
        >
          {" "}
          construction industry news
        </Links>{" "}
      </p>
      <p>
        To help you stay up to date with construction sector, here are some of
        the news items that caught our attention.
      </p>
      <p className="font-bold">What’s New This Week</p>

      <Image
        src="/images/blogs/google-your-house-to-see-if-you-should-go-solar-1.webp"
        alt="google-your-house-to-see-if-you-should-go-solar-1"
        width={500}
        height={500}
      />

      <p>
        <strong>Google Your House to See If You Should Go Solar</strong>
        <br />
        Google’s tool, Project Sunroof, is still a pilot and available to
        residents of San Francisco Bay Area, Boston, and Fresno, California.
        After you type your address the google map of your house appears on the
        screen except that the roofs appear in colour ranging from purple to
        yellow indicating how much sunshine is striking the surface. One can
        have an idea of how much space you have on your roof top, how much
        sunshine you receive and how much money you would save a year.
      </p>

      <p>
        <strong>
          Biya, Osinbajo to Formally Open Dangote Cement Plant in Cameroon
        </strong>
        <br />
        President of Cameroun, Paul Biya and Nigeria’s Vice-President, Professor
        Yemi Osinbajo, are expected to lead the top echelon of the public and
        private sector operators in both Cameroon and Nigeria to the formal
        inauguration of Dangote Group’s cement plant at the Douala Ports,
        Cameroun. Dangote cement is already producing cement in Zambia,
        Ethiopia, South Africa, Senegal, Cameroun, Ghana and Nigeria.
      </p>

      <p>
        <strong>BIG 5 – Kuwait</strong>
        <br />
        This year’s BIG 5 Kuwait gets bigger than the previous years. It is
        scheduled next month between September 14 and 16 and is the third
        edition of the event.
      </p>

      <p>
        <Links
          href={
            "http://www.constructionenquirer.com/2015/08/21/contractor-fined-as-toddler-wanders-onto-site/"
          }
        >
          Contractor fined as toddler wanders onto site
        </Links>
        <br />A construction company has been fined for safety failings which
        led to a two year old boy wandering onto a building site. This child had
        gained access to the site and was riding his bike when he fell into a
        drain, the cover of which had been removed. The child was not injured.
      </p>

      <p>
        <strong>Youth policy to benefit construction industry</strong>
        <br />
        The Association of Building and Civil Engineering Contractors (ABCEC)
        says the development of the 2015 youth policy by Zambian government is
        likely to benefit the construction industry. The policy is to offer
        internship schemes and promote skilled manpower to the youths.
      </p>

      <p>
        <strong>Rwanda to export cement as new plant boost production</strong>
        <br />
        CIMERWA Ltd. is Rwanda’s only cement manufacturer. It has unveiled a new
        plant which is expected to increase production. They are also looking to
        boost export revenues by this plant. The new factory is worth $170
        million and has the capacity to produce six times the current capacity
        which is 100,000 tonnes per year.
      </p>

      <p>
        <Links
          href={
            "http://www.edie.net/news/6/E-ON-begins-construction-of-giant-5MW-battery/"
          }
        >
          E.ON starts construction of 5MW battery storage system
        </Links>
        <br />
        World’s first modular large scale battery in the German town of Aachen
        will be constructed by E.ON. E.ON which is a German engineering company
        has already started construction. This is a world’s first battery of
        this size and its modular aspect means that various battery technologies
        can be used with the system.
      </p>

      <p>
        <Links
          href={
            "http://www.abc.net.au/news/2015-08-19/construction-company-fined-1-million-over-workplace-death/6708032"
          }
        >
          Canberra construction company fined $1.1 million over death of truck
          driver
        </Links>
        <br />
        Michael Booth, 48, was electrocuted as his truck touched low slung power
        lines on a work site. The work site belonged to Canberra Company Kenoss
        Contractors. Hence this construction company has been fined USD 1.1
        million for the death of truck driver in 2012.
      </p>

      <p>
        <Links
          href={
            "http://www.constructionenquirer.com/2015/08/14/search-starts-for-green-construction-ideas/"
          }
        >
          Search starts for green construction ideas
        </Links>
        <br />
        Construction Industry Solutions Ltd. is organizing a competition which
        looks to unearth sustainable ideas. The competition is named the COINS
        Construction Industry Grand Challenge. It will have 6 finalists in each
        category. These finalists will discuss their ideas with the leaders in
        the field of construction technology, engineering, and academics.
      </p>
    </>
  ),
};

export default post;
