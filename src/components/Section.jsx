const Section = ({ title, imgs }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className="carrousel">
        {imgs.map((link, index) => {
          return <img key={index} className="item" src={link} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Section;
