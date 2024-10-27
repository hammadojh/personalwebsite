import React from 'react';

const researchItems = [
  {
    year: 2024,
    title: "PureConnect: A Localized Social Media System to Increase Awareness and Connectedness in Environmental Justice Communities",
    authors: "O Hammad, MR Rahman, GKV Kanugo, N Clements, S Miller, S Mishra, ...",
    publication: "Proceedings of the 2024 11th Multidisciplinary International Social Networks …",
    link: "#"
  },
  {
    year: 2023,
    title: "PureNav: A Personalized Navigation Service for Environmental Justice Communities Impacted by Planned Disruptions",
    authors: "O Hammad, MR Rahman, N Clements, S Mishra, S Miller, E Sullivan",
    publication: "Proceedings of the International Conference on Advances in Social Networks …",
    link: "#"
  },
  {
    year: 2023,
    title: "A Socio-Technical System to Understand and Mitigate the Negative Impacts of Planned Disruptions on People's Well-Being",
    authors: "O Hammad",
    publication: "University of Colorado at Boulder",
    link: "#"
  },
  {
    year: 2022,
    title: "Impact of Work from Home During the Pandemic in Saudi Arabia",
    authors: "O Hammad, S Mishra",
    publication: "2022 IEEE/ACM International Conference on Advances in Social Networks …",
    link: "#"
  },
  {
    year: 2022,
    title: "Understanding the Impact of Culture in Assessing Helpfulness of Online Reviews",
    authors: "K Alanezi, N Albadi, O Hammad, M Kurdi, S Mishra",
    publication: "2022 IEEE/ACM International Conference on Advances in Social Networks …",
    link: "#"
  },
  {
    year: 2022,
    title: "Comparing Personal Air Pollution Monitors for Measuring Exposure in Polluted North Denver Neighbourhoods",
    authors: "SLM Nicholas Clements, Maryam Aniya Khalili, Yu Hong Wang, Sophie Dolores ...",
    publication: "17th International Conference on Indoor Air Quality and Climate, INDOOR AIR …",
    link: "#"
  },
  {
    year: 2018,
    title: "Using Sociotechnical Systems to Understand the Effects of Planned Disruptions on People's Emotions and Well-Being",
    authors: "OJ Hammad",
    publication: "",
    link: "#"
  }
];

const Research: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Research</h1>
      <ul className="space-y-4">
        {researchItems.map((item, index) => (
          <li key={index} className="flex hover:bg-gray-100 transition-colors duration-200 p-4 rounded-lg cursor-pointer" onClick={() => window.open(item.link, '_blank')}>
            <div className="w-16 flex-shrink-0 text-right mr-4">
              <span className="text-lg font-semibold">{item.year || 'N/A'}</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-600 mb-1">{item.authors}</p>
              <p className="text-gray-500">{item.publication}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Research;
