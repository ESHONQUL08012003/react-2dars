import "./style.scss";
function Cards(props) {
  const {
    data: { avatar, first_name, email, id, last_name },
  } = props;

  console.log(props);

  return (
    <>
      <div className="cards">
        <div className="cards-body">
          <p>
            “Aku rela dipenjara asalkan bersama buku, karena dengan buku aku
            bebas”
          </p>
          <div className="d-flex align-items-center gap-4">
            <img className="card-img" src={avatar} alt={"card-img"} />
            <div>
              <h3 className="m-0 mb-2 text-dark">{first_name}</h3>
              <p className="m-0 ">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
