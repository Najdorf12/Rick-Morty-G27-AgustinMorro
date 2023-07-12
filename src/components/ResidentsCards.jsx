


export function ResidentsCards({infoResident}) {

  return (
    <>
        
       {infoResident?.length > 0 ? infoResident?.map((resident) => (
        
         <article key={resident.id} className="card">
          <div className="card-img">
            <img src={resident.image} alt="" />
          </div>
          <div className="card-info">
            <h3> {resident.name} </h3>
            <hr />
            <p><span>Gender :</span> {resident.gender}</p>
            <p><span>Status :</span> {resident.status} </p>
            <p><span>Specie :</span> {resident.species}</p>
          </div>
        </article>
      )) : false
      }
 </>
        
  );
}
