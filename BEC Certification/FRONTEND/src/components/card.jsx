import '../assets/card.css'
const Type = () => {
  const cards = [
    {
      title:'Details',
      description: '',
      image: 'https://res.cloudinary.com/dlc4brfar/image/upload/v1709974709/details_scijeo.jpg'
    },
    {
      title: 'courses',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708671102/2150951243_pvowx0.jpg'
    },
    {
      title: 'Certification',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708670404/14046_lox5xz.jpg'
    },
    {
      title: 'Beginner',
      description: '',
      image: 'https://res.cloudinary.com/dlc4brfar/image/upload/v1710095347/image_share_1710094918563_wl6wo2.png'
    },
    {
      title: 'Intermediator',
      description: '',
      image: 'https://res.cloudinary.com/dlc4brfar/image/upload/v1710095347/image_share_1710095080662_fbfqkj.jpg'
    },
    {
      title: 'Advanced',
      description: '',
      image: 'https://res.cloudinary.com/dlc4brfar/image/upload/v1710095348/image_share_1710095201185_docrpk.jpg'
    },
  ];
  
  return (
    <div className="cards-containercc">
      {cards.map((card, index) => (
        <div key={index} className="cardcc">
          {card.image && <img src={card.image} alt={card.title} />}
          <div className="card-contentcc">
            <button>{card.title}</button>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Type;