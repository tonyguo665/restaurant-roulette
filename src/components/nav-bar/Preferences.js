import React, { useState } from "react";

function Preferences(props) {
  const [modalActive, setModalActive] = useState(false);
  const [radius] = useState(props.preferences.radius);
  const [category] = useState(props.preferences.category);
  const [price, setPrice] = useState(props.preferences.price);
  const [openNow, setOpennow] = useState(props.preferences.open_now);
  const [sortby, setSortby] = useState(props.preferences.open_now);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const handleSave = () => {
    props.setPreferences({
      radius: radius,
      category: category,
      price: price,
      open_now: openNow,
      sort_by: sortby
    });
    toggleModal();
  };
  const priceChangeHandle = (number) => {
    if (price.includes(number)) {
      let newPrice = price.filter((num) => num !== number);
      setPrice(newPrice);
    } else {
      price.push(number);
      setPrice(price);
    }
  };
  const selectChangeHandle = (e) => {
    setSortby(e.target.value);
  };

  return (
    <>
      <a className="navbar-item" onClick={toggleModal}>
        Preferences
      </a>
      <div className={`modal ${modalActive ? "is-active" : null}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Your Preferences</p>
            <button className="delete" aria-label="close" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">What Price Ranges Are You Looking For?</label>
              <div className="control">
                {[1, 2, 3, 4].map((num, i) => {
                  return (
                    <label className="checkbox" key={i}>
                      <input
                        type="checkbox"
                        name={`price-${num}`}
                        value={num}
                        defaultChecked={price.includes(num)}
                        onChange={() => {
                          priceChangeHandle(num);
                        }}
                      />
                      &nbsp;{"$".repeat(num)} &nbsp;
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="field">
              <label className="label">Are You Looking For Places Open Now?</label>
              <div className="control">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="want-open"
                    checked={!!openNow}
                    onChange={() => {
                      setOpennow(true);
                    }}
                  />
                  &nbsp;Yes &nbsp;
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="want-all"
                    checked={!!!openNow}
                    onChange={() => {
                      setOpennow(false);
                    }}
                  />
                  &nbsp;No &nbsp;
                </label>
              </div>
            </div>
            <div className="field">
              <label className="label">What Do You Want To Sort By?</label>
              <div className="select">
                <select onChange={selectChangeHandle}>
                  <option value="rating">Rating</option>
                  <option value="review_count">Review Count</option>
                  <option value="distance">Distance</option>
                </select>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={handleSave}>
              Save Preferences
            </button>
            <button className="button" onClick={toggleModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Preferences;
