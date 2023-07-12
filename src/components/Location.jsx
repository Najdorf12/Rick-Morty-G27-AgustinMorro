import back1 from "../../public/background1.jpg"

export function Location({ content }) {
  const { id, name, type, dimension, residents } = content;

  return (
    <>
      

      
      <section className="location-container">
        <div className="location">
          <h3>
            Location:
            <br />
            <span>{name}</span>
          </h3>
          <h3>
            Type:
            <br />
            <span>{type}</span>
          </h3>
          <h3>
            Dimensión:
            <br />
            <span>{dimension}</span>
          </h3>
          <h3>
            Residents:
            <br />
            <span>{residents?.length}</span>
          </h3>
        </div>
      </section>
      <img className="backg-img" src={back1} alt="" />
    </>
  );
}
